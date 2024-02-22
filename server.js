const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();

const apiProxy = proxy.createProxyMiddleware("/api", {
    target: process.env.BACKEND_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api':''
    }
});

app.use(apiProxy);
app.use(express.static(__dirname + "/dist/online-shop"));

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/dist/online-shop/index.html")
});

app.listen(process.env.PORT || 3000);