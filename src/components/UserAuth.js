import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserAuth = () =>{
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <div className="py-10 px-2 border-2 w-72">
            {
                !isAuthenticated ? <button onClick={() => loginWithRedirect()}>Login</button>
                :
                <div className="inline-block">
                    <h4> Welcome {user.name}</h4>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            }
        </div>
    )

}

export default UserAuth;