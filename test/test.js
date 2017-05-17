require('..')('.proto');

const assert = require('power-assert');
const root = require('./test.proto');

describe('Protobuf', () => {
  it('Serialize', () => {
    const Test = root.lookupType('Test');
    const message = Test.create({
      foo: 12345,
      bar: 'bar',
      baz: true
    });
    const buffer = Test.encode(message).finish();
    const deserialized = Test.decode(buffer);
    assert(deserialized.foo === 12345);
    assert(deserialized.bar === 'bar');
    assert(deserialized.baz === true);
  });
});
