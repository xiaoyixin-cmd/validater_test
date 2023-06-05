import { Form, Progress } from "@douyinfe/semi-ui";
import { filterIndicatorData } from "../../config";
import React, { useState, useMemo, useEffect } from "react";
import { FormItemsComponents } from "./FormItemsComponents";

const IndicatorForm = ({ filterParams = {}, isDelay = false }) => {
  const [formValue, setFormValue] = useState();
  const [delayPercent, setDelayPercent] = useState(0);
  const showDelayTip = useMemo(() => {
    return isDelay;
  }, [isDelay]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (showDelayTip) {
        setDelayPercent((v) => {
          return (v += 5);
        });
      } else {
        setDelayPercent(0);
      }
    }, 1 * 100);

    return () => {
      clearInterval(timer);
    };
  }, [showDelayTip]);
  const renderData = useMemo(() => {
    return filterIndicatorData(filterParams);
  }, [filterParams]);

  const onValueChange = (value) => {
    setFormValue({ ...value });
  };
  return (
    <div>
      <div style={{ height: 24 }}>
        {showDelayTip && (
          <Progress percent={delayPercent} aria-label="延迟更新" />
        )}
      </div>
      <Form
        labelPosition="inset"
        layout="horizontal"
        wrapperCol={{ span: 20, offset: 4 }}
        onValueChange={onValueChange}
        value={formValue}
      >
        <FormItemsComponents data={renderData} formValue={formValue} />
      </Form>
    </div>
  );
};

export default IndicatorForm;
