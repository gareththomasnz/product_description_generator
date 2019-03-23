function copyToClipboard() {
    var text = document.getElementById("out").innerHTML;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    // alert(text)
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
    selection.empty();
}

var i = Math.floor(Math.random() * 3);
color = ['#4ECDC4', '#FF6B6B', '#F4D46B'];

document.querySelectorAll('.color-shift').forEach(function(e) {
    e.addEventListener('click', function() {
        if (i == 2) {
            i = 0;
        } else {
            i = i + 1;
        }
        this.style.backgroundColor = color[i];
    })
});

// function changeColor() {
//     Array.from(document.getElementById('copy-btn')).forEach(function (button) {
//         button.style.backgroundColor = color[i];
//         if (i == 2) {
//             i = 0;
//         } else {
//             i = i + 1;
//         }
//
//     })
// }