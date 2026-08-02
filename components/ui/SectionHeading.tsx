type Props = { kicker: string; title: React.ReactNode; copy?: string; dark?: boolean };
export function SectionHeading({ kicker, title, copy, dark = false }: Props) {
  return <div className={`section-heading ${dark ? "is-dark" : ""}`}>
    <p className="section-kicker">{kicker}</p>
    <h2 className="display">{title}</h2>
    {copy ? <p className="section-copy">{copy}</p> : null}
  </div>;
}
