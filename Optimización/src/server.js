import express from "express";
import router from "./routes/user.router.js";

const app = express();
app.use(express.json());
app.use("api/users", router);

app.listen(8080, () => {
    console.log("servidor levantado");
});