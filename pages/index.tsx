import CardList from "@/src/components/card/list";
import FilterComponent from "@/src/components/filter";
import SortComponent from "@/src/components/sort";
import IProduct from "@/src/interfaces/models/product";
import CONFIG from "@/src/utils/environment";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Row, Grid, Input, Checkbox, Typography, Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../src/components/layout";
const { useBreakpoint } = Grid;

interface IProps {
  data: IProduct[];
  categoryList: string[];
}

export default function Home(props: IProps) {
  const { data, categoryList } = props;
  const [sort, setSort] = useState("asc");
  const [dataList, setDatalist] = useState(data);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);
  const mq = useBreakpoint();

  const Fetch = async (sort?: string, filter?: string) => {
    await axios
      .get(
        `${CONFIG.API_URL}/products${filter ? `/category/${filter}` : ""}${
          sort ? `?sort=${sort}` : ""
        }`
      )
      .then((res) => setDatalist(res.data))
      .catch((err) => err && []);
  };
  return (
    <Layout>
      <Row style={{ gap: 24 }} wrap={mq.xs ? true : false}>
        <Col span={mq.xs ? 24 : 4}>
          <FilterComponent
            filterList={categoryList}
            setFilter={(val) => Fetch(sort, val)}
          />
        </Col>
        <Row gutter={[16, 16]} justify="space-between">
          <Col span={mq.xs ? 12 : 8}>
            <Input placeholder="Search" suffix={<SearchOutlined />} />
          </Col>
          <SortComponent
            type={sort}
            onChange={(type: string) => (Fetch(type), setSort(type))}
          />
          <Col span={24}>
            <CardList list={dataList.slice(limit, page * 10)} />
          </Col>
          <Col span={24}>
            <Row justify={mq.xs ? "center" : "end"}>
              <Pagination
                defaultCurrent={1}
                total={dataList.length}
                onChange={(p) => (
                  setLimit(p === 1 ? 0 : (p - 1) * 10), setPage(p)
                )}
                defaultPageSize={10}
              />
            </Row>
          </Col>
        </Row>
      </Row>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await axios
    .get(`${CONFIG.API_URL}/products`)
    .then((res) => res.data)
    .catch((err) => err && []);
  const response2 = await axios
    .get(`${CONFIG.API_URL}/products/categories`)
    .then((res) => res.data)
    .catch((err) => err && []);
  return {
    props: {
      data: response,
      categoryList: response2,
    },
  };
}
