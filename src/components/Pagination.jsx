const Pagination = () => {
  return (
    <div className="mt-12 flex items-center justify-between">
      {/* Prev */}
      <button className="ml-20 flex size-18 items-center justify-center rounded-xl bg-[#1A1A2E]">
        <img src="./PrevButton.png" alt="previous" className="size-8" />
      </button>

      {/* Page */}
      <div className="text-2xl font-semibold text-white">
        2 <span className="text-gray-400">/ 50</span>
      </div>

      {/* Next */}
      <button className="mr-20 flex size-18 items-center justify-center rounded-xl bg-[#1A1A2E]">
        <img src="./NextButton.png" alt="next" className="size-8" />
      </button>
    </div>
  );
};

export default Pagination;
