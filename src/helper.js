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

Handlebars.registerHelper('formSpecs', function(specs, data) {
  var html = '<form>';
  _.forEach(specs, function(spec) {
    html += '<div class="form-group">';
    html += '<label class="col-sm-2" for="' + spec.name + '">' + spec.label + '</label>';
    switch (spec.type) {
      case 'string':
        html += '<input type="text" value="' + data[spec.name] + '" class="form-control">';
        break;
      case 'integer':
        html += '<input type="number" class="form-control">';
        break;
      case 'number':
        html += '<input type="number" class="form-control">';
        break;
      case 'group':
        html += '<input type="text" class="form-control">';
        break;
      case 'multiple':
        html += '<input type="text" class="form-control">';
        break;
    }
    html += '</div>';
  });
  html += '</form>';
  return new Handlebars.SafeString(html);
});
