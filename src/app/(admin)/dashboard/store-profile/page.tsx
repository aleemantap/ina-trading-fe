"use client";

import React, { useState } from "react";
import Image from "next/image";
import storeProfile from "../../../..//assets/store-profile.png";
import eyeView from "../../../..//assets/eyeView.png";
import camera from "../../../..//assets/camera.png";
import ig from "../../../..//assets/ig.png";
import fb from "../../../..//assets/fb.png";
import twitter from "../../../..//assets/twitter.png";

import { ChevronLeft,  } from "lucide-react";



export default function StoreProfilePage() {

    
const [storeName, setStoreName] = useState("mystore");
const [email, setEmail] = useState("contact@myshop.com");
const [phone, setPhone] = useState("(575) 336-4330");
const [bio, setBio] = useState("");
const [photo, setPhoto] = useState(storeProfile); // sementara
const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    //const url = URL.createObjectURL(e.target.files[0]);
    // setPhoto(url);
  }
};
     
  return (
    <div className="p-6">
      {/* Top Section - Store Details */}
      <button className="flex items-center py-2 mb-5">
        <ChevronLeft className="w-5 h-5 text-[#828282]" />
        <span className="ml-5 text-[#828282]">Settings</span>
      </button>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold mb-4">Store Details</h2>
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-black border-b border-transparent hover:border-gray-600 transition-all duration-200 pb-0.5"
            >
              <Image
                src={eyeView}
                alt="store"
                className="w-4 h-4 object-cover"
              />
              view store
            </a>
          </div>
        </div>
        <div className="bg-white h-[250px] rounded-tl-[3rem] rounded-md border-1  border-b-4 border-[#EAEAEA] shadow-2xs">
          <div className="bg-gray-100 h-[250px] rounded-tl-[3rem] rounded-md relative flex items-center justify-center">
            <button className="absolute bottom-2 right-2 bg-white shadow-md rounded-full p-2 hover:bg-gray-50">
              <Image
                src={camera}
                alt="store"
                className="w-4 h-4 object-cover"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative p-6 pl-50 min-h-[120px] flex items-center ml-5">
            {/* Lingkaran gambar - setengah masuk ke kotak */}
            <div className="absolute -top-12 left-6 w-40 h-40 rounded-full border-[6px] bg-[#E0E7FFB5] border-white shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={photo}
                  alt="store"
                  className="w-30 h-30 object-cover"
                />
              </div>
            </div>
            {/* Konten teks */}
            <div>
              <h3 className=" text-[#25252D] text-2xl font-semibold -mt-10">
                Store Profile
              </h3>
              <p className="text-gray-500 text-sm">
                Update your store profile photos and settings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Store Information */}
      <div className="bg-white border-2 rounded-xs shadow-sm ">
        <div className="border-b-2 border-gray-300 px-6 py-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Store Information
          </h2>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Store Name
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  value={storeName}
                  placeholder="Mystore"
                  onChange={(e) => setStoreName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Email Address
              </label>
              <div className="col-span-3">
                <input
                  type="email"
                  className="block w-full  border border-gray-300 p-2 "
                  value={email}
                  placeholder="contact@myshop.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 p-2">
                Phone Number
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  value={phone}
                  placeholder="(575) 336-4330"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Biography
              </label>
              <div className="col-span-3">
                <textarea
                  className="block w-full  border border-gray-300 p-2"
                  rows={4}
                  placeholder="Write a short biography"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Store profile photo
              </label>
              <div className="col-span-3">
                <div className="flex items-center justify-between">
                  {/* Image dengan overlay hover effect */}
                  <label
                    htmlFor="photo-upload"
                    className="cursor-pointer relative group"
                  >
                    <div className="w-30 h-30 rounded-full border-1  bg-[#E0E7FFB5] border-gray-300 group-hover:border-indigo-400 transition-colors overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src={photo}
                          alt="store"
                          className="w-20 h-20 object-cover"
                        />
                      </div>
                    </div>
                    {/* Overlay saat hover */}
                    <div className="absolute inset-0 group-hover:bg-opacity-30 transition-opacity rounded-full flex items-center justify-center">
                      <span className="text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to upload
                      </span>
                    </div>
                  </label>

                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />

                  <div className="flex gap-4 items-center">
                    <button
                      type="button"
                      // onClick={() =>
                      //   document.getElementById("photo-upload").click()
                      // }
                      className="text-indigo-600 font-medium hover:underline text-sm -mt-20"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700 text-sm -mt-20"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  svg, png, jpg or gif (max 800x400px)
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-4 border-t-2 p-3 bg-[#FBFBFB]">
          <div></div> {/* Spacer untuk kolom label */}
          <div className="col-span-3 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#7047EB] rounded-[5px] text-white hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Section - Store Address */}
      <div className="bg-white border-2 rounded-xs shadow-sm mt-9">
        <div className="border-b-2 border-gray-300 px-6 py-3">
          <h2 className="text-lg font-semibold text-gray-800">Store Address</h2>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Legal Business Name
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  // value={storeName}
                  placeholder="Tesla Inc"
                  // onChange={(e) => setStoreName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Address Line 1
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 pt-2 "
                  // value={email}
                  placeholder="1028 New Mexico"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Address Line 2
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  //value={phone}
                  placeholder=""
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                City
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  //value={phone}
                  placeholder="Alto"
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Postcode / ZIP
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  //value={phone}
                  placeholder="22222"
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Country
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  //value={phone}
                  placeholder="US"
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                State
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  //value={phone}
                  placeholder="New York"
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Locate On Maps
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  //value={phone}
                  placeholder="Alto New York"
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 items-start">
              TES ini peta
            </div>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-4 border-t-2 p-3 bg-[#FBFBFB]">
          <div></div> {/* Spacer untuk kolom label */}
          <div className="col-span-3 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#7047EB] rounded-[5px] text-white hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {/* Produk per page */}
      <div className="bg-white  mt-9">
        <div className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Product Per Page
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  // value={storeName}
                  placeholder="25"
                  // onChange={(e) => setStoreName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Tearm & Conditions
              </label>
              <div className="col-span-3">
                <textarea
                  className="block w-full  border border-gray-300 pt-2 "
                  // value={email}
                  placeholder="Write you store"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Store Visibility
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  //value={phone}
                  placeholder=""
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Store Categories
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  className="block w-full  border border-gray-300 p-2"
                  //value={phone}
                  placeholder="Alto"
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div></div> {/* Kolom kosong untuk label */}
          <div className="col-span-3 flex justify-end gap-3 pr-5">
            <button
              type="submit"
              className="px-6 py-2 bg-[#E0E7FF] rounded-[5px] text-[#4F46E5] font-bold hover:bg-indigo-700"
            >
              Beauty
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#E0E7FF] rounded-[5px] text-[#4F46E5] font-bold hover:bg-indigo-700"
            >
              Fashion
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#E0E7FF] rounded-[5px] text-[#4F46E5] font-bold hover:bg-indigo-700"
            >
              Cosmetics
            </button>
          </div>
        </div>
      </div>
      {/* Linked Account */}
      <div className="bg-white border-2 rounded-xs shadow-sm mt-9">
        <div className="border-b-2 border-gray-300 px-6 py-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Linked Accounts
          </h2>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Twitter
              </label>
              <div className="">
                <Image src={twitter} alt="twitter" className="w-24 h-24" />
              </div>
              <div className="">Manage</div>
              <div className="">Remove</div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Facebook
              </label>
              <div className="">
                <Image src={fb} alt="twitter" className="w-24 h-24" />
              </div>
              <div className="">Manage</div>
              <div className="">Remove</div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-start">
              <label className="block text-sm font-medium text-gray-700 pt-2">
                Instagram
              </label>
              <div className="">
                <Image src={ig} alt="twitter" className="w-24 h-24" />
              </div>
              <div className="">Manage</div>
              <div className="">Remove</div>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-4 border-t-2 p-3 bg-[#FBFBFB]">
          <div></div> {/* Spacer untuk kolom label */}
          <div className="col-span-3 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#7047EB] rounded-[5px] text-white hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
