export default function SectionTitle({ className, children }) {
  return (
    <>
      <h3 className={`text-center font-bold text-3xl mb-20 ${className}`}>
        {children}
      </h3>
    </>
  );
}
