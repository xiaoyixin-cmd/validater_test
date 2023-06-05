import { Col, Row, Typography, Divider } from "@douyinfe/semi-ui";
import React, { useState } from "react";
import { debounce } from "lodash";
import IndicatorForm from "./IndicatorForm";
import Filter from "./Filter";
const { Title } = Typography;

const Content = () => {
  const [filterParams, setFilterParams] = useState();
  const [isDelay, setIsDelay] = useState(false);
  const onFilterChange = debounce((value) => {
    setIsDelay(false);
    setFilterParams({ ...value });
  }, 2 * 1000);
  return (
    <div>
      <Row gutter={8}>
        <Col span={12}>
          <Title heading={2}>依赖配置</Title>
          <Divider margin="12px" />
          <Filter
            onChange={(value) => {
              setIsDelay(true);
              onFilterChange(value);
            }}
          />
        </Col>
        <Col span={12}>
          <Title heading={2}>指标项</Title>
          <Divider margin="12px" />
          <IndicatorForm filterParams={filterParams} isDelay={isDelay} />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
