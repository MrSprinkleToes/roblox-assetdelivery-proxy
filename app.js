const app = require("express")();
const request = require("request");

app.get("/asset/:id", (req, res) => {
  request.get({
    url: "https://assetdelivery.roblox.com/v1/asset/?id=" + req.params.id, 
    followAllRedirects: true
  }).on("response", resp => function(resp) {
    res.set("Access-Control-Allow-Origin", "REPL.CO"); // update to match the domain you will make the request from
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(resp.request.uri.href);
  });
});

app.listen(process.env.PORT);
