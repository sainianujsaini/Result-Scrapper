import express from "express";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from "url";
import apiRoutes from "./routes/apiRoutes.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../Frontend/views"));

// Serve static files like css, js, and images directly from here.
app.use(express.static(path.join(__dirname, "../Frontend/public")));

// Route to render the home page
app.use("/api", apiRoutes);
app.get("/", (req, res) => {
    res.render("home");
});

// Start the server
app.listen(3000, () => {
    console.log("Listening on 3000");
});