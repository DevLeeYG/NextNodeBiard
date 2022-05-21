import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout, logOutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector(state => state.user);

  console.log("@@@", me);
  const onLogout = useCallback(() => {
    dispatch(logOutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followings">
          팔로워
          <br />0
        </div>
      ]}
    >
      <Card.Meta avatar={<Avatar>QooQua</Avatar>} title="QooQua" />
      <Button onClick={onLogout} loading={isLoggingOut}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
