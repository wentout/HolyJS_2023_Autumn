import { apply, define } from 'mnemonica';

import { FirstType, SecondType, ThirdType } from './example_init';

FirstType.registerHook('preCreation', ({ existentInstance }) => {
	console.log('pre', existentInstance);
});

FirstType.registerHook('postCreation', ({ existentInstance, inheritedInstance, TypeName }) => {
	console.log('post TypeName', TypeName);
	console.log('post', existentInstance, inheritedInstance);
});

SecondType.registerHook('preCreation', ({ existentInstance }) => {
	console.log('pre', existentInstance);
});

SecondType.registerHook('postCreation', ({ existentInstance, inheritedInstance }) => {
	console.log('post', existentInstance, inheritedInstance);
});

ThirdType.registerHook('preCreation', ({ existentInstance }) => {
	console.log('pre', existentInstance);
});

ThirdType.registerHook('postCreation', ({ existentInstance, inheritedInstance }) => {
	console.log('post', existentInstance, inheritedInstance);
});

debugger;

const first = new FirstType('FirstType');

// { first: undefined, second: string }
debugger;
const second = apply(first, SecondType);
console.log(second);

debugger;
const third = apply(second, ThirdType);
console.log(third);

debugger;

export const ErroredType = define('ErroredType', function (this: {
	errored: 'ErroredType',
}) {
	this.errored = 'ErroredType';
	throw new Error('Special DEMO Error');
});


ErroredType.registerHook('creationError', ({ existentInstance, inheritedInstance }) => {
	debugger;
	console.log('post', existentInstance, inheritedInstance);
});

ErroredType.registerHook('preCreation', ({ existentInstance }) => {
	console.log('pre', existentInstance);
});

// ErroredType.registerHook('postCreation', ({ inheritedInstance }) => {
// 	console.log('post', inheritedInstance);
// });

console.log(new ErroredType);