export  const Input = ({ inputSize = 6, label, id, type = 'text', value, ref, handleChange }) => {

    return (
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                ref={ref}
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={handleChange} />
        </div>
    )
}
