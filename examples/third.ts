import { apply } from 'mnemonica';

import { FirstType, SecondType, ThirdType } from './init';

const first = new FirstType();

// { first: undefined, second: string }
const second = apply(first, SecondType);
console.log(second);

const third = apply(second, ThirdType);
console.log(third);

debugger;
const second_from_third = apply(third, SecondType);
console.log(second_from_third);
console.log(second_from_third.__parent__);
debugger;

