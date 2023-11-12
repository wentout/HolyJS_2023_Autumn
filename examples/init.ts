import { define } from 'mnemonica';

export const FirstType = define('SomeType', function (this: {
	first: 'FirstType',
}) {
	this.first = 'FirstType';
});

export const SecondType = FirstType.define('SecondType', function (
	this: {
		first: undefined,
		second: string,
	}) {
	this.first = undefined;
	this.second = 'SecondType';
}, {}, { strictChain: false });


export const ThirdType = SecondType.define('ThirdType', class {
	third: string
	constructor() {
		this.third = 'ThirdType';
	}
}, {}, { strictChain: false });



