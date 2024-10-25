<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background-color: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Courier New', Courier, monospace;
        }

        .login-box {
            background-color: #1e1e1e;
            border-radius: 10px;
            padding: 20px;
            width: 90%;
            max-width: 400px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            text-align: center;
        }

        .form-group {
            margin-bottom: 15px;
            width: 100%;
        }

        .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #6b6bff;
            border-radius: 5px;
            background-color: #2a2a2a;
            color: #fff;
            box-sizing: border-box;
        }

        .form-control::placeholder {
            color: #aaa;
        }

        .btn {
            background-color: #6b6bff;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
        }

        .btn:hover {
            background-color: #4b4bff;
        }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>Sign In</h2>
        <div class="form-group">
            <input class="form-control" id="username" placeholder="Username" type="text">
        </div>
        <div class="form-group">
            <input class="form-control" id="password" placeholder="Password" type="password">
        </div>
        <div class="form-group">
            <button id="signin-btn" class="btn" onclick="signIn()">Log In</button>
        </div>
    </div>
    <script src="signin.js"></script>
</body>
</html>
