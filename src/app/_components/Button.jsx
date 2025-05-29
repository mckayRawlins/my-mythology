export default function Button({ children, onClick, className }) {
  return (
    <div className={className}>
      <button
        className="bg-green-700 p-3 rounded-2xl hover:bg-green-600 hover:cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
