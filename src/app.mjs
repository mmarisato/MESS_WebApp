import express, { response } from 'express'; 

const app = express(); 

const port = 3333; 

app.get('/', (request, response) => {
    response.send("Hello, World!"); 
});

app.listen(port,() =>{
    console.log(`Application listening at port ${port}`); 
}); 