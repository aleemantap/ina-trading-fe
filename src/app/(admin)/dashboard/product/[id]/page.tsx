// "use client";
// import { useProductDetail } from "../../../../../store/hooks/useProductDetail";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// // import Link from "next/link";

// export default function ProductDetailPage() {
//     const params = useParams();
//     const productId = params.id as string;
  
//     const { product, loading, error } = useProductDetail(productId);

//     if (loading) return <div>Loading product...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (!product) return <div>Product not found</div>;


//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold mb-3">Product Detail</h1>
//         <div className="grid gap-4">
//           <h1>{product.name}</h1>
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={"52"}
//             height={"53"}
//             className="rounded-sm object-cover"
//           />
//           <p>{product.description}</p>
//           <h3>Tag:</h3>
//           {product.tag.map((tag) => (
//             <div key={tag.id}>
//               <p>Name : {tag.name}</p>
//               <p>Group : {tag.group.name}</p>
//             </div>
//           ))}
//           <h3>Product Image :</h3>
//           {product.productImages.map((img) => (
//             <div key={img.id}>
//               <p>
//                 Image :{" "}
//                 <Image
//                   src={img.image}
//                   alt={img.image}
//                   width={"52"}
//                   height={"53"}
//                   className="rounded-sm object-cover"
//                 />
//               </p>
//               <p>Sequence : {img.sequence}</p>
//             </div>
//           ))}
//           <h3>Product Informations</h3>
//           {product.productInformations.map((info) => (
//             <div key={info.id}>
//               <p>Param Name : {info.paramName} </p>
//               <p>Param Value : {info.paramValue} </p>
//             </div>
//           ))}
//           <h3>Product Model</h3>
//           {product.productModels.map((model) => (
//             <div key={model.id}>
//             <p>Price: Rp {model.price.toLocaleString()}</p> 
//             <p>Stock: {model.stock}</p>
//             </div>
//           ))} 
//         </div>
//       </div>
//     );

// }

"use client";
import { useProductDetail } from "../../../../../store/hooks/useProductDetail";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Tag,
  Info,
  Layers,
  DollarSign,
  Package,
  Edit3,
  Share2,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const { product, loading, error } = useProductDetail(productId);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Error Loading Product
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link
            href="/dashboard/product/list"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to List Products
          </Link>
        </div>
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The product you{"'"}re looking for doesn{"'"}t exist.
          </p>
          <Link
            href="/dashboard/product/list"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to List Products
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard/product/list"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to List Products
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">
                Product Details
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                <Edit3 size={16} className="mr-2" />
                Edit
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                <Share2 size={16} className="mr-2" />
                Share
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                <Heart size={16} className="mr-2" />
                Favorite
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Additional Images */}
            {product.productImages.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  <Layers size={20} className="mr-2" />
                  Product Gallery
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.productImages.map((img) => (
                    <div key={img.id} className="relative group">
                      <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 border-2 border-transparent group-hover:border-blue-500 transition">
                        <Image
                          src={img.image}
                          alt={`Product image ${img.sequence}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-1 rounded">
                        #{img.sequence}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Price Range */}
              {product.productModels.length > 0 && (
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Price Range</p>
                      <p className="text-2xl font-bold text-gray-900">
                        Rp{" "}
                        {Math.min(
                          ...product.productModels.map((m) => m.price)
                        ).toLocaleString()}{" "}
                        - Rp{" "}
                        {Math.max(
                          ...product.productModels.map((m) => m.price)
                        ).toLocaleString()}
                      </p>
                    </div>
                    <DollarSign size={32} className="text-blue-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Product Models */}
            {product.productModels.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  <Package size={20} className="mr-2" />
                  Variants & Pricing
                </h3>
                <div className="space-y-3">
                  {product.productModels.map((model, index) => (
                    <div
                      key={model.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          Variant {index + 1}
                        </p>
                        <p className="text-sm text-gray-600">
                          Stock: {model.stock} units
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-600">
                          Rp {model.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {product.tag.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  <Tag size={20} className="mr-2" />
                  Product Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tag.map((tag) => (
                    <div
                      key={tag.id}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                    >
                      <span className="font-medium">{tag.name}</span>
                      <span className="mx-2">•</span>
                      <span className="text-blue-600">{tag.group.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Product Information */}
            {product.productInformations.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  <Info size={20} className="mr-2" />
                  Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.productInformations.map((info) => (
                    <div
                      key={info.id}
                      className="border-l-4 border-blue-500 pl-4 py-2"
                    >
                      <p className="font-medium text-gray-900">
                        {info.paramName}
                      </p>
                      <p className="text-gray-600">{info.paramValue}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <Package size={24} className="mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {product.productModels.length}
            </p>
            <p className="text-gray-600">Variants</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <Layers size={24} className="mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {product.productImages.length}
            </p>
            <p className="text-gray-600">Images</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <Tag size={24} className="mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {product.tag.length}
            </p>
            <p className="text-gray-600">Tags</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <Info size={24} className="mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {product.productInformations.length}
            </p>
            <p className="text-gray-600">Specifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
