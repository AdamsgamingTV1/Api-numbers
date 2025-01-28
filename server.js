const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000

function parseNumbers (req) {
    return req.query.numbers ? req.query.numbers.split(',').map(Number) : [];
}

app.get('/add', (req, res) => {
    const numbers = parseNumbers(req);
    if (numbers.length === 0 || numbers.some(isNaN)) {
        return res.json({ error: '' });
    }
    const result = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ result });
});

app.get('/sub', (req, res) => {
    const numbers = parseNumbers(req);
    if (numbers.length === 0 || numbers.some(isNaN)) {
        return res.json({ error: '' });
    }
    const result = numbers.reduce((acc, num) => acc - num);
    res.json({ result });
});

app.get('/mult', (req, res) => {
    const numbers = parseNumbers(req);
    if (numbers.length === 0 || numbers.some(isNaN)) {
        return res.json({ error: ''});
    }
    const result = numbers.reduce((acc, num) => acc * num, 1);
    res.json ({ result });
});

app.get('/div', (req, res) => {
    const numbers = parseNumbers(req);
    if (numbers.length === 0 || numbers.some(isNaN) || numbers.includes(0)) {
        return res.json({ error: ''});
    }
    const result = numbers.reduce((acc, num) => acc / num);
    res.json ({ result });
});

app.get('/pow', (req, res) => {
    const numbers = parseNumbers(req);
    if (numbers.length !== 2 || numbers.some(isNaN)) {
        return res.json({ error: ''});
    }
    const result = Math.pow(numbers[0], numbers[1]);
    res.json ({ result });
});

app.get('/root', (req, res) => {
    const numbers = parseNumbers(req);
    if (numbers.length !== 2 || numbers.some(isNaN)) {
        return res.json({ error: ''});
    }
    const result = Math.pow(numbers[1], 1 / numbers[0])
    res.json ({ result });
});

app.listen(port, () => {
    console.log("Server běží na http://localhost:${port}");
});
