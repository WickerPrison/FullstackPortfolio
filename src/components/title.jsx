export default function Title({title, subtitle}) {
    return (
        <div>
            <section id="name">
                <div className="spacer"></div>
                <div>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </section>
    
            <div className="line"></div>
        </div>
    );
  }