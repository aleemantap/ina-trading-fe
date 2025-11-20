"use client";

import { useRef } from "react";
import { ImagePlus, X } from "lucide-react";

interface SingleImageUploadProps {
  image?: File | null;
  setImage: (file: File | null) => void;
  height?: number | string; // default 300px
}

export default function SingleImageUpload({
  image,
  setImage,
  height = 300,
}: SingleImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const openPicker = () => fileInputRef.current?.click();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setImage(e.target.files[0]);
  };

  const removeImage = () => setImage(null);

  return (
    <div
      className="border rounded-md bg-gray-100 w-full flex items-center justify-center overflow-hidden relative"
      style={{ height }}
    >
      {image ? (
        <>
          <img
            src={URL.createObjectURL(image)}
            className="w-full h-full object-cover"
            alt="preview"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded"
          >
            <X size={14} />
          </button>
        </>
      ) : (
        <div
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          onClick={openPicker}
        >
          <ImagePlus size={32} />
          <span className="text-xs mt-1">Upload</span>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleUpload}
      />
    </div>
  );
}
