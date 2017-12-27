/**
 * Created by lenovo on 2017/12/23.
 */

function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function trimObj(obj) {
  if (!obj) return obj;
  var objKeys = Object.keys(obj);
  for (var i = 0, len = objKeys.length; i < len; i ++) {
    var key = objKeys[i];
    var type = typeof obj[key];
    if (type === 'object') {
      obj[key] = arguments.callee(obj[key]);
    } else if (type === 'string'){
      obj[key] = trim(obj[key])
    }
  }
  return obj;
}

console.log(trimObj({
  name: ' mao ',
  age: 'rui ',
  sex: {
    you: ' s ',
    mi: ' tt',
    r: ['t ', ' m ',  3]
  },
  jk: [' name ', 'age ', {
    name: '       33  ',
    age: null,
    m: true
  }]
}));
