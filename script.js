function run() {
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("javascript-code").value;

    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
    output.contentWindow.eval(jscode);
}

function updateLineNumbers(type) {
    let textarea, lineNumbers;
    if (type === 'html') {
        textarea = document.getElementById('html-code');
        lineNumbers = document.getElementById('html-line-numbers');
    } else if (type === 'css') {
        textarea = document.getElementById('css-code');
        lineNumbers = document.getElementById('css-line-numbers');
    } else if (type === 'javascript') {
        textarea = document.getElementById('javascript-code');
        lineNumbers = document.getElementById('javascript-line-numbers');
    }

    const numberOfLines = textarea.value.split('\n').length;
    lineNumbers.innerHTML = Array(numberOfLines).fill('<span></span>').join('');
}

// Initialize line numbers
document.addEventListener('DOMContentLoaded', () => {
    updateLineNumbers('html');
    updateLineNumbers('css');
    updateLineNumbers('javascript');
});
