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

function createInput(spec) {

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

var groupTemplate = require('./templates/form/group.hbs');
var multipleTemplate = require('./templates/form/multiple.hbs');

function createForm(specs) {
  specs = _.isArray(specs) ? specs : [specs];

  var form = '', html = '';
  _.forEach(specs, function(spec) {
    switch (spec.type) {
      case 'group':
        form = '';
        _.forEach(spec.fields, function(field) {
          form += createForm(field);
        });
        html += groupTemplate({
          label: spec.label,
          form: new Handlebars.SafeString(form.replace(/[\n\r]/g, ''))
        });
        break;
      case 'multiple':
        form = '';
        _.forEach(spec.fields, function(field) {
          form += createForm(field);
        });
        html += multipleTemplate({
          id: spec.key,
          label: spec.label,
          form: new Handlebars.SafeString(form.replace(/[\n\r]/g, ''))
        });
        break;
      default:
        var _form = createInput(spec);
        if (_form) {
          html += _form;
        }
        break;
    }
  });

  return html;
}

/**
 * FormSpecs
 */

var formTemplate = require('./templates/form/form.hbs');

Handlebars.registerHelper('formSpecs', function(specs, data) {
  var form = createForm(specs);
  var html = formTemplate({
    action: '/#/form',
    form: new Handlebars.SafeString(form.replace(/[\n\r]/g, ''))
  });
  return new Handlebars.SafeString(html);
});
