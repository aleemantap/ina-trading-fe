"use client";

import React from "react";
import { useParams } from "next/navigation";
import InvoiceHeader from "@/components/invoice/InvoiceHeader";


export default function InvoicePage() {
  const params = useParams();
  const id = params?.id;

  const invoice = {
    id,
    date: "18 Sept 2025",
    dueDate: "25 Sept 2025",
    buyer: {
      name: "John Doe",
      address: "Jalan Raya Jakarta No. 1, Pancoran, Jakarta Selatan",
      email: "johndoe@gmail.com",
      phone: "(021) 555-0110",
    },
    items: [
      { name: "iPhone 17 Pro Max 512GB", qty: 1, price: 360 },
      { name: "Leather Case iPhone 17 Pro Max", qty: 1, price: 5 },
    ],
    shipping: 0,
    tax: 0,
  };

  const subtotal = invoice.items.reduce((sum, i) => sum + i.qty * i.price, 0);
  const total = subtotal + invoice.shipping + invoice.tax;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-8 border border-gray-200">
      {/* <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Invoice</h1>
          <p className="text-gray-500 text-sm">INV-{invoice.id}</p>
          <p className="text-gray-500 text-sm">Date: {invoice.date}</p>
          <p className="text-gray-500 text-sm">Due: {invoice.dueDate}</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-semibold text-sky-600">
            Inatrading Store
          </h2>
          <p className="text-sm text-gray-600">Jakarta, Indonesia</p>
          <p className="text-sm text-gray-600">support@inatrading.co.id</p>
        </div>
      </div>

      
      <div className="border-t border-b py-4 mb-6">
        <h3 className="text-lg font-medium mb-2">Billed To:</h3>
        <p className="text-gray-700 font-semibold">{invoice.buyer.name}</p>
        <p className="text-gray-600 text-sm">{invoice.buyer.address}</p>
        <p className="text-gray-600 text-sm">{invoice.buyer.email}</p>
        <p className="text-gray-600 text-sm">{invoice.buyer.phone}</p>
      </div> */}
      <InvoiceHeader invoiceNumber="INV-18092025-K311-001" />

      {/* Table */}
      <table className="w-full text-left border-collapse mb-6">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3">Product</th>
            <th className="p-3 text-center">Qty</th>
            <th className="p-3 text-right">Price</th>
            <th className="p-3 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-3">{item.name}</td>
              <td className="p-3 text-center">{item.qty}</td>
              <td className="p-3 text-right">${item.price.toFixed(2)}</td>
              <td className="p-3 text-right">
                ${(item.qty * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end">
        <div className="w-1/2 sm:w-1/3">
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Shipping:</span>
            <span>${invoice.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Tax:</span>
            <span>${invoice.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-t font-semibold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t pt-4">
        <p>Thank you for your purchase!</p>
        <p>For support, contact us at support@inatrading.co.id</p>
      </div>
    </div>
  );
}
/*

"use client";

import React, { useRef } from "react";
import { useParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function InvoicePage() {
  const params = useParams();
  const id = params?.id;
  const invoiceRef = useRef<HTMLDivElement>(null);

  const invoice = {
    id,
    date: "18 Sept 2025",
    dueDate: "25 Sept 2025",
    buyer: {
      name: "John Doe",
      address: "Jalan Raya Jakarta No. 1, Pancoran, Jakarta Selatan",
      email: "johndoe@gmail.com",
      phone: "(021) 555-0110",
    },
    items: [
      { name: "iPhone 17 Pro Max 512GB", qty: 1, price: 360 },
      { name: "Leather Case iPhone 17 Pro Max", qty: 1, price: 5 },
    ],
    shipping: 0,
    tax: 0,
  };

  const subtotal = invoice.items.reduce((sum, i) => sum + i.qty * i.price, 0);
  const total = subtotal + invoice.shipping + invoice.tax;

  const handleDownloadPDF = async () => {
    if (!invoiceRef.current) return;

    const canvas = await html2canvas(invoiceRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice-${invoice.id}.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-8 border border-gray-200 relative">
      
      <button
        onClick={handleDownloadPDF}
        className="absolute right-8 top-8 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md transition"
      >
        Download Invoice
      </button>

      <div ref={invoiceRef}>
       
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Invoice</h1>
            <p className="text-gray-500 text-sm">INV-{invoice.id}</p>
            <p className="text-gray-500 text-sm">Date: {invoice.date}</p>
            <p className="text-gray-500 text-sm">Due: {invoice.dueDate}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold text-sky-600">Inatrading Store</h2>
            <p className="text-sm text-gray-600">Jakarta, Indonesia</p>
            <p className="text-sm text-gray-600">support@inatrading.co.id</p>
          </div>
        </div>

       
        <div className="border-t border-b py-4 mb-6">
          <h3 className="text-lg font-medium mb-2">Billed To:</h3>
          <p className="text-gray-700 font-semibold">{invoice.buyer.name}</p>
          <p className="text-gray-600 text-sm">{invoice.buyer.address}</p>
          <p className="text-gray-600 text-sm">{invoice.buyer.email}</p>
          <p className="text-gray-600 text-sm">{invoice.buyer.phone}</p>
        </div>

      
        <table className="w-full text-left border-collapse mb-6">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3">Product</th>
              <th className="p-3 text-center">Qty</th>
              <th className="p-3 text-right">Price</th>
              <th className="p-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-3">{item.name}</td>
                <td className="p-3 text-center">{item.qty}</td>
                <td className="p-3 text-right">${item.price.toFixed(2)}</td>
                <td className="p-3 text-right">${(item.qty * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

       
        <div className="flex justify-end">
          <div className="w-1/2 sm:w-1/3">
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Shipping:</span>
              <span>${invoice.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Tax:</span>
              <span>${invoice.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-t font-semibold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

      
        <div className="mt-8 text-center text-sm text-gray-500 border-t pt-4">
          <p>Thank you for your purchase!</p>
          <p>For support, contact us at support@inatrading.co.id</p>
        </div>
      </div>
    </div>
  );
}


*/
