const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.use("/api", (req, res) => {
    res.send("Whop! Whop!")
});

app.listen(port, () => console.log(`Server running on port ${port}`));