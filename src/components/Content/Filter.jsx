import React from "react";
import { Form, Card } from "@douyinfe/semi-ui";
import {
  AllowedCountriesOptions,
  RoleTypeOptions,
  BizIdOptions,
  TaskTypeOptions
} from "../../config/index";
const { RadioGroup, Select, TreeSelect } = Form;

export default ({ onChange }) => {
  const initValues = {
    biz_id: 2,
    role_type: 1,
    allowed_contries: ["US"],
    task_type: 1
  };

  return (
    <Card>
      <Form
        onValueChange={onChange}
        initValues={initValues}
        labelPosition="left"
      >
        <RadioGroup
          field="biz_id"
          label="活动类型"
          style={{ width: 320 }}
          options={BizIdOptions}
        ></RadioGroup>
        <Select
          field="role_type"
          label="面向对象"
          placeholder="请选择面向对象"
          style={{ width: 320 }}
          optionList={RoleTypeOptions}
        ></Select>
        <TreeSelect
          field="allowed_contries"
          multiple
          label="投放地区"
          placeholder="请选择投放地区"
          style={{ width: 320 }}
          treeData={AllowedCountriesOptions}
        ></TreeSelect>
        <Select
          field="task_type"
          label="任务类型"
          placeholder="请选择任务类型"
          style={{ width: 320 }}
          optionList={TaskTypeOptions}
        ></Select>
      </Form>
    </Card>
  );
};
