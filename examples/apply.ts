import { apply } from 'mnemonica';

import { FirstType, SecondType } from './init';

const first = new FirstType();

// { first: undefined, second: string }
const second = apply(first, SecondType);
console.log(second);


