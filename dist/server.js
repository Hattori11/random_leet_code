"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/api/leetcodes", async (req, res) => {
    console.log("Entrou na rota /api/leetcodes");
    try {
        const filePath = path_1.default.resolve(process.cwd(), "data/leetcodes.json");
        const data = await promises_1.default.readFile(filePath, "utf-8");
        res.json(JSON.parse(data));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao ler leetcodes.json" });
    }
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
