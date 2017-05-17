# node-protobuf-require-hook

A require hook to support importing Protocol Buffers `.proto` file in Node.js, powered by [protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/).

## Installation

```bash
$ npm install --save protobuf-require-hook
```

## Usage

```protobuf
message Test {
  required int32 foo = 1;
  optional string bar = 2;
  optional bool baz = 3;
}
```

```js
require('protobuf-require-hook')('.proto');

const root = require('./test.proto');

const Test = root.lookupType('Test');
const message = Test.create({
  foo: 12345,
  bar: 'bar',
  baz: true
});

// Serialize message
const buffer = Test.encode(message).finish();

// Deserialize buffer
const deserialized = Test.decode(buffer);
console.log(deserialized);
// -> { foo: 12345, bar: 'bar', baz: true }
```

## License

MIT
