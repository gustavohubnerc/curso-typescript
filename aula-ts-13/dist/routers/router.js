"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = __importDefault(require("./../controllers/controller"));
var router = (0, express_1.Router)();
router.get("/", controller_1.default.getInfo);
exports.default = router;
