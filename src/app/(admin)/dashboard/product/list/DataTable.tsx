import React, { useState, useEffect } from "react";
import { Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../../../store";
import Image from "next/image";
import Link from "next/link";
import {
  fetchProducts,
  setPage,
  setParam,
  setUrl,
} from "../../../../../store/reducers/product/productSlice";
const TABS = [
  "All Product",
  "Draft",
  "International",
  "Local Market",
  "Out of Stock",
];
const TAB_URL_MAP: Record<string, string> = {
  "All Product": "/seller/product",
  "Draft": "/seller/draft/product",
  "International": "/seller/international/product",
  "Local Market": "/seller/local/product", 
  "Out of Stock": "/seller/outofstock/product", 
};
const TAB_URL_MAP_ADMIN: Record<string, string> = {
  "All Product": "/product",
  "Draft": "/admin/draft/product",
  "International": "/admin/international/product",
  "Local Market": "/admin/local/product",
  "Out of Stock": "/admin/outofstock/product",
};

const DataTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeTab, setActiveTab] = useState("All Product");
  const { loading, rows, error, page, totalPage, param } = useSelector(
    (state: RootState) => state.product
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const [query, setQuery] = useState(param);

  useEffect(() => {
    let baseUrl = "/product";
    if (user?.userType === "SELLER") {
      // Tentukan URL berdasarkan tab aktif
      baseUrl = TAB_URL_MAP[activeTab] || "/seller/product";
    }
     if (user?.userType === "ADMIN") {
       // Tentukan URL berdasarkan tab aktif
       baseUrl = TAB_URL_MAP_ADMIN[activeTab] || "/product";
     }
    dispatch(setUrl(baseUrl));
    dispatch(fetchProducts({ page, size: 10, param }));
  }, [dispatch, page, param, user, activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPage) {
      dispatch(setPage(newPage));
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    //console.log(query);
    e.preventDefault();
    dispatch(setPage(1)); // reset ke halaman 1
    dispatch(setParam(query.trim()));
  };

  return (
    <div className="p-4">
      {/* Tabs + Search */}
      <div className="flex justify-between items-center h-15  border-gray-300 ">
        {/* Tabs */}
        <div className="flex gap-1 mt-6">
          {TABS.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => {
                handleTabClick(tab);
                setPage(1);
              }}
              className={`w-33 rounded-tl-md  rounded-bl-md rounded-tr-md rounded-br-md  relative pl-1 pr-6 py-2 text-sm font-semibold border border-gray-300 
                transition-all duration-200 
                ${
                  activeTab === tab
                    ? "bg-[#D9D9D9] text-[#BE0000] shadow-lg shadow-gray-500/50 z-20 "
                    : "bg-gray-200 text-black hover:bg-gray-300 z-10"
                }
              `}
              style={{
                clipPath: "polygon(0 0, 68% 0, 100% 71%, 100% 100%, 0 100%)",
                marginLeft: idx === 0 ? "0" : "-18px", // overlap
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden w-80">
          <div className="flex items-center pl-3 text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search your product"
            className="flex-1 px-3 py-2 text-sm focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-sky-400 text-white text-sm font-medium hover:bg-sky-500"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 shadow-sm ">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b h-15">
              <th className="p-1 text-[#808080] font-medium">PRODUCT</th>
              <th className="p-1 text-[#808080] font-medium">PRICE</th>
              <th className="p-1 text-[#808080] font-medium">STOCK</th>
              <th className="p-1 text-[#808080] font-medium">MARKET</th>
              <th className="p-1 text-[#808080] font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center">
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-3 text-gray-600">
                      Loading products...
                    </span>
                  </div>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={5} className="p-8 text-center">
                  <div className="text-red-500">
                    <p className="font-medium">Error loading products</p>
                    <p className="text-sm mt-1">{error}</p>
                    <button
                      onClick={() =>
                        dispatch(fetchProducts({ page, size: 10, param }))
                      }
                      className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    >
                      Try Again
                    </button>
                  </div>
                </td>
              </tr>
            ) : !rows || rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center">
                  <div className="text-gray-500">
                    <p className="font-medium">No products found</p>
                    <p className="text-sm mt-1">
                      {param
                        ? `No results for "${param}"`
                        : "No products available for this tab"}
                    </p>
                    {param && (
                      <button
                        onClick={() => {
                          setQuery("");
                          dispatch(setParam(""));
                        }}
                        className="mt-3 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              // Render actual data rows
              rows.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-1 flex items-center gap-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={"52"}
                      height={"53"}
                      className="rounded-sm object-cover"
                    />
                    <span className="font-medium">{product.name}</span>
                  </td>
                  <td className="p-1">
                    Rp {product.minPrice?.toLocaleString()} - Rp{" "}
                    {product.maxPrice?.toLocaleString()}
                  </td>
                  <td className="p-1">{product.totalStock}</td>
                  <td className="p-1 ">
                    <button
                      className={` text-[#2C742F] px-3 py-1 rounded-md border text-xs text-center  ${
                        product.market == "International"
                          ? "bg-[#a9f2ab]"
                          : "bg-[#afaff1]"
                      }`}
                    >
                      {product.market}
                    </button>
                  </td>
                  <td className="p-1">
                    <div className="flex items-center">
                      <Link
                        href={`/dashboard/product/${product.id}`}
                        //href={`/orders/tracking/${order.id}`} // contoh: bisa pakai id order
                        className="bg-green-500 text-white rounded-full text-xs px-5 py-1 hover:bg-sky-500 transition"
                      >
                        See Detail
                      </Link>
                      <button className="p-3  hover:bg-gray-100 rounded-md text-gray-500">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-6 gap-2 mb-4 mr-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-gray-300 text-gray-800 disabled:opacity-40"
          >
            <ChevronLeft />
          </button>

          {Array.from({ length: totalPage })
            .slice(0, 5)
            .map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
                  page === i + 1
                    ? "bg-[#0033B2] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

          <span className="mx-1">...</span>

          <button
            onClick={() => handlePageChange(totalPage)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
              page === totalPage
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {totalPage}
          </button>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPage}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 disabled:opacity-40"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
