import express from "express";
import client from "./ClientRoutes.js";
import donate from "./DonateRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo:"base route"});
    })

    app.use(
        express.json(),
        client,
        donate
    )
}

export default routes;