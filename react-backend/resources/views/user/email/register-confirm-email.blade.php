<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relaxhouse</title>
</head>

<body>
    <h4>Hi {{$data['name']}} {{$data['last_name']}} </h4>
    <p class="lead">Welcome to Relaxhouse Admin Panel, and use the folling login details to login to our system. </p>
    <table class="table table-borderless">
        <thead>
            <tr>
                <th colspan="2" align="left">Login Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="width:23%">Username</td>
                <td> <span class="font-weight-bold">{{$data['username']}}</span></td>
            </tr>
            <tr>
                <td style="width:23%">Password</td>
                <td> <span class="font-weight-bold">{{$data['password']}}</span></td>
            </tr>
        </tbody>
    </table>
    <p>Best Regards,</p>
    <p>Team cartDNA</p>
    <br>
    <div>
        Copyright © 2021 Relaxhouse. All rights reserved.
    </div>

</body>

</html>