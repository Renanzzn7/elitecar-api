import { Router } from "express"; // Importa o módulo Router do Express
import type { Request, Response } from "express"; // Importa os módulos de requisição e resposta


const router = Router(); // Cria uma nova instância do Router

router.get("/api", (req: Request, res: Response) => {
    res.status(200).json({ message: "Olá, seja bem-vindo!" });
});

export { router }; // Exporta o roteador para ser usado em outros arquivos