export const Select = ({
  selectSize = 4,
  label,
  id,
  options = [],
  value,
  onChange,
}) => {
  return (
    <div className={`col-md-${selectSize}`}>
      <label
        htmlFor={id}
        className="form-label"
        value={value} // Passa o valor do select
        onChange={onChange} // Função chamada quando o valor mudar
      >
        {label}
      </label>
      <select id={id} className="form-select">
        <option selected>Escolha...</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
