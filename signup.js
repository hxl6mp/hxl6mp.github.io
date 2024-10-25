async function signUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const invitationCode = document.getElementById("invitationCode").value;

    
    if (!username || !password || !invitationCode) {
        alert("Please fill in all fields.");
        return;
    }

    
    try {
        const response = await fetch("/.netlify/functions/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, invitationCode }),
        });

        const result = await response.json();

        if (response.ok) {
            alert("Signup successful! You can now log in.");
            window.location.href = "signin.html";
        } else {
            alert(`Signup failed: ${result.error}`);
        }
    } catch (error) {
        console.error("Signup Error:", error);
        alert("An error occurred during signup. Please try again.");
    }
}