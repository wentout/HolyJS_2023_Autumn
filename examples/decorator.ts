import { define } from 'mnemonica';

function defined <T extends { new (): unknown }> (cstr: T, s: ClassDecoratorContext<T>) {
	const TypeDef = define(s.name, cstr);
	Object.setPrototypeOf(cstr.prototype, new TypeDef);
}

@defined
class MyClass {
	z: number;
	constructor () {
		this.z = 123;
	}
}

const myInstance = new MyClass;
console.log(myInstance.z);



MyClass.define()