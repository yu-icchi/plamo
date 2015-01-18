
var $ = require('jquery');

var formSpecs = require('../templates/formspecs.hbs');

var form = [
  {
    label: '文字列',
    key: '_id',
    type: 'text',
    class: 'string',
    placeholder: 'IDを入力してください'
  },
  {
    label: '数字(整数)',
    key: 'point',
    type: 'text',
    class: 'integer'
  },
  {
    label: '数字(実数)',
    key: 'date',
    type: 'text',
    class: 'number'
  },
  {
    label: 'チェックボックス',
    key: 'check',
    type: 'checkbox',
    class: 'number',
    options: [
      {label: 'チェック01', value: 1},
      {label: 'チェック02', value: 2}
    ]
  },
  {
    label: 'ラジオボタン',
    key: 'radio',
    type: 'radio',
    class: 'string',
    options: [
      {label: 'ラジオ01', value: 'hoge1'},
      {label: 'ラジオ02', value: 'hoge2'},
      {label: 'ラジオ03', value: 'hoge3'}
    ]
  },
  {
    label: 'セレクト',
    key: 'select',
    type: 'select',
    class: 'number',
    options: [
      {label: 'セレクト01', value: 0},
      {label: 'セレクト02', value: 1},
      {label: 'セレクト03', value: 2}
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
        type: 'text'
      },
      {
        label: 'ラジオボタン',
        key: 'radio',
        type: 'radio',
        class: 'string',
        options: [
          {label: 'ラジオ01', value: 'hoge1'},
          {label: 'ラジオ02', value: 'hoge2'},
          {label: 'ラジオ03', value: 'hoge3'}
        ]
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
      type: 'text'
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
            type: 'text'
          }
        ]
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
