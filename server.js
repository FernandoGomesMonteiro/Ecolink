// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração de caminhos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas principais
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ecolink_dashboard_final.html"));
});

app.get("/cadastro-lotes", (req, res) => {
  res.sendFile(path.join(__dirname, "ecolink_cadastro_lotes.html"));
});

app.get("/laudos-tecnicos", (req, res) => {
  res.sendFile(path.join(__dirname, "ecolink_laudos_tecnicos.html"));
});

app.get("/leilao-reverso", (req, res) => {
  res.sendFile(path.join(__dirname, "ecolink_leilao_reverso.html"));
});

app.get("/logistica", (req, res) => {
  res.sendFile(path.join(__dirname, "ecolink_logistica.html"));
});

app.get("/pagamento-garantia", (req, res) => {
  res.sendFile(path.join(__dirname, "ecolink_pagamento_garantia.html"));
});

app.get("/relatorios-esg", (req, res) => {
  res.sendFile(path.join(__dirname, "ecolink_relatorios_esg.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🌱 Servidor Ecolink rodando em http://localhost:${PORT}`);
});
