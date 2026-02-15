import "./yearSelector.css";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 11 }, (_, i) => currentYear - i);

function YearSelector({ selectedYear, onSelect }) {
  return (
    <div className="year-selector">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          className={`year-selector-btn ${selectedYear === year ? "year-selector-btn-active" : ""}`}
          onClick={() => onSelect(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
}

export default YearSelector;
