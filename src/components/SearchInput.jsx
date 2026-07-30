const SearchInput = ({ searchInput, setSearchInput }) => {
  return (
    <div className="mx-auto mt-8 flex h-17 w-160 items-center gap-3 rounded-lg bg-[#1A1A2E] px-5">
      <img src="/search.svg" alt="Search" className="size-5" />

      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search..."
        className="flex-1 bg-transparent text-white outline-none placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchInput;
