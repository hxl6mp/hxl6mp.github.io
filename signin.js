async function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (!username || !password) {
        alert("Please enter your username and password.");
        return;
    }

    
    try {
        const response = await fetch("/.netlify/functions/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
            alert("Login successful!");
            window.location.href = "hysteria_chat.html";
        } else {
            alert(`Login failed: ${result.error}`);
        }
    } catch (error) {
        console.error("Login Error:", error);
        alert("An error occurred during login. Please try again.");
    }
}