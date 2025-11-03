"use client";
import { useState } from "react";
import { Plus,  Search } from "lucide-react";
import plus from "../../../../../assets/plus.png";
import edit1 from "../../../../../assets/edit1.png";
// import ProductModelFormParent from "./ProductModelFormParent";
import Image from "next/image";

interface InfoField {
  id: number;
  label: string;
  value: string;
}
export default function PostProduct() {
  const [primaryImage, setPrimaryImage] = useState<File | null>(null);
    const [otherImages2, setOtherImages2] = useState<File[]>([]);
  const [otherImages, setOtherImages] = useState<(File | null)[]>(
    Array(7).fill(null) // ← 7 slot kosong default
  );
  // const [images, setImages] = useState<(string | null)[]>(Array(7).fill(null));

  // const [extraOtherImages, setExtraOtherImages] = useState<File[]>([]); // slot dinamis

   const [infoFields, setInfoFields] = useState<InfoField[]>([
     { id: 1, label: "Brand", value: "" },
     { id: 2, label: "Material", value: "" },
     { id: 3, label: "Shape", value: "" },
     { id: 4, label: "Style", value: "" },
     { id: 5, label: "Maximum Weight Recommendation", value: "" },
     { id: 6, label: "Design", value: "" },
   ]);

   const labelOptions = [
     "Brand",
     "Material",
     "Shape",
     "Style",
     "Maximum Weight Recommendation",
     "Design",
     "Color",
     "Dimension",
     "Warranty",
   ];

    const handleChange = (
      id: number,
      field: keyof InfoField,
      value: string
    ) => {
      setInfoFields((prev) =>
        prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
      );
    };

    // const handleAddField = () => {
    //   const newField: InfoField = {
    //     id: Date.now(),
    //     label: "",
    //     value: "",
    //   };
    //   setInfoFields([...infoFields, newField]);
    // };

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

  //  const handleUpload = (file: File, index: number) => {
  //    const reader = new FileReader();
  //    reader.onload = () => {
  //      const newImages = [...images];
  //      newImages[index] = reader.result as string;
  //      setImages([...newImages, null]); // tambah slot upload baru di akhir
  //    };
  //    reader.readAsDataURL(file);
  //  };

  


  return (
    <div className="p-6">
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
                  // <img
                  //   src={URL.createObjectURL(primaryImage)}
                  //   alt="Primary"
                  //   className="object-cover w-full h-full rounded-lg"
                  // />
                  <Image
                    className="object-cover w-full h-full rounded-lg"
                    src={URL.createObjectURL(primaryImage)}
                    alt="Primary"
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
                      // <img
                      //   src={URL.createObjectURL(img)}
                      //   alt={`Other-${i}`}
                      //   className="object-cover w-full h-full rounded-lg"
                      // />
                      <Image
                        className="object-cover w-full h-full rounded-lg"
                        //onClick={() => router.push("/")}
                        src={URL.createObjectURL(img)}
                        alt={`Other-${i}`}
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
                    {/* <img
                    src={URL.createObjectURL(img)}
                    alt={`Other-${i}`}
                    className="object-cover w-full h-full rounded-xs"
                  /> */}
                    <Image
                      className="object-cover w-full h-full rounded-xs"
                      src={URL.createObjectURL(img)}
                      alt={`Other-${i}`}
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
            <h2 className="font-bold text-2xl mt-7 flex items-center gap-2">
              Product Name{" "}
              <Image
                className="w-8 h-8 -mt-3"
                //onClick={() => router.push("/")}
                src={edit1}
                alt="icon"
              />
            </h2>
            {/* Tags */}
            <div className="flex items-center gap-2 mb-6 mt-6">
              <label className="font-medium text-gray-700">Tags:</label>
              <div className="relative w-44">
                <input
                  type="text"
                  placeholder="Search tags..."
                  className="w-full border-2 border-black  rounded-full px-4 py-1 pr-8 text-sm focus:outline-none focus:ring focus:ring-gray-200"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1.5 text-gray-500 pointer-events-none"
                />
              </div>
            </div>
            {/* Product Detail */}
            <div className="mb-4">
              <h2 className="text-lg">Product Detail</h2>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.
              </p>
            </div>

            {/* Product Information */}
            <div className="mt-6">
              <div className="flex items-center justify-start mb-2">
                <h3 className="text-base">Product information</h3>
                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
                  // onClick={() => setInfoFields([...infoFields, "New Field"])}
                >
                  <Plus className="ml-2" size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1  gap-1">
                {infoFields.map((field) => (
                  <div
                    key={field.id}
                    className="flex items-center justify-start  gap-2 rounded-full  py-1"
                  >
                    {/* Dropdown */}
                    <select
                      value={field.label}
                      onChange={(e) =>
                        handleChange(field.id, "label", e.target.value)
                      }
                      className="border rounded px-3 h-9 text-sm font-medium text-gray-700 focus:outline-none focus:ring focus:ring-gray-200"
                    >
                      <option value="">Select label...</option>
                      {labelOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>

                    {/* Input text */}
                    <input
                      type="text"
                      placeholder="free text"
                      value={field.value}
                      onChange={(e) =>
                        handleChange(field.id, "value", e.target.value)
                      }
                      className="flex-1 text-sm border  rounded px-3 h-9  focus:outline-none focus:ring focus:ring-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 p-4">
            <div className="mt-4 ml-2 grid grid-cols-12 gap-4">
              <div className="col-span-2">
                <div className="flex flex-col items-left">
                  <p className="text-red-500 text-sm font-medium">Models</p>
                  <div className="border-2 border-dashed border-red-500 w-40 h-40 flex items-center justify-center">
                    <Image
                      className="text-red-500 w-22 h-22"
                      //onClick={() => router.push("/")}
                      src={plus}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-5 p-2">
                <table>
                  <tr key={"1"}>
                    <td width={"30%"}>Model Name</td>
                    <td>:</td>
                    <td width={"40%"} className="p-0.5">
                      <input
                        type="text"
                        placeholder="free text"
                        className="flex-1 text-sm border   rounded-3xl px-3 h-8  focus:outline-none focus:ring focus:ring-gray-200"
                      />
                    </td>
                  </tr>
                  <tr key={"2"}>
                    <td width={"30%"}>Price</td>
                    <td>:</td>
                    <td width={"40%"} className="p-0.5">
                      <input
                        type="text"
                        placeholder="free text"
                        className="flex-1 text-sm border  rounded-3xl px-3 h-8  focus:outline-none focus:ring focus:ring-gray-200"
                      />
                    </td>
                  </tr>
                  <tr key={"3"}>
                    <td width={"30%"}>Stock</td>
                    <td>:</td>
                    <td width={"40%"} className="p-0.5">
                      <input
                        type="text"
                        placeholder="free text"
                        className="flex-1 text-sm border  rounded-3xl px-3 h-8  focus:outline-none focus:ring focus:ring-gray-200"
                      />
                    </td>
                  </tr>
                  <tr key={"4"}>
                    <td width={"30%"}>Weight</td>
                    <td>:</td>
                    <td width={"40%"} className="p-0.5">
                      <input
                        type="text"
                        placeholder="free text"
                        className="flex-1 text-sm border  rounded-3xl px-3 h-8  focus:outline-none focus:ring focus:ring-gray-200"
                      />
                    </td>
                  </tr>
                  <tr key={"5"}>
                    <td width={"30%"}>Dimension</td>
                    <td>:</td>
                    <td width={"40%"} className="p-0.5">
                      <input
                        type="text"
                        placeholder="free text"
                        className="flex-1 text-sm border  rounded-3xl px-3 h-8  focus:outline-none focus:ring focus:ring-gray-200"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-span-2 p-2">
                <div className="flex flex-col items-left">
                  <p className="text-red-500 text-sm font-medium">{"-"}</p>
                  <div className="border-2 border-dashed border-red-500 w-40 h-40 flex items-center justify-center">
                    <Plus className="text-black-500 w-16 h-16 rounded-full p-1 bg-gray-200" />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleOtherUpload2}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-3 p-2">
                <p className="font-medium ml-4 text-sm">
                  Product measurement <span className="text-xl">+</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 p-4">
            <div className="ml-2 grid grid-cols-12 -mt-6">
              <div className="col-span-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="appearance-none h-5 w-7 border border-gray-600 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="ml-2 text-gray-700">Eligible to Export</span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-12 p-4">
            <div className="ml-2 grid grid-cols-12 -mt-6">
              <div className="col-span-4">
                <input
                  className="appearance-none border-2 border-gray-200 rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="Document Type: Example 'Certificate'"
                />
              </div>
              <div className="col-span-2">
                <fieldset className="border rounded-sm shadow -mt-5 ml-3">
                  <legend className="text-sm text-[#88558F]">
                    Date Published
                  </legend>
                  <div className="mb-0">
                    <input
                      type="date"
                      id="event-date"
                      name="event-date"
                      className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </fieldset>
              </div>
              <div className="col-span-2">
                <fieldset className="border rounded-sm shadow -mt-5 ml-3">
                  <legend className="text-sm text-[#88558F]">
                    Valid Until
                  </legend>
                  <div className="mb-0">
                    <input
                      type="date"
                      id="event-date"
                      name="event-date"
                      className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </fieldset>
              </div>
              <div className="col-span-3">
                <div className="-mt-6 ml-3">
                  <label
                    htmlFor="file_input"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Choose file
                  </label>
                  <input
                    type="file"
                    id="file_input"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    // onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 p-4">
            <div className="flex flex-col items-left">
              <div className="border-2 w-[70%] border-dashed border-red-500  h-13 flex items-center justify-center">
                <Plus className="text-black-500 w-7 h-7 rounded-full p-1 bg-gray-200" />
              </div>
            </div>
          </div>
          <div className="col-span-12 p-4">
            <div className="flex items-center gap-6 mt-8">
              <button
                // onClick={onCancel}
                className="bg-[#7A8DB5] w-56 hover:bg-[#6a7ca1] text-white font-semibold py-3 px-10 rounded-md transition-all duration-200"
              >
                Cancel
              </button>

              <button
                // onClick={onSubmit}
                className="bg-[#DB8683] w-56 hover:bg-[#c77471] text-white font-semibold py-3 px-10 rounded-md transition-all duration-200"
              >
                Submit &amp; Post
              </button>

              <button
                // onClick={onSaveDraft}
                className="bg-[#E1CE8A] w-56 hover:bg-[#d5bf76] text-white font-semibold py-3 px-10 rounded-md transition-all duration-200"
              >
                Save to Draft
              </button>
            </div>
          </div>
        </div>
        {/* */}
        {/* <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-2 bg-blue-200 px-4">
          Item 1 (Spans 2 columns)
        </div>
        <div className="col-span-1 bg-green-200 p-4">
          Item 2 (Spans 1 column)
        </div>
      </div> */}
        {/* <ProductModelFormParent/> */}
      </div>
    </div>
  );
}
