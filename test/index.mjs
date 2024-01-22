"use strict";

import assert from 'power-assert'
import index from '../lib/index.mjs'
import MMLIterator from '../lib/index.mjs';

describe("index", () => {
  it("exports", () => {
    assert(index === MMLIterator);
  });
});
