export default function PageSection({id, label, content}) {
    return (
        <section id={id}>
            <div className="section-title spacer">{label}</div>
            {content}
        </section>
    );
  }