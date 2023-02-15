import IProduct from "@/src/interfaces/models/product";
import { DownOutlined } from "@ant-design/icons";
import {
  Col,
  Dropdown,
  Row,
  Typography,
  MenuProps,
  Space,
  Checkbox,
  Slider,
} from "antd";
import { SliderMarks } from "antd/lib/slider";
import React, { useState } from "react";

const options = [
  { label: "Promotions", value: "Promotions" },
  { label: "Discount", value: "Discount" },
];

const marks: SliderMarks = {
  0: "0$",
  1000: "1000$",
};

interface IProps {
  filterList: string[];
  setFilter: (val: string) => void;
}

const FilterComponent = (props: IProps) => {
  const { filterList, setFilter } = props;
  const [value, setValue] = useState("");
  const list = filterList.map((x) => {
    return { label: x, value: x };
  });

  return (
    <Row gutter={[16, 16]} style={{ flexDirection: "column" }}>
      <Col>
        <Typography.Title level={3}>Category</Typography.Title>
        {list.map((item) => {
          return (
            <div key={item.label} className="col-sm-12 px-3 py-2">
              <Checkbox
                onChange={(e) => (
                  setValue(e.target.value === value ? "" : e.target.value),
                  setFilter(e.target.value === value ? "" : e.target.value)
                )}
                checked={item.value == value}
                value={item.value}
              >
                {item.value}
              </Checkbox>
            </div>
          );
        })}
      </Col>
      <Col>
        <Typography.Title level={3}>Price Range</Typography.Title>
        <Slider range max={1000} marks={marks} defaultValue={[100, 950]} />
      </Col>
      <Col>
        <Typography.Title level={3}>Other</Typography.Title>
        <Checkbox.Group
          style={{ display: "flex", flexDirection: "column" }}
          options={options}
        />
      </Col>
    </Row>
  );
};

export default FilterComponent;
