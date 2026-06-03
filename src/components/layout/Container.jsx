export default function Container({ 
    children,
    className = ""
 }) {
  return (
    <div className={` ${className} max-w-325 mx-auto px-4 md:px-6 lg:px-8`}>
      {children}
    </div>
  );
}
