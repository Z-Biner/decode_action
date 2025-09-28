//Sun Sep 28 2025 00:51:46 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "sojson.v5";
function AesDecrypt(_0x44a215) {
  var _0x403b0b = CryptoJS.enc.Latin1.parse("2018122911430000");
  var _0x1179f3 = CryptoJS.enc.Latin1.parse("048fe2a99140c0e6");
  var _0x33b1d5 = CryptoJS.AES.decrypt(_0x44a215, _0x403b0b, {
    iv: _0x1179f3,
    padding: CryptoJS.pad.ZeroPadding
  });
  return _0x33b1d5.toString(CryptoJS.enc.Utf8);
}
function URLdecode(_0x133e16) {
  var _0x2db808 = "";
  for (var _0x1b2e83 = 0; _0x1b2e83 < _0x133e16.length; _0x1b2e83++) {
    var _0x11b472 = _0x133e16.charAt(_0x1b2e83);
    if (_0x11b472 == "+") {
      {
        _0x2db808 += " ";
      }
    } else {
      if (_0x11b472 == "%") {
        {
          var _0x5aa056 = _0x133e16.substring(_0x1b2e83 + 1, _0x1b2e83 + 3);
          if (parseInt("0x" + _0x5aa056) > 127) {
            {
              try {
                _0x2db808 += decodeURI("%" + _0x133e16.substring(_0x1b2e83 + 1, _0x1b2e83 + 9));
                _0x1b2e83 += 8;
              } catch (_0x9e07b2) {
                {
                  console.log(_0x9e07b2);
                  _0x2db808 += decodeURI("%" + _0x133e16.substring(_0x1b2e83 + 1, _0x1b2e83 + 6));
                  _0x1b2e83 += 5;
                }
              }
            }
          } else {
            {
              _0x2db808 += String.fromCharCode(parseInt("0x" + _0x5aa056));
              _0x1b2e83 += 2;
            }
          }
        }
      } else {
        _0x2db808 += _0x11b472;
      }
    }
  }
  return _0x2db808;
}
function confusion(_0x3ba91e, _0x3b746a, _0xad85ff) {
  _0xad85ff = URLdecode(AesDecrypt(_0xad85ff));
  if (_0x3ba91e === true) {
    _0xad85ff = textcom(_0xad85ff);
  }
  _0xad85ff = _0xad85ff.replace(/\r\n/g, "\n");
  _0x3b746a.innerHTML = "";
  for (var _0x315ee1 = 0; _0x315ee1 < _0xad85ff.length; _0x315ee1++) {
    {
      if (_0xad85ff.substr(_0x315ee1, 1) === "\n" || _0xad85ff.substr(_0x315ee1, 1) === "\r" || _0xad85ff.substr(_0x315ee1, 1) === "\r\n") {
        _0x1a6df4 = document.createElement("br");
        _0x3b746a.appendChild(_0x1a6df4);
        continue;
      }
      var _0x1a6df4;
      switch (_0x315ee1 % 6) {
        case 0:
          _0x1a6df4 = document.createElement("div");
          _0x1a6df4.style.display = "inline-block";
          _0x1a6df4.className = randomString(_0x315ee1 % 10);
          _0x1a6df4.innerText = _0xad85ff.substr(_0x315ee1, 1);
          break;
        case 1:
          _0x1a6df4 = document.createElement("span");
          _0x1a6df4.innerText = _0xad85ff.substr(_0x315ee1, 1);
          break;
        case 2:
          _0x1a6df4 = document.createElement("center");
          _0x1a6df4.style.display = "inline-block";
          _0x1a6df4.innerText = _0xad85ff.substr(_0x315ee1, 1);
          break;
        case 3:
          _0x1a6df4 = document.createElement("li");
          _0x1a6df4.style.display = "inline-block";
          _0x1a6df4.innerText = _0xad85ff.substr(_0x315ee1, 1);
          break;
        case 4:
          _0x1a6df4 = document.createElement("span");
          _0x1a6df4.style.display = "inline-block";
          _0x1a6df4.innerText = _0xad85ff.substr(_0x315ee1, 1);
          break;
        case 5:
          _0x1a6df4 = document.createElement("span");
          _0x1a6df4.className = randomString(_0x315ee1 % 10);
          _0x1a6df4.innerText = _0xad85ff.substr(_0x315ee1, 1);
          break;
        case 6:
          _0x1a6df4 = document.createElement("span");
          _0x1a6df4.innerText = _0xad85ff.substr(_0x315ee1, 1);
          break;
        case 7:
          _0x1a6df4 = document.createElement("div");
          _0x1a6df4.style.display = "inline-block";
          _0x1a6df4.className = randomString(_0x315ee1 % 10);
          _0x1a6df4.innerText = _0xad85ff.substr(_0x315ee1, 1);
          break;
      }
      _0x3b746a.appendChild(_0x1a6df4);
    }
  }
}
function randomString(_0x378a5e) {
  _0x378a5e = _0x378a5e || 32;
  var _0x525823 = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  var _0xbbc25a = _0x525823.length;
  var _0x156711 = "";
  for (i = 0; i < _0x378a5e; i++) {
    _0x156711 += _0x525823.charAt(Math.floor(Math.random() * _0xbbc25a));
  }
  return _0x156711;
}
function textcom(_0x591830) {
  var _0x3f492c = _0x591830.split("(\n\r)|(\n)");
  var _0x4a872a = null;
  var _0x2c09fc = 0;
  var _0xe9b1ea = [];
  for (var _0x471e6a = _0x3f492c.length; _0x2c09fc < _0x471e6a; _0x2c09fc++) {
    _0x4a872a = _0x3f492c[_0x2c09fc];
    if (_0x4a872a !== "") {
      {
        _0xe9b1ea.push(replaceSpace(_0x4a872a));
      }
    }
  }
  return _0xe9b1ea.join("");
}
function replaceSpace(_0x3cacff) {
  var _0xd478a4 = _0x3cacff.match(/(<a\b[^>]+>(.*?)<\/a>)/gi);
  var _0x543d23 = [];
  _0x3cacff = "\u3000\u3000" + _0x3cacff.replace(/[ \u3000\t\r]/g, "").replace(/[\n]+/g, "\r\n\r\n\u3000\u3000");
  if (_0xd478a4 && _0xd478a4.length) {
    _0x543d23 = _0x3cacff.match(/(<a[^>]+>(.*?)<\/a>)/gi);
    for (var _0x997eef = 0, _0x41fc40 = _0x543d23.length; _0x997eef < _0x41fc40; _0x997eef++) {
      {
        _0x3cacff = _0x3cacff.replace(_0x543d23[_0x997eef], _0xd478a4[_0x997eef]);
      }
    }
  }
  return _0x3cacff;
}
if (!(typeof encode_version !== "undefined" && encode_version === "sojson.v5")) {
  window.alert("不能删除sojson.v5");
}
encode_version = "sojson.v5";