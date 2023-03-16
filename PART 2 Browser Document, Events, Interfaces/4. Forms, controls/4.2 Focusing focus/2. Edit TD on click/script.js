'use strict'

let table = document.getElementById('bagua-table');
let textarea = document.createElement('textarea');
let editSession = false;

function addMenu(textareaElem, targetElem) {
    let div = document.createElement('div');
    let buttonOk = document.createElement('button');
    let buttonCncl = document.createElement('button');
    buttonOk.textContent = 'OK';
    buttonCncl.textContent = 'CANCEL';
    div.append(buttonOk, buttonCncl);
    div.style.position = 'absolute';

    div.addEventListener('click', e => {
        if (e.target == buttonOk) {
            targetElem.innerHTML = textareaElem.value;
        }

        div.remove();
        editSession = false;
        textareaElem.replaceWith(targetElem);
    });

    return div;
}

function applyStyle(textareaElem, targetElem) {
    textareaElem.style.border = 'none';
    textareaElem.style.resize = 'none';
    textareaElem.style.padding = 0;
    textareaElem.style.width = targetElem.clientWidth + 'px';
    textareaElem.style.height = targetElem.clientHeight + 'px';
    textareaElem.style.outline = 'none';
    textareaElem.style.display = 'block';
}

table.addEventListener('click', event => {
    let target = event.target.closest('td');

    if (!target || editSession) return;
    if (!table.contains(target)) return;

    editSession = true;
    target.after(addMenu(textarea, target));
    textarea.value = target.innerHTML;
    applyStyle(textarea, target);
    target.replaceWith(textarea);
    textarea.focus();
});