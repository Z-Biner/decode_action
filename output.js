//Sun Apr 26 2026 22:29:30 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const URL_CACHE = new Map();
function getCache(_0x303b88) {
  const _0x3a3546 = URL_CACHE.get(_0x303b88);
  if (!_0x3a3546) {
    return null;
  }
  if (Date.now() > _0x3a3546.expire) {
    URL_CACHE.delete(_0x303b88);
    return null;
  }
  return _0x3a3546.data;
}
function setCache(_0x1d76c2, _0x58e33b) {
  URL_CACHE.set(_0x1d76c2, {
    data: _0x58e33b,
    expire: Date.now() + CACHE_TTL
  });
}
const devLog = (..._0x1c8cfa) => {
  if (DEV_ENABLE) {
    console.log("[YNX-DEV]", ..._0x1c8cfa);
  }
};
const MUSIC_QUALITY = {
  tx: ["128k", "320k", "flac", "flac24bit", "master", "atmos_plus", "master"],
  wy: ["128k", "320k", "flac", "master", "hires", "master"],
  kw: ["128k", "320k", "flac", "flac24bit"],
  mg: ["128k", "320k", "flac", "flac24bit"],
  kg: ["128k"]
};
const MUSIC_SOURCE = Object.keys(MUSIC_QUALITY);
const {
  EVENT_NAMES,
  request,
  on,
  send,
  currentScriptInfo,
  utils
} = globalThis.lx;
const isKeyValid = !!YuNingXi && YuNingXi.trim() !== "";
const httpFetch = (_0x2ef68a, _0x545d69 = {}) => new Promise((_0x5bcda9, _0x3d4b99) => {
  const _0x1966fa = setTimeout(() => {
    _0x3d4b99(new Error("请求超时"));
  }, 10000);
  request(_0x2ef68a, _0x545d69, (_0x3b183b, _0x1ca630) => {
    clearTimeout(_0x1966fa);
    _0x3b183b ? _0x3d4b99(_0x3b183b) : _0x5bcda9(_0x1ca630);
  });
});
async function getFinalPlayUrl(_0x279642) {
  try {
    const _0x428afe = {
      "User-Agent": "Mozilla/5.0"
    };
    const _0x327c12 = {
      method: "HEAD",
      headers: _0x428afe
    };
    const _0x26ced6 = await httpFetch(_0x279642, _0x327c12);
    const _0x1aa9a7 = [200, 301, 302, 307, 308].includes(_0x26ced6.statusCode);
    if (!_0x1aa9a7) {
      return null;
    }
    return _0x26ced6.finalUrl || _0x26ced6.url || _0x279642;
  } catch (_0x1394d0) {
    return null;
  }
}
const handleGetMusicUrl = async (_0x2c56db, _0x516bf4, _0x549e41) => {
  try {
    await httpFetch("https://www.97abc.com/count.php?id=lx-yuningxi");
    devLog("统计请求成功");
  } catch (_0x13622b) {
    console.error("统计请求失败:", _0x13622b);
  }
  const _0x13b717 = _0x2c56db + "_" + (_0x516bf4.songmid || _0x516bf4.songId) + "_" + _0x549e41;
  const _0x53ae24 = getCache(_0x13b717);
  if (_0x53ae24) {
    devLog("[缓存命中]", _0x13b717);
    return _0x53ae24;
  }
  const _0x37d402 = {
    source: _0x2c56db,
    musicInfo: _0x516bf4,
    quality: _0x549e41
  };
  devLog("开始获取播放地址", _0x37d402);
  let _0x44f5fe = null;
  switch (_0x2c56db) {
    case "tx":
      {
        if (!_0x516bf4?.["songmid"]) {
          throw new Error("获取失败：缺少 songmid");
        }
        const _0x18eeef = _0x516bf4.songmid;
        const _0x3c13cc = {
          mid: _0x18eeef,
          quality: _0x549e41,
          isKeyValid: isKeyValid
        };
        devLog("开始解析QQ音乐", _0x3c13cc);
        if (isKeyValid) {
          const _0x1134fa = {
            "128k": "低品质",
            "320k": "HQ高品质",
            flac: "SQ无损",
            flac24bit: "臻品全景声",
            atmos: "臻品全景声",
            atmos_plus: "臻品全景声",
            master: "臻品母带"
          };
          const _0x113930 = _0x1134fa[_0x549e41] || "低品质";
          const _0x1f8c16 = "https://api-v2.yuafeng.cn/API/qqmusic.php?type=" + _0x113930 + "&mid=" + _0x18eeef + "&apikey=" + YuNingXi;
          try {
            const _0x190789 = {
              url: _0x1f8c16
            };
            devLog("调用QQ音乐密钥接口", _0x190789);
            const _0x2d386c = await httpFetch(_0x1f8c16);
            devLog("QQ音乐密钥接口响应", _0x2d386c.body);
            if (_0x2d386c.statusCode === 200 && _0x2d386c.body?.["code"] === 0 && _0x2d386c.body.data?.["music"]) {
              _0x44f5fe = _0x2d386c.body.data.music;
              break;
            }
          } catch (_0x136b84) {
            console.warn("QQ音乐密钥接口失败，降级到免费接口：", _0x136b84.message);
          }
        }
        const _0x4792c6 = "https://tang.api.s01s.cn/music_open_api.php?mid=" + _0x18eeef;
        const _0x574b6d = {
          url2: _0x4792c6
        };
        devLog("调用QQ音乐备用接口", _0x574b6d);
        const _0x488b84 = await httpFetch(_0x4792c6);
        devLog("QQ音乐备用接口响应", _0x488b84.body);
        if (!_0x488b84.body) {
          throw new Error("备用接口无数据");
        }
        const _0x210b22 = _0x488b84.body;
        const _0x26dd70 = (..._0x831e1a) => {
          for (const _0x187d1a of _0x831e1a) {
            const _0x34d363 = _0x210b22[_0x187d1a];
            if (_0x34d363 && _0x34d363.trim() !== "") {
              return _0x34d363;
            }
          }
          return null;
        };
        let _0x4a925f;
        switch (_0x549e41) {
          case "flac":
          case "flac24bit":
          case "master":
          case "atmos":
            _0x4a925f = _0x26dd70("song_play_url_pq", "song_play_url_sq", "song_play_url_hq", "song_play_url_standard", "song_play_url");
            break;
          case "320k":
            _0x4a925f = _0x26dd70("song_play_url_hq", "song_play_url_standard", "song_play_url");
            break;
          default:
            _0x4a925f = _0x26dd70("song_play_url_standard", "song_play_url", "song_play_url_fq");
            break;
        }
        if (_0x4a925f) {
          _0x44f5fe = _0x4a925f;
          break;
        }
        throw new Error("QQ音乐所有接口均无可用地址");
      }
    case "wy":
      {
        devLog("开始解析网易云音乐");
        const _0x112e28 = {
          "128k": "standard",
          "320k": "exhigh",
          flac: "lossless",
          flac24bit: "hires",
          hires: "hires",
          master: "jymaster"
        };
        const _0x120c0d = _0x516bf4?.["songmid"] || _0x516bf4.songId;
        if (!_0x120c0d) {
          throw new Error("网易云歌曲ID不存在");
        }
        const _0x413910 = _0x1ead8e => typeof _0x1ead8e === "string" && _0x1ead8e.trim() !== "";
        try {
          const _0x3259d6 = _0x112e28[_0x549e41] || "standard";
          const _0x3b1aba = "https://api.bugpk.com/api/163_music?ids=" + _0x120c0d + "&type=json&level=" + _0x3259d6;
          const _0x52c2e0 = {
            url: _0x3b1aba
          };
          devLog("调用网易云 bugpk 接口", _0x52c2e0);
          const _0x16a942 = await httpFetch(_0x3b1aba);
          devLog("网易云 bugpk 接口响应", _0x16a942.body);
          const _0x548c4a = _0x16a942.body?.["url"];
          if (_0x16a942.body?.["status"] == 200 && _0x413910(_0x548c4a)) {
            _0x44f5fe = _0x548c4a.trim();
            break;
          }
        } catch (_0x4c3bd4) {
          console.error("[YNX] 网易云 bugpk 请求失败:", _0x4c3bd4);
        }
        try {
          const _0x265abd = _0x112e28[_0x549e41] || "standard";
          const _0x3de024 = "https://music.xuanluoge.top/api.php?miss=getMusicUrl&id=" + _0x120c0d + "&level=" + _0x265abd;
          const _0x364f41 = {
            url: _0x3de024
          };
          devLog("调用网易云 xlg 接口", _0x364f41);
          const _0x5a8b05 = await httpFetch(_0x3de024);
          devLog("网易云 xlg 接口响应", _0x5a8b05.body);
          if (_0x5a8b05.body?.["message"] === "200") {
            const _0x1f501b = _0x5a8b05.body?.["data"]?.[0]?.["url"];
            if (_0x413910(_0x1f501b)) {
              _0x44f5fe = _0x1f501b.trim();
              break;
            }
          }
        } catch (_0x195d72) {
          console.error("[YNX] 网易云 xlg 请求失败:", _0x195d72);
        }
        try {
          const _0x3a9bdb = _0x112e28[_0x549e41] || "standard";
          const _0x5178d0 = "https://www.cunyuapi.top/163music_play?id=" + _0x120c0d + "&quality=" + _0x3a9bdb;
          const _0x5220d1 = {
            url: _0x5178d0
          };
          devLog("调用网易云 cy 接口", _0x5220d1);
          const _0x580dbc = await httpFetch(_0x5178d0);
          devLog("网易云 cy 接口响应", _0x580dbc.body);
          if (_0x580dbc.body?.["status"] == 200) {
            const _0x5245b2 = _0x580dbc.body?.["song_file_url"];
            if (_0x413910(_0x5245b2)) {
              _0x44f5fe = _0x5245b2.trim();
              break;
            }
          }
        } catch (_0x319363) {
          console.error("[YNX] 网易云 cy 请求失败:", _0x319363);
        }
        const _0x4094ae = {
          "128k": 128,
          "320k": 320,
          flac: 999,
          flac24bit: 32000,
          atmos: 32000,
          atmos_plus: 32000,
          master: 32000
        };
        const _0x355093 = _0x4094ae[_0x549e41] || 128;
        const _0x58b3eb = "https://metingapi.nanorocky.top/?server=netease&type=url&br=" + _0x355093 + "&id=" + _0x120c0d;
        const _0x52fd06 = await getFinalPlayUrl(_0x58b3eb);
        if (_0x52fd06) {
          _0x44f5fe = _0x52fd06;
          break;
        } else {
          console.warn("网易云接口失败，降级");
        }
        try {
          const _0x3875b = "https://oiapi.net/api/Music_163?id=" + _0x120c0d;
          const _0x1ac5c5 = {
            url2: _0x3875b
          };
          devLog("调用网易云 oiapi 接口", _0x1ac5c5);
          const _0x143b83 = await httpFetch(_0x3875b);
          devLog("网易云 oiapi 接口响应", _0x143b83.body);
          const _0x418e85 = _0x143b83.body?.["data"]?.[0]?.["url"];
          if (_0x143b83.body?.["code"] === 0 && _0x413910(_0x418e85)) {
            _0x44f5fe = _0x418e85.trim();
            break;
          }
        } catch (_0xbe95a3) {
          console.error("[YNX] 网易云备用2 oiapi 请求失败:", _0xbe95a3);
        }
        throw new Error("网易云所有接口均获取失败");
      }
    case "kw":
      {
        const _0x2eddaa = {
          musicInfo: _0x516bf4,
          quality: _0x549e41
        };
        devLog("开始解析酷我音乐", _0x2eddaa);
        const _0x727d71 = {
          "128k": "128kmp3",
          "320k": "320kmp3",
          flac: "2000kflac",
          flac24bit: "2000kflac"
        };
        const _0x32d019 = _0x516bf4.songmid;
        const _0x185c43 = _0x727d71[_0x549e41];
        const _0x126582 = (_0x43c3b2 = 4) => {
          if (_0x43c3b2 <= 0) {
            return 0;
          }
          const _0x4d9ee0 = Math.min(Math.pow(256, _0x43c3b2) - 1, Number.MAX_SAFE_INTEGER);
          return Math.floor(Math.random() * _0x4d9ee0);
        };
        const _0x468c08 = _0x126582(4);
        const _0x4fb7a6 = _0x126582(4);
        const _0x9975b5 = "https://nmobi.kuwo.cn/mobi.s?f=web&source=kwplayercar_ar_6.0.0.9_B_jiakong_vh.apk&type=convert_url_with_sign&rid=" + _0x32d019 + "&br=" + _0x185c43 + "&user=" + _0x468c08 + "&loginUid=" + _0x4fb7a6;
        const _0x2f5f68 = {
          url: _0x9975b5
        };
        devLog("调用酷我接口", _0x2f5f68);
        const _0x4b8619 = await httpFetch(_0x9975b5);
        devLog("酷我接口响应", _0x4b8619.body);
        if (_0x4b8619.body?.["code"] !== 200) {
          throw new Error(_0x4b8619.body?.["msg"] || "酷我音乐解析失败");
        }
        const _0x48d981 = _0x4b8619.body.data?.["url"];
        if (!_0x48d981) {
          throw new Error("未获取到有效播放链接");
        }
        _0x44f5fe = _0x48d981.replace(/\$/g, "&").replace(/\u0026/g, "&");
        break;
      }
    case "mg":
      {
        const _0x15b30a = {
          musicInfo: _0x516bf4,
          quality: _0x549e41
        };
        devLog("开始解析咪咕音乐", _0x15b30a);
        const _0x593fb9 = {
          "128k": "PQ",
          "320k": "HQ",
          flac: "SQ",
          flac24bit: "ZQ"
        };
        const _0x19bfb7 = _0x593fb9[_0x549e41] || "PQ";
        const _0x4ffb07 = "https://app.c.nf.migu.cn/MIGUM2.0/strategy/listen-url/v2.4?netType=01&resourceType=E&songId=" + (_0x516bf4.songmid || _0x516bf4.songId) + "&toneFlag=" + _0x19bfb7;
        const _0x5e43bd = {
          url: _0x4ffb07
        };
        devLog("调用咪咕接口", _0x5e43bd);
        const _0x14d426 = await new Promise((_0x3e68b4, _0x4ad473) => {
          const _0x237dcd = setTimeout(() => _0x4ad473("timeout"), 10000);
          const _0x34d283 = {
            channel: "014000D",
            token: "",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
          };
          const _0x3b8a89 = {
            method: "GET",
            headers: _0x34d283
          };
          request(_0x4ffb07, _0x3b8a89, (_0x36cc9e, _0x242096) => {
            clearTimeout(_0x237dcd);
            _0x36cc9e ? _0x4ad473(_0x36cc9e) : _0x3e68b4(_0x242096);
          });
        });
        let _0x4048d7 = _0x14d426.body;
        if (typeof _0x4048d7 === "string") {
          try {
            _0x4048d7 = JSON.parse(_0x4048d7);
          } catch (_0x55da9e) {
            throw new Error("响应格式错误，无法解析JSON");
          }
        }
        devLog("咪咕接口响应", _0x4048d7);
        if (_0x4048d7?.["code"] !== "000000") {
          throw new Error(_0x4048d7?.["info"] || "获取咪咕播放链接失败");
        }
        let _0x10c0a0 = _0x4048d7.data?.["url"] ?? _0x4048d7.playUrl ?? _0x4048d7.listenUrl;
        if (!_0x10c0a0) {
          throw new Error("未返回有效播放地址");
        }
        if (_0x10c0a0.startsWith("//")) {
          _0x10c0a0 = "https:" + _0x10c0a0;
        }
        _0x44f5fe = _0x10c0a0.replace(/\+/g, "%2B");
        break;
      }
    case "kg":
      {
        try {
          const _0x45524c = {
            musicInfo: _0x516bf4
          };
          devLog("开始解析kg音乐", _0x45524c);
          const _0x20bfa4 = "https://lengy.top/API/kgmusic.php?hash=" + _0x516bf4.hash.toLowerCase();
          const _0x1636eb = await httpFetch(_0x20bfa4);
          devLog("kg接口响应", _0x1636eb.body);
          const _0x4d797c = _0x1636eb.body?.["data"]?.["music"];
          if (_0x1636eb.body?.["code"] === 0 && _0x4d797c) {
            return _0x4d797c.trim();
          }
          throw new Error("未获取到有效播放链接");
        } catch (_0x4868e8) {
          devLog("kg解析出错", _0x4868e8);
          throw new Error(_0x4868e8.message || "解析酷狗音乐播放链接失败");
        }
      }
    default:
      throw new Error("不支持的音源：" + _0x2c56db);
  }
  if (_0x44f5fe) {
    setCache(_0x13b717, _0x44f5fe);
  }
  return _0x44f5fe;
};
const musicSources = {};
MUSIC_SOURCE.forEach(_0x4276f1 => {
  musicSources[_0x4276f1] = {
    name: _0x4276f1,
    type: "music",
    actions: ["musicUrl"],
    qualitys: MUSIC_QUALITY[_0x4276f1]
  };
});
on(EVENT_NAMES.request, ({
  action: _0x4b388c,
  source: _0x4c86f9,
  info: _0x23237c
}) => _0x4b388c === "musicUrl" ? (devLog("收到播放请求", {
  action: _0x4b388c,
  source: _0x4c86f9,
  info: _0x23237c
}), handleGetMusicUrl(_0x4c86f9, _0x23237c.musicInfo, _0x23237c.type)) : Promise.reject("不支持"));
const _0x2b467e = {
  status: true,
  openDevTools: DEV_ENABLE,
  sources: musicSources,
  maxLimit: 5,
  timeout: 10000,
  retry: 1
};
send(EVENT_NAMES.inited, _0x2b467e);
devLog("脚本已加载");
const scriptInfo = globalThis.lx.currentScriptInfo;
if (scriptInfo.name !== "lx-玉宁熙" || scriptInfo.author !== "ynx(2363768762)") {
  throw new Error("初始化失败！请检查音源信息");
}
function compareVersion(_0x58c6b8, _0x6e6445) {
  const _0xc87897 = {
    numeric: true
  };
  return _0x6e6445.replace("v", "").localeCompare(_0x58c6b8.replace("v", ""), undefined, _0xc87897);
}
const UPDATE_URL = "https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx-music/lx-玉宁熙.js";
const CHECK_URL = "https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx-music/lx.json";
const checkLatestVersion = async () => {
  try {
    devLog("开始检查更新");
    const {
      body: _0x1731b1
    } = await new Promise((_0x284f06, _0x720774) => globalThis.lx.request(CHECK_URL, {}, (_0x434b31, _0xdd9d18) => _0x434b31 ? _0x720774(_0x434b31) : _0x284f06(_0xdd9d18)));
    devLog("更新检查响应");
    const _0x18a6f8 = _0x1731b1?.["latest"];
    const _0x2fc25d = _0x1731b1?.["log"];
    const _0x13d4f9 = globalThis.lx.currentScriptInfo.version;
    if (_0x18a6f8 && compareVersion(_0x13d4f9, _0x18a6f8) > 0) {
      const _0x18b7a3 = {
        latest: _0x18a6f8,
        current: _0x13d4f9,
        uplog: _0x2fc25d
      };
      devLog("发现新版本", _0x18b7a3);
      const _0x8f7472 = {
        log: "发现新版本 " + _0x18a6f8 + "！\n更新内容 " + _0x2fc25d,
        updateUrl: UPDATE_URL
      };
      globalThis.lx.send(globalThis.lx.EVENT_NAMES.updateAlert, _0x8f7472);
    }
  } catch (_0x406253) {}
};
setTimeout(checkLatestVersion, 2000);