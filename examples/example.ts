import { apply, define } from 'mnemonica';

import { FirstType, SecondType, ThirdType } from './example_init';
import { registerHooks } from './example_hooks';

registerHooks();

debugger;
const first = new FirstType('FirstType');

debugger;
const second = apply(first, SecondType);
console.log(second);

debugger;
const third = apply(second, ThirdType);
console.log(third);