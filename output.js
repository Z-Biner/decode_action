//Sat Mar 14 2026 14:18:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function test(_0x5300dc) {
  return a(_0x5300dc);
}
function a(_0x3c55ae) {
  _0x3c55ae = _0x3c55ae.toString();
  var _0x483657 = _0x3c55ae;
  var _0x457220 = _0x3c55ae + "1";
  _0x3c55ae = _0x457220;
  _0x3c55ae = _0x483657;
  return decode(_0x3c55ae);
}
function decode(_0x597d9c = "") {
  var _0x6f1ae7 = _0x597d9c.length;
  var _0x32b6d8 = 0;
  var _0x8635de = 0;
  var _0x59c98f = _0x597d9c.split("");
  var _0x4494d9 = {
    7: 1,
    8: 2,
    9: 3,
    12: 2,
    14: 3,
    15: 1,
    16: 2,
    18: 3,
    19: 2,
    22: 2,
    25: 1,
    30: 5,
    32: 1
  };
  for (var _0x46ce8d in _0x4494d9) {
    if (_0x59c98f[_0x6f1ae7 - _0x46ce8d]) {
      _0x8635de = _0x59c98f[_0x6f1ae7 - _0x46ce8d].charCodeAt() + _0x4494d9[_0x46ce8d];
      _0x32b6d8 = _0x59c98f[_0x6f1ae7 - _0x46ce8d].charCodeAt() - _0x4494d9[_0x46ce8d];
      _0x59c98f[_0x6f1ae7 - _0x46ce8d] = String.fromCharCode(_0x32b6d8);
    }
  }
  _0x597d9c = _0x59c98f.join("");
  _0x597d9c += "abcd";
  _0x597d9c = _0x597d9c.replace("abcd", "");
  _0x597d9c = "abcd" + _0x597d9c;
  _0x597d9c = _0x597d9c.replace("abcd", "");
  return _0x597d9c;
}
_0xodZ = "jsjiami.com.v6";