//Sat Apr 25 2026 17:36:28 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

const _0xbade73 = {
  value: true
};
Object.defineProperty(exports, "__esModule", _0xbade73);
const axios_1 = require("axios");
const CryptoJs = require("crypto-js");
const qs = require("qs");
const bigInt = require("big-integer");
const dayjs = require("dayjs");
const cheerio = require("cheerio");
function create_key() {
  var _0x1b3d9d;
  var _0xf3cdec;
  var _0x52d68d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var _0x59c4ba = "";
  for (_0x1b3d9d = 0; 16 > _0x1b3d9d; _0x1b3d9d += 1) {
    _0xf3cdec = Math.random() * _0x52d68d.length;
    _0xf3cdec = Math.floor(_0xf3cdec);
    _0x59c4ba += _0x52d68d.charAt(_0xf3cdec);
  }
  return _0x59c4ba;
}
function AES(_0x269e41, _0x4bcf42) {
  var _0x436603 = CryptoJs.enc.Utf8.parse(_0x4bcf42);
  var _0x389b3f = CryptoJs.enc.Utf8.parse("0102030405060708");
  var _0xd0cf78 = CryptoJs.enc.Utf8.parse(_0x269e41);
  var _0x2da421 = CryptoJs.AES.encrypt(_0xd0cf78, _0x436603, {
    iv: _0x389b3f,
    mode: CryptoJs.mode.CBC
  });
  return _0x2da421.toString();
}
function Rsa(_0x2c8bd3) {
  _0x2c8bd3 = _0x2c8bd3.split("").reverse().join("");
  const _0x5ec0db = "010001";
  const _0x1ee8c1 = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7";
  const _0x403bf3 = _0x2c8bd3.split("").map(_0x2e6baf => _0x2e6baf.charCodeAt(0).toString(16)).join("");
  const _0x446215 = bigInt(_0x403bf3, 16).modPow(bigInt(_0x5ec0db, 16), bigInt(_0x1ee8c1, 16)).toString(16);
  return Array(256 - _0x446215.length).fill("0").join("").concat(_0x446215);
}
function getParamsAndEnc(_0x57e21a) {
  const _0x5a4c93 = AES(_0x57e21a, "0CoJUm6Qyw8W8jud");
  const _0x160c0c = create_key();
  const _0x22cec1 = AES(_0x5a4c93, _0x160c0c);
  const _0x278312 = Rsa(_0x160c0c);
  const _0xb4783e = {
    params: _0x22cec1,
    encSecKey: _0x278312
  };
  return _0xb4783e;
}
function formatMusicItem(_0x5e794b) {
  var _0x325f9c;
  var _0x514588;
  var _0x31f225;
  var _0x444bc2;
  const _0x59e70f = _0x5e794b.al || _0x5e794b.album;
  return {
    id: _0x5e794b.id,
    artwork: _0x59e70f === null || _0x59e70f === undefined ? undefined : _0x59e70f.picUrl,
    title: _0x5e794b.name,
    artist: (_0x5e794b.ar || _0x5e794b.artists)[0].name,
    album: _0x59e70f === null || _0x59e70f === undefined ? undefined : _0x59e70f.name,
    url: "https://share.duanx.cn/url/wy/" + _0x5e794b.id + "/128k",
    qualities: {
      low: {
        size: (_0x325f9c = _0x5e794b.l || {}) === null || _0x325f9c === undefined ? undefined : _0x325f9c.size
      },
      standard: {
        size: (_0x514588 = _0x5e794b.m || {}) === null || _0x514588 === undefined ? undefined : _0x514588.size
      },
      high: {
        size: (_0x31f225 = _0x5e794b.h || {}) === null || _0x31f225 === undefined ? undefined : _0x31f225.size
      },
      super: {
        size: (_0x444bc2 = _0x5e794b.sq || {}) === null || _0x444bc2 === undefined ? undefined : _0x444bc2.size
      }
    },
    copyrightId: _0x5e794b === null || _0x5e794b === undefined ? undefined : _0x5e794b.copyrightId
  };
}
function formatAlbumItem(_0x4449c2) {
  return {
    id: _0x4449c2.id,
    artist: _0x4449c2.artist.name,
    title: _0x4449c2.name,
    artwork: _0x4449c2.picUrl,
    description: "",
    date: dayjs.unix(_0x4449c2.publishTime / 1000).format("YYYY-MM-DD")
  };
}
const pageSize = 30;
async function searchBase(_0x132d27, _0x1d8dbb, _0x1cd5b7) {
  const _0x221298 = {
    s: _0x132d27,
    limit: pageSize,
    type: _0x1cd5b7,
    offset: (_0x1d8dbb - 1) * pageSize,
    csrf_token: ""
  };
  const _0x3aa67f = getParamsAndEnc(JSON.stringify(_0x221298));
  const _0x2c8446 = qs.stringify(_0x3aa67f);
  const _0x453400 = {
    authority: "music.163.com",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "content-type": "application/x-www-form-urlencoded",
    accept: "*/*",
    origin: "https://music.163.com",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://music.163.com/search/",
    "accept-language": "zh-CN,zh;q=0.9"
  };
  const _0x23b0e5 = {
    method: "post",
    url: "https://music.163.com/weapi/search/get",
    headers: _0x453400,
    data: _0x2c8446
  };
  const _0x3ef6dd = (await (0, axios_1.default)(_0x23b0e5)).data;
  return _0x3ef6dd;
}
async function searchMusic(_0x3a1846, _0x2154d7) {
  const _0x7cb507 = await searchBase(_0x3a1846, _0x2154d7, 1);
  const _0x386eee = _0x7cb507.result.songs.map(formatMusicItem);
  return {
    isEnd: _0x7cb507.result.songCount <= _0x2154d7 * pageSize,
    data: _0x386eee
  };
}
async function searchAlbum(_0x20e24b, _0x52ccac) {
  const _0x2a0eed = await searchBase(_0x20e24b, _0x52ccac, 10);
  const _0x271f29 = _0x2a0eed.result.albums.map(formatAlbumItem);
  return {
    isEnd: _0x2a0eed.result.albumCount <= _0x52ccac * pageSize,
    data: _0x271f29
  };
}
async function searchArtist(_0x4394b7, _0x2ed01b) {
  const _0x424e0b = await searchBase(_0x4394b7, _0x2ed01b, 100);
  const _0x2cffc3 = _0x424e0b.result.artists.map(_0x20f1e9 => ({
    name: _0x20f1e9.name,
    id: _0x20f1e9.id,
    avatar: _0x20f1e9.img1v1Url,
    worksNum: _0x20f1e9.albumSize
  }));
  return {
    isEnd: _0x424e0b.result.artistCount <= _0x2ed01b * pageSize,
    data: _0x2cffc3
  };
}
async function searchMusicSheet(_0x463867, _0x920610) {
  const _0x193c18 = await searchBase(_0x463867, _0x920610, 1000);
  const _0x5a9b22 = _0x193c18.result.playlists.map(_0x66eafc => {
    {
      var _0xe1b2c9;
      return {
        title: _0x66eafc.name,
        id: _0x66eafc.id,
        coverImg: _0x66eafc.coverImgUrl,
        artist: (_0xe1b2c9 = _0x66eafc.creator) === null || _0xe1b2c9 === undefined ? undefined : _0xe1b2c9.nickname,
        playCount: _0x66eafc.playCount,
        worksNum: _0x66eafc.trackCount
      };
    }
  });
  return {
    isEnd: _0x193c18.result.playlistCount <= _0x920610 * pageSize,
    data: _0x5a9b22
  };
}
async function searchLyric(_0x424fe7, _0x401967) {
  var _0x219454;
  var _0x1ac1bb;
  const _0xd35d60 = await searchBase(_0x424fe7, _0x401967, 1006);
  const _0x38d8db = (_0x1ac1bb = (_0x219454 = _0xd35d60.result.songs) === null || _0x219454 === undefined ? undefined : _0x219454.map(_0x3e6b69 => {
    var _0x355001;
    var _0x1c709e;
    var _0x119785;
    var _0xe3fae6;
    return {
      title: _0x3e6b69.name,
      artist: (_0x355001 = _0x3e6b69.ar) === null || _0x355001 === undefined ? undefined : _0x355001.map(_0x4706f7 => _0x4706f7.name).join(", "),
      id: _0x3e6b69.id,
      artwork: (_0x1c709e = _0x3e6b69.al) === null || _0x1c709e === undefined ? undefined : _0x1c709e.picUrl,
      album: (_0x119785 = _0x3e6b69.al) === null || _0x119785 === undefined ? undefined : _0x119785.name,
      rawLrcTxt: (_0xe3fae6 = _0x3e6b69.lyrics) === null || _0xe3fae6 === undefined ? undefined : _0xe3fae6.join("\n")
    };
  })) !== null && _0x1ac1bb !== undefined ? _0x1ac1bb : [];
  return {
    isEnd: _0xd35d60.result.songCount <= _0x401967 * pageSize,
    data: _0x38d8db
  };
}
async function getArtistWorks(_0x39f811, _0x5ba8aa, _0x5865cb) {
  const _0x41bba4 = {
    csrf_token: ""
  };
  const _0xa8993f = getParamsAndEnc(JSON.stringify(_0x41bba4));
  const _0xdb49da = qs.stringify(_0xa8993f);
  const _0x3eadb1 = {
    authority: "music.163.com",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "content-type": "application/x-www-form-urlencoded",
    accept: "*/*",
    origin: "https://music.163.com",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://music.163.com/search/",
    "accept-language": "zh-CN,zh;q=0.9"
  };
  if (_0x5865cb === "music") {
    const _0x24a0a4 = {
      method: "post",
      url: "https://music.163.com/weapi/v1/artist/" + _0x39f811.id + "?csrf_token=",
      headers: _0x3eadb1,
      data: _0xdb49da
    };
    const _0x1d48b6 = (await (0, axios_1.default)(_0x24a0a4)).data;
    return {
      isEnd: true,
      data: _0x1d48b6.hotSongs.map(formatMusicItem)
    };
  } else {
    if (_0x5865cb === "album") {
      const _0x1e3c51 = {
        method: "post",
        url: "https://music.163.com/weapi/artist/albums/" + _0x39f811.id + "?csrf_token=",
        headers: _0x3eadb1,
        data: _0xdb49da
      };
      const _0x424833 = (await (0, axios_1.default)(_0x1e3c51)).data;
      return {
        isEnd: true,
        data: _0x424833.hotAlbums.map(formatAlbumItem)
      };
    }
  }
}
async function getTopListDetail(_0x1f5be2) {
  const _0x56bdee = await getSheetMusicById(_0x1f5be2.id);
  const _0x23f1ad = {
    musicList: _0x56bdee
  };
  return Object.assign(Object.assign({}, _0x1f5be2), _0x23f1ad);
}
async function getLyric(_0x3963dc) {
  const _0x1041d0 = {
    Referer: "https://y.music.163.com/",
    Origin: "https://y.music.163.com/",
    authority: "music.163.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const _0x1161fd = {
    id: _0x3963dc.id,
    lv: -1,
    tv: -1,
    csrf_token: ""
  };
  const _0x1ac80b = getParamsAndEnc(JSON.stringify(_0x1161fd));
  const _0x4a18be = qs.stringify(_0x1ac80b);
  const _0x1373eb = {
    method: "post",
    url: "https://interface.music.163.com/weapi/song/lyric?csrf_token=",
    headers: _0x1041d0,
    data: _0x4a18be
  };
  const _0x101517 = (await (0, axios_1.default)(_0x1373eb)).data;
  const _0x38a61b = {
    rawLrc: _0x101517.lrc.lyric
  };
  return _0x38a61b;
}
async function getMusicInfo(_0x440ba6) {
  const _0x459a20 = {
    Referer: "https://y.music.163.com/",
    Origin: "https://y.music.163.com/",
    authority: "music.163.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const _0x4f494e = {
    id: _0x440ba6.id,
    ids: "[" + _0x440ba6.id + "]"
  };
  const _0x414750 = {
    headers: _0x459a20,
    params: _0x4f494e
  };
  const _0x2ab224 = (await axios_1.get("http://music.163.com/api/song/detail", _0x414750)).data;
  const _0x41a07b = {
    artwork: _0x2ab224.songs[0].album.picUrl
  };
  return _0x41a07b;
}
async function getAlbumInfo(_0x261bb2) {
  const _0x420ac5 = {
    Referer: "https://y.music.163.com/",
    Origin: "https://y.music.163.com/",
    authority: "music.163.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const _0x1b98d9 = {
    resourceType: 3,
    resourceId: _0x261bb2.id,
    limit: 15,
    csrf_token: ""
  };
  const _0x3b8b18 = getParamsAndEnc(JSON.stringify(_0x1b98d9));
  const _0x59a6ed = qs.stringify(_0x3b8b18);
  const _0x79e66d = {
    method: "post",
    url: "https://interface.music.163.com/weapi/v1/album/" + _0x261bb2.id + "?csrf_token=",
    headers: _0x420ac5,
    data: _0x59a6ed
  };
  const _0x2fbfc3 = (await (0, axios_1.default)(_0x79e66d)).data;
  const _0x8bdb70 = {
    description: _0x2fbfc3.album.description
  };
  return {
    albumItem: _0x8bdb70,
    musicList: (_0x2fbfc3.songs || []).map(formatMusicItem)
  };
}
async function getValidMusicItems(_0x23cf02) {
  const _0x37233b = {
    Referer: "https://y.music.163.com/",
    Origin: "https://y.music.163.com/",
    authority: "music.163.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  try {
    const _0x263f93 = {
      headers: _0x37233b
    };
    const _0x52b3f3 = (await axios_1.default.get("https://music.163.com/api/song/detail/?ids=[" + _0x23cf02.join(",") + "]", _0x263f93)).data;
    const _0x4656bf = _0x52b3f3.songs.map(formatMusicItem);
    return _0x4656bf;
  } catch (_0x523211) {
    console.error(_0x523211);
    return [];
  }
}
async function getSheetMusicById(_0x57813e) {
  const _0x3ec184 = {
    Referer: "https://y.music.163.com/",
    Origin: "https://y.music.163.com/",
    authority: "music.163.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
  };
  const _0x979358 = {
    headers: _0x3ec184
  };
  const _0x5128d2 = (await axios_1.default.get("https://music.163.com/api/v3/playlist/detail?id=" + _0x57813e + "&n=5000", _0x979358)).data;
  const _0x32c4da = _0x5128d2.playlist.trackIds.map(_0x5d47bd => _0x5d47bd.id);
  let _0x1dc95e = [];
  let _0x2344df = 0;
  while (_0x2344df * 200 < _0x32c4da.length) {
    {
      const _0x28f687 = await getValidMusicItems(_0x32c4da.slice(_0x2344df * 200, (_0x2344df + 1) * 200));
      _0x1dc95e = _0x1dc95e.concat(_0x28f687);
      ++_0x2344df;
    }
  }
  return _0x1dc95e;
}
async function importMusicSheet(_0x1b1437) {
  const _0x416ab8 = _0x1b1437.match(/(?:https:\/\/y\.music\.163.com\/m\/playlist\?id=([0-9]+))|(?:https?:\/\/music\.163\.com\/playlist\/([0-9]+)\/.*)|(?:https?:\/\/music.163.com(?:\/#)?\/playlist\?id=(\d+))|(?:^\s*(\d+)\s*$)/);
  const _0x4c865f = _0x416ab8[1] || _0x416ab8[2] || _0x416ab8[3] || _0x416ab8[4];
  return getSheetMusicById(_0x4c865f);
}
async function getTopLists() {
  const _0x293bf3 = await axios_1.default.get("https://music.163.com/discover/toplist", {
    headers: {
      referer: "https://music.163.com/",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54"
    }
  });
  const _0xe0577a = cheerio.load(_0x293bf3.data);
  const _0x2d7b31 = _0xe0577a(".n-minelst").children();
  const _0x5485c0 = [];
  let _0x2d13ac = {};
  for (let _0xd032db of _0x2d7b31) {
    if (_0xd032db.tagName == "h2") {
      _0x2d13ac.title && _0x5485c0.push(_0x2d13ac);
      _0x2d13ac = {};
      _0x2d13ac.title = _0xe0577a(_0xd032db).text();
      _0x2d13ac.data = [];
    } else {
      if (_0xd032db.tagName === "ul") {
        {
          let _0x351594 = _0xe0577a(_0xd032db).children();
          _0x2d13ac.data = _0x351594.map((_0x2ee30d, _0x34e270) => {
            const _0x1f1ce2 = _0xe0577a(_0x34e270);
            const _0x403e96 = _0x1f1ce2.attr("data-res-id");
            const _0x469592 = _0x1f1ce2.find("img").attr("src").replace(/(\.jpg\?).*/, ".jpg?param=800y800");
            const _0x178d2a = _0x1f1ce2.find("p.name").text();
            const _0x1f9bac = _0x1f1ce2.find("p.s-fc4").text();
            const _0xfcddde = {
              id: _0x403e96,
              coverImg: _0x469592,
              title: _0x178d2a,
              description: _0x1f9bac
            };
            return _0xfcddde;
          }).toArray();
        }
      }
    }
  }
  _0x2d13ac.title && _0x5485c0.push(_0x2d13ac);
  return _0x5485c0;
}
const qualityLevels = {
  low: "standard",
  standard: "exhigh",
  high: "lossless",
  super: "lossless"
};
async function getMediaSource(_0x4b90db, _0x5a3b9e) {
  const _0x1af0a9 = (await axios_1.default.get("http://175.27.166.236/wy/wy.php?id=" + _0x4b90db.id + "&level=" + qualityLevels[_0x5a3b9e])).data;
  const _0x16ffa4 = {
    url: _0x1af0a9.data.url
  };
  return _0x16ffa4;
}
const headers = {
  authority: "music.163.com",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
  "content-type": "application/x-www-form-urlencoded",
  accept: "*/*",
  origin: "https://music.163.com",
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "cors",
  "sec-fetch-dest": "empty",
  referer: "https://music.163.com/",
  "accept-language": "zh-CN,zh;q=0.9"
};
async function getRecommendSheetTags() {
  const _0x156350 = {
    csrf_token: ""
  };
  const _0x2e83e1 = getParamsAndEnc(JSON.stringify(_0x156350));
  const _0x933b14 = qs.stringify(_0x2e83e1);
  const _0x1decc5 = {
    method: "post",
    url: "https://music.163.com/weapi/playlist/catalogue",
    headers: headers,
    data: _0x933b14
  };
  const _0x528937 = (await (0, axios_1.default)(_0x1decc5)).data;
  const _0x2b3876 = _0x528937.categories;
  const _0x24b7b8 = {};
  const _0x1fedb1 = Object.entries(_0x2b3876).map(_0x411dbb => {
    const _0x12df50 = {
      title: _0x411dbb[1],
      data: []
    };
    _0x24b7b8[_0x411dbb[0]] = _0x12df50;
    return _0x12df50;
  });
  const _0x1ac1d4 = [];
  _0x528937.sub.forEach(_0x562fba => {
    const _0x50e4d3 = {
      id: _0x562fba.name,
      title: _0x562fba.name
    };
    if (_0x562fba.hot) {
      {
        _0x1ac1d4.push(_0x50e4d3);
      }
    }
    _0x24b7b8[_0x562fba.category].data.push(_0x50e4d3);
  });
  const _0x2facf0 = {
    pinned: _0x1ac1d4,
    data: _0x1fedb1
  };
  return _0x2facf0;
}
async function getRecommendSheetsByTag(_0x5e78c3, _0x401573) {
  const _0x2f98f2 = 20;
  const _0x44282a = {
    cat: _0x5e78c3.id || "全部",
    order: "hot",
    limit: _0x2f98f2,
    offset: (_0x401573 - 1) * _0x2f98f2,
    total: true,
    csrf_token: ""
  };
  const _0x21ac6e = getParamsAndEnc(JSON.stringify(_0x44282a));
  const _0x51d4e5 = qs.stringify(_0x21ac6e);
  const _0x5627f8 = {
    method: "post",
    url: "https://music.163.com/weapi/playlist/list",
    headers: headers,
    data: _0x51d4e5
  };
  const _0x44e991 = (await (0, axios_1.default)(_0x5627f8)).data;
  const _0x3b43f1 = _0x44e991.playlists.map(_0x29d080 => ({
    id: _0x29d080.id,
    artist: _0x29d080.creator.nickname,
    title: _0x29d080.name,
    artwork: _0x29d080.coverImgUrl,
    playCount: _0x29d080.playCount,
    createUserId: _0x29d080.userId,
    createTime: _0x29d080.createTime,
    description: _0x29d080.description
  }));
  return {
    isEnd: !(_0x44e991.more === true),
    data: _0x3b43f1
  };
}
async function getMusicSheetInfo(_0x16c500, _0x25fa50) {
  let _0x559401 = _0x16c500._trackIds;
  if (!_0x559401) {
    {
      const _0x10953f = _0x16c500.id;
      const _0xd0b14a = {
        Referer: "https://y.music.163.com/",
        Origin: "https://y.music.163.com/",
        authority: "music.163.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
      };
      const _0x4649cd = {
        headers: _0xd0b14a
      };
      const _0x37b0d7 = (await axios_1.default.get("https://music.163.com/api/v3/playlist/detail?id=" + _0x10953f + "&n=5000", _0x4649cd)).data;
      _0x559401 = _0x37b0d7.playlist.trackIds.map(_0x138326 => _0x138326.id);
    }
  }
  const _0x5b8016 = 40;
  const _0x560dea = _0x559401.slice((_0x25fa50 - 1) * _0x5b8016, _0x25fa50 * _0x5b8016);
  const _0x33d577 = await getValidMusicItems(_0x560dea);
  let _0x21e328 = {};
  if (_0x25fa50 <= 1) {
    const _0x3c46f5 = {
      _trackIds: _0x559401
    };
    _0x21e328 = _0x3c46f5;
  }
  return Object.assign({
    isEnd: _0x559401.length <= _0x25fa50 * _0x5b8016,
    musicList: _0x33d577
  }, _0x21e328);
}
const _0x488d9b = {
  importMusicSheet: ["网易云：APP点击分享，然后复制链接", "默认歌单无法导入，先新建一个空白歌单复制过去再导入新歌单即可"]
};
module.exports = {
  platform: "元力WY",
  author: "公众号:科技长青&元力菌",
  version: "1.1.1",
  srcUrl: "https://13413.kstore.vip/yuanli/wy.js",
  cacheControl: "no-store",
  hints: _0x488d9b,
  supportedSearchType: ["music", "album", "sheet", "artist", "lyric"],
  async search(_0x517864, _0x1cc651, _0x4a41c4) {
    if (_0x4a41c4 === "music") {
      return await searchMusic(_0x517864, _0x1cc651);
    }
    if (_0x4a41c4 === "album") {
      return await searchAlbum(_0x517864, _0x1cc651);
    }
    if (_0x4a41c4 === "artist") {
      {
        return await searchArtist(_0x517864, _0x1cc651);
      }
    }
    if (_0x4a41c4 === "sheet") {
      {
        return await searchMusicSheet(_0x517864, _0x1cc651);
      }
    }
    if (_0x4a41c4 === "lyric") {
      return await searchLyric(_0x517864, _0x1cc651);
    }
  },
  getMediaSource: getMediaSource,
  getMusicInfo: getMusicInfo,
  getAlbumInfo: getAlbumInfo,
  getLyric: getLyric,
  getArtistWorks: getArtistWorks,
  importMusicSheet: importMusicSheet,
  getTopLists: getTopLists,
  getTopListDetail: getTopListDetail,
  getRecommendSheetTags: getRecommendSheetTags,
  getMusicSheetInfo: getMusicSheetInfo,
  getRecommendSheetsByTag: getRecommendSheetsByTag
};