import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3977;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send({ msg: "Hola TinCode!"});
});



app.post("/welcome", (req, res) => {
    const { username } = req.body;
    res.status(200).send({ msg: `Hola, ${username}` });
});

app.listen(PORT, () => {
    console.log(`Tu server esta listo en el puerto ${PORT}`)
})