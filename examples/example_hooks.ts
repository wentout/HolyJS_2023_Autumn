import { FirstType, SecondType, ThirdType } from './example_init';

export const registerHooks = () => {
	
	
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
};

