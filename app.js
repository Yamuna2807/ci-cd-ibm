const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("CI/CD IBM Project is running successfully!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: "CI/CD IBM Project"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;