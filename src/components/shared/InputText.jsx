const InputText = ({ type, id, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
