export const validatorsConf = {
  1: {
    type: "required",
    message: "该填为必填项"
  },
  2: {
    type: "integer",
    message: "只能输入整数"
  },
  3: {
    type: "integer",
    message: "只能输入整数"
  },
  4: {
    type: "max",
    value: 300,
    message: "数字必须<=300"
  },
  5: {
    type: "min",
    value: 100,
    message: "数字必须>=100"
  }
};

export const buildRules = (validators = []) => {
  const res = validators.map((v) => {
    const { type, message, value } = validatorsConf[v];
    let rule = {};
    switch (type) {
      case "required":
        rule = {
          required: true,
          message
        };
        break;
      case "min":
        rule = {
          min: value,
          message
        };
        break;
      case "max":
        rule = {
          min: value,
          message
        };
        break;
      case "integer":
        rule = {
          type: "integer",
          message
        };
        break;
      default:
        break;
    }
    return rule;
  });
  return res;
};
export const START_LIVE_METHOD = [
  { value: -1, label: "全部开播" },
  { value: 4, label: "录屏开播" },
  { value: 1, label: "OBS开播" },
  { value: 6, label: "直播伴侣" },
  { value: 0, label: "手机开播" }
];

export const LIVE_CONTENT = [
  {
    value: -1,
    label: "全部直播内容",
    key: -1
  },
  {
    value: 2,
    label: "游戏标签",
    key: 2
  },
  {
    value: 11,
    parentId: 2,
    label: "主播手选标签",
    key: 11
  },
  {
    value: 12,
    parentId: 2,
    label: "融合标签",
    key: 12
  },
  {
    value: 3,
    label: "电商直播",
    key: 3
  }
];

export const levelTypeMeta = {
  condition_type: {
    name: "指标类型",
    value: [{}],
    form_item: "TreeSelect",
    placeholder: "请选择类型"
  },
  start_live_method: {
    name: "开播方式",
    value: START_LIVE_METHOD,
    form_item: "Select",
    placeholder: "请选择开播方式"
  },
  live_content: {
    name: "直播内容",
    value: LIVE_CONTENT,
    form_item: "LastCascader",
    placeholder: "请选择直播内容"
  },
  condition_value: {
    name: "相关属性值",
    value: undefined,
    form_item: "InputNumber",
    placeholder: "相关属性值"
  },
  daily_value_limit: {
    name: "每日上限",
    value: undefined,
    form_item: "InputNumber",
    placeholder: "每日上限"
  }
};

export const totalIndicatorData = [
  {
    id: 0,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: -1,
      label: "全部开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: -1,
      label: "全部直播内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 0,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: -1,
      label: "全部开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 1,
      label: "游戏内容",
      type: "live_content",
      name: "直播内容",
      form_item: "TreeSelect",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3, 4, 5]
    }
  },
  {
    id: 0,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      name: "指标类型",
      form_item: "TreeSelect",
      validators: []
    },
    level2: {
      value: -1,
      label: "全部开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 11,
      label: "主播手选标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 0,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: -1,
      label: "全部开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 12,
      label: "融合标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 0,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: -1,
      label: "全部开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 3,
      label: "电商直播",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 4,
      label: "录屏开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: -1,
      label: "全部直播内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 4,
      label: "录屏开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 1,
      label: "游戏内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 4,
      label: "录屏开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 11,
      label: "主播手选标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      name: "指标类型",
      form_item: "TreeSelect",
      validators: []
    },
    level2: {
      value: 4,
      label: "录屏开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 12,
      label: "融合标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 4,
      label: "录屏开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 3,
      label: "电商直播",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 1,
      label: "OBS开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: -1,
      label: "全部直播内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 1,
      label: "OBS开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 1,
      label: "游戏内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 1,
      label: "OBS开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 11,
      label: "主播手选标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 1,
      label: "OBS开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 12,
      label: "融合标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 1,
      label: "OBS开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 3,
      label: "电商直播",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 6,
      label: "直播伴侣",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: -1,
      label: "全部直播内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 6,
      label: "直播伴侣",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 1,
      label: "游戏内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 6,
      label: "直播伴侣",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 11,
      parentId: 2,
      parentLabel: "游戏标签",
      label: "主播手选标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 6,
      label: "直播伴侣",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 12,
      parentId: 2,
      parentLabel: "游戏标签",
      label: "融合标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 6,
      label: "直播伴侣",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 3,
      label: "电商直播",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 0,
      label: "手机开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: -1,
      label: "全部直播内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 0,
      label: "手机开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 1,
      label: "游戏内容",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 0,
      label: "手机开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 11,
      label: "主播手选标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 0,
      label: "手机开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 12,
      label: "融合标签",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 1,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "US",
    task_type: [1, 2],
    level1: {
      value: 240,
      label: "开播有效天-游戏",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: 0,
      label: "手机开播",
      type: "start_live_method",
      validators: []
    },
    level3: {
      value: 3,
      label: "电商直播",
      type: "live_content",
      validators: []
    },
    level4: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },

  // 新的一个指标

  {
    id: 100,
    biz_id: [3],
    roleType: [2],
    allowed_countries: "US",
    task_type: [3],
    level1: {
      value: 184,
      label: "生效订阅总数",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3]
    }
  },
  {
    id: 200,
    biz_id: [2],
    roleType: [1],
    allowed_countries: "*",
    task_type: [1, 2, 3],
    level1: {
      value: 185,
      label: "端外分享（主播）",
      type: "condition_type",
      validators: []
    },
    level2: {
      value: undefined,
      label: "相关属性",
      type: "condition_value",
      validators: [1, 3, 4, 5]
    },
    level3: {
      value: undefined,
      label: "每日上限",
      type: "daily_value_limit",
      validators: [1, 3]
    }
  }
];
