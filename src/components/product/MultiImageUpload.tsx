"use client";

import { useRef } from "react";
import { ImagePlus, X } from "lucide-react";
import Button from "./Button";

interface MultiImageUploadProps {
  images: File[];
  setImages: (files: File[]) => void;
  max?: number;
}

export default function MultiImageUpload({
  images,
  setImages,
  max = 8, // now supports more images
}: MultiImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFiles = [...images, ...Array.from(e.target.files)];
    setImages(newFiles.slice(0, max));

    e.target.value = "";
  };

  const openPicker = () => fileInputRef.current?.click();

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const renderThumb = (
    file: File | undefined,
    index: number,
    className: string
  ) => (
    <div
      key={index}
      className={`relative bg-gray-100 border rounded-md overflow-hidden flex items-center justify-center ${className}`}
    >
      {file ? (
        <>
          <img
            src={URL.createObjectURL(file)}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded"
            onClick={() => removeImage(index)}
          >
            <X size={12} />
          </button>
        </>
      ) : (
        <div
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          onClick={openPicker}
        >
          <ImagePlus size={26} />
          <span className="text-xs mt-1">Upload</span>
        </div>
      )}
    </div>
  );

  return (
    <div>
      {/* MAIN TOP SECTION */}
      <div className="w-[470px] h-[288px] flex gap-3">
        {/* Big left thumbnail */}
        <div className="flex-1">{renderThumb(images[0], 0, "h-full")}</div>

        {/* Right 3 stacked thumbnails */}
        <div className="w-32 flex flex-col gap-3 h-full">
          {renderThumb(images[1], 1, "flex-1")}
          {renderThumb(images[2], 2, "flex-1")}
          {renderThumb(images[3], 3, "flex-1")}
        </div>
      </div>

      {/* EXTRA THUMBNAILS (5+) */}
      {images.length > 4 && (
        <div className="grid grid-cols-4 gap-3 mt-3 w-[470px]">
          {images
            .slice(4)
            .map((file, idx) => renderThumb(file, idx + 4, "h-24"))}
        </div>
      )}

      {/* hidden input */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={handleUpload}
      />

      {/* Buttons */}
      <div className="flex gap-3 mt-3">
        <Button onClick={openPicker} className="bg-[#BFCAD3] text-white">
          Add more +
        </Button>

        <Button
          onClick={() => setImages(images.slice(0, -1))}
          className="bg-[#C54D40] text-white"
        >
          Remove Last -
        </Button>
      </div>
    </div>
  );
}
