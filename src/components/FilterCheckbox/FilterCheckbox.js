import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, status }) {
  return (
    <div className="filter__checkbox">
      <label className="filter__checkbox-box">
        <input
          className="radio-checkbox"
          type="checkbox"
          name="shortFilms"
          checked={status}
          id="checkbox"
          onChange={() => onChange(!status)}
        />
        <span className="filter__checkbox-title">Короткометражки</span>
      </label>
    </div>
  );
}
export default FilterCheckbox;
