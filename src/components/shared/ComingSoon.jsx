const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center w-10/12 m-auto">
      <div className="w-full p-10 ">
        <h1 className="text-6xl  font-bold text-gray-800 mb-4">
          Great things coming soon.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The{" "}
          <span className="font-bold text-gray-700 text-2xl">Home Page</span>{" "}
          page you are looking for is under development.
        </p>
        {/* <Link
          to="/campaigns"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Go to Campaigns
        </Link> */}
      </div>
    </div>
  );
};

export default ComingSoon;
