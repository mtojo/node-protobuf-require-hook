const protobuf = require('protobufjs');
const library = 'protobufjs/light';

module.exports = (extensions) => {
  [].concat(extensions).forEach((extension) => {
    require.extensions[extension] = (module, filename) => {
      const root = protobuf.loadSync(filename);
      const jsonDescriptor = JSON.stringify(root.toJSON());
      return module._compile(
        `module.exports = require("${library}").Root.fromJSON(${jsonDescriptor});`,
        filename);
    };
  });
};
