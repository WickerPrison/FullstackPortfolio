

export default function Links({liveLink, gitHub, liveLinkLabel = "Live Website: "}) {
    return (
        <section>
            <div className="section-title spacer">Links</div>
            <div>
                <div className="links">
                    <p>{liveLinkLabel}</p>
                    <a href={liveLink}>{liveLink}</a>
                </div>
                <div className="links">
                    <p>GitHub Page: </p>
                    <a href={gitHub}>{gitHub}</a>
                </div>
            </div>
        </section>
    );
  }