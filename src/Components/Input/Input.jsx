import "./Input.scss";

const Input = ({ title, type, placeholder }) => {
  return (
    <div >
      <div className="input_title">{title}</div>
      <div className="input_text">
        <input required type={type} placeholder={placeholder} className="modal_input"  />
      </div>
      
    </div>
  );
};

export default Input;
