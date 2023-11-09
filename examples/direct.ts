import { FirstType, SecondType } from './init';

const first = new FirstType();

type TSecondInstance = InstanceType<typeof SecondType>;
const second = new first.SecondType() as TSecondInstance;

// { first: undefined, second: string }
console.log(second);




