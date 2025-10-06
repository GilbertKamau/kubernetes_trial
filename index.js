import express from 'express';

const app= express();
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=> {
    res.json({message: "Hello from a container!",
              service: "my-express-app",
            pod:process.env.PODNAME || "unknown",
            time:new Date().toISOString()
        })
})

// create endpoints for k8 to know its doing a fantastic job
app.get('/heathy', (req, res) => res.status(200).send('OK'));
app.get


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})