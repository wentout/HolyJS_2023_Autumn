import { apply } from 'mnemonica';

import { FirstType, SecondType, ThirdType } from './init';

const first = new FirstType();

// { first: undefined, second: string }
const second = apply(first, SecondType);
console.log(second);

const third = apply(second, ThirdType);
console.log(third);

