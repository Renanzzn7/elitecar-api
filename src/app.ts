import "dotenv/config.js";
import express from "express";
import { router } from "./routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(router);

// Define a porta com conversão segura
const PORT = parseInt(process.env.PORT || "3333", 10);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});

export default app;