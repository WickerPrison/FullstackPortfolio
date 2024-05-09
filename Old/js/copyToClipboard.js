

const toClipboard = (event) => {
    const copiedText = event.currentTarget.innerText;
    navigator.clipboard.writeText(copiedText);
    alert("copied to clipboard");
}

document.getElementById("email").addEventListener("click", toClipboard);
document.getElementById("phone").addEventListener("click", toClipboard);