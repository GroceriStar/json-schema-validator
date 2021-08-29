/* global describe, it, expect */
'use strict'
const { attributes } = require('@files')
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/attribute')
expect.extend(matchers)

describe('attributes', () => {
  it('should not be an empty string', () => {
    expect(attributes).not.toBe('')
  })
})

try {
  describe('tests for attribute schema', () => {
    it('validates allergy json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
