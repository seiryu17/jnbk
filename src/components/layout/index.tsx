import { Row } from "antd";
import React, { useState } from "react";
import { Grid, Col, Typography, Image } from "antd";
import ASSET from "@/src/constant/assets";
import MENUS from "../../../src/constant/menu.json";
import { useRouter } from "next/router";
import ARTICLES from "@/src/constant/articles.json";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;
  const mq = useBreakpoint();
  const router = useRouter();

  const Header = () => (
    <Row
      className="header bg-dark-blue"
      align={"middle"}
      justify="space-between"
    >
      <Col>
        <Typography.Title className="text-color-light-blue">
          Website<span className="text-color-white">Logo</span>
        </Typography.Title>
      </Col>
      <Col>
        <Row gutter={24}>
          {MENUS.data.map((x, index) => (
            <Col key={index}>
              <Typography.Title
                onClick={() => router.push(`/?filter=${x.id}`)}
                className={`menu-title`}
                level={mq.lg ? 4 : 5}
              >
                {x.title}
              </Typography.Title>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );

  const Footer = () => (
    <Row
      className="bg-dark-blue pv-4 ph-8 w-100"
      justify={`${mq.xs ? "center" : "space-between"}`}
      align="middle"
    >
      <Col className={`${mq.xs ? "text-center" : ""}`}>
        <Typography.Title level={4} className="text-color-white mb--5">
          www.website.com
        </Typography.Title>
        <Typography.Text className="text-color-white">
          © All right Reserved. Inspired Codes...
        </Typography.Text>
      </Col>
      <Col className={`${mq.xs ? "text-center mt-2" : ""}`}>
        <Row gutter={24}>
          {["Contact Us", "Rule and Policy"].map((x, i) => (
            <Col key={i}>
              <Typography.Text className="menu-title text-color-white text-size-18">
                {x}
              </Typography.Text>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );

  return (
    <>
      <Header />
      <main className={mq.xs ? "p-2" : "mh-8"}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
