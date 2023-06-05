import { Form, withField } from "@douyinfe/semi-ui";
import React from "react";
const { Cascader } = Form;

const LastCascader = ({ onChange, value, treeData, ...restProps }) => {
  const cascaderValue = React.useMemo(() => {
    let route = [];

    const dfs = (tempRoute, currLevelSteps) => {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < currLevelSteps.length; i++) {
        const item = currLevelSteps[i];
        if (item.value === value) {
          tempRoute.push(item.value);
          route = tempRoute;
          return route;
        }

        if (Array.isArray(item.children)) {
          dfs([...tempRoute, item.value], item.children);
        }
      }
    };

    dfs([], treeData);

    if (route.length === 0 && value) {
      onChange(null);
    }

    return route;
  }, [value, treeData]);

  const _onChange = (v) => onChange(v[v.length - 1]);
  return (
    <Cascader
      {...restProps}
      treeData={treeData}
      onChange={_onChange}
      value={cascaderValue}
      noLabel
      field={restProps.id}
    />
  );
};

export default withField(LastCascader, {
  valueKey: "value",
  onKeyChangeFnName: "onChange"
});
