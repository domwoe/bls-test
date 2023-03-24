# bls-test

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/domwoe/bls-test)

Example of using [bls-wasm](https://github.com/herumi/bls-wasm) to verify a BLS signature based on test data from the [agent-js repo](https://github.com/dfinity/agent-js/blob/5214dc1fc4b9b41f023a88b1228f04d2f2536987/packages/bls-verify/src/index.test.ts#L101).
The example fails while deserializing the public key/signature.

How to run:

```
npm install
node index.js
```