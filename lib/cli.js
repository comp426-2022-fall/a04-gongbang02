#!/usr/bin/env node

import { roll } from "./roll.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

const sides = args.sides || 6;
const dice = args.dice || 2;
