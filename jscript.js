function validation() {
    var e = document.getElementById('form');
    var stopSubmit = false;
    var x = e.X.value;
    var y = e.Y.value;
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
        drawPoint('graph', x, y, r);
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


function resetValidationX() {
    document.getElementById('errX').style.visibility = 'hidden';
    document.getElementById('errX').innerHTML='123';
}


function resetValidationR() {
    document.getElementById('errR').style.visibility = 'hidden';
    document.getElementById('errR').innerHTML='123';
}

function draw(canv){
    var ctx = document.getElementById(canv).getContext("2d");

    ctx.clearRect(0,0,400,400);

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 70, 0, 3*Math.PI/2, true);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(60, 200, 140, 70);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(130, 200);
    ctx.lineTo(200, 130);
    ctx.lineTo(200, 200);
    ctx.lineTo(130, 200);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200,380);
    ctx.lineTo(200, 20);
    ctx.lineTo(195, 25);
    ctx.lineTo(205,25);
    ctx.lineTo(200, 20);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20,200);
    ctx.lineTo(380, 200);
    ctx.lineTo(375, 195);
    ctx.lineTo(375,205);
    ctx.lineTo(380, 200);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(270,195);
    ctx.lineTo(270, 205);
    ctx.moveTo(340,195);
    ctx.lineTo(340, 205);

    ctx.moveTo(195,130);
    ctx.lineTo(205, 130);
    ctx.moveTo(195,60);
    ctx.lineTo(205, 60);

    ctx.moveTo(130,195);
    ctx.lineTo(130, 205);
    ctx.moveTo(60,195);
    ctx.lineTo(60, 205);

    ctx.moveTo(195,270);
    ctx.lineTo(205, 270);
    ctx.moveTo(195,340);
    ctx.lineTo(205, 340);

    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.font = "20px Times New Roman";
    ctx.fillText('Y', 210, 30);
    ctx.fillText('X', 370, 225);
}

function drawPoint(canv, x, y, r) {
    var ctx = document.getElementById(canv).getContext("2d");

    ctx.clearRect(0,0,400,400);

    draw(canv);

    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.font = "15px Times New Roman";

    ctx.fillText(r, 340, 215);
    ctx.fillText(r/2, 270, 215);

    ctx.fillText(r, 215, 60);
    ctx.fillText(r/2, 215, 130);

    ctx.fillText(-r, 60, 215);
    ctx.fillText(-(r/2), 130, 215);

    ctx.fillText(-r, 215, 340);
    ctx.fillText(-(r/2), 215, 275);


    if(Math.abs(x/r)>1.2 || Math.abs(y/r)>1.2){
        ctx.font = "14px Times New Roman";
        ctx.fillText('Точка за пределами графика', 120, 390);
    } else {
        ctx.beginPath();
        ctx.arc(Math.round(200 + ((x / r) * 140)), Math.round(200 - ((y / r) * 140)), 3, 0, Math.PI * 2);
        ctx.closePath();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
    }
}