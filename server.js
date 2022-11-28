import { roll } from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const app = express(2);
const port = args.port || 5000;

app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
	res.type('html');
	res.status(200).send('200 OK');
});

app.get('/app/roll/', (req, res) => {
	res.send(roll(6, 2, 1));
});

app.post('/app/roll/', (req, res) => {
	const sides = parseInt(req.body.sides);
});


