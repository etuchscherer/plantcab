import { createLogger, format, transports, Logger } from 'winston';

const { combine, colorize } = format;

const logger = createLogger({
  level: 'debug',
  format: format.json(),
  transports: [
    new transports.Console({
      format: combine(colorize()),
    }),
  ],
});

/**
 *
 * @param {*} message
 * @param {*} label
 */
const debug = (message: string, label: string): Logger => {
  const level = 'debug';
  if (!label) label = 'debug';

  return logger.log({ level, message, label });
};

const info = (message: string, label: string): Logger => {
  const level = 'info';
  if (!label) label = 'info';

  return logger.log({ level, message, label });
};

export default logger;

export { debug, info };