"use client";
import { MapPin, } from "lucide-react";
import { Check } from "lucide-react";

export default function TrackingOrderPage({ orderId }: { orderId?: string }) {
    console.log("Tracking for order:", orderId);
    const trackingData = [
    {
      status: "Delivered, parcel locker",
      location: "PROVIDENCE, RI 02903",
      date: "April 3, 2023, 4:23pm",
      completed: true,
    },
    {
      status: "Out for delivery",
      location: "PROVIDENCE, RI 02903",
      date: "April 3, 2023, 7:37am",
      completed: false,
    },
    {
      status: "Arrived at post office",
      location: "PROVIDENCE, RI 02903",
      date: "April 3, 2023, 7:26am",
      completed: false,
    },
    {
      status: "Departed USPS regional facility",
      location: "PROVIDENCE, RI 02903",
      date: "April 3, 2023, 3:47am",
      completed: false,
    },
    {
      status: "In transit to next facility",
      location: "",
      date: "April 2, 2023",
      completed: false,
    },
    {
      status: "Departed post office",
      location: "NEW YORK, NY 10013",
      date: "March 31, 2023, 6:04pm",
      completed: false,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      {/* === LEFT SIDE - TIMELINE === */}
      <div className="space-y-6 border-l-3 border-[#126DA0] pl-6">
        {trackingData.map((item, index) => (
          <div key={index} className="relative flex flex-col gap-1">
            {/* Timeline Dot */}
            <div
              className={`absolute  ${
                item.completed
                  ? "bg-[#2F6926] w-6 h-6 -left-[38px] -top-1"
                  : "bg-[#126DA0] w-3 h-3 -left-[31px]  top-1"
              }  rounded-full flex items-center justify-center`}
            >
              {item.completed ? (
                <Check size={16} className="text-white" />
              ) : (
                <Check size={12} className="text-[#126DA0]" />
              )}
            </div>

            {/* Status Info */}
            <h3
              className={`font-semibold ${
                item.completed ? "text-green-700" : "text-[#0F5780]"
              }`}
            >
              {item.status}
            </h3>
            <p className="text-gray-600 text-sm">{item.location}</p>
            <p className="text-gray-500 text-xs">{item.date}</p>
          </div>
        ))}
      </div>

      {/* === RIGHT SIDE - MAP === */}
      <div className="relative h-[500px] rounded-sm overflow-hidden shadow">
        <iframe
          title="tracking-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19886.39324490228!2d-71.4128349!3d41.8239891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1680999934823!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

        {/* Lokasi Tujuan */}
        <div className="absolute bottom-4 left-4 bg-white shadow rounded-lg p-3 flex items-start space-x-3">
          <MapPin className="text-blue-500 mt-1" size={18} />
          <div>
            <p className="font-medium text-sm">8502 Preston</p>
            <p className="text-xs text-gray-500">Rd. Inglewood, Maine 98380</p>
          </div>
        </div>

        {/* Lokasi Awal */}
        <div className="absolute top-4 right-4 bg-white shadow rounded-lg p-3 flex items-start space-x-3">
          <MapPin className="text-green-500 mt-1" size={18} />
          <div>
            <p className="font-medium text-sm">2972 Westheimer</p>
            <p className="text-xs text-gray-500">
              Rd. Santa Ana, Illinois 85486
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
