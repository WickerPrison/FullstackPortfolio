export default function TextContent({text, centered = false}) {
    return (
        <div>
            {centered ? (
                <p className="centered-p">{text}</p>
            ):(
                <p>{text}</p>
            )}
        </div>
    );
  }