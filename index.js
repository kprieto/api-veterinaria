const express = require("express");

const connectDB = require("./database");

const dotenv = require("dotenv");

dotenv.config();

connectDB();
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());

app.use("/api/clientes", require("./routes/clientesRoutes"));

app.use("/api/mascotas", require("./routes/mascotasRoutes"));




app.listen(5000, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})