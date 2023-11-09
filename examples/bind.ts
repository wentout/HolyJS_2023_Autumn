import { bind } from 'mnemonica';

import { FirstType, SecondType } from './init';

const first = new FirstType();

const boundSecond = bind(first, SecondType);

// { first: undefined, second: string }
const second = boundSecond();
console.log(second);


