function init(e){
    console.error(typeof e);
    console.log('Container:', document.getElementById('container'));
}

window.addEventListener('DOMContentLoaded', e => init(e,5));