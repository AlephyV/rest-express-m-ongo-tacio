import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, _ => {
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})