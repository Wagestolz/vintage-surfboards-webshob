const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");
const csurf = require("csurf");
const cookieSession = require("cookie-session");
// const cryptoRandomString = require("crypto-random-string");
const cookieSessionMiddleware = cookieSession({
    secret: `crocs are awesome`,
    maxAge: 1000 * 60 * 60 * 24 * 14, // 1000ms * 60s * 60mins * 24hours * 14days valid
});
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use(cookieSessionMiddleware);
app.use(csurf());
app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.post("/subscribe", (req, res) => {
    const { email } = req.body;
    console.log("email: ", email);
    if (!email || !email.includes("@")) {
        console.log("invalid input");
    } else {
        db.addSubscriber(email)
            .then(({ rows }) => {
                res.json(rows[0]);
            })
            .catch((err) => {
                console.log("error in db.storeNewSurfSpot: ", err);
            });
    }
});

app.get("/getproducts", (req, res) => {
    db.getProducts()
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch((err) => {
            console.log("error in db.getProducts: ", err);
        });
});

app.get(`/getproduct/:id`, (req, res) => {
    const { id } = req.params;
    db.getSingleProduct(id)
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch((err) => {
            console.log("error in db.getSingleProduct: ", err);
        });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
