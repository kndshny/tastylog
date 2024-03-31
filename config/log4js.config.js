const path = require('path');
const LOG_ROOT_DIR =
	process.env.LOG_ROOT_DIR || path.join(__dirname, '../logs');

module.exports = {
	appenders: {
		ConsoleLogAppender: {
			type: 'console',
		},
		ApplicationLogAppender: {
			type: 'dateFile',
			filename: path.join(LOG_ROOT_DIR, './application.log'),
			pattern: 'yyyyMMdd',
			numBackups: 7, // 'daysToKeep' の代わりに 'numBackups' を使用
			compress: true, // 古いログファイルを圧縮
		},
		AccessLogAppender: {
			type: 'dateFile',
			filename: path.join(LOG_ROOT_DIR, './application.log'),
			pattern: 'yyyyMMdd',
			numBackups: 7, // 'daysToKeep' の代わりに 'numBackups' を使用
			compress: true, // 古いログファイルを圧縮
		},
	},
	categories: {
		default: {
      appenders: [
        'ConsoleLogAppender'
      ],
			level: 'ALL',
		},
		applicaiton: {
      appenders: [
        'ApplicationLogAppender',
        'ConsoleLogAppender'
      ],
			level: 'INFO',
		},
		access: {
      appenders: [
        'AccessLogAppender',
        'ConsoleLogAppender'
      ],
			level: 'INFO',
		},
	},
};
