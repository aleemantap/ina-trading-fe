"use client";
import { useState } from "react";
import { Plus, Edit2, Search } from "lucide-react";
import plus from "../../../../../assets/plus.png";
import plus2 from "../../../../../assets/plus.png";
import UploadBox from "./UploadBox";
import Image from "next/image";

export default function PostProduct() {
  const [primaryImage, setPrimaryImage] = useState<File | null>(null);
    const [otherImages2, setOtherImages2] = useState<File[]>([]);
  const [otherImages, setOtherImages] = useState<(File | null)[]>(
    Array(7).fill(null) // ← 7 slot kosong default
  );
  const [images, setImages] = useState<(string | null)[]>(Array(7).fill(null));

  const [extraOtherImages, setExtraOtherImages] = useState<File[]>([]); // slot dinamis

  const handlePrimaryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrimaryImage(e.target.files[0]);
    }
  };

    const handleOtherUpload2 = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setOtherImages2([...otherImages2, ...Array.from(e.target.files)]);
      }
    };

  const handleOtherUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const updated = [...otherImages];
      updated[index] = e.target.files[0];
      setOtherImages(updated);
    }
  };

   const handleUpload = (file: File, index: number) => {
     const reader = new FileReader();
     reader.onload = () => {
       const newImages = [...images];
       newImages[index] = reader.result as string;
       setImages([...newImages, null]); // tambah slot upload baru di akhir
     };
     reader.readAsDataURL(file);
   };

  //   const PlusDashed = () => {
  //     return (
  //       <div className="relative w-16 h-16 flex items-center justify-center cursor-pointer">
  //         {/* Garis vertikal */}
  //         <div className="absolute w-2 h-full border-l-2 border-dashed border-red-500"></div>
  //         {/* Garis horizontal */}
  //         <div className="absolute h-2 w-full border-t-2 border-dashed border-red-500"></div>
  //       </div>
  //     );
  //   };

  //   const Plus2 = () => {
  //     return (
  //       <>
  //         <label className="border-2 border-dashed border-red-500 w-[80px] h-[80px] flex items-center justify-center cursor-pointer rounded-xs">
  //           <Image
  //             className="text-red-500 w-10 h-10"
  //             //onClick={() => router.push("/")}
  //             src={plus2}
  //             alt="icon"
  //           />
  //           <input
  //             type="file"
  //             accept="image/*"
  //             multiple
  //             className="hidden"
  //             onChange={handleOtherUpload}
  //           />
  //         </label>
  //       </>
  //     );
  //   }

//   interface UploadSlotProps {
//     image: string | null;
//     onUpload: (file: File) => void;
//   }

//   const UploadSlot: React.FC<UploadSlotProps> = ({ image, onUpload }) => {
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       if (e.target.files && e.target.files[0]) {
//         onUpload(e.target.files[0]);
//       }
//     };

//     return (
//       <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-md cursor-pointer hover:border-blue-500">
//         {image ? (
//           <img
//             src={image}
//             alt="uploaded"
//             className="w-full h-full object-cover rounded-md"
//           />
//         ) : (
//           <span className="text-gray-400 text-3xl">+</span>
//         )}
//         <input type="file" className="hidden" onChange={handleChange} />
//       </label>
//     );
//   };


  return (
    <div className="border rounded-sx border-gray-300 bg-white shadow-sm p-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5 p-4">
          <div>
            <h2 className="font-bold text-lg mb-2">Post Your Product</h2>
            <label className="border-2 border-dashed border-red-500 w-93 h-[346px] flex items-center justify-center cursor-pointer relative rounded-xs">
              <span className="absolute top-1 left-2 text-xs text-red-500 bg-white rounded">
                Primary Product Image
              </span>
              {primaryImage ? (
                <img
                  src={URL.createObjectURL(primaryImage)}
                  alt="Primary"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <Image
                  className="text-red-500 w-22 h-22"
                  //onClick={() => router.push("/")}
                  src={plus}
                  alt="icon"
                />
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePrimaryUpload}
              />
            </label>
          </div>
          <div className="">
            <span className="text-xs text-red-500 bg-gray-300 px-1  rounded-2xl">
              Other product image
            </span>
            <div className="grid grid-cols-4 gap-1 mt-1 ">
              {otherImages.map((img, i) => (
                <label
                  key={i}
                  className="border-2 border-dashed border-red-500 w-21 h-[80px] flex items-center justify-center cursor-pointer "
                >
                  {img ? (
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Other-${i}`}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  ) : (
                    <Image
                      className="text-red-500 w-10 h-10"
                      //onClick={() => router.push("/")}
                      src={plus}
                      alt="icon"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleOtherUpload(e, i)}
                  />
                </label>
              ))}
              {otherImages2.map((img, i) => (
                <div
                  key={i}
                  className="border-1 border-dashed border-red-500 w-[85px] h-[80px] flex items-center justify-center "
                >
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Other-${i}`}
                    className="object-cover w-full h-full rounded-xs"
                  />
                </div>
              ))}
              <label className="border-2 border-dashed border-red-500 w-[85px] h-[80px] flex items-center justify-center cursor-pointer rounded-xs">
                <Plus className="text-black-500 w-6 h-6 rounded-2xl p-1 bg-gray-200" />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleOtherUpload2}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-7 p-4">
          <h2 className="font-bold text-2xl mt-7 flex items-center gap-">
            Product Name <Edit2 className="w-5 h-5" />
          </h2>
        </div>
      </div>
    </div>
  );
}
