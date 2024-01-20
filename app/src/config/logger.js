const {createLogger, transports, format} = require("windston");
const {combine,timestamp,printf,lable , json,simple,colorize} = format;

const printformat =     printf((timestamp,lable, level,message) => {
    return `${timestamp} [${lable}] ${level} : ${message}`;
});

const printLogFormat = {
    file:combine(
    label({
        lable: "백엔드 맛보기"
    }),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd"
    }),
    printFormat
), 
console: combine(
    colorize(),
    simple()
)
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: ",./logs",
        level:"info",
        format:printLogFormat.file,
    }),
    console: new transports.Console({
        level:"info",
        format:printLogFormat.console,
    }),
}

const logger = createLogger({
    transports: [opts.file],
});

if(process.env.NODE_ENV !== "production") {
    logger.add(opts.console);
}

logger.stream = {
    write : (message) => logger.info(message),
};

module.exports = logger;