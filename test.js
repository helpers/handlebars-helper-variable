/*!
 * variable-helper <https://github.com/doowb/variable-helper>
 *
 * Copyright (c) 2015 Brian Woodward.
 * Licensed under the MIT license.
 */

'use strict';

var helper = require('./');

var assert = require('assert');
var handlebars = require('handlebars');

describe('handlebars-helper-variable', function () {
  it('should add a variable to the context', function () {
    var context = {};
    handlebars.registerHelper('variable', helper(context));
    var tmpl = [
      '{{#variable "foo"}}',
      '  {',
      '   "foo": "bar"',
      '  }',
      '{{/variable}}'
    ].join('\n');

    var content = handlebars.compile(tmpl)(context);
    assert.deepEqual(context, {foo: {foo: 'bar' }});
  });

  it('should render a value added to the context', function () {
    var context = {};
    handlebars.registerHelper('variable', helper(context));
    var tmpl = [
      '{{#variable "foo"}}',
      '  {',
      '   "foo": "bar"',
      '  }',
      '{{/variable}}',
      '{{foo.foo}}'
    ].join('\n');

    var content = handlebars.compile(tmpl)(context);
    assert.deepEqual(content, 'bar');
  });
});
