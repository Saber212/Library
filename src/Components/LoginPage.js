import React from 'react';
function LoginPage() {
    return (
        <div >
            <h1>Login Page to your account</h1>
            <p>Some content for the login page</p>
            <input type="text" placeholder="Username" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button>Login</button>
            <button>Sign-up</button>
        </div>
    )
}

export default LoginPage;