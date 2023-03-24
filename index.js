const bls = require('bls-wasm');

async function verifySignature(message, signature, publicKey) {
  await bls.init(bls.BLS12_381);

  const sig = bls.deserializeHexStrToSignature(signature);
  const pubKey = bls.deserializeHexStrToPublicKey(publicKey);

  return bls.verify(sig, pubKey, message);
}

(async () => {

  // Take values from https://github.com/dfinity/agent-js/blob/5214dc1fc4b9b41f023a88b1228f04d2f2536987/packages/bls-verify/src/index.test.ts#L101
  const message = 'hello';
  const signature = 'b89e13a212c830586eaa9ad53946cd968718ebecc27eda849d9232673dcd4f440e8b5df39bf14a88048c15e16cbcaabe';
  const publicKey = 'a7623a93cdb56c4d23d99c14216afaab3dfd6d4f9eb3db23d038280b6d5cb2caaee2a19dd92c9df7001d' +
  'ede23bf036bc0f33982dfb41e8fa9b8e96b5dc3e83d55ca4dd146c7eb2e8b6859cb5a5db815db86810b8' +
  'd12cee1588b5dbf34a4dc9a5';

  const isVerified = await verifySignature(message, signature, publicKey);
  console.log(`Signature is ${isVerified ? 'valid' : 'invalid'}`);
})();