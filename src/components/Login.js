import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential)
        var userObj = jwtDecode(response.credential)

        localStorage.setItem("userDetails", JSON.stringify(userObj))
        navigate('/user-details')
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "910842626574-u0rfn64efe1pbpttba4b7c3kf463shii.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        })
        google.accounts.id.renderButton(
            document.getElementById("singInDiv"),
            { theme: "outline", size: "large" }
        )
    }, [navigate,]);
    return (
        <div className="App">
            <div id='singInDiv'>

            </div>
        </div>
    )
}

export default Login