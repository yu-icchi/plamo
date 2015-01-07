
var $ = require('jquery');

var formSpecs = require('../templates/formspecs.hbs');

var form = [
  {
    label: '文字列',
    key: '_id',
    type: 'string',
    placeholder: 'IDを入力してください'
  },
  {
    label: '数字(整数)',
    key: 'point',
    type: 'integer'
  },
  {
    label: '数字(実数)',
    key: 'date',
    type: 'number'
  },
  {
    label: 'グループだよー',
    key: 'group',
    type: 'group',
    fields: [
      {
        label: 'テスト01',
        key: 'test01',
        type: 'textarea',
        value: 'ほほほほほほほほほほお'
      },
      {
        label: 'テスト02',
        key: 'test02',
        type: 'integer'
      },
      {
        label: 'テスト02',
        key: 'test02',
        type: 'integer'
      }
    ]
  },
  { // field: ['', '', ''], fields: [[], [], []]
    label: '配列',
    key: 'array',
    type: 'array',
    field: {
      label: '配列ストリング',
      key: 'srt',
      type: 'string'
    }
  },
  { // [{}, {}, {}]
    label: 'まるちぷる01',
    key: 'multiple01',
    type: 'multiple',
    maxFields: 10,
    fields: [
      {
        label: 'テスト01',
        key: 'test01',
        type: 'string'
      },
      {
        label: 'テスト02',
        key: 'test02',
        type: 'string'
      }
    ]
  },
  { // [{}, {}, {}]
    label: 'まるちぷる02',
    key: 'multiple02',
    type: 'multiple',
    maxFields: 10,
    fields: [
      {
        label: 'テスト01',
        key: 'test01',
        type: 'string'
      },
      {
        label: 'テスト02',
        key: 'test02',
        type: 'string'
      }
    ]
  }
];

exports.render = function(id) {
  console.log('formSpecs', id);
  $('#main').empty().append(formSpecs({
    form: form,
    data: {id: 'test'}
  }));
};
