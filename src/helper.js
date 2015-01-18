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
var checkboxTemplate = require('./templates/form/checkbox.hbs');
var radioTemplate = require('./templates/form/radio.hbs');
var selectTemplate = require('./templates/form/select.hbs');

function createInput(spec) {

  switch (spec.type) {
    case 'text':
      return inputTemplate({
        label: spec.label,
        id: spec.key,
        type: (spec.class === 'number' || spec.class === 'integer') ? 'number' : 'text',
        placeholder: spec.placeholder,
        value: spec.value,
        class: spec.class || 'string'
      });
    case 'textarea':
      return textareaTemplate({
        label: spec.label,
        id: spec.key,
        rows: spec.rows || 3,
        value: spec.value,
        class: 'string'
      });
    case 'checkbox':
      return checkboxTemplate({
        label: spec.label,
        options: _.map(spec.options, function(option) {
          return {
            class: spec.class,
            label: option.label,
            value: option.value,
            group: spec.key
          };
        })
      });
    case 'radio':
      return radioTemplate({
        label: spec.label,
        options: _.map(spec.options, function(option) {
          return {
            class: spec.class,
            label: option.label,
            value: option.value,
            group: spec.key
          };
        })
      });
    case 'select':
      return selectTemplate({
        class: spec.class,
        id: spec.key,
        label: spec.label,
        options: spec.options
      });
  }
}

function innerForm(form) {
  return new Handlebars.SafeString(form.replace(/[\n\r]/g, ''));
}

var groupTemplate = require('./templates/form/group.hbs');
var arrayTemplate = require('./templates/form/array.hbs');
var multipleTemplate = require('./templates/form/multiple.hbs');

function createForm(specs) {
  specs = _.isArray(specs) ? specs : [specs];

  var form = '', html = '';
  _.forEach(specs, function(spec) {
    switch (spec.type) {
      case 'group':
        form = '';
        _.forEach(spec.fields, function(field) {
          field.key = spec.key + '[' + field.key + ']';
          form += createForm(field);
        });
        html += groupTemplate({
          label: spec.label,
          form: innerForm(form)
        });
        break;
      case 'array':
        spec.field.key = spec.key + '[]';
        form = createForm(spec.field);
        html += arrayTemplate({
          id: spec.key,
          label: spec.label,
          form: innerForm(form)
        });
        break;
      case 'multiple':
        form = '';
        _.forEach(spec.fields, function(field) {
          field.key = spec.key + '[][' + field.key + ']';
          form += createForm(field);
        });
        html += multipleTemplate({
          id: spec.key,
          label: spec.label,
          form: innerForm(form)
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
    form: innerForm(form)
  });
  return new Handlebars.SafeString(html);
});
