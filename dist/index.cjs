'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* global describe, it, expect */
var jsonFileNotEmptyTest = function jsonFileNotEmptyTest(file) {
  describe("tests for ".concat(file), function () {
    it("".concat(file, " data files returns array"), function () {
      expect(file).not.toBe('');
    });
  });
}; //@TODO rename it later


var jsonSchemaTest = function jsonSchemaTest(file, example, schema) {
  describe("test ".concat(file, " json schema"), function () {
    it("validates ".concat(file, " json-schema"), function () {
      expect(example).toMatchSchema(schema);
    });
  });
};

var src = {
  jsonFileNotEmptyTest: jsonFileNotEmptyTest,
  jsonSchemaTest: jsonSchemaTest
};
var src_1 = src.jsonFileNotEmptyTest;
var src_2 = src.jsonSchemaTest;

exports.default = src;
exports.jsonFileNotEmptyTest = src_1;
exports.jsonSchemaTest = src_2;
