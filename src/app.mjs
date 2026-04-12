import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import pool from "./db.mjs";

const app = express(); 

const port = 3333;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//Chat
app.use(express.static(path.join(__dirname,"..", "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..","public","index.html")); 
});

app.get('/footer.html', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "footer.html"));
  });

  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
  
      if (!name || !email || !subject || !message) {
        return res.status(400).send("All fields required");
      }
  
      await pool.execute(
        `INSERT INTO contact_messages (name, email, subject, message)
         VALUES (?, ?, ?, ?)`,
        [name, email, subject, message]
      );
  
      res.sendFile(`
        <script>
          alert("Message sent!");
          window.history.back();
        </script>
      `);
  
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });
  app.get('/api/messages', async (req, res) => {
    try {
      const [rows] = await pool.execute(
        `SELECT * FROM contact_messages ORDER BY created_at DESC`
      );
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching messages");
    }
  });  

app.listen(port,() =>{
    console.log(`Listening at http://localhost:${port}`); 
}); 