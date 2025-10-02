//Thu Oct 02 2025 07:46:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function decode(_0x190256) {
  return _0x190256.split("").map(_0x8cac37 => String.fromCharCode(_0x8cac37.charCodeAt(0) - 1)).join("");
}
const a = decode("7Y,c7");
const b = decode("/F?ctY");
const c = decode("c~,>O");
const base64Key = btoa(a + b + c);
function decryptImageCryptoJS(_0x17bb5d) {
  const _0x399c86 = CryptoJS.enc.Utf8.parse(atob(base64Key));
  const _0xc16caf = new Uint8Array(_0x17bb5d);
  const _0x15bb08 = CryptoJS.lib.WordArray.create(_0xc16caf.slice(0, 16));
  const _0x3dcaa7 = CryptoJS.lib.WordArray.create(_0xc16caf.slice(16));
  const _0x590784 = {
    ciphertext: _0x3dcaa7
  };
  const _0x5451a5 = CryptoJS.AES.decrypt(_0x590784, _0x399c86, {
    iv: _0x15bb08,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const _0x4de1f1 = CryptoJS.enc.Latin1.stringify(_0x5451a5);
  const _0x59c7e9 = new Uint8Array(_0x4de1f1.length);
  for (let _0x4b6d84 = 0; _0x4b6d84 < _0x4de1f1.length; _0x4b6d84++) {
    _0x59c7e9[_0x4b6d84] = _0x4de1f1.charCodeAt(_0x4b6d84);
  }
  return _0x59c7e9;
}
function getMimeTypeFromUrl(_0x927f88) {
  const _0x4c446d = _0x927f88.toLowerCase();
  if (_0x4c446d.endsWith(".jpg") || _0x4c446d.endsWith(".jpeg")) {
    return "image/jpeg";
  }
  if (_0x4c446d.endsWith(".png")) {
    return "image/png";
  }
  if (_0x4c446d.endsWith(".gif")) {
    return "image/gif";
  }
  if (_0x4c446d.endsWith(".webp")) {
    return "image/webp";
  }
  if (_0x4c446d.endsWith(".svg")) {
    return "image/svg+xml";
  }
  if (_0x4c446d.endsWith(".bmp")) {
    return "image/bmp";
  }
  if (_0x4c446d.endsWith(".ico")) {
    return "image/x-icon";
  }
  return "application/octet-stream";
}
async function processImage(_0x5c10a4) {
  const _0x4cd8ce = _0x5c10a4.src;
  try {
    {
      if (_0x5c10a4.dataset.decrypted === "1") {
        return;
      }
      const _0x1a2108 = _0x5c10a4.dataset.src;
      if (!_0x1a2108) {
        return;
      }
      const _0x170d86 = await fetch(_0x1a2108, {
        method: "GET",
        referrerPolicy: "no-referrer"
      });
      const _0x8825ad = await _0x170d86.arrayBuffer();
      const _0x3c193e = decryptImageCryptoJS(_0x8825ad, base64Key);
      const _0x1959f3 = getMimeTypeFromUrl(_0x1a2108);
      const _0x5a6f58 = {
        type: _0x1959f3
      };
      const _0x2d7c67 = new Blob([_0x3c193e], _0x5a6f58);
      const _0x253c80 = URL.createObjectURL(_0x2d7c67);
      _0x5c10a4.src = _0x253c80;
      _0x5c10a4.draggable = false;
      _0x5c10a4.oncontextmenu = _0x49c743 => _0x49c743.preventDefault();
      _0x5c10a4.dataset.decrypted = "1";
    }
  } catch (_0xb09a85) {
    {
      console.error("load image error", _0x5c10a4, _0xb09a85);
      _0x5c10a4.src = _0x4cd8ce;
    }
  }
}
async function loadEncryptedImagesParallel() {
  const _0x4720d1 = document.querySelectorAll("img.encrypted-image");
  const _0x3bd7ef = Array.from(_0x4720d1).map(_0x25c2ee => processImage(_0x25c2ee, base64Key));
  await Promise.all(_0x3bd7ef);
}
$(function () {
  loadEncryptedImagesParallel();
});