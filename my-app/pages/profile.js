import React from "react";
import AppLayout from "../component/AppLayout";
import FollowList from "../component/FollowList";
import NicknameEditForm from "../component/NicknameEditForm";
const Profile = () => {
  const followerList = [
    { nickname: "QooQua" },
    { nickname: "바보" },
    { nickname: "nodebird" },
  ];
  const followingList = [
    { nickname: "QooQua" },
    { nickname: "바보" },
    { nickname: "nodebird" },
  ];

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로잉 목록" data={followerList} />
    </AppLayout>
  );
};

export default Profile;
