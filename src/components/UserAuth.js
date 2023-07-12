import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserAuth = () =>{
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <div className="py-8 px-2">
            {
                !isAuthenticated ? <button className="font-semibold h-full mx-2 px-3 bg-blue-400 hover:font-bold hover:text-white rounded-md " onClick={() => loginWithRedirect()}>Login</button>
                :
                <div className="flex h-10 items-center">
                    <h4 className="mx-2"> Welcome {user.name}</h4>
                    <button className="font-semibold h-full mx-2 px-3 bg-red-400 hover:font-bold hover:text-white rounded-md" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            }
        </div>
    )

}

export default UserAuth;