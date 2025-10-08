// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "standalone",
// };

//export default nextConfig;
import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "standalone", // ✅ untuk build deploy (ringan, tanpa node_modules besar)

//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "http://34.101.223.0:8080/api/:path*", // arahkan ke backend HTTP
//         // destination: process.env.baseUrl+"/api/:path*", 
//       },
//     ];
//   },
// };

// export default nextConfig;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        //destination: "http://34.101.223.0:8080/api/:path*",
        destination: process.env.NEXT_PUBLIC_IP_ADDRESS + "/api/:path*",
      },
    ];
  },
  output: "standalone",
};

export default nextConfig;