import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "./services/auth.server.ts";

export const loader: LoaderFunction = async ({ request }) => {
    //We wait if the user is authenticated or not
    const User = await authenticator.isAuthenticated(request);
    //If we have an user, we going to redirecto to the dashboard and send the data
    if(User){
        return redirect("/dashboard");
    }
    //If we don't have user, we going to go to the auth.server for login
    return authenticator.authenticate("auth0", request);
};