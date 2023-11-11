import { apply } from 'mnemonica';
import { FirstType, SecondType, ThirdType } from './example_init';

export const ErroredType = ThirdType.define('ErroredType', function (this: {
	errored: 'ErroredType',
}) {
	this.errored = 'ErroredType';
	throw new Error('Special DEMO Error');
});

ErroredType.registerHook('creationError', ({ existentInstance, inheritedInstance }) => {
	console.log('creationError')
	console.log(existentInstance, inheritedInstance);
});

// process.on('uncaughtException', (error) => {
// 	debugger;
// 	console.error('uncaughtException', error);
// });

const first = new FirstType('FirstType');
const second = apply(first, SecondType);
const third = apply(second, ThirdType);


new third.ErroredType;

