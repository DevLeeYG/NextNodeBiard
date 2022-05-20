import { StopOutlined } from "@ant-design/icons";
import { Button, Card, List } from "antd";
import PropTypes from "prop-types";
import React, { useMemo } from "react";

const FollowList = ({ header, data }) => {
  const style = useMemo(() => [
    {
      marginBottom: "20px",
    },
    { marginTop: "20px" },
  ]);

  const grid = useMemo(() => ({
    gutter: 4,
    xs: 2,
    md: 3,
  }));

  const head = useMemo(() => {
    <div>{header}</div>;
  });

  const loadMore = useMemo(() => (
    <div style={{ textAlign: "center", margin: "10px 0" }}>
      <Button>더 보기</Button>
    </div>
  ));

  return (
    <List
      style={style[0]}
      grid={grid}
      size="small"
      header={head}
      loadMore={loadMore}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={style[1]}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
