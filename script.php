<?php
    session_start();
    $curtime = date("H:i:s",strtotime("+1 hour"));
    $startWork = microtime(true);
    $x = $_POST["X"];
    $y = $_POST["Y"];
    $r = $_POST["R"];
    $file = 'arr.txt';
    $data = file_get_contents($file);
    $history = unserialize($data);
    $count=file_get_contents('counter.txt');
    $history[$count]['arX']=$x;
    $history[$count]['arY']=$y;
    $history[$count]['arR']=$r;
    if (is_numeric($x)==false) exit;
    else
    if (
        ($x >= 0 && $y >= 0 && ($x * $x + $y * $y) <= ($r / 2) * ($r / 2)) ||
        ($x <= 0 && $y >= 0 && $y >= (($r * $x) - ($r/2))) ||
        ($x <= 0 && $y <= 0 && $x >= (-$r) && $y >= ((-$r) / 2))
    )
        $result = "True";
    else
        $result = "False";

    $history[$count]['arRes']=$result;
    $history[$count]['arCurrTime']=$curtime;
    $endWork = microtime(true);
    $history[$count]['arWorkTime']=round (($endWork-$startWork), $precision = 6);
    $data = serialize($history);
    file_put_contents($file, $data);
    $count=$count+1;
    file_put_contents('counter.txt', $count);

    echo '<!DOCKTYPE html>
<html>
<head>
    <title>Table</title>
    <meta charset="UTF-8">
    <style>
        body{
            font-family: Calibri;
            font-size: 20px;
            text-align: center;
            margin: 0 auto;
        }
        p{
            font-size: 2em;
            margin-top: 20px;
        }
        td, th{
            padding: 3px 6px;
            border: 1px solid black;
            width: 150px;
        }
        .container{
            background-color: white;
            border-radius: 20px;
            padding: 40px;
        }
        .table{
            margin: 0 auto;
            font-size: 22px;
            border: black solid 2px;
            vertical-align: center;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container" id="container">
        <p>
            <b>Таблица результатов</b><br>
        </p>
        <table class="table" id="table" cellspacing="0">
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Result</th>
                <th>Working time</th>
                <th>Current time</th>
            </tr>';
foreach ($history as $point)
{
    echo '<tr>
             <td>'.$point['arX'].'</td>
             <td>'.$point['arY'].'</td>
             <td>'.$point['arR'].'</td>
             <td>'.$point['arRes'].'</td>
             <td>'.$point['arWorkTime'].'ms</td>
             <td>'.$point['arCurrTime'].'</td>
    </tr>';
}
        echo'</table>
    </div>
</body>
</html>';
a:

