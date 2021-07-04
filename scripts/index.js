let commands = false;
(() => {
    const textRichCamp = document.querySelector('#formatter-textarea');

    var elementID = 0;

    function formatRichText(textType, selectedText) {
        if(selectedText !== "") {
            elementID++;
            switch (textType) {
                case 'title-button':
                    textRichCamp.innerHTML = textRichCamp.innerText.replace(selectedText, `<div id="id${elementID}" class="bold title"></div>`)
                    document.querySelector(`#id${elementID}`).innerText = selectedText;
                    break;
                case 'bold-button' :
                    textRichCamp.innerHTML = textRichCamp.innerText.replace(selectedText, `<div id="id${elementID}" class="bold"></div>`)
                    document.querySelector(`#id${elementID}`).innerText = selectedText;
                    break;
                case 'italic-button' :
                    textRichCamp.innerHTML = textRichCamp.innerText.replace(selectedText, `<div id="id${elementID}" class="italic"></div>`)
                    document.querySelector(`#id${elementID}`).innerText = selectedText;
                    break;
                case 'code-button' :
                    textRichCamp.innerHTML = textRichCamp.innerText.replace(selectedText, `<div id="id${elementID}" class="code"><div></div></div>`)
                    document.querySelector(`#id${elementID} > div`).innerText = selectedText;
                    break;
                case 'quote-button' :
                    textRichCamp.innerHTML = textRichCamp.innerText.replace(selectedText, `<div id="id${elementID}" class="quote"><div></div></div>`)
                    document.querySelector(`#id${elementID} > div`).innerText = selectedText;
                    break;
                case 'link-button' : 
                    textRichCamp.innerHTML = textRichCamp.innerText.replace(selectedText, `<a id="id${elementID}" class="link" href="${selectedText}"><div>Link</div></div>`)
                    break;
                default:
                    window.location.href = window.location.href;
            }
        }
    }
    
    Array.from(document.querySelectorAll('.formatter-button')).forEach(element => {
        element.onclick = function() {
            formatRichText(this.id, new String(window.getSelection()))
        }
    });

    document.addEventListener('keypress', (target) => {
        if(target.shiftKey && target.ctrlKey && commands) {
            const { key } = target;
            if(key === "F") return formatRichText('title-button', new String(window.getSelection()))
            if(key === "Q") return formatRichText('bold-button', new String(window.getSelection()))
            if(key === "E") return formatRichText('italic-button', new String(window.getSelection()))
            if(key === "Y") return formatRichText('code-button', new String(window.getSelection()))
            if(key === "S") return formatRichText('quote-button', new String(window.getSelection()))
            if(key === "L") return formatRichText('link-button', new String(window.getSelection()))
        }
    })
    
})()