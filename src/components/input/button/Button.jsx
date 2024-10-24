import PropTypes from "prop-types";

export const Button = ({ className, classButton, type, label, onClick }) => {

/*   const handleClick = () => {
    if (type === 'reset') {
        handleReset(); // Aciona a função de limpar se for reset
    }
  }; */


  return (
    <div className={className}>
      <button type={type} className={classButton} onClick={onClick }>
        {label}
      </button>
    </div>
  );
};

// Adicionando validação das props com PropTypes
Button.propTypes = {
  formData: PropTypes.object.isRequired, // formData é um objeto e é obrigatório
  className: PropTypes.string, // className é uma string
  classButton: PropTypes.string, // classButton é uma string
  type: PropTypes.oneOf(["submit", "reset", "button"]), // type deve ser uma dessas três opções
  label: PropTypes.string.isRequired, // label é uma string e é obrigatória
  onClick: PropTypes.func, // onClick é uma função opcional
};

// Definindo valores padrão para as props que não são obrigatórias
Button.defaultProps = {
  className: "col-md-1",
  classButton: "btn btn-success text-start",
  type: "submit",
};
