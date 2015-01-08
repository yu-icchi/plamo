var _ = require('lodash');
var _s = require('underscore.string');
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

var mulipleScriptTemplate = require('./templates/form/multiple_script.hbs');

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

        var part = '';
        for (var j = 0; j < spec.fields.length; j++) {
          part += createForm(spec.fields[j]);
        }
        part.replace('\n', '').replace(/\s/, '').replace('\t', '');

        html += '<fieldset class="form-group">';
        //html += '<script type="application/javascript">';
        //html += '$("#multiple_add_btn_' + spec.key + '").click(function() {';
        //html += '  console.log("' + spec.label + '");';
        //html += '  $("#multiple_' + spec.key + '").append("' + spec.label + '<br>")';
        //html += '});';
        //html += '</script>';
        html += mulipleScriptTemplate({
          id: spec.key,
          label: spec.label,
          form: new Handlebars.SafeString('<input type="text"><button >&times;</button>')
          // form: new Handlebars.SafeString(part)
        });
        html += '<legend>' + spec.label + '</legend>';
        html += '<button id="multiple_add_btn_' + spec.key + '">Add</button>';
        html += '<p>';
        html += '<div id="multiple_' + spec.key + '"</div>';
        html += '</p>';
        html += '</fieldset>';
        break;
      default:
        var _form = createForm(spec);
        if (_form) {
          html += _form;
        }
        break;
    }
  });
  html += '</form>';
  return new Handlebars.SafeString(html);
});
