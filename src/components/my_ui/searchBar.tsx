import { Search } from "lucide-react";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <form className="flex gap-2 items-center">
      <div className="relative w-full">
        <input
          className="border  border-neutral-300 rounded-md px-3 py-2 w-full outline-blue-300"
          name="search"
          type="text"
          placeholder="Search"
        />
        <Search className="w-4 h-4 absolute end-0 right-4 top-3 text-neutral-400" />
      </div>
      <Button variant="default" className="py-5 bg-blue-500 hover:bg-blue-600">Search</Button>
    </form>
  );
};

export default SearchBar;
