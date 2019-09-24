<!doctype html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title>邮件通知模板</title>

    <style type="text/css">
        table {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            width: 100%;
            border-collapse: collapse;
        }

        td, th {
            font-size: 1em;
            border: 1px solid #5B4A42;
            padding: 3px 7px 2px 7px;
        }

        th {
            font-size: 1.1em;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 4px;
            background-color: #24A9E1;
            color: #ffffff;
        }
    </style>
</head>
<body>
<h2>邮件消息通知</h2>
<table>
    <tr>
        <th>异常类</th>
        <th>异常消息</th>
        <th>异常原因</th>
    </tr>
    <tr>
        <td>${(exception.exceptionClass)!""}</td>
        <td>${(exception.exceptionMessage)!""}</td>
        <td>${(exception.exceptionCause)!""}</td>
    </tr>
</table>
<br>
<br>
<b>##############################具体异常信息如下：##############################</b>
<br>
<pre>${mail.content}</pre>
</body>
</html>