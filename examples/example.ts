import { apply } from 'mnemonica';

import { FirstType, SecondType, ThirdType } from './init';

FirstType.registerHook('preCreation', ({ existentInstance }) => {
	console.log('pre', existentInstance)
});

FirstType.registerHook('postCreation', ({ inheritedInstance }) => {
	console.log('post', inheritedInstance)
});

SecondType.registerHook('preCreation', ({ existentInstance }) => {
	console.log('pre', existentInstance)
});

SecondType.registerHook('postCreation', ({ inheritedInstance }) => {
	console.log('post', inheritedInstance)
});

FirstType.registerHook('preCreation', ({ existentInstance }) => {
	console.log('pre', existentInstance)
});

FirstType.registerHook('postCreation', ({ inheritedInstance }) => {
	console.log('post', inheritedInstance)
});

const first = new FirstType();

// { first: undefined, second: string }
const second = apply(first, SecondType);
console.log(second);

const third = apply(second, ThirdType);
console.log(third);

