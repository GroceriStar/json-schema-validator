import { matchers } from 'jest-json-schema';
// import { check, validate } from './jsonlintShell';

import shell from 'shelljs';
import _ from 'lodash';

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


// try {
//   describe('tests for attribute schema', () => {
//     it('validates allergy json', () => {
//       expect(example).toMatchSchema(schema)
//     })
//   })
// } catch (e) {
//   console.log(`${e.name}: ${e.message}`)
// }

// --- JSONLint part ---
//    "jsonlint": "node jsonlint.config.js",

// @TODO add here all new generated at generator files too
// @TODO looks like jsonlint doesnt called without build... strange
// @TODO this is a line from an old version of project
// const jsonFiles = require('./src/files.js')

// each can be used instead of forEach
// @TODO replace with lodash

// Validate an array of json files
const validate = (jsonFiles) => {
  _.forEach(Object.keys(jsonFiles), (key) => {
    try {
      shell.exec(`jsonlint ${jsonFiles[key]}`, { silent: true });
    } catch (e) {
      console.log(e);
    }
  });
};

// // Run external tool synchronously
// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
//   shell.echo('Error: Git commit failed');
//   shell.exit(1);
// }

// checking if JSON files exists
// @TODO lodash
const check = (jsonFiles) => {
  Object.keys(jsonFiles).forEach((key) => {
    if (shell.test('-e', jsonFiles[key])) {
      // console.log("File exist " + jsonFiles[key]);
    } else {
      // console.log("File doesn't exist " + jsonFiles[key]);
    }
  });
};


export default {
  jsonFileNotEmptyTest,
  jsonSchemaTest,
  validate,
  check,
};
