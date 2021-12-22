import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";
const PostImages = ({ images }) => {
  const onZoom = useCallback(() => {
    setShowImagesZomm(true);
  }, []);

  if (images.length === 1) {
    <>
      <img
        role="presentation"
        src={images[0].src}
        alt="이미지입니다"
        onClick={onZoom}
      />
    </>;
  }

  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          width="50%"
          style={{ width: "50%", display: "inline-block" }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
      </>
    );
  }

  return (
    <div>
      <img
        role="presentation"
        style={{ width: "50%" }}
        src={images[0].src}
        alt={images[0]}
        onClick={onZoom}
      />
      <div
        role="presentation"
        style={{
          display: "inline-block",
          width: "50",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
    </div>
  );
};
PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
