"use strict";

const app = require(".../app")
const logger = require("../")
const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
})

/**
 * node ./bin/www.js
 */