export const Input = ({
  inputSize = 6,
  label,
  id,
  type = "text",
  value,
  ref,
  onChange,
  onKeyUp
}) => {

    
  return (
    <div className={`col-md-${inputSize}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value} // Valor atual do input
        ref={ref}
        onChange={onChange} // Função chamada quando o valor mudar
        onKeyUp={onKeyUp}
      />
    </div>
  );
};
