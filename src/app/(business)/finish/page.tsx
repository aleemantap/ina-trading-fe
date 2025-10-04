export default function FinishPage() {
  return (
    <div className="mx-auto w-full max-w-6xl rounded-lg border p-8 shadow-sm bg-white">
      <h1 className="mb-4 text-2xl font-semibold">Data Submitted</h1>
      {/*  */}
      <div className="grid grid-cols-3 gap-x-4">
        <div>
          <p className="mb-2 text-gray-700">
            Your data submitted successfully, please wait our review to start
            your store and sell your product.
          </p>
          <p className="mb-4 text-gray-700">
            We will contact you to confirm all the data, please make sure your
            phone is active.
          </p>
          <a
            href="/products"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Click here to browse other product.
          </a>
        </div>
        {/* <div></div> */}
        {/* <div></div> */}
      </div>
    </div>
  );
}
