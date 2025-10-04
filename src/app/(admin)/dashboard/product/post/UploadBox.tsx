"use client";

import React, { useState } from "react";

const UploadBox = () => {
  const [images, setImages] = useState<(string | null)[]>(Array(7).fill(null)); // 7 slot awal

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const newImages = [...images];
        newImages[index] = reader.result as string;
        setImages([...newImages, null]); // tambah 1 kotak upload baru di akhir
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((img, index) => (
        <label
          key={index}
          className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-md cursor-pointer hover:border-blue-500"
        >
          {img ? (
            <img
              src={img}
              alt="uploaded"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <span className="text-gray-400 text-3xl">+</span>
          )}
          <input
            type="file"
            className="hidden"
            onChange={(e) => handleUpload(e, index)}
          />
        </label>
      ))}
    </div>
  );
};

export default UploadBox;
