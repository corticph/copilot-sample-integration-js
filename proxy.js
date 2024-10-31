const cors_proxy = require('cors-anywhere');

const host = 'localhost';
const port = 9090;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log(`CORS Anywhere proxy running at ${host}:${port}`);
});
