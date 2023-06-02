import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserAuth = () =>{
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <div>
            {
                !isAuthenticated ? <button onClick={() => loginWithRedirect()}>Login</button>
                : <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
            }
        </div>
    )

}

export default UserAuth;