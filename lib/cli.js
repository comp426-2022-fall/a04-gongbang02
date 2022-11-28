#!/usr/bin/env node

import { roll } from "./roll.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
