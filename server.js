const app = require('express')();
const cors = require('cors');

const PORT = 5002;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lydiadoula:26502450@cluster0.nvrxqn4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.use(cors());

app.get('/', (req,res)=>{
    client.connect(async err => {
        const collection = client.db("test").collection("devices");
        const data = await collection.find().toArray();
        res.send(JSON.stringify(data))
      });
})

app.listen(PORT, ()=>{
    console.log("listening to port: " + PORT);
})