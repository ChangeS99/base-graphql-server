import express from "express";
import http from "http";

const app = express();

app.use(express.json());

app.use("/static", express.static("public"));

export const expressApp = app;

export const httpServer = http.createServer(app);
