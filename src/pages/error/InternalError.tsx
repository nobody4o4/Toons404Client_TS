function InternalError() {
  return (
    <div>
      {" "}
      <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="mb-4 text-8xl font-bold">500</h1>
        <h2 className="mb-8 text-4xl font-bold">Oops! Something went wrong.</h2>
        <p className="mb-12 text-gray-400">
          We're sorry, but an unexpected error has occurred. Please try again
          later.
        </p>
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-80 animate-bounce">
            <div className="absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
            <div className="animation-delay-200 absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
            <div className="animation-delay-400 absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
            <div className="animation-delay-600 absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
            <div className="animation-delay-800 absolute left-0 top-0 h-full w-full rounded-full bg-red-500 opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InternalError;
