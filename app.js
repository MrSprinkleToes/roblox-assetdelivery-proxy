const app = require("express")();
const request = require("request");

app.get("/asset/:id", (req, res) => {
  request.get({
    url: "https://assetdelivery.roblox.com/v1/asset/?id=" + req.params.id, 
    followAllRedirects: true
  }).on("response", resp => function() {
     res.set("Access-Control-Allow-Origin", "*");
     res.send(resp.request.uri.href);
  });
});

app.listen(process.env.PORT);
