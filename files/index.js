const app = require("./config/server");

const port = 8080;

app.listen(port, () => {
    console.log("Server ON");
    console.log("http://localhost:" + port);
})