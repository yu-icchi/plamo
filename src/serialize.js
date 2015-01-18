
var $ = require('jquery');
var _ = require('lodash');

var patterns = {
  validate: /^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
  key:      /[a-z0-9_]+|(?=\[\])/gi,
  push:     /^$/,
  fixed:    /^\d+$/,
  named:    /^[a-z0-9_]+$/i
};

function Serializer(el) {
  this.el = el;
  this.data = {};
  this.pushes = {};
}

Serializer.prototype.incrementPush = function(key) {
  if (this.pushes[key] === undefined) {
    this.pushes[key] = 0;
  }
  return this.pushes[key]++;
};

function build(base, key, value) {
  base[key] = value;
  return base;
}

Serializer.prototype.makeObject = function(root, value) {
  var keys = root.match(patterns.key);
  var k;

  while ((k = keys.pop()) !== undefined) {
    // foo[]
    if (patterns.push.test(k)) {
      var idx = this.incrementPush(root.replace(/\[\]$/, ''));
      value = build([], idx, value);
    }

    // foo[n]
    else if (patterns.fixed.test(k)) {
      value = build([], k, value);
    }

    // foo: foo[bar]
    else if (patterns.named.test(k)) {
      value = build({}, k, value);
    }
  }

  return value;
};

function cast(clazz, value) {
  switch (clazz) {
    case 'string':
      return String(value);
    case 'number':
      var n = Number(value);
      return _.isNaN(n) ? 0 : n;
    case 'integer':
      var i = parseInt(value, 10);
      return _.isNaN(i) ? 0 : i;
    case 'boolean':
      return value === 'true';
    default:
      return value;
  }
}

Serializer.prototype.encode = function(pair) {
  var form = $('[name="' + pair.name + '"]', this.el);
  var type = form.attr('type');
  var clazz = form.attr('clazz');
  switch (type) {
    case 'checkbox':
      return pair.value === 'on' ? true : cast(clazz, pair.value);
    default:
      return cast(clazz, pair.value);
  }
};

Serializer.prototype.addPair = function(pair) {
  var obj = this.makeObject(pair.name, this.encode(pair));
  $.extend(true, this.data, obj);
};

Serializer.prototype.toObject = function() {
  return this.data;
};

/**
 * serialize
 * @param {Object} el - jQuery element
 */
module.exports = function(el) {
  var pairs = el.serializeArray();

  var serialize = new Serializer(el);

  for (var i = 0, len = pairs.length; i < len; i++) {
    serialize.addPair(pairs[i]);
  }

  return serialize.toObject();
};
