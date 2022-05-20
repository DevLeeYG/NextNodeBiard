import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../component/AppLayout";
import PostCard from "../component/PostCard";
import PostForm from "../component/PostForm";
const Home = () => {
  const { isLogin } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {isLogin && <PostForm />}
      {mainPosts.map((el) => {
        return <PostCard key={el.id} post={el} />;
      })}
    </AppLayout>
  );
};

export default Home;
