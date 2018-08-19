function validation() {
    var e = document.getElementById('form');
    var stopSubmit = false;
    var x = e.X.value;
    var r = parseFloat(e.R.value);
    var msgx = '', msgr = '';

    if (isNaN(x) || x <= -5 || x >= 3) {
        stopSubmit = true;
        msgx += 'Введите число от -5 до 3, чтобы задать значение X';
        document.getElementById('errX').style.visibility = 'visible';
        document.getElementById('errX').innerHTML = msgx;
    }
    if (isNaN(r)){
        stopSubmit = true;
        msgr+='Нажмите на одну из кнопок, чтобы задать значение R';
        document.getElementById('errR').style.visibility = 'visible';
        document.getElementById('errR').innerHTML=msgr;
    }
    if(!stopSubmit){
        e.submit();
        document.getElementById('resTable').style.display="block";
    }
}

function fromPhp(id) {
    document.getElementById(id).height = document.getElementById(id).contentWindow.document.body.scrollHeight+35+'px';
}

function setR(but) {
    var val1 = parseFloat(but.value);
    document.getElementById('Rf').value=val1;
    document.getElementById('Rf').style.display='inline';
}

// function Validator(setting) {
//     var showError = function (el) {
//         el.parentNode.classList.remove('success')
//         el.parentNode.classList.add('error')
//     }
//  }
// function validate() {
//
// }

function resetValidation() {
    document.getElementById('errX').style.visibility = 'hidden';
    document.getElementById('errX').innerHTML='123';
    document.getElementById('errR').style.visibility = 'hidden';
    document.getElementById('errR').innerHTML='123';
}