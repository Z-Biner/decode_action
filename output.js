//Wed May 06 2026 10:13:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  cheerio_1 = require("cheerio"),
  CryptoJS = require("crypto-js"),
  searchRows = 20;
async function searchBase(_0x12c9ea, _0x135665, _0x182a73) {
  const _0x585509 = {
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Host": "m.music.migu.cn",
      "Referer": "https://m.music.migu.cn/v3/search?keyword=" + encodeURIComponent(_0x12c9ea),
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
      "X-Requested-With": "XMLHttpRequest"
    },
    _0xcce38c = {
      "keyword": _0x12c9ea,
      "type": _0x182a73,
      "pgc": _0x135665,
      "rows": searchRows
    },
    _0x2f6c7f = await axios_1.default.get("https://m.music.migu.cn/migu/remoting/scr_search_tag", {
      "headers": _0x585509,
      "params": _0xcce38c
    });
  return _0x2f6c7f.data;
}
function musicCanPlayFilter(_0x21688a) {
  return _0x21688a.mp3 || _0x21688a.listenUrl || _0x21688a.lisQq || _0x21688a.lisCr;
}
async function searchMusic(_0x5cd16a, _0x217972) {
  const _0x4f59a1 = await searchBase(_0x5cd16a, _0x217972, 2),
    _0x4ad6d6 = _0x4f59a1.musics.map(_0x453481 => ({
      "id": _0x453481.id,
      "artwork": _0x453481.cover,
      "title": _0x453481.songName,
      "artist": _0x453481.artist,
      "album": _0x453481.albumName,
      "url": musicCanPlayFilter(_0x453481),
      "copyrightId": _0x453481.copyrightId,
      "singerId": _0x453481.singerId
    }));
  return {
    "isEnd": +_0x4f59a1.pageNo * searchRows >= _0x4f59a1.pgt,
    "data": _0x4ad6d6
  };
}
async function searchAlbum(_0xa90fb8, _0x5ec1cd) {
  const _0x55a87a = await searchBase(_0xa90fb8, _0x5ec1cd, 4),
    _0x349611 = _0x55a87a.albums.map(_0x1437d0 => ({
      "id": _0x1437d0.id,
      "artwork": _0x1437d0.albumPicL,
      "title": _0x1437d0.title,
      "date": _0x1437d0.publishDate,
      "artist": (_0x1437d0.singer || []).map(_0x51753e => _0x51753e.name).join(","),
      "singer": _0x1437d0.singer,
      "fullSongTotal": _0x1437d0.fullSongTotal
    }));
  return {
    "isEnd": +_0x55a87a.pageNo * searchRows >= _0x55a87a.pgt,
    "data": _0x349611
  };
}
async function searchArtist(_0x1f0fd2, _0x197ac4) {
  const _0x35d7fd = await searchBase(_0x1f0fd2, _0x197ac4, 1),
    _0x15a4c5 = _0x35d7fd.artists.map(_0x50438d => ({
      "name": _0x50438d.title,
      "id": _0x50438d.id,
      "avatar": _0x50438d.artistPicL,
      "worksNum": _0x50438d.songNum
    }));
  return {
    "isEnd": +_0x35d7fd.pageNo * searchRows >= _0x35d7fd.pgt,
    "data": _0x15a4c5
  };
}
async function searchMusicSheet(_0x5313e0, _0x18b2c4) {
  const _0x333ad3 = await searchBase(_0x5313e0, _0x18b2c4, 6),
    _0x13f39a = _0x333ad3.songLists.map(_0x44c337 => ({
      "title": _0x44c337.name,
      "id": _0x44c337.id,
      "artist": _0x44c337.userName,
      "artwork": _0x44c337.img,
      "description": _0x44c337.intro,
      "worksNum": _0x44c337.musicNum,
      "playCount": _0x44c337.playNum
    }));
  return {
    "isEnd": +_0x333ad3.pageNo * searchRows >= _0x333ad3.pgt,
    "data": _0x13f39a
  };
}
async function searchLyric(_0xbc713, _0x57dba7) {
  const _0x3f3c9f = await searchBase(_0xbc713, _0x57dba7, 7),
    _0x5f245d = _0x3f3c9f.songs.map(_0x48a5b9 => ({
      "title": _0x48a5b9.title,
      "id": _0x48a5b9.id,
      "artist": _0x48a5b9.artist,
      "artwork": _0x48a5b9.cover,
      "lrc": _0x48a5b9.lyrics,
      "album": _0x48a5b9.albumName,
      "copyrightId": _0x48a5b9.copyrightId
    }));
  return {
    "isEnd": +_0x3f3c9f.pageNo * searchRows >= _0x3f3c9f.pgt,
    "data": _0x5f245d
  };
}
async function getArtistAlbumWorks(_0x39b58a, _0x30759f) {
  const _0x3d57f2 = {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "connection": "keep-alive",
      "host": "music.migu.cn",
      "referer": "http://music.migu.cn",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
      "Cache-Control": "max-age=0"
    },
    _0x367c03 = (await axios_1.default.get("https://music.migu.cn/v3/music/artist/" + _0x39b58a.id + "/album?page=" + _0x30759f, {
      "headers": _0x3d57f2
    })).data,
    _0x584f87 = (0, cheerio_1.load)(_0x367c03),
    _0x13bd20 = _0x584f87("div.artist-album-list").find("li"),
    _0x3b3ea0 = [];
  for (let _0x311fb3 = 0; _0x311fb3 < _0x13bd20.length; ++_0x311fb3) {
    const _0x669ba9 = _0x584f87(_0x13bd20[_0x311fb3]),
      _0x554b9f = _0x669ba9.find(".thumb-img").attr("data-original");
    _0x3b3ea0.push({
      "id": _0x669ba9.find(".album-play").attr("data-id"),
      "title": _0x669ba9.find(".album-name").text(),
      "artwork": _0x554b9f.startsWith("//") ? "https:" + _0x554b9f : _0x554b9f,
      "date": "",
      "artist": _0x39b58a.name
    });
  }
  return {
    "isEnd": _0x584f87(".pagination-next").hasClass("disabled"),
    "data": _0x3b3ea0
  };
}
async function getArtistWorks(_0x2eca24, _0x269fb5, _0x13c026) {
  if (_0x13c026 === "music") {
    {
      const _0x55baad = {
          "Accept": "application/json, text/javascript, */*; q=0.01",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "Connection": "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Host": "m.music.migu.cn",
          "Referer": "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5123&j=l&id=" + _0x2eca24.id,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
          "X-Requested-With": "XMLHttpRequest"
        },
        _0x30d5d7 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_artist_song_list_tag", {
          "headers": _0x55baad,
          "params": {
            "artistId": _0x2eca24.id,
            "pageSize": 20,
            "pageNo": _0x269fb5 - 1
          }
        })).data || {};
      return {
        "data": _0x30d5d7.result.results.map(_0x3bb853 => ({
          "id": _0x3bb853.songId,
          "artwork": _0x3bb853.picL,
          "title": _0x3bb853.songName,
          "artist": (_0x3bb853.singerName || []).join(", "),
          "album": _0x3bb853.albumName,
          "url": musicCanPlayFilter(_0x3bb853),
          "rawLrc": _0x3bb853.lyricLrc,
          "copyrightId": _0x3bb853.copyrightId,
          "singerId": _0x3bb853.singerId
        }))
      };
    }
  } else {
    if (_0x13c026 === "album") return getArtistAlbumWorks(_0x2eca24, _0x269fb5);
  }
}
async function getLyric(_0x55daa3) {
  const _0x102b65 = {
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Host": "m.music.migu.cn",
      "Referer": "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5200&j=l&id=" + _0x55daa3.copyrightId,
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
      "X-Requested-With": "XMLHttpRequest"
    },
    _0x101042 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_detail_tag", {
      "headers": _0x102b65,
      "params": {
        "cpid": _0x55daa3.copyrightId
      }
    })).data;
  return {
    "rawLrc": _0x101042.data.lyricLrc
  };
}
async function getMusicSheetInfo(_0x5f3a4e, _0xb51ebd) {
  const _0x1aaa97 = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/songsInfo", {
    "params": {
      "palylistId": _0x5f3a4e.id,
      "pageNo": _0xb51ebd,
      "pageSize": 30
    },
    "headers": {
      "Host": "m.music.migu.cn",
      "referer": "https://m.music.migu.cn/v4/music/playlist/",
      "By": "7242bd16f68cd9b39c54a8e61537009f",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0"
    }
  })).data.data;
  if (!_0x1aaa97) return {
    "isEnd": true,
    "musicList": []
  };
  const _0x83067b = _0x1aaa97.total < 30;
  return {
    "isEnd": _0x83067b,
    "musicList": _0x1aaa97.items.filter(_0x873fd8 => {
      {
        var _0x10572f;
        return ((_0x10572f = _0x873fd8 === null || _0x873fd8 === undefined ? undefined : _0x873fd8.fullSong) === null || _0x10572f === undefined ? undefined : _0x10572f.vipFlag) === 0;
      }
    }).map(_0x2cab14 => {
      {
        var _0x1f4c96, _0x45bfe3, _0x5d1768, _0x2af700, _0x247c92, _0x2fe387, _0x2c273a, _0x43962f, _0x580555, _0x481180;
        return {
          "id": _0x2cab14.id,
          "artwork": ((_0x1f4c96 = _0x2cab14.mediumPic) === null || _0x1f4c96 === undefined ? undefined : _0x1f4c96.startsWith("//")) ? "http:" + _0x2cab14.mediumPic : _0x2cab14.mediumPic,
          "title": _0x2cab14.name,
          "artist": (_0x2fe387 = (_0x247c92 = (_0x2af700 = (_0x5d1768 = (_0x45bfe3 = _0x2cab14.singers) === null || _0x45bfe3 === undefined ? undefined : _0x45bfe3.map) === null || _0x5d1768 === undefined ? undefined : _0x5d1768.call(_0x45bfe3, _0xfcd30a => _0xfcd30a.name)) === null || _0x2af700 === undefined ? undefined : _0x2af700.join) === null || _0x247c92 === undefined ? undefined : _0x247c92.call(_0x2af700, ",")) !== null && _0x2fe387 !== undefined ? _0x2fe387 : "",
          "album": (_0x43962f = (_0x2c273a = _0x2cab14.album) === null || _0x2c273a === undefined ? undefined : _0x2c273a.albumName) !== null && _0x43962f !== undefined ? _0x43962f : "",
          "copyrightId": _0x2cab14.copyrightId,
          "singerId": (_0x481180 = (_0x580555 = _0x2cab14.singers) === null || _0x580555 === undefined ? undefined : _0x580555[0]) === null || _0x481180 === undefined ? undefined : _0x481180.id
        };
      }
    })
  };
}
async function importMusicSheet(_0x5db0b3) {
  var _0x259bbe, _0x1ceb23, _0x28f9a0, _0x2b595a;
  let _0x286615;
  !_0x286615 && (_0x286615 = (_0x5db0b3.match(/https?:\/\/music\.migu\.cn\/v3\/(?:my|music)\/playlist\/([0-9]+)/) || [])[1]);
  !_0x286615 && (_0x286615 = (_0x5db0b3.match(/https?:\/\/h5\.nf\.migu\.cn\/app\/v4\/p\/share\/playlist\/index.html\?.*id=([0-9]+)/) || [])[1]);
  if (!_0x286615) {
    _0x286615 = (_0x259bbe = _0x5db0b3.match(/^\s*(\d+)\s*$/)) === null || _0x259bbe === undefined ? undefined : _0x259bbe[1];
  }
  if (!_0x286615) {
    const _0x122d90 = (_0x1ceb23 = _0x5db0b3.match(/(https?:\/\/c\.migu\.cn\/[\S]+)\?/)) === null || _0x1ceb23 === undefined ? undefined : _0x1ceb23[1];
    if (_0x122d90) {
      const _0x48d861 = (await axios_1.default.get(_0x122d90, {
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "host": "c.migu.cn"
          },
          "validateStatus"(_0x2557cf) {
            return _0x2557cf >= 200 && _0x2557cf < 300 || _0x2557cf === 403;
          }
        })).request,
        _0x17d343 = (_0x28f9a0 = _0x48d861 === null || _0x48d861 === undefined ? undefined : _0x48d861.path) !== null && _0x28f9a0 !== undefined ? _0x28f9a0 : _0x48d861 === null || _0x48d861 === undefined ? undefined : _0x48d861.responseURL;
      if (_0x17d343) {
        _0x286615 = (_0x2b595a = _0x17d343.match(/id=(\d+)/)) === null || _0x2b595a === undefined ? undefined : _0x2b595a[1];
      }
    }
  }
  if (!_0x286615) return;
  const _0x2392a8 = {
      "host": "m.music.migu.cn",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": "https://m.music.migu.cn"
    },
    _0x4d1f00 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/query_playlist_by_id_tag?onLine=1&queryChannel=0&createUserId=migu&contentCountMin=5&playListId=" + _0x286615, {
      "headers": _0x2392a8
    })).data,
    _0x717152 = parseInt(_0x4d1f00.rsp.playList[0].contentCount),
    _0x3f35fb = [];
  let _0x2aa1d3 = 1;
  while ((_0x2aa1d3 - 1) * 20 < _0x717152) {
    const _0x307651 = (await axios_1.default.get("https://music.migu.cn/v3/music/playlist/" + _0x286615 + "?page=" + _0x2aa1d3)).data,
      _0x129ed5 = (0, cheerio_1.load)(_0x307651);
    _0x129ed5(".row.J_CopySong").each((_0x47f357, _0x5abab2) => {
      _0x3f35fb.push(_0x129ed5(_0x5abab2).attr("data-cid"));
    });
    _0x2aa1d3 += 1;
  }
  if (_0x3f35fb.length === 0) {
    return;
  }
  const _0x3743ac = (await (0, axios_1.default)({
    "url": "https://music.migu.cn/v3/api/music/audioPlayer/songs?type=1&copyrightId=" + _0x3f35fb.join(","),
    "headers": {
      "referer": "http://m.music.migu.cn/v3"
    },
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  })).data;
  return _0x3743ac.items.filter(_0x2d3cb3 => _0x2d3cb3.vipFlag === 0).map(_0x35a0b3 => {
    {
      var _0x16c16c, _0x448bda, _0x271b9a, _0x2b9320, _0x442ad3, _0x29b2ec;
      return {
        "id": _0x35a0b3.songId,
        "artwork": _0x35a0b3.cover,
        "title": _0x35a0b3.songName,
        "artist": (_0x448bda = (_0x16c16c = _0x35a0b3.singers) === null || _0x16c16c === undefined ? undefined : _0x16c16c.map(_0x15330b => _0x15330b.artistName)) === null || _0x448bda === undefined ? undefined : _0x448bda.join(", "),
        "album": (_0x2b9320 = (_0x271b9a = _0x35a0b3.albums) === null || _0x271b9a === undefined ? undefined : _0x271b9a[0]) === null || _0x2b9320 === undefined ? undefined : _0x2b9320.albumName,
        "copyrightId": _0x35a0b3.copyrightId,
        "singerId": (_0x29b2ec = (_0x442ad3 = _0x35a0b3.singers) === null || _0x442ad3 === undefined ? undefined : _0x442ad3[0]) === null || _0x29b2ec === undefined ? undefined : _0x29b2ec.artistId
      };
    }
  });
}
async function getTopLists() {
  const _0x5a1d16 = {
      "title": "咪咕尖叫榜",
      "data": [{
        "id": "jianjiao_newsong",
        "title": "尖叫新歌榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/02/36/20020512065402_360x360_2997.png"
      }, {
        "id": "jianjiao_hotsong",
        "title": "尖叫热歌榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/04/99/200408163640868_360x360_6587.png"
      }, {
        "id": "jianjiao_original",
        "title": "尖叫原创榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/04/99/200408163702795_360x360_1614.png"
      }]
    },
    _0x427299 = {
      "title": "咪咕特色榜",
      "data": [{
        "id": "movies",
        "title": "影视榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/05/136/200515161848938_360x360_673.png"
      }, {
        "id": "mainland",
        "title": "内地榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095104122_327x327_4971.png"
      }, {
        "id": "hktw",
        "title": "港台榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095125191_327x327_2382.png"
      }, {
        "id": "eur_usa",
        "title": "欧美榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095229556_327x327_1383.png"
      }, {
        "id": "jpn_kor",
        "title": "日韩榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095259569_327x327_4628.png"
      }, {
        "id": "coloring",
        "title": "彩铃榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095356693_327x327_7955.png"
      }, {
        "id": "ktv",
        "title": "KTV榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095414420_327x327_4992.png"
      }, {
        "id": "network",
        "title": "网络榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095442606_327x327_1298.png"
      }]
    };
  return [_0x5a1d16, _0x427299];
}
const UA = "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
  By = CryptoJS.MD5(UA).toString();
async function getTopListDetail(_0x30770b) {
  const _0x1039cd = await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/billboard/home", {
    "params": {
      "pathName": _0x30770b.id,
      "pageNum": 1,
      "pageSize": 100
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Connection": "keep-alive",
      "Host": "m.music.migu.cn",
      "referer": "https://m.music.migu.cn/v4/music/top/" + _0x30770b.id,
      "User-Agent": UA,
      "By": By
    }
  });
  return Object.assign(Object.assign({}, _0x30770b), {
    "musicList": _0x1039cd.data.data.songs.items.map(_0x30a6db => {
      {
        var _0x37787e, _0x17b5b5, _0x8af2b5, _0x601277, _0x5dae3e, _0x5b7cf8;
        return {
          "id": _0x30a6db.id,
          "artwork": ((_0x37787e = _0x30a6db.mediumPic) === null || _0x37787e === undefined ? undefined : _0x37787e.startsWith("//")) ? "https:" + _0x30a6db.mediumPic : _0x30a6db.mediumPic,
          "title": _0x30a6db.name,
          "artist": (_0x8af2b5 = (_0x17b5b5 = _0x30a6db.singers) === null || _0x17b5b5 === undefined ? undefined : _0x17b5b5.map(_0x395792 => _0x395792.name)) === null || _0x8af2b5 === undefined ? undefined : _0x8af2b5.join(", "),
          "album": (_0x601277 = _0x30a6db.album) === null || _0x601277 === undefined ? undefined : _0x601277.albumName,
          "copyrightId": _0x30a6db.copyrightId,
          "singerId": (_0x5b7cf8 = (_0x5dae3e = _0x30a6db.singers) === null || _0x5dae3e === undefined ? undefined : _0x5dae3e[0]) === null || _0x5b7cf8 === undefined ? undefined : _0x5b7cf8.id
        };
      }
    })
  });
}
async function getRecommendSheetTags() {
  const _0x366a3c = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/allTag", {
      "headers": {
        "host": "m.music.migu.cn",
        "referer": "https://m.music.migu.cn/v4/music/playlist",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0",
        "By": "7242bd16f68cd9b39c54a8e61537009f"
      }
    })).data.data.tags,
    _0x14f93e = _0x366a3c.map(_0x489438 => {
      return {
        "title": _0x489438.tagName,
        "data": _0x489438.tags.map(_0x246b53 => ({
          "id": _0x246b53.tagId,
          "title": _0x246b53.tagName
        }))
      };
    });
  return {
    "pinned": [{
      "title": "小清新",
      "id": "1000587673"
    }, {
      "title": "电视剧",
      "id": "1001076078"
    }, {
      "title": "民谣",
      "id": "1000001775"
    }, {
      "title": "旅行",
      "id": "1000001749"
    }, {
      "title": "思念",
      "id": "1000001703"
    }],
    "data": _0x14f93e
  };
}
async function getRecommendSheetsByTag(_0x55cf0f, _0xb2380d) {
  const _0x15348d = 20,
    _0x3d5280 = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/list", {
      "params": {
        "columnId": 15127272,
        "tagId": _0x55cf0f.id,
        "pageNum": _0xb2380d,
        "pageSize": _0x15348d
      },
      "headers": {
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0",
        "host": "m.music.migu.cn",
        "By": "7242bd16f68cd9b39c54a8e61537009f",
        "Referer": "https://m.music.migu.cn/v4/music/playlist"
      }
    })).data.data,
    _0x54a884 = _0xb2380d * _0x15348d > _0x3d5280.total,
    _0x445d65 = _0x3d5280.items.map(_0x5f07f1 => ({
      "id": _0x5f07f1.playListId,
      "artist": _0x5f07f1.createUserName,
      "title": _0x5f07f1.playListName,
      "artwork": _0x5f07f1.image.startsWith("//") ? "http:" + _0x5f07f1.image : _0x5f07f1.image,
      "playCount": _0x5f07f1.playCount,
      "createUserId": _0x5f07f1.createUserId
    }));
  return {
    "isEnd": _0x54a884,
    "data": _0x445d65
  };
}
async function getMediaSourceByMTM(_0x563316, _0x2d8af0) {
  if (_0x2d8af0 === "standard" && _0x563316.url) return {
    "url": _0x563316.url
  };else {
    if (_0x2d8af0 === "standard") {
      const _0x140738 = {
          "Accept": "application/json, text/javascript, */*; q=0.01",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "Connection": "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Host": "m.music.migu.cn",
          "Referer": "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5200&j=l&id=" + _0x563316.copyrightId,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
          "X-Requested-With": "XMLHttpRequest"
        },
        _0x3fd0d2 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_detail_tag", {
          "headers": _0x140738,
          "params": {
            "cpid": _0x563316.copyrightId
          }
        })).data.data;
      return {
        "artwork": _0x563316.artwork || _0x3fd0d2.picL,
        "url": _0x3fd0d2.listenUrl || _0x3fd0d2.listenQq || _0x3fd0d2.lisCr
      };
    }
  }
}
const qualityLevels = {
  "low": "PQ",
  "standard": "HQ",
  "high": "SQ",
  "super": "ZQ24"
};
async function getMediaSource(_0x34967d, _0x5cc7f7) {
  const _0x58ec2f = (await axios_1.default.get("http://musicapi.haitangw.net/music/mg1.php?id=" + _0x34967d.id + "&quality=" + qualityLevels[_0x5cc7f7])).data;
  return {
    "url": _0x58ec2f.data.music_url
  };
}
module.exports = {
  "platform": "元力MG",
  "author": "公众号:科技长青",
  "version": "0.1.0",
  "appVersion": ">0.1.0-alpha.0",
  "hints": {
    "importMusicSheet": ["咪咕APP：自建歌单-分享-复制链接，直接粘贴即可", "H5/PC端：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "导入时间和歌单大小有关，请耐心等待"]
  },
  "primaryKey": ["id", "copyrightId"],
  "cacheControl": "cache",
  "srcUrl": "http://music.haitangw.net/cqapi/xiaomi.js",
  "supportedSearchType": ["music", "album", "sheet", "artist", "lyric"],
  "getMediaSource": getMediaSource,
  async "search"(_0x5ecd7e, _0x2b2a09, _0x39d51f) {
    if (_0x39d51f === "music") return await searchMusic(_0x5ecd7e, _0x2b2a09);
    if (_0x39d51f === "album") return await searchAlbum(_0x5ecd7e, _0x2b2a09);
    if (_0x39d51f === "artist") return await searchArtist(_0x5ecd7e, _0x2b2a09);
    if (_0x39d51f === "sheet") {
      return await searchMusicSheet(_0x5ecd7e, _0x2b2a09);
    }
    if (_0x39d51f === "lyric") return await searchLyric(_0x5ecd7e, _0x2b2a09);
  },
  async "getAlbumInfo"(_0x2fea0f) {
    const _0x168859 = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Host": "m.music.migu.cn",
        "Referer": "https://m.music.migu.cn/migu/l/?record=record&id=" + _0x2fea0f.id,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
        "X-Requested-With": "XMLHttpRequest"
      },
      _0x52dd14 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_album_song_list_tag", {
        "headers": _0x168859,
        "params": {
          "albumId": _0x2fea0f.id,
          "pageSize": 30
        }
      })).data || {},
      _0xe3cd2a = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_album_detail_tag", {
        "headers": _0x168859,
        "params": {
          "albumId": _0x2fea0f.id
        }
      })).data || {};
    return {
      "albumItem": {
        "description": _0xe3cd2a.albumIntro
      },
      "musicList": _0x52dd14.result.results.map(_0x2ca77b => ({
        "id": _0x2ca77b.songId,
        "artwork": _0x2ca77b.picL,
        "title": _0x2ca77b.songName,
        "artist": (_0x2ca77b.singerName || []).join(", "),
        "album": _0x2fea0f.title,
        "url": musicCanPlayFilter(_0x2ca77b),
        "rawLrc": _0x2ca77b.lyricLrc,
        "copyrightId": _0x2ca77b.copyrightId,
        "singerId": _0x2ca77b.singerId
      }))
    };
  },
  "getArtistWorks": getArtistWorks,
  "getLyric": getLyric,
  "importMusicSheet": importMusicSheet,
  "getTopLists": getTopLists,
  "getTopListDetail": getTopListDetail,
  "getRecommendSheetTags": getRecommendSheetTags,
  "getRecommendSheetsByTag": getRecommendSheetsByTag,
  "getMusicSheetInfo": getMusicSheetInfo
};