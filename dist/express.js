"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = exports.expressApp = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/static", express_1.default.static("public"));
exports.expressApp = app;
exports.httpServer = http_1.default.createServer(app);
