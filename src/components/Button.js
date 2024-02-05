// `bg-${color}-500 hover:bg-${color}-700 border m-1 py-2 px-4 rounded`
const Button = ({ text, color }) => {
  return (
    <button className={`${color} hover:${color} border m-1 py-2 px-4 rounded`}>
      {text}
    </button>
  );
};

export default Button;
