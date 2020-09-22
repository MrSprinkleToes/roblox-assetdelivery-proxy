const app = require("express")();

app.get("/asset/:id", (req, res) => {
  request.get("https://assetdelivery.roblox.com/v1/asset/?id=" + req.params.id).on("response", resp => res.send(resp.headers["location"]));
});

app.listen(process.env.PORT);
