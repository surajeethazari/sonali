let express = require('express');
const router = express.Router();

let Client = require("../models/client")

// get all clients
router.get("/", async(req, res) => {
    try {
        let users = await Client.find();
        res.json(users);
    } catch (error) {
        res.send("Error: " + error);
    }
});

// get particular client
router.get("/:id", async(req, res) => {
    try {
        let client = await Client.findById(req.params.id);
        res.json(client);
    } catch (error) {
        res.send("Error: " + error);
    }
});

//add new client
router.post("/", async(req, res) => {
    let client_data = new Client({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        let new_client = await client_data.save();
        res.json(new_client);
    } catch (error) {
        res.send("Error: " + error);
    }
});

// update particular client
router.patch("/:id", async(req, res) => {
    try {
        let client = await Client.findById(req.params.id);
        client.name = req.body.name;
        let updatedClient = await client.save();
        res.json(updatedClient);
    } catch (error) {
        res.send("Error: " + error);
    }
});

// delete particular client
router.delete("/:id", async(req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.json(await Client.find());
    } catch (error) {
        res.send("Error: " + error);
    }
});

// delete all client
router.delete("/", async(req, res) => {
    try {
        await Client.deleteMany();
        res.json(await Client.find());
    } catch (error) {
        res.send("Error: " + error);
    }
});

module.exports = router;