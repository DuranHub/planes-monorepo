//import type { LoaderArgs } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/server-runtime";
import { authenticator } from "./services/auth.server.ts";

export let loader = ({request}: LoaderFunctionArgs) => {
    return authenticator.authenticate("auth0",request,{
        successRedirect: "/dashboard",
        failureRedirect: "/login"
    });
};