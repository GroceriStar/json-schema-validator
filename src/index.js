import { matchers } from 'jest-json-schema';
import { expect } from './jest';
// import jest, { expect, test } from 'jest';
// import shell from 'shelljs';
// import _ from 'lodash';
import { check, validate } from './utils';


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
  try {
    describe(`test ${file} json schema`, () => {
      it(`validates ${file} json-schema`, () => {
        expect(example).toMatchSchema(schema);
      });
    });
  } catch (e) {
    console.log(`${e.name}: ${e.message}`);
  }
};

export {
  jsonFileNotEmptyTest,
  jsonSchemaTest,
  validate,
  check,
//     expect,
//    test
};
