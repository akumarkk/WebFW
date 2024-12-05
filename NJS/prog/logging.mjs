import pino from 'pino'

let logger = pino({ level: 'info' });
logger.info({ msg: 'This is an info message' });
logger.info({ msg: 'This is an info message', err: "tsunami" });