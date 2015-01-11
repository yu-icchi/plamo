
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
    key: 'select01',
    type: 'select',
    options: [
      {label: 'option01', value: 1},
      {label: 'option02', value: 2},
      {label: 'option03', value: 3}
    ]
  },
  {
    label: 'ラジオボタン',
    key: 'radio01',
    type: 'radio',
    options: [
      {label: 'オプション01', value: 1},
      {label: 'オプション02', value: 2},
      {label: 'オプション03', value: 3},
      {label: 'オプション04', value: 4},
      {label: 'オプション05', value: 5},
      {label: 'オプション06', value: 6},
      {label: 'オプション07', value: 7},
      {label: 'オプション08', value: 8},
      {label: 'オプション09', value: 9}
    ]
  },
  {
    label: 'チェックボックスボタン',
    key: 'checkbox01',
    type: 'checkbox',
    options: [
      {label: 'チェック01', value: 1},
      {label: 'チェック02', value: 2},
      {label: 'チェック03', value: 3}
    ]
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
    key: 'array01',
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
        label: '期間指定',
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
