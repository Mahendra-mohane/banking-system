"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use("/api", api_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to the Banking System API!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
