const copy = text => navigator.clipboard.writeText(text)
const COPY_text = document.getElementById('COPY_text');
COPY_text.addEventListener('transitionend', () => COPY_text.style.opacity=0)

function DC_copy() {
    COPY_text.style.opacity=100
    copy('Radiquum#7780');
}
