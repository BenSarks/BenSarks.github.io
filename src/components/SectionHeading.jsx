export default function SectionHeading({ id, kicker, children, small = false }) {
  return (
    <>
      <p className="kicker">{kicker}</p>
      <h2 id={id} className={small ? 'section-title section-title-sm' : 'section-title'}>{children}</h2>
    </>
  );
}
