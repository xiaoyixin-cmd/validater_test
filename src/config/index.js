import { totalIndicatorData } from "./indicatorData";

export const activityInfo = {
  biz_id: 2
};

export const BizIdOptions = [
  {
    value: 2,
    label: "组件化"
  },
  {
    value: 3,
    label: "主播自建"
  }
];

export const RoleTypeOptions = [
  {
    value: 1,
    label: "主播"
  },
  {
    value: 2,
    label: "看播"
  },
  {
    value: 3,
    label: "团队-主播"
  },
  {
    value: 4,
    label: "团队-看播"
  }
];

export const TaskTypeOptions = [
  {
    value: 1,
    label: "单任务"
  },
  {
    value: 2,
    label: "多任务"
  },
  {
    value: 3,
    label: "多阶段"
  }
];

// 根据最新的活动信息，对指标项相关数据进行配置
export const filterIndicatorData = (params = {}) => {
  const { biz_id, role_type, allowed_countries, task_type } = params;
  const res = totalIndicatorData.filter((item) => {
    let allowedCountriesPass = true;
    if (allowed_countries) {
      if (item.allowed_countries === "*") {
        allowedCountriesPass = true;
      } else {
        if (item.allowed_countries.indexOf("~")) {
          const temp = item.allowed_countries.replace("~", "");
          for (let index = 0; index < allowed_countries.length; index++) {
            const allowedCountry = allowed_countries[index];
            if (temp.includes(allowedCountry)) {
              allowedCountriesPass = false;
              break;
            }
          }
        }
      }
    }
    return (
      item.biz_id.includes(biz_id) &&
      item.roleType.includes(role_type) &&
      item.task_type.includes(task_type) &&
      allowedCountriesPass
    );
  });
  return res;
};

export const AllowedCountriesOptions = [
  {
    key: "US",
    label: "US",
    value: "US",
    children: []
  },
  {
    key: "CA",
    label: "CA",
    value: "CA",
    children: []
  },
  {
    key: "AU+",
    label: "AU+",
    value: "AU+",
    children: [
      {
        key: "NZ",
        label: "NZ",
        value: "NZ"
      },
      {
        key: "AU",
        label: "AU",
        value: "AU"
      }
    ]
  },
  {
    key: "MENA",
    label: "MENA",
    value: "MENA",
    children: [
      {
        key: "AE",
        label: "AE",
        value: "AE"
      },
      {
        key: "BH",
        label: "BH",
        value: "BH"
      },
      {
        key: "DJ",
        label: "DJ",
        value: "DJ"
      },
      {
        key: "DZ",
        label: "DZ",
        value: "DZ"
      },
      {
        key: "EG",
        label: "EG",
        value: "EG"
      },
      {
        key: "IQ",
        label: "IQ",
        value: "IQ"
      },
      {
        key: "JO",
        label: "JO",
        value: "JO"
      },
      {
        key: "KM",
        label: "KM",
        value: "KM"
      },
      {
        key: "KW",
        label: "KW",
        value: "KW"
      },
      {
        key: "LB",
        label: "LB",
        value: "LB"
      },
      {
        key: "LY",
        label: "LY",
        value: "LY"
      },
      {
        key: "MA",
        label: "MA",
        value: "MA"
      },
      {
        key: "MR",
        label: "MR",
        value: "MR"
      },
      {
        key: "OM",
        label: "OM",
        value: "OM"
      },
      {
        key: "PS",
        label: "PS",
        value: "PS"
      },
      {
        key: "QA",
        label: "QA",
        value: "QA"
      },
      {
        key: "SA",
        label: "SA",
        value: "SA"
      },
      {
        key: "SD",
        label: "SD",
        value: "SD"
      },
      {
        key: "SO",
        label: "SO",
        value: "SO"
      },
      {
        key: "TN",
        label: "TN",
        value: "TN"
      },
      {
        key: "YE",
        label: "YE",
        value: "YE"
      }
    ]
  },
  {
    key: "TR",
    label: "TR",
    value: "TR",
    children: []
  },
  {
    key: "IN",
    label: "IN",
    value: "IN",
    children: []
  },
  {
    key: "NP",
    label: "NP",
    value: "NP",
    children: []
  },
  {
    key: "LK",
    label: "LK",
    value: "LK",
    children: []
  },
  {
    key: "BD+",
    label: "BD+",
    value: "BD+",
    children: [
      {
        key: "BD",
        label: "BD",
        value: "BD"
      },
      {
        key: "BT",
        label: "BT",
        value: "BT"
      },
      {
        key: "MV",
        label: "MV",
        value: "MV"
      }
    ]
  },
  {
    key: "PK",
    label: "PK",
    value: "PK",
    children: []
  },
  {
    key: "BR",
    label: "BR",
    value: "BR",
    children: []
  },
  {
    key: "PT+",
    label: "PT+",
    value: "PT+",
    children: [
      {
        key: "PT",
        label: "PT",
        value: "PT"
      },
      {
        key: "MZ",
        label: "MZ",
        value: "MZ"
      },
      {
        key: "AO",
        label: "AO",
        value: "AO"
      },
      {
        key: "CV",
        label: "CV",
        value: "CV"
      },
      {
        key: "GQ",
        label: "GQ",
        value: "GQ"
      },
      {
        key: "ST",
        label: "ST",
        value: "ST"
      },
      {
        key: "GW",
        label: "GW",
        value: "GW"
      }
    ]
  },
  {
    key: "LATAM",
    label: "LATAM",
    value: "LATAM",
    children: [
      {
        key: "AR",
        label: "AR",
        value: "AR"
      },
      {
        key: "CL",
        label: "CL",
        value: "CL"
      },
      {
        key: "PE",
        label: "PE",
        value: "PE"
      },
      {
        key: "CO",
        label: "CO",
        value: "CO"
      },
      {
        key: "EC",
        label: "EC",
        value: "EC"
      },
      {
        key: "PA",
        label: "PA",
        value: "PA"
      },
      {
        key: "BO",
        label: "BO",
        value: "BO"
      },
      {
        key: "CR",
        label: "CR",
        value: "CR"
      },
      {
        key: "UY",
        label: "UY",
        value: "UY"
      },
      {
        key: "DO",
        label: "DO",
        value: "DO"
      },
      {
        key: "GT",
        label: "GT",
        value: "GT"
      },
      {
        key: "HN",
        label: "HN",
        value: "HN"
      },
      {
        key: "VE",
        label: "VE",
        value: "VE"
      },
      {
        key: "SV",
        label: "SV",
        value: "SV"
      },
      {
        key: "NI",
        label: "NI",
        value: "NI"
      },
      {
        key: "PY",
        label: "PY",
        value: "PY"
      },
      {
        key: "PR",
        label: "PR",
        value: "PR"
      },
      {
        key: "GN",
        label: "GN",
        value: "GN"
      },
      {
        key: "MX",
        label: "MX",
        value: "MX"
      }
    ]
  },
  {
    key: "RU+",
    label: "RU+",
    value: "RU+",
    children: [
      {
        key: "KZ",
        label: "KZ",
        value: "KZ"
      },
      {
        key: "AZ",
        label: "AZ",
        value: "AZ"
      },
      {
        key: "GE",
        label: "GE",
        value: "GE"
      },
      {
        key: "TM",
        label: "TM",
        value: "TM"
      },
      {
        key: "KG",
        label: "KG",
        value: "KG"
      },
      {
        key: "TJ",
        label: "TJ",
        value: "TJ"
      },
      {
        key: "AM",
        label: "AM",
        value: "AM"
      },
      {
        key: "MD",
        label: "MD",
        value: "MD"
      },
      {
        key: "UZ",
        label: "UZ",
        value: "UZ"
      },
      {
        key: "RU",
        label: "RU",
        value: "RU"
      },
      {
        key: "UA",
        label: "UA",
        value: "UA"
      },
      {
        key: "BY",
        label: "BY",
        value: "BY"
      }
    ]
  },
  {
    key: "DE+",
    label: "DE+",
    value: "DE+",
    children: [
      {
        key: "DE",
        label: "DE",
        value: "DE"
      },
      {
        key: "CH",
        label: "CH",
        value: "CH"
      },
      {
        key: "AT",
        label: "AT",
        value: "AT"
      },
      {
        key: "LI",
        label: "LI",
        value: "LI"
      },
      {
        key: "LU",
        label: "LU",
        value: "LU"
      }
    ]
  },
  {
    key: "SE+",
    label: "SE+",
    value: "SE+",
    children: [
      {
        key: "SE",
        label: "SE",
        value: "SE"
      },
      {
        key: "FI",
        label: "FI",
        value: "FI"
      },
      {
        key: "NO",
        label: "NO",
        value: "NO"
      },
      {
        key: "DK",
        label: "DK",
        value: "DK"
      },
      {
        key: "IS",
        label: "IS",
        value: "IS"
      },
      {
        key: "GL",
        label: "GL",
        value: "GL"
      }
    ]
  },
  {
    key: "IT",
    label: "IT",
    value: "IT",
    children: []
  },
  {
    key: "ES+",
    label: "ES+",
    value: "ES+",
    children: [
      {
        key: "ES",
        label: "ES",
        value: "ES"
      },
      {
        key: "AD",
        label: "AD",
        value: "AD"
      }
    ]
  },
  {
    key: "NL",
    label: "NL",
    value: "NL",
    children: []
  },
  {
    key: "FR+",
    label: "FR+",
    value: "FR+",
    children: [
      {
        key: "FR",
        label: "FR",
        value: "FR"
      },
      {
        key: "BE",
        label: "BE",
        value: "BE"
      },
      {
        key: "GF",
        label: "GF",
        value: "GF"
      },
      {
        key: "MC",
        label: "MC",
        value: "MC"
      },
      {
        key: "PF",
        label: "PF",
        value: "PF"
      },
      {
        key: "TF",
        label: "TF",
        value: "TF"
      },
      {
        key: "RE",
        label: "RE",
        value: "RE"
      }
    ]
  },
  {
    key: "RO",
    label: "RO",
    value: "RO",
    children: []
  },
  {
    key: "HU+",
    label: "HU+",
    value: "HU+",
    children: [
      {
        key: "HU",
        label: "HU",
        value: "HU"
      },
      {
        key: "CZ",
        label: "CZ",
        value: "CZ"
      },
      {
        key: "SK",
        label: "SK",
        value: "SK"
      },
      {
        key: "BG",
        label: "BG",
        value: "BG"
      },
      {
        key: "HR",
        label: "HR",
        value: "HR"
      },
      {
        key: "SI",
        label: "SI",
        value: "SI"
      }
    ]
  },
  {
    key: "PL",
    label: "PL",
    value: "PL",
    children: []
  },
  {
    key: "IL",
    label: "IL",
    value: "IL",
    children: []
  },
  {
    key: "UK+",
    label: "UK+",
    value: "UK+",
    children: [
      {
        key: "GB",
        label: "GB",
        value: "GB"
      },
      {
        key: "GR",
        label: "GR",
        value: "GR"
      },
      {
        key: "AL",
        label: "AL",
        value: "AL"
      },
      {
        key: "IE",
        label: "IE",
        value: "IE"
      },
      {
        key: "LT",
        label: "LT",
        value: "LT"
      },
      {
        key: "RS",
        label: "RS",
        value: "RS"
      },
      {
        key: "LV",
        label: "LV",
        value: "LV"
      },
      {
        key: "EE",
        label: "EE",
        value: "EE"
      },
      {
        key: "MK",
        label: "MK",
        value: "MK"
      },
      {
        key: "BA",
        label: "BA",
        value: "BA"
      },
      {
        key: "MT",
        label: "MT",
        value: "MT"
      },
      {
        key: "ME",
        label: "ME",
        value: "ME"
      },
      {
        key: "FO",
        label: "FO",
        value: "FO"
      },
      {
        key: "GI",
        label: "GI",
        value: "GI"
      },
      {
        key: "JE",
        label: "JE",
        value: "JE"
      },
      {
        key: "IM",
        label: "IM",
        value: "IM"
      },
      {
        key: "GG",
        label: "GG",
        value: "GG"
      },
      {
        key: "CD",
        label: "CD",
        value: "CD"
      },
      {
        key: "SM",
        label: "SM",
        value: "SM"
      },
      {
        key: "SJ",
        label: "SJ",
        value: "SJ"
      }
    ]
  },
  {
    key: "AFRICA+",
    label: "AFRICA+",
    value: "AFRICA+",
    children: [
      {
        key: "ZA",
        label: "ZA",
        value: "ZA"
      },
      {
        key: "BW",
        label: "BW",
        value: "BW"
      },
      {
        key: "NA",
        label: "NA",
        value: "NA"
      },
      {
        key: "NG",
        label: "NG",
        value: "NG"
      },
      {
        key: "GH",
        label: "GH",
        value: "GH"
      },
      {
        key: "KE",
        label: "KE",
        value: "KE"
      },
      {
        key: "ZM",
        label: "ZM",
        value: "ZM"
      },
      {
        key: "UG",
        label: "UG",
        value: "UG"
      },
      {
        key: "TZ",
        label: "TZ",
        value: "TZ"
      }
    ]
  },
  {
    key: "MO",
    label: "MO",
    value: "MO",
    children: []
  },
  {
    key: "KR",
    label: "KR",
    value: "KR",
    children: []
  },
  {
    key: "JP",
    label: "JP",
    value: "JP",
    children: []
  },
  {
    key: "TW",
    label: "TW",
    value: "TW",
    children: []
  },
  {
    key: "PH",
    label: "PH",
    value: "PH",
    children: []
  },
  {
    key: "KH",
    label: "KH",
    value: "KH",
    children: []
  },
  {
    key: "LA",
    label: "LA",
    value: "LA",
    children: []
  },
  {
    key: "MY",
    label: "MY",
    value: "MY",
    children: []
  },
  {
    key: "MM",
    label: "MM",
    value: "MM",
    children: []
  },
  {
    key: "TH",
    label: "TH",
    value: "TH",
    children: []
  },
  {
    key: "SG",
    label: "SG",
    value: "SG",
    children: []
  },
  {
    key: "ID",
    label: "ID",
    value: "ID",
    children: []
  },
  {
    key: "VN",
    label: "VN",
    value: "VN",
    children: []
  },
  {
    key: "others",
    label: "others",
    value: "others",
    children: [
      {
        key: "SN",
        label: "SN",
        value: "SN"
      },
      {
        key: "BM",
        label: "BM",
        value: "BM"
      },
      {
        key: "KY",
        label: "KY",
        value: "KY"
      },
      {
        key: "PM",
        label: "PM",
        value: "PM"
      },
      {
        key: "TT",
        label: "TT",
        value: "TT"
      },
      {
        key: "LC",
        label: "LC",
        value: "LC"
      },
      {
        key: "AG",
        label: "AG",
        value: "AG"
      },
      {
        key: "DM",
        label: "DM",
        value: "DM"
      },
      {
        key: "VI",
        label: "VI",
        value: "VI"
      },
      {
        key: "BL",
        label: "BL",
        value: "BL"
      },
      {
        key: "KN",
        label: "KN",
        value: "KN"
      },
      {
        key: "MS",
        label: "MS",
        value: "MS"
      },
      {
        key: "BZ",
        label: "BZ",
        value: "BZ"
      },
      {
        key: "GP",
        label: "GP",
        value: "GP"
      },
      {
        key: "HT",
        label: "HT",
        value: "HT"
      },
      {
        key: "VC",
        label: "VC",
        value: "VC"
      },
      {
        key: "BQ",
        label: "BQ",
        value: "BQ"
      },
      {
        key: "BS",
        label: "BS",
        value: "BS"
      },
      {
        key: "AI",
        label: "AI",
        value: "AI"
      },
      {
        key: "JM",
        label: "JM",
        value: "JM"
      },
      {
        key: "MF",
        label: "MF",
        value: "MF"
      },
      {
        key: "AW",
        label: "AW",
        value: "AW"
      },
      {
        key: "SX",
        label: "SX",
        value: "SX"
      },
      {
        key: "TC",
        label: "TC",
        value: "TC"
      },
      {
        key: "GD",
        label: "GD",
        value: "GD"
      },
      {
        key: "BB",
        label: "BB",
        value: "BB"
      },
      {
        key: "MQ",
        label: "MQ",
        value: "MQ"
      },
      {
        key: "VG",
        label: "VG",
        value: "VG"
      },
      {
        key: "CW",
        label: "CW",
        value: "CW"
      },
      {
        key: "GU",
        label: "GU",
        value: "GU"
      },
      {
        key: "MP",
        label: "MP",
        value: "MP"
      },
      {
        key: "CY",
        label: "CY",
        value: "CY"
      },
      {
        key: "AF",
        label: "AF",
        value: "AF"
      },
      {
        key: "MN",
        label: "MN",
        value: "MN"
      },
      {
        key: "MU",
        label: "MU",
        value: "MU"
      },
      {
        key: "ET",
        label: "ET",
        value: "ET"
      },
      {
        key: "CN",
        label: "CN",
        value: "CN"
      },
      {
        key: "FJ",
        label: "FJ",
        value: "FJ"
      },
      {
        key: "CI",
        label: "CI",
        value: "CI"
      },
      {
        key: "GY",
        label: "GY",
        value: "GY"
      },
      {
        key: "BN",
        label: "BN",
        value: "BN"
      },
      {
        key: "SR",
        label: "SR",
        value: "SR"
      },
      {
        key: "CM",
        label: "CM",
        value: "CM"
      },
      {
        key: "TP",
        label: "TP",
        value: "TP"
      },
      {
        key: "NC",
        label: "NC",
        value: "NC"
      },
      {
        key: "ZW",
        label: "ZW",
        value: "ZW"
      },
      {
        key: "ML",
        label: "ML",
        value: "ML"
      },
      {
        key: "GM",
        label: "GM",
        value: "GM"
      },
      {
        key: "MG",
        label: "MG",
        value: "MG"
      },
      {
        key: "WS",
        label: "WS",
        value: "WS"
      },
      {
        key: "TK",
        label: "TK",
        value: "TK"
      },
      {
        key: "RW",
        label: "RW",
        value: "RW"
      },
      {
        key: "GA",
        label: "GA",
        value: "GA"
      },
      {
        key: "SL",
        label: "SL",
        value: "SL"
      },
      {
        key: "BJ",
        label: "BJ",
        value: "BJ"
      },
      {
        key: "TO",
        label: "TO",
        value: "TO"
      },
      {
        key: "TG",
        label: "TG",
        value: "TG"
      },
      {
        key: "XK",
        label: "XK",
        value: "XK"
      },
      {
        key: "LR",
        label: "LR",
        value: "LR"
      },
      {
        key: "PG",
        label: "PG",
        value: "PG"
      },
      {
        key: "AS",
        label: "AS",
        value: "AS"
      },
      {
        key: "BF",
        label: "BF",
        value: "BF"
      },
      {
        key: "MW",
        label: "MW",
        value: "MW"
      },
      {
        key: "SZ",
        label: "SZ",
        value: "SZ"
      },
      {
        key: "CG",
        label: "CG",
        value: "CG"
      },
      {
        key: "SC",
        label: "SC",
        value: "SC"
      },
      {
        key: "NE",
        label: "NE",
        value: "NE"
      },
      {
        key: "FM",
        label: "FM",
        value: "FM"
      },
      {
        key: "VU",
        label: "VU",
        value: "VU"
      },
      {
        key: "TD",
        label: "TD",
        value: "TD"
      },
      {
        key: "BI",
        label: "BI",
        value: "BI"
      },
      {
        key: "MH",
        label: "MH",
        value: "MH"
      },
      {
        key: "PW",
        label: "PW",
        value: "PW"
      },
      {
        key: "SB",
        label: "SB",
        value: "SB"
      },
      {
        key: "LS",
        label: "LS",
        value: "LS"
      },
      {
        key: "CK",
        label: "CK",
        value: "CK"
      },
      {
        key: "HK",
        label: "HK",
        value: "HK"
      },
      {
        key: "WF",
        label: "WF",
        value: "WF"
      },
      {
        key: "YT",
        label: "YT",
        value: "YT"
      },
      {
        key: "TL",
        label: "TL",
        value: "TL"
      },
      {
        key: "KI",
        label: "KI",
        value: "KI"
      },
      {
        key: "CF",
        label: "CF",
        value: "CF"
      },
      {
        key: "FK",
        label: "FK",
        value: "FK"
      },
      {
        key: "TV",
        label: "TV",
        value: "TV"
      },
      {
        key: "AX",
        label: "AX",
        value: "AX"
      },
      {
        key: "NU",
        label: "NU",
        value: "NU"
      },
      {
        key: "ER",
        label: "ER",
        value: "ER"
      },
      {
        key: "EN",
        label: "EN",
        value: "EN"
      },
      {
        key: "ZG",
        label: "ZG",
        value: "ZG"
      },
      {
        key: "NR",
        label: "NR",
        value: "NR"
      },
      {
        key: "SH",
        label: "SH",
        value: "SH"
      },
      {
        key: "IO",
        label: "IO",
        value: "IO"
      },
      {
        key: "EH",
        label: "EH",
        value: "EH"
      },
      {
        key: "CX",
        label: "CX",
        value: "CX"
      },
      {
        key: "NF",
        label: "NF",
        value: "NF"
      },
      {
        key: "VA",
        label: "VA",
        value: "VA"
      },
      {
        key: "IC",
        label: "IC",
        value: "IC"
      },
      {
        key: "UM",
        label: "UM",
        value: "UM"
      },
      {
        key: "AQ",
        label: "AQ",
        value: "AQ"
      },
      {
        key: "EA",
        label: "EA",
        value: "EA"
      },
      {
        key: "AC",
        label: "AC",
        value: "AC"
      },
      {
        key: "XB",
        label: "XB",
        value: "XB"
      },
      {
        key: "ZZ",
        label: "ZZ",
        value: "ZZ"
      },
      {
        key: "PN",
        label: "PN",
        value: "PN"
      },
      {
        key: "CC",
        label: "CC",
        value: "CC"
      },
      {
        key: "XX",
        label: "XX",
        value: "XX"
      },
      {
        key: "BV",
        label: "BV",
        value: "BV"
      },
      {
        key: "CS",
        label: "CS",
        value: "CS"
      },
      {
        key: "DR",
        label: "DR",
        value: "DR"
      },
      {
        key: "GS",
        label: "GS",
        value: "GS"
      },
      {
        key: "NJ",
        label: "NJ",
        value: "NJ"
      },
      {
        key: "QS",
        label: "QS",
        value: "QS"
      },
      {
        key: "TS",
        label: "TS",
        value: "TS"
      },
      {
        key: "XA",
        label: "XA",
        value: "XA"
      },
      {
        key: "YJ",
        label: "YJ",
        value: "YJ"
      },
      {
        key: "ZN",
        label: "ZN",
        value: "ZN"
      },
      {
        key: "SS",
        label: "SS",
        value: "SS"
      }
    ]
  }
];
