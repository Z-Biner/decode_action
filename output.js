//Sun Apr 26 2026 15:21:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  EVENT_NAMES,
  request,
  on,
  send
} = globalThis.lx;
const CURRENT_VERSION = "1.1.1";
const VERSION_CHECK_URL = "https://13413.kstore.vip/lxmusic/changqing.json";
const _0x24a914 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x1ce682 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0xab131b = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x484fb9 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x3f4fc4 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const qualitys = {
  kg: _0x24a914,
  tx: _0x1ce682,
  wy: _0xab131b,
  kw: _0x484fb9,
  mg: _0x3f4fc4
};
const apis = {
  kg: {
    musicUrl(_0x2653fe, _0x389c5d) {
      let _0x3af348 = "";
      const _0x225c86 = _0x2653fe.hash;
      console.log(_0x389c5d, _0x225c86);
      _0x3af348 = "https://music.haitangw.cc/kgqq/kg.php?type=mp3&id=" + _0x225c86 + "&level=" + _0x389c5d;
      return new Promise(_0x593e25 => {
        _0x593e25(_0x3af348);
      });
    }
  },
  tx: {
    musicUrl(_0x1862b4, _0x108387) {
      let _0x7dc62f = "";
      const _0x2bc62b = _0x1862b4.songmid;
      console.log(_0x108387, _0x2bc62b);
      _0x7dc62f = "http://175.27.166.236/kgqq/qq.php?type=mp3&id=" + _0x2bc62b + "&level=" + _0x108387;
      return new Promise(_0x20023d => {
        _0x20023d(_0x7dc62f);
      });
    }
  },
  wy: {
    musicUrl(_0x238573, _0x1a94dd) {
      let _0x3caf49 = "";
      const _0x81a66b = _0x238573.songmid;
      console.log(_0x1a94dd, _0x81a66b);
      _0x3caf49 = "http://175.27.166.236/wy/wy.php?type=mp3&id=" + _0x81a66b + "&level=" + _0x1a94dd;
      return new Promise(_0x449d1e => {
        _0x449d1e(_0x3caf49);
      });
    }
  },
  kw: {
    musicUrl(_0x1ab000, _0x235e0d) {
      let _0x2175d7 = "";
      const _0x2bd5ee = _0x1ab000.songmid;
      console.log(_0x235e0d, _0x2bd5ee);
      _0x2175d7 = "https://musicapi.haitangw.net/music/kw.php?type=mp3&id=" + _0x2bd5ee + "&level=" + _0x235e0d;
      return new Promise(_0x4acf83 => {
        _0x4acf83(_0x2175d7);
      });
    }
  },
  mg: {
    musicUrl(_0xdb0c88, _0x9e597a) {
      let _0x30ccc2 = "";
      const _0x59fa54 = _0xdb0c88.songmid;
      console.log(_0x9e597a, _0x59fa54);
      _0x30ccc2 = "https://music.haitangw.cc/musicapi/mg.php?type=mp3&id=" + _0x59fa54 + "&level=" + _0x9e597a;
      return new Promise(_0x41e9d1 => {
        {
          _0x41e9d1(_0x30ccc2);
        }
      });
    }
  }
};
const compareVersions = (_0x29b382, _0x3b3095) => {
  const _0x72425c = _0x29b382.split(".").map(Number);
  const _0x3882bc = _0x3b3095.split(".").map(Number);
  for (let _0x468c2e = 0; _0x468c2e < Math.max(_0x72425c.length, _0x3882bc.length); _0x468c2e++) {
    {
      const _0x17ab13 = _0x72425c[_0x468c2e] || 0;
      const _0x25e1c2 = _0x3882bc[_0x468c2e] || 0;
      if (_0x17ab13 > _0x25e1c2) {
        return 1;
      }
      if (_0x17ab13 < _0x25e1c2) {
        return -1;
      }
    }
  }
  return 0;
};
const checkUpdate = async () => {
  return new Promise((_0x27f733, _0x2bcc7b) => {
    request(VERSION_CHECK_URL, {
      method: "GET",
      timeout: 3000
    }, (_0x58ff86, _0x32418d) => {
      if (_0x58ff86 || _0x32418d.statusCode !== 200) {
        {
          console.log("检查更新失败:", _0x58ff86 || _0x32418d.statusMessage);
          _0x27f733(null);
          return;
        }
      }
      try {
        const _0xe24dcc = _0x32418d.body;
        if (compareVersions(CURRENT_VERSION, _0xe24dcc.version) < 0) {
          {
            const _0x17126a = {
              version: _0xe24dcc.version,
              updateUrl: _0xe24dcc.updateUrl,
              description: _0xe24dcc.description || ""
            };
            _0x27f733(_0x17126a);
          }
        } else {
          _0x27f733(null);
        }
      } catch (_0x5cb253) {
        console.log("解析版本信息失败:", _0x5cb253);
        _0x27f733(null);
      }
    });
  });
};
on(EVENT_NAMES.request, ({
  source: _0x20a09f,
  action: _0x1b175f,
  info: _0x2d41df
}) => {
  switch (_0x1b175f) {
    case "musicUrl":
      console.log(apis[_0x20a09f].musicUrl(_0x2d41df.musicInfo, qualitys[_0x20a09f][_0x2d41df.type]), _0x20a09f);
      return apis[_0x20a09f].musicUrl(_0x2d41df.musicInfo, qualitys[_0x20a09f][_0x2d41df.type]);
  }
});
checkUpdate().then(_0x401989 => {
  if (_0x401989) {
    const _0x3b5af7 = "发现新版本 v" + _0x401989.version + "\n" + (_0x401989.description ? "更新内容: " + _0x401989.description + "\n" : "") + "请更新后使用";
    const _0x30cbe9 = {
      log: _0x3b5af7,
      updateUrl: _0x401989.updateUrl
    };
    send(EVENT_NAMES.updateAlert, _0x30cbe9);
    console.log("发现新版本,需要更新,脚本将不会初始化:", _0x401989);
    return;
  } else {
    {
      console.log("当前已是最新版本,正常初始化");
      send(EVENT_NAMES.inited, {
        openDevTools: false,
        sources: {
          kg: {
            name: "kg音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          },
          tx: {
            name: "tx音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          },
          wy: {
            name: "wy音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          },
          kw: {
            name: "kw音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          },
          mg: {
            name: "mg音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          }
        }
      });
    }
  }
}).catch(_0x560bbc => {
  console.log("检查更新出错,正常初始化:", _0x560bbc);
  send(EVENT_NAMES.inited, {
    openDevTools: false,
    sources: {
      kg: {
        name: "kg音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      tx: {
        name: "tx音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      wy: {
        name: "wy音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      kw: {
        name: "kw音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      mg: {
        name: "mg音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      }
    }
  });
});