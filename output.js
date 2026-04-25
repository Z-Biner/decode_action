//Sat Apr 25 2026 17:49:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  CryptoJs = require("crypto-js"),
  qs = require("qs"),
  bigInt = require("big-integer"),
  dayjs = require("dayjs"),
  cheerio = require("cheerio");
function create_key() {
  var _0x214ea2,
    _0x2421fc,
    _0x5130aa = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    _0x13b35f = "";
  for (_0x214ea2 = 0; 16 > _0x214ea2; _0x214ea2 += 1) _0x2421fc = Math.random() * _0x5130aa.length, _0x2421fc = Math.floor(_0x2421fc), _0x13b35f += _0x5130aa.charAt(_0x2421fc);
  return _0x13b35f;
}
function AES(_0x796f25, _0x166475) {
  var _0x550b86 = CryptoJs.enc.Utf8.parse(_0x166475),
    _0x58e3d4 = CryptoJs.enc.Utf8.parse("0102030405060708"),
    _0x4523a3 = CryptoJs.enc.Utf8.parse(_0x796f25),
    _0x3962fb = CryptoJs.AES.encrypt(_0x4523a3, _0x550b86, {
      "iv": _0x58e3d4,
      "mode": CryptoJs.mode.CBC
    });
  return _0x3962fb.toString();
}
function Rsa(_0x573328) {
  _0x573328 = _0x573328.split("").reverse().join("");
  const _0x4f9b54 = "010001",
    _0x5a8b3c = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7",
    _0x409d5c = _0x573328.split("").map(_0x176408 => _0x176408.charCodeAt(0).toString(16)).join(""),
    _0x3b9713 = bigInt(_0x409d5c, 16).modPow(bigInt(_0x4f9b54, 16), bigInt(_0x5a8b3c, 16)).toString(16);
  return Array(256 - _0x3b9713.length).fill("0").join("").concat(_0x3b9713);
}
function getParamsAndEnc(_0x31f693) {
  const _0x3e2e68 = AES(_0x31f693, "0CoJUm6Qyw8W8jud"),
    _0x468248 = create_key(),
    _0x5bad01 = AES(_0x3e2e68, _0x468248),
    _0x1c4460 = Rsa(_0x468248);
  return {
    "params": _0x5bad01,
    "encSecKey": _0x1c4460
  };
}
function formatMusicItem(_0x3c9cc3) {
  var _0x434f6b, _0xbec64c, _0x5cd55b, _0x4b1ddd;
  const _0x25169a = _0x3c9cc3.al || _0x3c9cc3.album;
  return {
    "id": _0x3c9cc3.id,
    "artwork": _0x25169a === null || _0x25169a === undefined ? undefined : _0x25169a.picUrl,
    "title": _0x3c9cc3.name,
    "artist": (_0x3c9cc3.ar || _0x3c9cc3.artists)[0].name,
    "album": _0x25169a === null || _0x25169a === undefined ? undefined : _0x25169a.name,
    "url": "https://share.duanx.cn/url/wy/" + _0x3c9cc3.id + "/128k",
    "qualities": {
      "low": {
        "size": (_0x434f6b = _0x3c9cc3.l || {}) === null || _0x434f6b === undefined ? undefined : _0x434f6b.size
      },
      "standard": {
        "size": (_0xbec64c = _0x3c9cc3.m || {}) === null || _0xbec64c === undefined ? undefined : _0xbec64c.size
      },
      "high": {
        "size": (_0x5cd55b = _0x3c9cc3.h || {}) === null || _0x5cd55b === undefined ? undefined : _0x5cd55b.size
      },
      "super": {
        "size": (_0x4b1ddd = _0x3c9cc3.sq || {}) === null || _0x4b1ddd === undefined ? undefined : _0x4b1ddd.size
      }
    },
    "copyrightId": _0x3c9cc3 === null || _0x3c9cc3 === undefined ? undefined : _0x3c9cc3.copyrightId
  };
}
function formatAlbumItem(_0x1053bb) {
  return {
    "id": _0x1053bb.id,
    "artist": _0x1053bb.artist.name,
    "title": _0x1053bb.name,
    "artwork": _0x1053bb.picUrl,
    "description": "",
    "date": dayjs.unix(_0x1053bb.publishTime / 1000).format("YYYY-MM-DD")
  };
}
const pageSize = 30;
async function searchBase(_0x4fc22a, _0x51e3e3, _0x4fe750) {
  const _0x180a00 = {
      "s": _0x4fc22a,
      "limit": pageSize,
      "type": _0x4fe750,
      "offset": (_0x51e3e3 - 1) * pageSize,
      "csrf_token": ""
    },
    _0x3d87fb = getParamsAndEnc(JSON.stringify(_0x180a00)),
    _0x36855b = qs.stringify(_0x3d87fb),
    _0x4ca114 = {
      "authority": "music.163.com",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "content-type": "application/x-www-form-urlencoded",
      "accept": "*/*",
      "origin": "https://music.163.com",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "referer": "https://music.163.com/search/",
      "accept-language": "zh-CN,zh;q=0.9"
    },
    _0x3edaca = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/search/get",
      "headers": _0x4ca114,
      "data": _0x36855b
    })).data;
  return _0x3edaca;
}
async function searchMusic(_0x47b05f, _0x1153b6) {
  const _0x2605f5 = await searchBase(_0x47b05f, _0x1153b6, 1),
    _0x35dc9c = _0x2605f5.result.songs.map(formatMusicItem);
  return {
    "isEnd": _0x2605f5.result.songCount <= _0x1153b6 * pageSize,
    "data": _0x35dc9c
  };
}
async function searchAlbum(_0xd62b12, _0x3f62a1) {
  const _0x268506 = await searchBase(_0xd62b12, _0x3f62a1, 10),
    _0x39e036 = _0x268506.result.albums.map(formatAlbumItem);
  return {
    "isEnd": _0x268506.result.albumCount <= _0x3f62a1 * pageSize,
    "data": _0x39e036
  };
}
async function searchArtist(_0x3b5042, _0x49669d) {
  const _0x53a5e2 = await searchBase(_0x3b5042, _0x49669d, 100),
    _0x33d010 = _0x53a5e2.result.artists.map(_0x2845e2 => ({
      "name": _0x2845e2.name,
      "id": _0x2845e2.id,
      "avatar": _0x2845e2.img1v1Url,
      "worksNum": _0x2845e2.albumSize
    }));
  return {
    "isEnd": _0x53a5e2.result.artistCount <= _0x49669d * pageSize,
    "data": _0x33d010
  };
}
async function searchMusicSheet(_0x10ac35, _0x5d59fd) {
  const _0x1f6c4f = await searchBase(_0x10ac35, _0x5d59fd, 1000),
    _0x13b052 = _0x1f6c4f.result.playlists.map(_0x18d2f3 => {
      var _0x22827f;
      return {
        "title": _0x18d2f3.name,
        "id": _0x18d2f3.id,
        "coverImg": _0x18d2f3.coverImgUrl,
        "artist": (_0x22827f = _0x18d2f3.creator) === null || _0x22827f === undefined ? undefined : _0x22827f.nickname,
        "playCount": _0x18d2f3.playCount,
        "worksNum": _0x18d2f3.trackCount
      };
    });
  return {
    "isEnd": _0x1f6c4f.result.playlistCount <= _0x5d59fd * pageSize,
    "data": _0x13b052
  };
}
async function searchLyric(_0x1d8918, _0x2460c0) {
  var _0x269a93, _0x408aef;
  const _0x2ae8c7 = await searchBase(_0x1d8918, _0x2460c0, 1006),
    _0x51ff84 = (_0x408aef = (_0x269a93 = _0x2ae8c7.result.songs) === null || _0x269a93 === undefined ? undefined : _0x269a93.map(_0x3dd8d3 => {
      var _0x2f503e, _0x8da242, _0x2aeb38, _0x5e2aad;
      return {
        "title": _0x3dd8d3.name,
        "artist": (_0x2f503e = _0x3dd8d3.ar) === null || _0x2f503e === undefined ? undefined : _0x2f503e.map(_0x104158 => _0x104158.name).join(", "),
        "id": _0x3dd8d3.id,
        "artwork": (_0x8da242 = _0x3dd8d3.al) === null || _0x8da242 === undefined ? undefined : _0x8da242.picUrl,
        "album": (_0x2aeb38 = _0x3dd8d3.al) === null || _0x2aeb38 === undefined ? undefined : _0x2aeb38.name,
        "rawLrcTxt": (_0x5e2aad = _0x3dd8d3.lyrics) === null || _0x5e2aad === undefined ? undefined : _0x5e2aad.join("\n")
      };
    })) !== null && _0x408aef !== undefined ? _0x408aef : [];
  return {
    "isEnd": _0x2ae8c7.result.songCount <= _0x2460c0 * pageSize,
    "data": _0x51ff84
  };
}
async function getArtistWorks(_0x422d86, _0x4742f7, _0x4ff5c7) {
  const _0x207ba1 = {
      "csrf_token": ""
    },
    _0x4b7640 = getParamsAndEnc(JSON.stringify(_0x207ba1)),
    _0x2aa4f4 = qs.stringify(_0x4b7640),
    _0x277874 = {
      "authority": "music.163.com",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "content-type": "application/x-www-form-urlencoded",
      "accept": "*/*",
      "origin": "https://music.163.com",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "referer": "https://music.163.com/search/",
      "accept-language": "zh-CN,zh;q=0.9"
    };
  if (_0x4ff5c7 === "music") {
    {
      const _0x10e557 = (await (0, axios_1.default)({
        "method": "post",
        "url": "https://music.163.com/weapi/v1/artist/" + _0x422d86.id + "?csrf_token=",
        "headers": _0x277874,
        "data": _0x2aa4f4
      })).data;
      return {
        "isEnd": true,
        "data": _0x10e557.hotSongs.map(formatMusicItem)
      };
    }
  } else {
    if (_0x4ff5c7 === "album") {
      const _0x143511 = (await (0, axios_1.default)({
        "method": "post",
        "url": "https://music.163.com/weapi/artist/albums/" + _0x422d86.id + "?csrf_token=",
        "headers": _0x277874,
        "data": _0x2aa4f4
      })).data;
      return {
        "isEnd": true,
        "data": _0x143511.hotAlbums.map(formatAlbumItem)
      };
    }
  }
}
async function getTopListDetail(_0xa22381) {
  const _0x5133f8 = await getSheetMusicById(_0xa22381.id);
  return Object.assign(Object.assign({}, _0xa22381), {
    "musicList": _0x5133f8
  });
}
async function getLyric(_0x48cc21) {
  const _0x5afcc8 = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x440931 = {
      "id": _0x48cc21.id,
      "lv": -1,
      "tv": -1,
      "csrf_token": ""
    },
    _0x20e25e = getParamsAndEnc(JSON.stringify(_0x440931)),
    _0x291827 = qs.stringify(_0x20e25e),
    _0x44d54b = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://interface.music.163.com/weapi/song/lyric?csrf_token=",
      "headers": _0x5afcc8,
      "data": _0x291827
    })).data;
  return {
    "rawLrc": _0x44d54b.lrc.lyric
  };
}
async function getMusicInfo(_0x46a68d) {
  const _0x498b82 = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x4bb298 = {
      "id": _0x46a68d.id,
      "ids": "[" + _0x46a68d.id + "]"
    },
    _0x2ec803 = (await axios_1.get("http://music.163.com/api/song/detail", {
      "headers": _0x498b82,
      "params": _0x4bb298
    })).data;
  return {
    "artwork": _0x2ec803.songs[0].album.picUrl
  };
}
async function getAlbumInfo(_0x10ad2b) {
  const _0x547c1d = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x3882f4 = {
      "resourceType": 3,
      "resourceId": _0x10ad2b.id,
      "limit": 15,
      "csrf_token": ""
    },
    _0x5aaf28 = getParamsAndEnc(JSON.stringify(_0x3882f4)),
    _0x3eb8d7 = qs.stringify(_0x5aaf28),
    _0x1d410b = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://interface.music.163.com/weapi/v1/album/" + _0x10ad2b.id + "?csrf_token=",
      "headers": _0x547c1d,
      "data": _0x3eb8d7
    })).data;
  return {
    "albumItem": {
      "description": _0x1d410b.album.description
    },
    "musicList": (_0x1d410b.songs || []).map(formatMusicItem)
  };
}
async function getValidMusicItems(_0x4a81fe) {
  const _0x64aa24 = {
    "Referer": "https://y.music.163.com/",
    "Origin": "https://y.music.163.com/",
    "authority": "music.163.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  try {
    const _0x367054 = (await axios_1.default.get("https://music.163.com/api/song/detail/?ids=[" + _0x4a81fe.join(",") + "]", {
        "headers": _0x64aa24
      })).data,
      _0x79f02a = _0x367054.songs.map(formatMusicItem);
    return _0x79f02a;
  } catch (_0x2433d8) {
    console.error(_0x2433d8);
    return [];
  }
}
async function getSheetMusicById(_0x3aa24f) {
  const _0x1431b7 = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
    },
    _0xd00fa4 = (await axios_1.default.get("https://music.163.com/api/v3/playlist/detail?id=" + _0x3aa24f + "&n=5000", {
      "headers": _0x1431b7
    })).data,
    _0x48c55e = _0xd00fa4.playlist.trackIds.map(_0x17c816 => _0x17c816.id);
  let _0x4cf3d3 = [],
    _0x25da65 = 0;
  while (_0x25da65 * 200 < _0x48c55e.length) {
    const _0x5b145e = await getValidMusicItems(_0x48c55e.slice(_0x25da65 * 200, (_0x25da65 + 1) * 200));
    _0x4cf3d3 = _0x4cf3d3.concat(_0x5b145e);
    ++_0x25da65;
  }
  return _0x4cf3d3;
}
async function importMusicSheet(_0x1aefd5) {
  const _0x4a814e = _0x1aefd5.match(/(?:https:\/\/y\.music\.163.com\/m\/playlist\?id=([0-9]+))|(?:https?:\/\/music\.163\.com\/playlist\/([0-9]+)\/.*)|(?:https?:\/\/music.163.com(?:\/#)?\/playlist\?id=(\d+))|(?:^\s*(\d+)\s*$)/),
    _0x4c73d5 = _0x4a814e[1] || _0x4a814e[2] || _0x4a814e[3] || _0x4a814e[4];
  return getSheetMusicById(_0x4c73d5);
}
async function getTopLists() {
  const _0x364ea5 = await axios_1.default.get("https://music.163.com/discover/toplist", {
      "headers": {
        "referer": "https://music.163.com/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54"
      }
    }),
    _0x589654 = cheerio.load(_0x364ea5.data),
    _0x496531 = _0x589654(".n-minelst").children(),
    _0x1e44dc = [];
  let _0x3c691f = {};
  for (let _0xa4c7c4 of _0x496531) {
    {
      if (_0xa4c7c4.tagName == "h2") _0x3c691f.title && _0x1e44dc.push(_0x3c691f), _0x3c691f = {}, _0x3c691f.title = _0x589654(_0xa4c7c4).text(), _0x3c691f.data = [];else {
        if (_0xa4c7c4.tagName === "ul") {
          {
            let _0x2fd55c = _0x589654(_0xa4c7c4).children();
            _0x3c691f.data = _0x2fd55c.map((_0x4aba40, _0x4daa4a) => {
              const _0x2a2dfe = _0x589654(_0x4daa4a),
                _0xff9a5 = _0x2a2dfe.attr("data-res-id"),
                _0x1cc9cc = _0x2a2dfe.find("img").attr("src").replace(/(\.jpg\?).*/, ".jpg?param=800y800"),
                _0x1260b0 = _0x2a2dfe.find("p.name").text(),
                _0x30fdf6 = _0x2a2dfe.find("p.s-fc4").text();
              return {
                "id": _0xff9a5,
                "coverImg": _0x1cc9cc,
                "title": _0x1260b0,
                "description": _0x30fdf6
              };
            }).toArray();
          }
        }
      }
    }
  }
  _0x3c691f.title && _0x1e44dc.push(_0x3c691f);
  return _0x1e44dc;
}
const qualityLevels = {
  "low": "standard",
  "standard": "exhigh",
  "high": "lossless",
  "super": "lossless"
};
async function getMediaSource(_0x543da2, _0x44c47c) {
  const _0x26f8ae = (await axios_1.default.get("http://musicapi.haitangw.net/music/wy.php?id=" + _0x543da2.id + "&level=" + qualityLevels[_0x44c47c])).data;
  return {
    "url": _0x26f8ae.data.url
  };
}
const headers = {
  "authority": "music.163.com",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
  "content-type": "application/x-www-form-urlencoded",
  "accept": "*/*",
  "origin": "https://music.163.com",
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "cors",
  "sec-fetch-dest": "empty",
  "referer": "https://music.163.com/",
  "accept-language": "zh-CN,zh;q=0.9"
};
async function getRecommendSheetTags() {
  const _0x248637 = {
      "csrf_token": ""
    },
    _0x5147e7 = getParamsAndEnc(JSON.stringify(_0x248637)),
    _0xb3c6b = qs.stringify(_0x5147e7),
    _0x441595 = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/playlist/catalogue",
      "headers": headers,
      "data": _0xb3c6b
    })).data,
    _0x5dcaf6 = _0x441595.categories,
    _0x3b8347 = {},
    _0x40982c = Object.entries(_0x5dcaf6).map(_0x174406 => {
      {
        const _0x293e51 = {
          "title": _0x174406[1],
          "data": []
        };
        _0x3b8347[_0x174406[0]] = _0x293e51;
        return _0x293e51;
      }
    }),
    _0x458f59 = [];
  _0x441595.sub.forEach(_0x5e9cd9 => {
    const _0x18e5e0 = {
      "id": _0x5e9cd9.name,
      "title": _0x5e9cd9.name
    };
    if (_0x5e9cd9.hot) {
      _0x458f59.push(_0x18e5e0);
    }
    _0x3b8347[_0x5e9cd9.category].data.push(_0x18e5e0);
  });
  return {
    "pinned": _0x458f59,
    "data": _0x40982c
  };
}
async function getRecommendSheetsByTag(_0x324d28, _0x1e5cbf) {
  const _0x104b8c = 20,
    _0x3d0117 = {
      "cat": _0x324d28.id || "å…¨éƒ¨",
      "order": "hot",
      "limit": _0x104b8c,
      "offset": (_0x1e5cbf - 1) * _0x104b8c,
      "total": true,
      "csrf_token": ""
    },
    _0x5c3d8e = getParamsAndEnc(JSON.stringify(_0x3d0117)),
    _0x33d1ef = qs.stringify(_0x5c3d8e),
    _0x1a5467 = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/playlist/list",
      "headers": headers,
      "data": _0x33d1ef
    })).data,
    _0x222436 = _0x1a5467.playlists.map(_0x3d26b4 => ({
      "id": _0x3d26b4.id,
      "artist": _0x3d26b4.creator.nickname,
      "title": _0x3d26b4.name,
      "artwork": _0x3d26b4.coverImgUrl,
      "playCount": _0x3d26b4.playCount,
      "createUserId": _0x3d26b4.userId,
      "createTime": _0x3d26b4.createTime,
      "description": _0x3d26b4.description
    }));
  return {
    "isEnd": !(_0x1a5467.more === true),
    "data": _0x222436
  };
}
async function getMusicSheetInfo(_0x16292a, _0x5ba98a) {
  let _0x2de9f9 = _0x16292a._trackIds;
  if (!_0x2de9f9) {
    const _0x2607a0 = _0x16292a.id,
      _0x41cd68 = {
        "Referer": "https://y.music.163.com/",
        "Origin": "https://y.music.163.com/",
        "authority": "music.163.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
      },
      _0x2fd3c9 = (await axios_1.default.get("https://music.163.com/api/v3/playlist/detail?id=" + _0x2607a0 + "&n=5000", {
        "headers": _0x41cd68
      })).data;
    _0x2de9f9 = _0x2fd3c9.playlist.trackIds.map(_0x3ce7ac => _0x3ce7ac.id);
  }
  const _0x246177 = 40,
    _0x22d993 = _0x2de9f9.slice((_0x5ba98a - 1) * _0x246177, _0x5ba98a * _0x246177),
    _0x2d15e5 = await getValidMusicItems(_0x22d993);
  let _0x2c54b9 = {};
  _0x5ba98a <= 1 && (_0x2c54b9 = {
    "_trackIds": _0x2de9f9
  });
  return Object.assign({
    "isEnd": _0x2de9f9.length <= _0x5ba98a * _0x246177,
    "musicList": _0x2d15e5
  }, _0x2c54b9);
}
module.exports = {
  "platform": "å…ƒåŠ›WY",
  "author": "公众号:科技长青",
  "version": "0.1",
  "appVersion": ">0.1.0-alpha.0",
  "srcUrl": "",
  "cacheControl": "no-store",
  "hints": {
    "importMusicSheet": ["ç½‘æ˜“äº‘ï¼šAPPç‚¹å‡»åˆ†äº«ï¼Œç„¶åŽå¤åˆ¶é“¾æŽ¥", "é»˜è®¤æ­Œå•æ— æ³•å¯¼å…¥ï¼Œå…ˆæ–°å»ºä¸€ä¸ªç©ºç™½æ­Œå•å¤åˆ¶è¿‡åŽ»å†å¯¼å…¥æ–°æ­Œå•å³å¯"]
  },
  "supportedSearchType": ["music", "album", "sheet", "artist", "lyric"],
  async "search"(_0x43e2ca, _0x3cfbd4, _0x4e254a) {
    if (_0x4e254a === "music") return await searchMusic(_0x43e2ca, _0x3cfbd4);
    if (_0x4e254a === "album") return await searchAlbum(_0x43e2ca, _0x3cfbd4);
    if (_0x4e254a === "artist") {
      return await searchArtist(_0x43e2ca, _0x3cfbd4);
    }
    if (_0x4e254a === "sheet") return await searchMusicSheet(_0x43e2ca, _0x3cfbd4);
    if (_0x4e254a === "lyric") return await searchLyric(_0x43e2ca, _0x3cfbd4);
  },
  "getMediaSource": getMediaSource,
  "getMusicInfo": getMusicInfo,
  "getAlbumInfo": getAlbumInfo,
  "getLyric": getLyric,
  "getArtistWorks": getArtistWorks,
  "importMusicSheet": importMusicSheet,
  "getTopLists": getTopLists,
  "getTopListDetail": getTopListDetail,
  "getRecommendSheetTags": getRecommendSheetTags,
  "getMusicSheetInfo": getMusicSheetInfo,
  "getRecommendSheetsByTag": getRecommendSheetsByTag
};