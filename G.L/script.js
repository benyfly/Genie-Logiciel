var btnOk = document.getElementById('btnOk');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');

btnOk.addEventListener('click', openModal);

btnClose.addEventListener('click', closePopup);

function openModal(){
    overlay.style.display ='block';
}

function closePopup(){
    overlay.style.display ='none';
}