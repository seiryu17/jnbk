import { DownOutlined } from "@ant-design/icons";
import {
  Col,
  Dropdown,
  Row,
  Typography,
  MenuProps,
  Space,
  message,
} from "antd";
import React from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <span>asc</span>,
  },
  {
    key: "2",
    label: <span>desc</span>,
  },
];

interface IProps {
  type: string;
  onChange: (type: string) => void;
}

const SortComponent = (props: IProps) => {
  const { type, onChange } = props;

  const onClick: MenuProps["onClick"] = ({ key }) => {
    onChange(key === "1" ? "asc" : "desc");
  };

  return (
    <Row gutter={16} align="middle">
      <Col>
        <Typography.Title className="m-0" level={3}>
          SORT BY
        </Typography.Title>
      </Col>
      <Col>
        <Dropdown menu={{ items, onClick }} placement="bottom" arrow>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {type}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default SortComponent;
