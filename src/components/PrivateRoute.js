import React from 'react';
import {Route} from 'react-router-dom';

function PrivateRoute ( {children, auth, ...rest}) {
    return (
        <>
            {auth ? (
                <Route {...rest}>
                    {children}
                </Route>
            ):(
                <h1>Je moet zijn ingelogd!</h1>
            )}
        </>
    )
}

export default PrivateRoute;