import Image from "next/image";
import Link from "next/link";

export default function OrderDetailPage() {
  const order = {
    id: 1234,
    type: "Domestic",
    name: "John Doe",
    address:
      "Jalan Raya jakarta kota nomer 1. kecamatan pancoran. jakarta selatan",
    email: "JohnDoe@gmail.com",
    phone: "(021) 555-0110",
    productOrdered: 2,
    orderTime: "18- Sept -2025 10:10:10",
    orderExpired: "20- Sept -2025 10:10:10",
    estimatedArrival: "24- Sept -2025 10:10:10",
    totalWeight: "2000 gr",
    totalDimension: "30x20x30 cm",
    expedition: "Pos Indonesia",
    awb: "AWB12331231",
    remarks: "Tolong pastikan menggunakan bubble wrap, dan sticker fragile",
    invoice: "INV-18092025-K311-01",
    status: "Waiting Seller Confirmation",
    total: 365.0,
    products: [
      {
        id: 1,
        name: "Iphone 17 Promax",
        variant: "Metallic Black 512GB",
        price: 360.0,
        qty: 1,
        image: `https://picsum.photos/seed/${1 + 1}/60`,
      },
      {
        id: 2,
        name: "Leather Case Iphone 17 Promax",
        variant: "Magnetic with button",
        price: 5.0,
        qty: 1,
        image: `https://picsum.photos/seed/${2 + 1}/60`,
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* === JUDUL === */}
        <div className="flex justify-between items-center pb-2">
          <div>
            <h2 className="text-2xl font-semibold">Your Order Detail</h2>
            <p className="text-sm text-gray-500">
              ORDER ID:{" "}
              <span className="font-medium text-gray-700">#{order.id}</span>{" "}
              <Link href="#" className="text-sky-500 hover:underline ml-2">
                {order.type}
              </Link>
            </p>
          </div>
        </div>

        <div className="px-8 ml-10 mr-10 border rounded-sm">
          <div className="flex justify-between items-center mt-2">
            <h3 className="font-semibold text-sm mb-3">
              Order Details{" "}
              <span className="text-[12px] font-normal ">
                • {order.orderTime.split(" ")[0]} • {order.productOrdered}{" "}
                Product
              </span>
            </h3>

            <Link
              href="/orders"
              className="text-green-600 font-medium hover:underline"
            >
              Back to List
            </Link>
          </div>
          {/* === DETAIL ORDER === */}
          <div className="border rounded-sm p-4">
            <div className="grid grid-cols-1 gap-x-10 text-sm">
              <div className="space-y-1">
                <table className="border-separate border-spacing-1 text-[#666666]">
                  <tbody className="">
                    <tr>
                      <td width={"30%"}>Name</td>
                      <td width={"70%"}> {order.name}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td> {order.address}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td> {order.email}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td> {order.phone}</td>
                    </tr>
                    <tr>
                      <td>Product Ordered </td>
                      <td> {order.productOrdered}</td>
                    </tr>
                    <tr>
                      <td>Order Time </td>
                      <td> {order.orderTime}</td>
                    </tr>
                    <tr>
                      <td>Order Expired Time</td>
                      <td> {order.orderExpired}</td>
                    </tr>
                    <tr>
                      <td>Estimated Arrival Time</td>
                      <td> {order.estimatedArrival}</td>
                    </tr>
                    <tr>
                      <td>Total Weight</td>
                      <td> {order.totalWeight}</td>
                    </tr>
                    <tr>
                      <td>Total Dimension</td>
                      <td> {order.totalDimension}</td>
                    </tr>
                    <tr>
                      <td>Shipping Expedition</td>
                      <td> {order.expedition}</td>
                    </tr>
                    <tr>
                      <td>Air Way Bills</td>
                      <td> {order.awb}</td>
                    </tr>
                    <tr>
                      <td>Buyer Remarks</td>
                      <td> {order.remarks}</td>
                    </tr>
                    <tr>
                      <td>Invoice Number</td>
                      <td> {order.invoice}</td>
                    </tr>
                    <tr>
                      <td>Order Status</td>
                      <td> {order.status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* === PRODUK DALAM ORDER === */}
          <div className=" overflow-hidden mt-7 -ml-8 -mr-8">
            <div className="grid grid-cols-4 bg-gray-100 text-gray-600 font-medium text-sm px-4 py-2">
              <div>PRODUCT</div>
              <div>PRICE</div>
              <div>QUANTITY</div>
              <div>SUBTOTAL</div>
            </div>

            {order.products.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center px-4 py-3 border-t text-sm"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md border"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.variant}</p>
                  </div>
                </div>
                <div>${item.price.toFixed(2)}</div>
                <div>x{item.qty}</div>
                <div>${(item.price * item.qty).toFixed(2)}</div>
              </div>
            ))}
            <div
              // key={item.id}
              className="grid grid-cols-4 items-center px-4 py-3 border-t text-sm"
            >
              <div className="flex items-center space-x-3">
                <div>
                </div>
                </div>
                <div></div>
                <div>Total</div>
                <div className="py-5">
                  ${order.total.toFixed(2)}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
