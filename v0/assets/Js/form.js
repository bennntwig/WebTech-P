let videoRadio = document.getElementById("videoRadio");
let textRadio = document.getElementById("textRadio");

let wertTextArea = document.createElement("textarea");
wertTextArea.id = "Wert";
wertTextArea.name = "Content";
wertTextArea.required = true;
wertTextArea.placeholder = "YouTube Embed Code des Tutorials";
videoRadio.onclick = function () {
    document.getElementById("Wert").replaceWith(wertTextArea);
    document.getElementById("dauer").parentNode.className = "required";
};

let wertInputText = document.createElement("input");
wertInputText.type = "text";
wertInputText.id = "Wert";
wertInputText.name = "Content";
wertInputText.required = true;
wertInputText.placeholder = "Link zum Tutorial";

textRadio.onclick = function () {
    document.getElementById("Wert").replaceWith(wertInputText);
    document.getElementById("dauer").parentNode.className = "notRequired";
}
