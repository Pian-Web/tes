
export function Button({ children, className, onClick, variant = 'default' }) {
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    link: 'text-blue-600 underline hover:text-blue-800',
  };
  return (
    <button className={`${variants[variant]} px-4 py-2 rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
