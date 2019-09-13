const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const jsonFileNotEmptyTest = (file) => {
  describe(`tests for ${file}`, () => {
    it(`${file} data files returns array`, () => {
      expect(file).not.toBe('');
    });
  });
};

// @TODO rename it later
// uncomment when we'll figure out how to get data from sd repository
const jsonSchemaTest = (file, example, schema) => {
  describe(`test ${file} json schema`, () => {
    it(`validates ${file} json-schema`, () => {
      expect(example).toMatchSchema(schema);
    });
  });
};

// try {
//   describe('tests for attribute schema', () => {
//     it('validates allergy json', () => {
//       expect(example).toMatchSchema(schema)
//     })
//   })
// } catch (e) {
//   console.log(`${e.name}: ${e.message}`)
// }

module.exports = {
  jsonFileNotEmptyTest,
  jsonSchemaTest,
};
