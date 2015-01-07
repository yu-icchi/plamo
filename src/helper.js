var _ = require('lodash');
var Handlebars = require('hbsfy/runtime');

/**
 * Link
 * @example
 *   {{link name title}}
 */
Handlebars.registerHelper('link', function(name, title) {
  return new Handlebars.SafeString(
    "<a href='" + name + "'>" + title + "</a>"
  );
});

var inputTemplate = require('./templates/form/input.hbs');
var textareaTemplate = require('./templates/form/textarea.hbs');

function createForm(spec) {

  switch (spec.type) {
    case 'text':
    case 'string':
      return inputTemplate({
        label: spec.label,
        id: spec.key,
        type: 'text',
        placeholder: spec.placeholder,
        value: spec.value
      });
    case 'textarea':
      return textareaTemplate({
        label: spec.label,
        id: spec.key,
        rows: spec.rows || 3,
        value: spec.value
      });
    case 'integer':
    case 'number':
      return inputTemplate({
        label: spec.label,
        id: spec.key,
        type: 'number',
        placeholder: spec.placeholder,
        value: spec.value
      });
  }
}

/**
 * FormSpecs
 */
Handlebars.registerHelper('formSpecs', function(specs, data) {
  var html = '<form>';
  _.forEach(specs, function(spec) {
    switch (spec.type) {
      case 'group':
        html += '<fieldset class="form-group">';
        html += '<legend>' + spec.label + '</legend>';
        for (var i = 0; i < spec.fields.length; i++) {
          html += createForm(spec.fields[i]);
        }
        html += '</fieldset>';
        break;
      case 'multiple':
        html += '<input type="text" class="form-control">';
        break;
      default:
        html += createForm(spec);
        break;
    }
  });
  html += '</form>';
  return new Handlebars.SafeString(html);
});
