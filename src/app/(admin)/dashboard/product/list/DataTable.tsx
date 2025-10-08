import React, { useState } from "react";
import { Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";

const TABS = [
  "All Product",
  "Draft",
  "International",
  "Local Market",
  "Out of Stock",
];

const generateProducts = () => {
  return Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://picsum.photos/seed/${i + 1}/60`,
    price: (Math.random() * 500000).toFixed(0),
    stock: Math.floor(Math.random() * 500),
    market: i % 2 === 0 ? "Local" : "International",
  }));
};

const DataTable = () => {
  const [activeTab, setActiveTab] = useState("All Product");
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;
  const data = generateProducts();

  const filteredTab =
    activeTab === "All Product"
      ? data
      : activeTab === "Draft"
      ? data.filter((_, i) => i % 5 === 0)
      : activeTab === "International"
      ? data.filter((p) => p.market === "International")
      : activeTab === "Local Market"
      ? data.filter((p) => p.market === "Local")
      : data.filter((p) => p.stock === 0);

  const filtered = filteredTab.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (newPage: any) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  const handleSearch = () => {
    setSearchQuery(search);
    setPage(1);
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
                setActiveTab(tab);
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
              <th className="p-3 text-[#808080] font-medium">PRODUCT</th>
              <th className="p-3 text-[#808080] font-medium">PRICE</th>
              <th className="p-3 text-[#808080] font-medium">STOCK</th>
              <th className="p-3 text-[#808080] font-medium">MARKET</th>
              <th className="p-3 text-[#808080] font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-11 h-12 rounded-sm object-cover"
                  />
                  <span className="font-medium">{product.name}</span>
                </td>
                <td className="p-3">
                  Rp {Number(product.price).toLocaleString()}
                </td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">
                  <div
                    className={` text-[#2C742F] p-2 rounded-md border  text-center font-medium ${
                      product.market == "International"
                        ? "bg-[#a9f2ab]"
                        : "bg-[#afaff1]"
                    }`}
                  >
                    {product.market}
                  </div>
                </td>
                <td className="p-3 items-center gap-2">
                  <button className="px-10 py-2 text-sm bg-[#00B207] text-white rounded-full hover:bg-blue-700 font-semibold">
                    See Detail
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-md text-gray-500">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
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

          {Array.from({ length: totalPages })
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
            onClick={() => handlePageChange(totalPages)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
              page === totalPages
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {totalPages}
          </button>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
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
