const fields = [
    { txt: 0, row: 5, col: '1/span 2' },
    { txt: 1, row: 4, col: 1 },
    { txt: 2, row: 4, col: 2 },
    { txt: 3, row: 4, col: 3 },
    { txt: 4, row: 3, col: 1 },
    { txt: 5, row: 3, col: 2 },
    { txt: 6, row: 3, col: 3 },
    { txt: 7, row: 2, col: 1 },
    { txt: 8, row: 2, col: 2 },
    { txt: 9, row: 2, col: 3 },
    { txt: ',', row: 5, col: 3 },
    { txt: '+', row: 3, col: 4 },
    { txt: '-', row: 4, col: 4 },
    { txt: 'C', row: 2, col: 4 },
    { txt: 'Display', row: 1, col: '1/span 4' },
    { txt: '=', row: 5, col: 4 }
];
let clearFlag = false;
let mem=0;
let op=0;
const handleClick = ev => {
    const d = document.getElementById('Display');
    const key = ev.target.textContent;
    switch (key) {
        case 'C':
            d.textContent = '0';
            clearFlag = false;
            mem = op = 0;
            break;
        case '+':
        case '-':
            if (op === 0) {
                mem = parseFloat(d.textContent);
            } else {
                mem += op * parseFloat(d.textContent);
            }
            op = key === '+' ? 1 : -1;
            clearFlag = true;
            break;

        case '=':
            if (op === 0) {
                mem = parseFloat(d.textContent);
            } else {
                mem += op * parseFloat(d.textContent);
            }
            op = 0;
            d.textContent = mem;
            break;

        default:
            if (key === '0' && d.textContent === '0') return;
            if (key === '.' && d.textContent.includes('.')) return;
            if ((d.textContent === '0' && key !== '.') || clearFlag) {
                d.textContent = key;
                clearFlag = false;
            } else {
                d.textContent += key;
            }
            break;
    }
};
const init = () => {
    const container = document.createElement('div');
    container.id = 'container';

    fields.forEach(el => {
        const div = document.createElement('div');
        div.textContent = el.txt;
        div.style.gridColumn = el.col;
        div.style.gridRow = el.row;

        if (el.txt === 'Display') {
            div.id = 'Display';
            div.textContent="";
        } else {
        div.addEventListener('click', handleClick); }
        container.appendChild(div);
    });
    document.body.appendChild(container);
}
window.addEventListener('DOMContentLoaded', init);


