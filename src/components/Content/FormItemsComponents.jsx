import { Form } from "@douyinfe/semi-ui";
import { unionBy } from "lodash";
import React, { useState, useEffect, useRef } from "react";
import * as IndicatorDataConf from "../../config/indicatorData";
import { list2tree } from "../../utils";
import LastCascader from "../LastCascader";
const { TreeSelect, InputNumber, Select, Input, Cascader } = Form;

const getComponents = (type = "Input", props = {}) => {
  let res = <div></div>;
  const { dataSource, ...restProps } = props;
  switch (type) {
    case "Input":
      res = <Input showClear noLabel {...restProps} />;
      break;
    case "InputNumber":
      res = <InputNumber showClear noLabel {...restProps} />;
      break;
    case "Select":
      res = <Select showClear noLabel optionList={dataSource} {...restProps} />;
      break;
    case "TreeSelect":
      res = (
        <TreeSelect showClear noLabel treeData={dataSource} {...restProps} />
      );
      break;
    case "LastCascader":
      res = (
        <LastCascader
          showClear
          leafOnly
          noLabel
          treeData={dataSource}
          {...restProps}
        />
      );
      break;
    default:
      res = <Input showClear {...restProps} />;
      break;
  }
  return res;
};

export const FormItemsComponents = ({ data = [], formValue = {} }) => {
  const [renderData, setRenderData] = useState(data);
  const levelTypesRef = useRef({});

  useEffect(() => {
    setRenderData(data);
  }, [data]);

  const buildFormItem = (renderData, level = "level1") => {
    const res = [];

    if (renderData.length === 0) {
      return res;
    }
    const levelList = renderData.map((i) => {
      return i[level];
    });
    if (!levelList[0]) {
      return res;
    }
    const levelType = levelList[0].type;
    const levelTypeMeta = IndicatorDataConf.levelTypeMeta[levelType];
    const levelCompType = levelTypeMeta.form_item;
    const levelName = levelTypeMeta.name;
    let levelOptions = unionBy(
      levelList.map((l) => {
        return {
          value: l.value,
          label: l.label,
          key: l.label
        };
      }),
      "key"
    );
    // list -> tree
    const levelTotalList = IndicatorDataConf[levelType.toUpperCase()];
    if (levelTotalList) {
      // 将父节点保留
      const curList = levelTotalList.filter((item) => {
        return levelOptions.some((o) => {
          return item.value === o.value;
        });
      });
      // 寻找父节点
      const parentList = curList
        .filter((c) => {
          return c.parentId;
        })
        .map((i) => {
          return levelTotalList.filter((l) => {
            return l.value === i.parentId;
          })[0];
        });
      levelOptions = list2tree(unionBy([...curList, ...parentList], "value"));
    }

    const rules = IndicatorDataConf.buildRules(levelList[0].validators);
    console.log("rules", rules);
    const levelComp = getComponents(levelCompType, {
      dataSource: levelOptions,
      field: levelType,
      label: levelName,
      style: {
        marginBottom: 12,
        minWidth: 120
      },
      placeholder: levelTypeMeta.placeholder,
      rules
    });
    res.push(levelComp);
    levelTypesRef.current[level] = levelType;
    return res;
  };

  const buildFormItems = (renderData) => {
    const res = [buildFormItem(renderData)];
    const levelTypeMeta = IndicatorDataConf.levelTypeMeta;
    // 获取当前所有级别的数据类型-枚举类型
    const levelEnumType = levelTypesRef.current
      ? Object.keys(levelTypesRef.current).map((level) => {
          const curMeta = levelTypeMeta[levelTypesRef.current[level]];
          return ["TreeSelect", "Select", "LastCascader"].includes(
            curMeta.form_item
          );
        })
      : [true];

    // 需要再跟进组件类型进行一下判断，可枚举值才进行过滤，input场景不进行过滤
    let preTempData = renderData;
    if (formValue[levelTypesRef.current["level1"]]) {
      preTempData = renderData.filter((item) => {
        return levelEnumType[0]
          ? item["level1"].value === formValue[levelTypesRef.current["level1"]]
          : true;
      });
      res.push(buildFormItem([...preTempData], "level2"));
    }
    if (formValue[levelTypesRef.current["level2"]]) {
      preTempData = preTempData.filter((item) => {
        return levelEnumType[1]
          ? item["level2"].value === formValue[levelTypesRef.current["level2"]]
          : true;
      });
      res.push(buildFormItem([...preTempData], "level3"));
    }

    if (formValue[levelTypesRef.current["level3"]]) {
      preTempData = preTempData.filter((item) => {
        return levelEnumType[2]
          ? item["level3"].value === formValue[levelTypesRef.current["level3"]]
          : true;
      });
      res.push(buildFormItem(preTempData, "level4"));
    }
    return res;
  };
  return <>{buildFormItems(renderData)}</>;
};
