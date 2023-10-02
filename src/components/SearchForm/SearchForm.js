import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";

function SearchForm({
  value,
  handleSearch,
  onChangeShort,
  shortStatus,
  title
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputSearchMessage, setInputSearchMessage] = useState("");


  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);

    if (event.target.value === "") {
      setInputSearchMessage("Нужно ввести ключевое слово");
    } else {
      setInputSearchMessage("");
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(inputValue);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          className="search__input"
          value={inputValue || ""}
          type="text"
          name="search-input"
          placeholder={title}
          required
          minLength={2}
          maxLength={20}
          onChange={handleChangeInput}
        ></input>
        <button className="search__button" type="submit">
          Найти
        </button>
        <span className="search__form-error">{inputSearchMessage}</span>

      </form>
      <FilterCheckbox status={shortStatus} onChange={onChangeShort} />
    </div>
  );
}

export default SearchForm;
