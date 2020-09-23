const app = require("express")();
const request = require("request");

app.get("/asset/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Accept-Encoding", "deflate, gzip");
  request.get({
    url: "https://assetdelivery.roblox.com/v1/asset/?id=" + req.params.id, 
    followAllRedirects: true
  }).on("response", resp => res.send(resp.request.uri.href));
});

app.listen(process.env.PORT);
