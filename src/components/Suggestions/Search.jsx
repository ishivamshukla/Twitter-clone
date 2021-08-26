const Search = () => {
  return (
    <form
      className="suggestions-search-form"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <label className="suggestions-search-form__label" htmlFor="search-input">
        <input
          className="suggestions-search-form__input"
          type="search"
          placeholder="Search Twitter"
          autoComplete="off"
          id="search-input"
        />
      </label>
    </form>
  );
};

export default Search;
