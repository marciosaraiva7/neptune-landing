/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

interface ImageProps {
  preview: any;
  image: any;
  alt: string;
  imageStyleClass: string;
  divStyleClass: string;
  bgColor: string;
}
const ImageBanner = ({
  preview,
  image,
  alt,
  imageStyleClass,
  divStyleClass,
  bgColor = "transparent",
}: ImageProps) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src: any) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, []);

  return (
    <div className={divStyleClass} style={{ overflow: "hidden" }}>
      <img
        style={{
          filter: `${loading ? "blur(20px)" : ""}`,
          transition: "1s filter linear",
          width: "100%",
          background: bgColor,
        }}
        src={currentImage}
        alt={alt}
        className={imageStyleClass}
      />
    </div>
  );
};

export default ImageBanner;
