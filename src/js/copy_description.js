function copyToClipboard() {
    var text = document.getElementById("out").innerHTML;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert(text)
}

function selectText() {
    // var selection = window.getSelection();
    // var selection = window.getSelection();
    // var txt = document.getElementByID("out");
    // var range = document.createRange();
    // range.selectNodeContents(txt);
    // selection.removeAllRanges();
    // selection.addRange(range);

    var text = document.getElementById("out");
    console.log('asd')
    if (document.body.createTextRange) { // ms
        console.log(1)
        var range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { // moz, opera, webkit
        console.log(2)
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function copySelected() {
    //Before we copy, we are going to select the text.
    var text = document.getElementById("out");
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    //add to clipboard.
    document.execCommand('copy');
}