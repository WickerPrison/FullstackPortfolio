

export default function Links({liveLink, gitHub}) {
    return (
        <section>
            <div className="section-title spacer">Links</div>
            <div>
                <div className="links">
                    <p>Live Website: </p>
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