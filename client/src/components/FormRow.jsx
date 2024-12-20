const FormRow = ({ type, name, labelText, defaultValue, icon }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <div className="input-wrapper">
        {icon && <span className="icon">{icon}</span>}
        <input
          type={type}
          name={name}
          id={name}
          className="form-input"
          defaultValue={defaultValue || ""}
          required
        />
      </div>
    </div>
  );
};

export default FormRow;
