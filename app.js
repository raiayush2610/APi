const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());



app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});


app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;

    // const numbers = data.numbers;
    // const alphabets = data.alphabets;

    // // Find the highest alphabet
    // const highestAlphabet = alphabets.reduce((max, current) => max > current ? max : current);
    const numbers = [];
    const alphabets = [];

    // Loop through the input list and separate numbers and alphabets
    for (const item of data) {
        if (typeof item === 'number' || !isNaN(parseInt(item))) {
        // Check if the item is a number
        numbers.push(item);
        } else if (typeof item === 'string' && item.length === 1 && item.match(/[a-zA-Z]/)) {
        // Check if the item is a single alphabet character
        alphabets.push(item);
        }
    }

    // Find the maximum alphabet among the alphabets
    const maxAlphabet = alphabets.reduce((max, current) => (current > max ? current : max), '');

    const response = {
      is_success: true,
      user_id: "ayush_rai_26102003",
      email: "ayush2020@vitbhopal.ac.in",
      roll_number: "20BCE10938",
      "numbers": numbers,
      "alphabets": alphabets,
      "highest_alphabet": maxAlphabet!=""?[maxAlphabet]:[]
    };

    res.json(response);
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});