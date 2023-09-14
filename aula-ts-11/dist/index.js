"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var games_service_1 = __importDefault(require("./service/games-service"));
var http_status_1 = __importDefault(require("http-status"));
var app = (0, express_1.default)();
app.use((0, express_1.json)());
app.post("/games", function (req, res) {
    var body = req.body;
    try {
        games_service_1.default.createGame(body);
        res.sendStatus(http_status_1.default.CREATED);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(http_status_1.default.CONFLICT);
    }
});
app.get("/games", function (req, res) {
    var games = games_service_1.default.getGames();
    res.send(games);
});
app.listen(5000, function () { return console.log("Server is up and running or port 5000"); });
