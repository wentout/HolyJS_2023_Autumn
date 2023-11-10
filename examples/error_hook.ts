import { define } from 'mnemonica';

export const ErroredType = define('ErroredType', function (this: {
	errored: 'ErroredType',
}) {
	this.errored = 'ErroredType';
	throw new Error('Special DEMO Error');
});

// ErroredType.registerHook('creationError', ({ existentInstance, inheritedInstance }) => {
// 	console.log('creationError')
// 	console.log(existentInstance, inheritedInstance);
// });

process.on('uncaughtException', (error) => {
	console.error('uncaughtException', error);
});

// ErroredType.registerHook('preCreation', ({ existentInstance }) => {
// 	console.log('pre', existentInstance);
// });

// ErroredType.registerHook('postCreation', ({ inheritedInstance }) => {
// 	console.log('post', inheritedInstance);
// });

new ErroredType;

