import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/job-vacancy/search-result/${search}`);
  };
  return (
    <form className="flex gap-2 items-center" onSubmit={onSearch}>
      <div className="relative w-full">
        <input
          className="border  border-neutral-300 rounded-md px-3 py-2 w-full outline-blue-300"
          name="search"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="w-4 h-4 absolute end-0 right-4 top-3 text-neutral-400" />
      </div>
      <Button variant="secondary" >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
