import React from 'react';

// Define the shape of the component's props
interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <div className="search">
      <div>
        <input
          type="text"
          placeholder="Search a Movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
