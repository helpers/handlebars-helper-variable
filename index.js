/*!
 * handlebars-helper-variable <https://github.com/doowb/handlebars-helper-variable>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Exports variable helper
 */

module.exports = variable;

/**
 * Dyanimcally add JSON objects to the context.
 *
 * Register the helper with Handlebars
 *
 * ```js
 * var variable = require('handlebars-helper-variable');
 * var context = {};
 * Handlebars.registerHelper('variable', variable(context));
 * ```
 *
 * Use the helper in a Handlebars template.
 *
 * ```hbs
 * {{#variable "foo"}}
 *   { "foo": "bar" }
 * {{/variable}}
 * ```
 *
 * Compile and render the template with the given context.
 *
 * ```js
 * Handlebars.compile(template)(context);
 * //=> context = { foo: { foo: 'bar' } }
 * ```
 *
 * @param  {Object} `context` Context object to put the JSON object on.
 * @api public
 */

function variable (context) {
  return function variableHelper (name, options) {
    var content = options.fn(this);
    context[name] = JSON.parse(content);
  };
}
