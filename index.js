import city from "./config/address/city.json";
import county from "./config/address/county.json";
import province from "./config/address/province.json";
import dayjs from 'dayjs';
export const imitatejs = () => {
  //生成随机中文名称
  function fullName() {
    let firstArr = [
      "赵",
      "钱",
      "孙",
      "李",
      "周",
      "吴",
      "郑",
      "王",
      "冯",
      "陈",
      "褚",
      "卫",
      "蒋",
      "沈",
      "韩",
      "杨",
      "朱",
      "秦",
      "尤",
      "许",
      "何",
      "吕",
      "施",
      "张",
      "孔",
      "曹",
      "严",
      "华",
      "金",
      "魏",
      "陶",
      "姜",
      "戚",
      "谢",
      "邹",
      "喻",
      "柏",
      "水",
      "窦",
      "章",
      "云",
      "苏",
      "潘",
      "葛",
      "奚",
      "范",
      "彭",
      "郎",
      "鲁",
      "韦",
      "昌",
      "马",
      "苗",
      "凤",
      "花",
      "方",
      "俞",
      "任",
      "袁",
      "柳",
      "酆",
      "鲍",
      "史",
      "唐",
      "费",
      "廉",
      "岑",
      "薛",
      "雷",
      "贺",
      "倪",
      "汤",
      "滕",
      "殷",
      "罗",
      "毕",
      "郝",
      "邬",
      "安",
      "常",
      "乐",
      "于",
      "时",
      "傅",
      "皮",
      "卞",
      "齐",
      "康",
      "伍",
      "余",
      "元",
      "卜",
      "顾",
      "孟",
      "平",
      "黄",
      "和",
      "穆",
      "萧",
      "尹",
    ];
    let secondName = [
      "琦珍",
      "琦巧",
      "琦玮",
      "琨瑶",
      "琨瑜",
      "琪华",
      "琳宇",
      "琳琼",
      "琴心",
      "琴音",
      "琴轩",
      "琴韵",
      "琼华",
      "琼思",
      "琼音",
      "刚",
      "琳",
      "小刚",
      "云",
      "雨",
      "风",
      "晓红",
      "国兴",
      "山",
      "雨萱",
      "思涵",
      "诗雅",
      "晨阳",
      "欣怡",
      "梓涵",
      "语嫣",
      "婉清",
      "雪萌",
      "佳琪",
      "若菲",
      "心怡",
      "乐荷",
      "思萌",
      "雨琪",
      "晓萱",
      "婉儿",
      "雅静",
      "欣宇",
      "语燕",
      "宇轩",
      "博雅",
      "晨曦",
      "欣怡",
      "梓轩",
      "思宇",
      "诗雨",
      "婉清",
      "梦婷",
      "佳雨",
      "若彤",
      "乐彤",
    ];
    return (
      firstArr[Math.round(Math.random() * (firstArr.length - 1))] +
      secondName[Math.round(Math.random() * (secondName.length - 1))]
    );
  }
  //生成随机字符
  /**
   *
   * @param {*} length 字符长度
   * @returns 随机字符
   */
  function randomStr(length = 36) {
    return Math.random().toString(length).slice(2);
  }
  //生成随机整数
  /**
   *
   * @param {*} max 数值上限
   * @returns 随机整数
   */
  function randomIntNum(max) {
    return Math.round(Math.random() * max || 10000);
  }
  //生成随机身份证号码
  function idCard() {
    let coefficientArray = [
      "7",
      "9",
      "10",
      "5",
      "8",
      "4",
      "2",
      "1",
      "6",
      "3",
      "7",
      "9",
      "10",
      "5",
      "8",
      "4",
      "2",
    ]; // 加权因子
    let lastNumberArray = [
      "1",
      "0",
      "X",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ]; // 校验码
    let address = "420101"; // 住址
    let birthday = "19810101"; // 生日
    let s =
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    for (const i of array) {
      total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11)];
    return address + birthday + s + lastNumber;
  }
  //生成随机电话号码
  function phone() {
    var prefixArray = new Array(
      "130",
      "131",
      "132",
      "133",
      "135",
      "137",
      "138",
      "170",
      "187",
      "189"
    );
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
      prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
  }
  //生成随机地址
  /**
   * 
   * @param {*} format 地址格式 分别是p(省)、C(市)、c(区县)、s(街道)、v(小区、村落)、d(详细住址，几栋几单元)
   * @returns 
   */
  function address(format = "") {
    const jdArr = [
      "朝阳路",
      "人民大道",
      "幸福路",
      "建设街",
      "时代大道",
      "环城南路",
      "解放大道",
      "光明路",
      "天宇路",
      "金银街",
      "长安街",
      "兴华路",
      "繁荣路",
      "华贵路",
      "文明街",
      "和谐路",
      "安宁路",
      "友谊大道",
      "希望路",
      "快乐街",
      "平安路",
      "幸福大街",
      "成功路",
      "康乐街",
      "吉祥路",
      "鸿运大道",
      "春华路",
      "夏荷街",
      "秋实路",
      "冬雪街",
      "新年大街",
      "红旗路",
      "绿林路",
      "黄山路",
      "赤水路",
      "长春路",
      "百花街",
      "万寿路",
      "朝阳大街",
      "天山大道",
      "珠江路",
      "黄河大道",
      "中山大道",
      "黄浦江路",
      "北京东路",
      "上海路",
      "广州大道",
      "深圳大道",
      "成都街",
      "重庆路",
    ];
    const xqArr = [
      " 海悦花园",
      "金山豪庭",
      "碧水湾",
      "翠湖雅居",
      "阳光家园",
      "银河小区",
      "丹桂楼",
      "紫荆苑",
      "百合小区",
      "玫瑰园",
      "风华小区",
      "华润新苑",
      "绿城花园",
      "雅居乐",
      "龙湖山庄",
      "锦绣江南",
      "蓝海公寓",
      "云鼎山庄",
      "云翠花园",
      "月亮湾",
      "天鹅湖畔",
      "金色海岸",
      "海天一色",
      "云端之城",
      "龙山小区",
      "松江家园",
      "盛世豪庭",
      "华宇花园",
      "康城小区",
      "丽阳天下",
      "皇城豪苑",
      "金域华府",
      "天泉公寓",
      "长虹小区",
      "恒润花园",
      "星海广场",
      "万科城市花园",
      "宏图大宅",
      "丹桂园",
      "紫云山庄",
      "玉兰花园",
      "碧波山庄",
      "金鼎公寓",
      "华润大厦",
      "绿城绿园",
      "雅居乐花园",
      "新龙山花园",
      "万达广场",
      "月湖山庄",
      "天安新村",
      "云梦山庄",
      "新华小区",
      "金色水岸",
      "海韵花园",
      "天润康园",
      "龙岗新村",
      "新华豪庭",
      "中海国际社区",
      "云锦世家",
      "中南世纪城",
      "新华路小区",
      "金色蓝庭",
      "海天嘉苑",
      "天安新嘉苑",
      "长丰园小区",
      "金辉悦府",
      "中南世纪花园",
    ];
    let provinceObj = province[randomIntNum(province.length - 1)];
    let cityArr = city.filter((item) => item.ProID == provinceObj.ProID);
    let cityObj = cityArr[randomIntNum(cityArr.length - 1)] || {};
    let countyArr = county.filter((item) => item.CityID == cityObj.CityID);
    let countyObj = countyArr[randomIntNum(countyArr.length - 1)] || {};
    const obj = {
      p: provinceObj.name || "",
      C: cityObj.name || "",
      c: countyObj.DisName || "",
      s: jdArr[randomIntNum(jdArr.length - 1)],
      v: xqArr[randomIntNum(xqArr.length - 1)],
      d: randomIntNum(100) + "栋" + randomIntNum(20) + "单元",
    };

    let res = "";
    if (format.length < 1) {
      Object.values(obj).forEach((item) => {
        if (item) res += item;
      });
    } else {
      format.split("").forEach((str) => {
        if (str in obj) {
          res += obj[str];
        } else {
          res += str;
        }
      });
    }

    return res;
  }
  //生成随机长度的测试文字
  /**
   *
   * @param {*} max 长度上限
   * @returns 随机整数
   */
  function str(max = 300){
    return  Array(randomIntNum(max)).fill('测').join('')
  }
  return {
    fullName,
    randomStr,
    randomIntNum,
    idCard,
    phone,
    address,
    str,
    dayjs
  };
};
