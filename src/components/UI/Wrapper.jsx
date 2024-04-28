export default function Wrapper({ children, name }) {
  return (
    <div className={`wrapper ${name}`}>
      {children}
    </div>
  );
}
