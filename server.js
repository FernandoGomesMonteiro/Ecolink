import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Caminho absoluto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rotas de páginas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/index/index.html"));
});


app.get("/app-preview", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/app-preview/app-preview.html"));
});

app.get("/quem-somos", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/quem-somos/quem-somos.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/dashboard/ecolink_dashboard_final.html"));
});

app.get("/cadastro-lotes", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/cadastro_lotes/ecolink_cadastro_lotes.html"));
});

app.get("/leilao-reverso", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/leilao/ecolink_leilao_reverso.html"));
});

app.get("/pagamento-garantia", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/pagamento/ecolink_pagamento_garantia.html"));
});

app.get("/logistica", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/logistica/ecolink_logistica.html"));
});

app.get("/laudos-tecnicos", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/laudos/ecolink_laudos_tecnicos.html"));
});

app.get("/relatorios-esg", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/relatorio_esg/ecolink_relatorios_esg.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🌱 Ecolink rodando em http://localhost:${PORT}`);
});
