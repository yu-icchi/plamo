
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
    label: 'チェックボックス',
    key: 'check',
    type: 'checkbox',
    options: [
      {label: 'チェック01', value: 1},
      {label: 'チェック02', value: 2},
      {label: 'チェック03', value: 3},
      {label: 'チェック04', value: 4},
      {label: 'チェック05', value: 5},
      {label: 'チェック06', value: 6},
      {label: 'チェック07', value: 7},
      {label: 'チェック08', value: 8},
      {label: 'チェック09', value: 9},
      {label: 'チェック10', value: 10},
      {label: 'チェック11', value: 11},
      {label: 'チェック12', value: 12},
      {label: 'チェック13', value: 13},
      {label: 'チェック14', value: 14},
      {label: 'チェック15', value: 15},
      {label: 'チェック16', value: 16},
      {label: 'チェック17', value: 17},
      {label: 'チェック18', value: 18}
    ]
  },
  {
    label: 'ラジオボタン',
    key: 'radio',
    type: 'radio',
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
