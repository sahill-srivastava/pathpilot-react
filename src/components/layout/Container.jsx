export default function Container({ 
    children,
    className = ""
 }) {
  return (
    <div className={` ${className} max-w-full md:max-w-[1140px] mx-auto px-2.5 md:px-6 lg:px-8`}>
      {children}
    </div>
  );
}
