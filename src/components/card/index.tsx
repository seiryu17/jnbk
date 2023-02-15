import IProduct from "@/src/interfaces/models/product";
import { Col, Rate, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";

interface IProps {
  item: IProduct;
}

const Card = (props: IProps) => {
  const { item } = props;
  return (
    <Row className="card pv-2">
      <Col className="ph-2 text-center">
        <Image
          className="card-image"
          alt="card-image"
          width={225}
          height={225}
          src={item.image || ""}
        />
      </Col>
      <Col className="ph-1">
        <Typography.Text ellipsis>{item.title}</Typography.Text>
      </Col>
      <Col className="ph-1">
        <Typography.Text ellipsis>Cat : {item.category}</Typography.Text>
      </Col>
      <Row justify="space-between" wrap={false}>
        <Col className="pl-1">
          <Typography.Text className="mr--5">Rating :</Typography.Text>
          <Rate />
        </Col>
        <Col className="pr-1">
          <Typography.Text>${item.price}</Typography.Text>
        </Col>
      </Row>
    </Row>
  );
};

export default Card;
