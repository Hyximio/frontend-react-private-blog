import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage( { authToggle } ) {

    let history = useHistory();

    return (
        <>
            <h1>Login pagina</h1>
            <p>Druk hier om in te loggen:</p>
            <button
            // type="button"
            onClick={() => {
                authToggle( true )
                history.push( '/' );
            }}
           >Login</button>
        </>
    )
}

export default LoginPage;