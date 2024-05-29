const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Corrected quotes around 3000
app.get('/', (req, res) => { // Corrected quotes around '/'
    res.send('We arefinished with this tutorial!'); // Corrected quotes around the message
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
