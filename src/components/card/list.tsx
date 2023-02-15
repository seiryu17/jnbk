import IProduct from "@/src/interfaces/models/product";
import { List } from "antd";
import Card from "@/src/components/card";
import React from "react";

interface IProps {
  list: IProduct[];
}

const CardList = (props: IProps) => {
  const { list } = props;

  return (
    <List
      grid={{
        xxl: 5,
        xl: 4,
        lg: 3,
        md: 2,
        xs: 1,
        gutter: 24,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Card item={item} />
        </List.Item>
      )}
    />
  );
};

export default CardList;
