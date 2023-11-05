import { ActionFunction, redirect } from "@remix-run/node";
import {
  destroySession,
  getSession,
} from "./services/auth.server.ts";
import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "./services/auth.server.ts";

export let loader = async({request}: LoaderFunctionArgs) => {

  //We get the env variables for Auth0.
  const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_LOGOUT_RETURN_TO_URL } =
    process.env;

  //Use logout for disconnect the user 
  return authenticator.logout(request, {
    redirectTo: `https://${AUTH0_DOMAIN}/v2/logout?client_id=${AUTH0_CLIENT_ID}&returnTo=${AUTH0_LOGOUT_RETURN_TO_URL}`,
  });
};

//Process to close the session
export const action: ActionFunction = async ({ request }) => {
  
  const { AUTH0_LOGOUT_URL, AUTH0_CLIENT_ID, AUTH0_RETURN_TO_URL } =
    process.env as Record<string, string>;

  //We get the user session from cookies
  const session = await getSession(request.headers.get("Cookie"));

  //creation the logout URL
  const logoutURL = new URL(AUTH0_LOGOUT_URL);
  logoutURL.searchParams.set("client_id", AUTH0_CLIENT_ID);
  logoutURL.searchParams.set("returnTo", AUTH0_RETURN_TO_URL);

  //Redirect and close the session
  return redirect(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};