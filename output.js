//Wed May 06 2026 10:09:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

const _0x10aef1 = {
  value: true
};
Object.defineProperty(exports, "__esModule", _0x10aef1);
const axios_1 = require("axios");
const cheerio_1 = require("cheerio");
const CryptoJS = require("crypto-js");
const searchRows = 20;
async function searchBase(_0x204453, _0x1cd9c7, _0x4c770) {
  const _0x4d9b55 = {
    Accept: "application/json, text/javascript, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Host: "m.music.migu.cn",
    Referer: "https://m.music.migu.cn/v3/search?keyword=" + encodeURIComponent(_0x204453),
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
    "X-Requested-With": "XMLHttpRequest"
  };
  const _0x37db92 = {
    keyword: _0x204453,
    type: _0x4c770,
    pgc: _0x1cd9c7,
    rows: searchRows
  };
  const _0x36faf3 = {
    headers: _0x4d9b55,
    params: _0x37db92
  };
  const _0x4e7548 = await axios_1.default.get("https://m.music.migu.cn/migu/remoting/scr_search_tag", _0x36faf3);
  return _0x4e7548.data;
}
function musicCanPlayFilter(_0x11f7a4) {
  return _0x11f7a4.mp3 || _0x11f7a4.listenUrl || _0x11f7a4.lisQq || _0x11f7a4.lisCr;
}
async function searchMusic(_0x112357, _0x5aa64e) {
  const _0x51a1d0 = await searchBase(_0x112357, _0x5aa64e, 2);
  const _0x2e786d = _0x51a1d0.musics.map(_0x5318d3 => ({
    id: _0x5318d3.id,
    artwork: _0x5318d3.cover,
    title: _0x5318d3.songName,
    artist: _0x5318d3.artist,
    album: _0x5318d3.albumName,
    url: musicCanPlayFilter(_0x5318d3),
    copyrightId: _0x5318d3.copyrightId,
    singerId: _0x5318d3.singerId
  }));
  return {
    isEnd: +_0x51a1d0.pageNo * searchRows >= _0x51a1d0.pgt,
    data: _0x2e786d
  };
}
async function searchAlbum(_0x26e848, _0x5e72de) {
  const _0xeb9efd = await searchBase(_0x26e848, _0x5e72de, 4);
  const _0x12c39c = _0xeb9efd.albums.map(_0x445e7b => ({
    id: _0x445e7b.id,
    artwork: _0x445e7b.albumPicL,
    title: _0x445e7b.title,
    date: _0x445e7b.publishDate,
    artist: (_0x445e7b.singer || []).map(_0x26d9e7 => _0x26d9e7.name).join(","),
    singer: _0x445e7b.singer,
    fullSongTotal: _0x445e7b.fullSongTotal
  }));
  return {
    isEnd: +_0xeb9efd.pageNo * searchRows >= _0xeb9efd.pgt,
    data: _0x12c39c
  };
}
async function searchArtist(_0x411ab4, _0xf55bcf) {
  const _0x20a3f5 = await searchBase(_0x411ab4, _0xf55bcf, 1);
  const _0x1102bb = _0x20a3f5.artists.map(_0x123fee => ({
    name: _0x123fee.title,
    id: _0x123fee.id,
    avatar: _0x123fee.artistPicL,
    worksNum: _0x123fee.songNum
  }));
  return {
    isEnd: +_0x20a3f5.pageNo * searchRows >= _0x20a3f5.pgt,
    data: _0x1102bb
  };
}
async function searchMusicSheet(_0x452ce0, _0x3e30aa) {
  const _0x18fce4 = await searchBase(_0x452ce0, _0x3e30aa, 6);
  const _0x3a93d7 = _0x18fce4.songLists.map(_0x5f4b3b => ({
    title: _0x5f4b3b.name,
    id: _0x5f4b3b.id,
    artist: _0x5f4b3b.userName,
    artwork: _0x5f4b3b.img,
    description: _0x5f4b3b.intro,
    worksNum: _0x5f4b3b.musicNum,
    playCount: _0x5f4b3b.playNum
  }));
  return {
    isEnd: +_0x18fce4.pageNo * searchRows >= _0x18fce4.pgt,
    data: _0x3a93d7
  };
}
async function searchLyric(_0x5a88e3, _0x4144a9) {
  const _0x5f09d4 = await searchBase(_0x5a88e3, _0x4144a9, 7);
  const _0x404939 = _0x5f09d4.songs.map(_0x9a4f3 => ({
    title: _0x9a4f3.title,
    id: _0x9a4f3.id,
    artist: _0x9a4f3.artist,
    artwork: _0x9a4f3.cover,
    lrc: _0x9a4f3.lyrics,
    album: _0x9a4f3.albumName,
    copyrightId: _0x9a4f3.copyrightId
  }));
  return {
    isEnd: +_0x5f09d4.pageNo * searchRows >= _0x5f09d4.pgt,
    data: _0x404939
  };
}
async function getArtistAlbumWorks(_0x571b16, _0x9a3c2e) {
  const _0x540131 = {
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    connection: "keep-alive",
    host: "music.migu.cn",
    referer: "http://music.migu.cn",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    "Cache-Control": "max-age=0"
  };
  const _0x31eae3 = {
    headers: _0x540131
  };
  const _0x34cd69 = (await axios_1.default.get("https://music.migu.cn/v3/music/artist/" + _0x571b16.id + "/album?page=" + _0x9a3c2e, _0x31eae3)).data;
  const _0x43ce36 = (0, cheerio_1.load)(_0x34cd69);
  const _0x23f8dc = _0x43ce36("div.artist-album-list").find("li");
  const _0x552e39 = [];
  for (let _0x55f52e = 0; _0x55f52e < _0x23f8dc.length; ++_0x55f52e) {
    const _0x4853c6 = _0x43ce36(_0x23f8dc[_0x55f52e]);
    const _0x51defc = _0x4853c6.find(".thumb-img").attr("data-original");
    _0x552e39.push({
      id: _0x4853c6.find(".album-play").attr("data-id"),
      title: _0x4853c6.find(".album-name").text(),
      artwork: _0x51defc.startsWith("//") ? "https:" + _0x51defc : _0x51defc,
      date: "",
      artist: _0x571b16.name
    });
  }
  return {
    isEnd: _0x43ce36(".pagination-next").hasClass("disabled"),
    data: _0x552e39
  };
}
async function getArtistWorks(_0x5daccf, _0x370cf5, _0x6e98b1) {
  if (_0x6e98b1 === "music") {
    {
      const _0x4f8972 = {
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        Connection: "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Host: "m.music.migu.cn",
        Referer: "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5123&j=l&id=" + _0x5daccf.id,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
        "X-Requested-With": "XMLHttpRequest"
      };
      const _0x19527a = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_artist_song_list_tag", {
        headers: _0x4f8972,
        params: {
          artistId: _0x5daccf.id,
          pageSize: 20,
          pageNo: _0x370cf5 - 1
        }
      })).data || {};
      return {
        data: _0x19527a.result.results.map(_0x371b45 => ({
          id: _0x371b45.songId,
          artwork: _0x371b45.picL,
          title: _0x371b45.songName,
          artist: (_0x371b45.singerName || []).join(", "),
          album: _0x371b45.albumName,
          url: musicCanPlayFilter(_0x371b45),
          rawLrc: _0x371b45.lyricLrc,
          copyrightId: _0x371b45.copyrightId,
          singerId: _0x371b45.singerId
        }))
      };
    }
  } else {
    if (_0x6e98b1 === "album") {
      return getArtistAlbumWorks(_0x5daccf, _0x370cf5);
    }
  }
}
async function getLyric(_0x312872) {
  const _0x206d26 = {
    Accept: "application/json, text/javascript, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Host: "m.music.migu.cn",
    Referer: "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5200&j=l&id=" + _0x312872.copyrightId,
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
    "X-Requested-With": "XMLHttpRequest"
  };
  const _0x115beb = {
    cpid: _0x312872.copyrightId
  };
  const _0x53d402 = {
    headers: _0x206d26,
    params: _0x115beb
  };
  const _0x424d4e = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_detail_tag", _0x53d402)).data;
  const _0x46be47 = {
    rawLrc: _0x424d4e.data.lyricLrc
  };
  return _0x46be47;
}
async function getMusicSheetInfo(_0x1571fa, _0x213d05) {
  const _0x305817 = {
    palylistId: _0x1571fa.id,
    pageNo: _0x213d05,
    pageSize: 30
  };
  const _0x41c86c = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/songsInfo", {
    params: _0x305817,
    headers: {
      Host: "m.music.migu.cn",
      referer: "https://m.music.migu.cn/v4/music/playlist/",
      By: "7242bd16f68cd9b39c54a8e61537009f",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0"
    }
  })).data.data;
  if (!_0x41c86c) {
    {
      const _0x9d7024 = {
        isEnd: true,
        musicList: []
      };
      return _0x9d7024;
    }
  }
  const _0x346805 = _0x41c86c.total < 30;
  return {
    isEnd: _0x346805,
    musicList: _0x41c86c.items.filter(_0x5b7a4f => {
      var _0x3a69fc;
      return ((_0x3a69fc = _0x5b7a4f === null || _0x5b7a4f === undefined ? undefined : _0x5b7a4f.fullSong) === null || _0x3a69fc === undefined ? undefined : _0x3a69fc.vipFlag) === 0;
    }).map(_0x172c07 => {
      var _0x551170;
      var _0x9c8b96;
      var _0x12dfe2;
      var _0x345115;
      var _0x218fb7;
      var _0x152dcd;
      var _0x229e18;
      var _0x5f113e;
      var _0x485d02;
      var _0x2cb9f8;
      return {
        id: _0x172c07.id,
        artwork: ((_0x551170 = _0x172c07.mediumPic) === null || _0x551170 === undefined ? undefined : _0x551170.startsWith("//")) ? "http:" + _0x172c07.mediumPic : _0x172c07.mediumPic,
        title: _0x172c07.name,
        artist: (_0x152dcd = (_0x218fb7 = (_0x345115 = (_0x12dfe2 = (_0x9c8b96 = _0x172c07.singers) === null || _0x9c8b96 === undefined ? undefined : _0x9c8b96.map) === null || _0x12dfe2 === undefined ? undefined : _0x12dfe2.call(_0x9c8b96, _0x460db8 => _0x460db8.name)) === null || _0x345115 === undefined ? undefined : _0x345115.join) === null || _0x218fb7 === undefined ? undefined : _0x218fb7.call(_0x345115, ",")) !== null && _0x152dcd !== undefined ? _0x152dcd : "",
        album: (_0x5f113e = (_0x229e18 = _0x172c07.album) === null || _0x229e18 === undefined ? undefined : _0x229e18.albumName) !== null && _0x5f113e !== undefined ? _0x5f113e : "",
        copyrightId: _0x172c07.copyrightId,
        singerId: (_0x2cb9f8 = (_0x485d02 = _0x172c07.singers) === null || _0x485d02 === undefined ? undefined : _0x485d02[0]) === null || _0x2cb9f8 === undefined ? undefined : _0x2cb9f8.id
      };
    })
  };
}
async function importMusicSheet(_0x928503) {
  var _0x5c9757;
  var _0x1e95b0;
  var _0x31c11d;
  var _0x5167f8;
  let _0x4a797b;
  if (!_0x4a797b) {
    {
      _0x4a797b = (_0x928503.match(/https?:\/\/music\.migu\.cn\/v3\/(?:my|music)\/playlist\/([0-9]+)/) || [])[1];
    }
  }
  !_0x4a797b && (_0x4a797b = (_0x928503.match(/https?:\/\/h5\.nf\.migu\.cn\/app\/v4\/p\/share\/playlist\/index.html\?.*id=([0-9]+)/) || [])[1]);
  if (!_0x4a797b) {
    {
      _0x4a797b = (_0x5c9757 = _0x928503.match(/^\s*(\d+)\s*$/)) === null || _0x5c9757 === undefined ? undefined : _0x5c9757[1];
    }
  }
  if (!_0x4a797b) {
    {
      const _0x479315 = (_0x1e95b0 = _0x928503.match(/(https?:\/\/c\.migu\.cn\/[\S]+)\?/)) === null || _0x1e95b0 === undefined ? undefined : _0x1e95b0[1];
      if (_0x479315) {
        {
          const _0x507ce4 = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            host: "c.migu.cn"
          };
          const _0x24f8d8 = (await axios_1.default.get(_0x479315, {
            headers: _0x507ce4,
            validateStatus(_0xd177cd) {
              return _0xd177cd >= 200 && _0xd177cd < 300 || _0xd177cd === 403;
            }
          })).request;
          const _0x3b647e = (_0x31c11d = _0x24f8d8 === null || _0x24f8d8 === undefined ? undefined : _0x24f8d8.path) !== null && _0x31c11d !== undefined ? _0x31c11d : _0x24f8d8 === null || _0x24f8d8 === undefined ? undefined : _0x24f8d8.responseURL;
          _0x3b647e && (_0x4a797b = (_0x5167f8 = _0x3b647e.match(/id=(\d+)/)) === null || _0x5167f8 === undefined ? undefined : _0x5167f8[1]);
        }
      }
    }
  }
  if (!_0x4a797b) {
    return;
  }
  const _0xd53522 = {
    host: "m.music.migu.cn",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
    "X-Requested-With": "XMLHttpRequest",
    Referer: "https://m.music.migu.cn"
  };
  const _0x4b6d27 = {
    headers: _0xd53522
  };
  const _0x49e814 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/query_playlist_by_id_tag?onLine=1&queryChannel=0&createUserId=migu&contentCountMin=5&playListId=" + _0x4a797b, _0x4b6d27)).data;
  const _0x480d5d = parseInt(_0x49e814.rsp.playList[0].contentCount);
  const _0x2fff02 = [];
  let _0x5400c4 = 1;
  while ((_0x5400c4 - 1) * 20 < _0x480d5d) {
    {
      const _0x3f79e0 = (await axios_1.default.get("https://music.migu.cn/v3/music/playlist/" + _0x4a797b + "?page=" + _0x5400c4)).data;
      const _0x569010 = (0, cheerio_1.load)(_0x3f79e0);
      _0x569010(".row.J_CopySong").each((_0x390e5f, _0x468ffa) => {
        _0x2fff02.push(_0x569010(_0x468ffa).attr("data-cid"));
      });
      _0x5400c4 += 1;
    }
  }
  if (_0x2fff02.length === 0) {
    return;
  }
  const _0x39207e = {
    referer: "http://m.music.migu.cn/v3"
  };
  const _0x22c288 = (await (0, axios_1.default)({
    url: "https://music.migu.cn/v3/api/music/audioPlayer/songs?type=1&copyrightId=" + _0x2fff02.join(","),
    headers: _0x39207e,
    xsrfCookieName: "XSRF-TOKEN",
    withCredentials: true
  })).data;
  return _0x22c288.items.filter(_0x623d18 => _0x623d18.vipFlag === 0).map(_0x2fba2e => {
    {
      var _0x39166b;
      var _0x5bb06a;
      var _0x223cf4;
      var _0x3c87f2;
      var _0x3771cf;
      var _0xf084cc;
      return {
        id: _0x2fba2e.songId,
        artwork: _0x2fba2e.cover,
        title: _0x2fba2e.songName,
        artist: (_0x5bb06a = (_0x39166b = _0x2fba2e.singers) === null || _0x39166b === undefined ? undefined : _0x39166b.map(_0x3f17c2 => _0x3f17c2.artistName)) === null || _0x5bb06a === undefined ? undefined : _0x5bb06a.join(", "),
        album: (_0x3c87f2 = (_0x223cf4 = _0x2fba2e.albums) === null || _0x223cf4 === undefined ? undefined : _0x223cf4[0]) === null || _0x3c87f2 === undefined ? undefined : _0x3c87f2.albumName,
        copyrightId: _0x2fba2e.copyrightId,
        singerId: (_0xf084cc = (_0x3771cf = _0x2fba2e.singers) === null || _0x3771cf === undefined ? undefined : _0x3771cf[0]) === null || _0xf084cc === undefined ? undefined : _0xf084cc.artistId
      };
    }
  });
}
async function getTopLists() {
  const _0x6e2e5 = {
    title: "咪咕尖叫榜",
    data: [{
      id: "jianjiao_newsong",
      title: "尖叫新歌榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/02/36/20020512065402_360x360_2997.png"
    }, {
      id: "jianjiao_hotsong",
      title: "尖叫热歌榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/04/99/200408163640868_360x360_6587.png"
    }, {
      id: "jianjiao_original",
      title: "尖叫原创榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/04/99/200408163702795_360x360_1614.png"
    }]
  };
  const _0x5d8a47 = {
    title: "咪咕特色榜",
    data: [{
      id: "movies",
      title: "影视榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/05/136/200515161848938_360x360_673.png"
    }, {
      id: "mainland",
      title: "内地榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095104122_327x327_4971.png"
    }, {
      id: "hktw",
      title: "港台榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095125191_327x327_2382.png"
    }, {
      id: "eur_usa",
      title: "欧美榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095229556_327x327_1383.png"
    }, {
      id: "jpn_kor",
      title: "日韩榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095259569_327x327_4628.png"
    }, {
      id: "coloring",
      title: "彩铃榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095356693_327x327_7955.png"
    }, {
      id: "ktv",
      title: "KTV榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095414420_327x327_4992.png"
    }, {
      id: "network",
      title: "网络榜",
      coverImg: "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095442606_327x327_1298.png"
    }]
  };
  return [_0x6e2e5, _0x5d8a47];
}
const UA = "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68";
const By = CryptoJS.MD5(UA).toString();
async function getTopListDetail(_0x852db0) {
  const _0x2e3594 = {
    pathName: _0x852db0.id,
    pageNum: 1,
    pageSize: 100
  };
  const _0x13231f = {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
    Host: "m.music.migu.cn",
    referer: "https://m.music.migu.cn/v4/music/top/" + _0x852db0.id,
    "User-Agent": UA,
    By: By
  };
  const _0xf4a3d0 = {
    params: _0x2e3594,
    headers: _0x13231f
  };
  const _0x2dfdd5 = await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/billboard/home", _0xf4a3d0);
  return Object.assign(Object.assign({}, _0x852db0), {
    musicList: _0x2dfdd5.data.data.songs.items.map(_0x3071a4 => {
      {
        var _0x65eb8c;
        var _0x351147;
        var _0x125790;
        var _0x4e6839;
        var _0x88d4b2;
        var _0x4370d9;
        return {
          id: _0x3071a4.id,
          artwork: ((_0x65eb8c = _0x3071a4.mediumPic) === null || _0x65eb8c === undefined ? undefined : _0x65eb8c.startsWith("//")) ? "https:" + _0x3071a4.mediumPic : _0x3071a4.mediumPic,
          title: _0x3071a4.name,
          artist: (_0x125790 = (_0x351147 = _0x3071a4.singers) === null || _0x351147 === undefined ? undefined : _0x351147.map(_0x5a6b27 => _0x5a6b27.name)) === null || _0x125790 === undefined ? undefined : _0x125790.join(", "),
          album: (_0x4e6839 = _0x3071a4.album) === null || _0x4e6839 === undefined ? undefined : _0x4e6839.albumName,
          copyrightId: _0x3071a4.copyrightId,
          singerId: (_0x4370d9 = (_0x88d4b2 = _0x3071a4.singers) === null || _0x88d4b2 === undefined ? undefined : _0x88d4b2[0]) === null || _0x4370d9 === undefined ? undefined : _0x4370d9.id
        };
      }
    })
  });
}
async function getRecommendSheetTags() {
  const _0x959d63 = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/allTag", {
    headers: {
      host: "m.music.migu.cn",
      referer: "https://m.music.migu.cn/v4/music/playlist",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0",
      By: "7242bd16f68cd9b39c54a8e61537009f"
    }
  })).data.data.tags;
  const _0x47d1b3 = _0x959d63.map(_0xe191ba => {
    return {
      title: _0xe191ba.tagName,
      data: _0xe191ba.tags.map(_0x39291a => ({
        id: _0x39291a.tagId,
        title: _0x39291a.tagName
      }))
    };
  });
  const _0x1dd941 = {
    title: "小清新",
    id: "1000587673"
  };
  const _0x9317b9 = {
    title: "电视剧",
    id: "1001076078"
  };
  const _0xfbc8fc = {
    title: "民谣",
    id: "1000001775"
  };
  const _0x2bcf3b = {
    title: "旅行",
    id: "1000001749"
  };
  const _0x68e402 = {
    title: "思念",
    id: "1000001703"
  };
  const _0xaefbcf = {
    pinned: [_0x1dd941, _0x9317b9, _0xfbc8fc, _0x2bcf3b, _0x68e402],
    data: _0x47d1b3
  };
  return _0xaefbcf;
}
async function getRecommendSheetsByTag(_0x4c44a5, _0x2f7445) {
  const _0x120d58 = 20;
  const _0x4b5ee3 = {
    columnId: 15127272,
    tagId: _0x4c44a5.id,
    pageNum: _0x2f7445,
    pageSize: _0x120d58
  };
  const _0x4f1390 = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/list", {
    params: _0x4b5ee3,
    headers: {
      "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0",
      host: "m.music.migu.cn",
      By: "7242bd16f68cd9b39c54a8e61537009f",
      Referer: "https://m.music.migu.cn/v4/music/playlist"
    }
  })).data.data;
  const _0x8328e2 = _0x2f7445 * _0x120d58 > _0x4f1390.total;
  const _0x321c64 = _0x4f1390.items.map(_0x18d128 => ({
    id: _0x18d128.playListId,
    artist: _0x18d128.createUserName,
    title: _0x18d128.playListName,
    artwork: _0x18d128.image.startsWith("//") ? "http:" + _0x18d128.image : _0x18d128.image,
    playCount: _0x18d128.playCount,
    createUserId: _0x18d128.createUserId
  }));
  const _0x336a3d = {
    isEnd: _0x8328e2,
    data: _0x321c64
  };
  return _0x336a3d;
}
async function getMediaSourceByMTM(_0x2a60f1, _0x35ccb9) {
  if (_0x35ccb9 === "standard" && _0x2a60f1.url) {
    {
      const _0x576c92 = {
        url: _0x2a60f1.url
      };
      return _0x576c92;
    }
  } else {
    if (_0x35ccb9 === "standard") {
      const _0x4bbccf = {
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        Connection: "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Host: "m.music.migu.cn",
        Referer: "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5200&j=l&id=" + _0x2a60f1.copyrightId,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
        "X-Requested-With": "XMLHttpRequest"
      };
      const _0x4fd653 = {
        cpid: _0x2a60f1.copyrightId
      };
      const _0x9f6481 = {
        headers: _0x4bbccf,
        params: _0x4fd653
      };
      const _0x190bd3 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_detail_tag", _0x9f6481)).data.data;
      const _0x2d6b72 = {
        artwork: _0x2a60f1.artwork || _0x190bd3.picL,
        url: _0x190bd3.listenUrl || _0x190bd3.listenQq || _0x190bd3.lisCr
      };
      return _0x2d6b72;
    }
  }
}
const qualityLevels = {
  low: "standard",
  standard: "exhigh",
  high: "lossless",
  super: "lossless"
};
async function getMediaSource(_0x19caa4, _0x160c8d) {
  const _0x316b3c = (await axios_1.default.get("https://music.haitangw.cc/musicapi1/mg.php?id=" + _0x19caa4.id + "&quality=" + qualityLevels[_0x160c8d])).data;
  const _0x226498 = {
    url: _0x316b3c.data.music_url
  };
  return _0x226498;
}
const _0x3db322 = {
  importMusicSheet: ["咪咕APP：自建歌单-分享-复制链接，直接粘贴即可", "H5/PC端：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "导入时间和歌单大小有关，请耐心等待"]
};
module.exports = {
  platform: "元力MG",
  author: "微信公众号:元力菌",
  version: "1.2.0",
  hints: _0x3db322,
  primaryKey: ["id", "copyrightId"],
  cacheControl: "cache",
  srcUrl: "http://music.haitangw.net/cqapi/xiaomi.js",
  supportedSearchType: ["music", "album", "sheet", "artist", "lyric"],
  getMediaSource: getMediaSource,
  async search(_0x5885bd, _0x4d0f92, _0x49b1bc) {
    if (_0x49b1bc === "music") {
      return await searchMusic(_0x5885bd, _0x4d0f92);
    }
    if (_0x49b1bc === "album") {
      return await searchAlbum(_0x5885bd, _0x4d0f92);
    }
    if (_0x49b1bc === "artist") {
      return await searchArtist(_0x5885bd, _0x4d0f92);
    }
    if (_0x49b1bc === "sheet") {
      return await searchMusicSheet(_0x5885bd, _0x4d0f92);
    }
    if (_0x49b1bc === "lyric") {
      return await searchLyric(_0x5885bd, _0x4d0f92);
    }
  },
  async getAlbumInfo(_0x92c630) {
    const _0x431ce2 = {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Host: "m.music.migu.cn",
      Referer: "https://m.music.migu.cn/migu/l/?record=record&id=" + _0x92c630.id,
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
      "X-Requested-With": "XMLHttpRequest"
    };
    const _0x12f1a8 = {
      albumId: _0x92c630.id,
      pageSize: 30
    };
    const _0x2dff9c = {
      headers: _0x431ce2,
      params: _0x12f1a8
    };
    const _0x22633d = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_album_song_list_tag", _0x2dff9c)).data || {};
    const _0x499e3c = {
      albumId: _0x92c630.id
    };
    const _0x7fe9f3 = {
      headers: _0x431ce2,
      params: _0x499e3c
    };
    const _0x33144d = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_album_detail_tag", _0x7fe9f3)).data || {};
    const _0x4938a9 = {
      description: _0x33144d.albumIntro
    };
    return {
      albumItem: _0x4938a9,
      musicList: _0x22633d.result.results.map(_0x1f5c09 => ({
        id: _0x1f5c09.songId,
        artwork: _0x1f5c09.picL,
        title: _0x1f5c09.songName,
        artist: (_0x1f5c09.singerName || []).join(", "),
        album: _0x92c630.title,
        url: musicCanPlayFilter(_0x1f5c09),
        rawLrc: _0x1f5c09.lyricLrc,
        copyrightId: _0x1f5c09.copyrightId,
        singerId: _0x1f5c09.singerId
      }))
    };
  },
  getArtistWorks: getArtistWorks,
  getLyric: getLyric,
  importMusicSheet: importMusicSheet,
  getTopLists: getTopLists,
  getTopListDetail: getTopListDetail,
  getRecommendSheetTags: getRecommendSheetTags,
  getRecommendSheetsByTag: getRecommendSheetsByTag,
  getMusicSheetInfo: getMusicSheetInfo
};