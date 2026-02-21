import express from 'express';
import path from 'path';
import fs from 'fs/promises';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/leetcodes", async (req, res) => {
    console.log("Entrou na rota /api/leetcodes");

    try {
        const filePath = path.resolve(process.cwd(), "data/leetcodes.json");
        const data = await fs.readFile(filePath, "utf-8");

        res.json(JSON.parse(data));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao ler leetcodes.json" });
    }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});