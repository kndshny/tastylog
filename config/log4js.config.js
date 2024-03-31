module.exports = {
  appenders: {
    consoleLogAppender:{
      type: 'console'
    }
  },
  categories: {
    default: {
      appenders: ['consoleLogAppender'],
      level: 'ALL'
    }
  },
};
