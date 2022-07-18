import "./index.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input id={label} className="form-input" {...otherProps} />
      {label && (
        <label
          htmlFor={label}
          className={`${otherProps.value.length && "shrink"} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
