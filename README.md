# HolyJS_2023_Autumn


```bash
$ npm i
```

and for example you have to run something from examples, then you may do the following:

```bash
$ npx --node-options="--inspect-brk" ts-node ./examples/error_hook.ts
```

and for example you wish to compile it with different options

```bash
npx tsc --target es2022 --moduleResolution NodeNext --module NodeNext ./examples/decorator.ts
```