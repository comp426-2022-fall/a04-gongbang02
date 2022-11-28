import { roll } from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const app = express(2);
const port = args.port || 5000;

