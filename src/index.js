/* global describe, it, expect */
const jsonFileNotEmptyTest = (file) => {
  describe(`tests for ${file}`, () => {
    it(`${file} data files returns array`, () => {
      expect(file).not.toBe('')
    })
  })
}

//@TODO rename it later
const jsonSchemaTest = (file, example, schema) => {
  describe(`test ${file} json schema`, () => {
    it(`validates ${file} json-schema`, () => {
      expect(example).toMatchSchema(schema)
    })
  })
}

module.exports = {
  jsonFileNotEmptyTest,
  jsonSchemaTest
}
