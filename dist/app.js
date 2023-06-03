"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const addTwoNumber = (a, b) => a + b;
app.get('/', (req, res) => {
    const result = addTwoNumber(3, 4);
    res.send('Sum to number :' + result);
});
app.listen(3000, () => console.log('server is running'));
