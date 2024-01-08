// SearchBar.js

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      Search: <input value={searchTerm} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBar;
