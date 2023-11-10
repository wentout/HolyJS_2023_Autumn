import { define } from 'mnemonica';

export const FirstType = define('FirstType', function (this: {
	first: string,
}, first: string) {
	this.first = first;
});

export const SecondType = FirstType.define('SecondType',
	function (
		this: {
			first: undefined,
			second: string,
		}) {
		this.first = undefined;
		this.second = 'SecondType';
	});


export const ThirdType = SecondType.define('ThirdType', class {
	third: string
	constructor() {
		this.third = 'ThirdType';
	}
});



