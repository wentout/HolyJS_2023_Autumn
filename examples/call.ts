import { call } from 'mnemonica';

import { FirstType, SecondType } from './init';

const first = new FirstType();

// { first: undefined, second: string }
const second = call(first, SecondType);
console.log(second);


