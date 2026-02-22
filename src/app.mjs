import express, { response } from 'express'; 
import path from "path";
import { fileURLToPath } from "url";

const app = express(); 

const port = 3333; 

//Chat
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//Chat
app.use(express.static(path.join(__dirname,"..", "public")));

app.get('/', (request, response) => {
    response.send(path.join(__dirname, "..","public","index.html")); 
});

app.listen(port,() =>{
    console.log(`Listening at http://localhost:${port}`); 
}); 