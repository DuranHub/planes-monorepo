import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { createCookieSessionStorage } from "@remix-run/node";

const env = process.env;

export type User = any;

async function Login(user: User) {
    return(user);
}

if(!env.AUTH0_DOMAIN || !env.AUTH0_CLIENT_ID || !env.AUTH0_CLIENT_SECRET ){
    throw new Error("Missing Auth0 Configuration");
}

export let sessionStrorage = createCookieSessionStorage({
    cookie:{
        name: "_session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: [env.AUTH0_CLIENT_SECRET],
        secure: process.env.NODE_ENV === "production",
    },
});

export const authenticator = new Authenticator(sessionStrorage);


export const isAuthenticated =async (request:Request) => {
    return authenticator.isAuthenticated(request, {
        failureRedirect:"/login",
    })
};

export const getAuthenticatedUser =async (request:Request) => {
    return (await(isAuthenticated(request) as unknown)) as User;
}
//Connection with Auth0
let auth0Strategy = new Auth0Strategy({
    callbackURL: env.AUTH0_CALLBACK_URL,
    clientID: env.AUTH0_CLIENT_ID,
    clientSecret: env.AUTH0_CLIENT_SECRET,
    domain: env.AUTH0_DOMAIN,
    
    },
    async({accessToken, refreshToken, extraParams, profile}) => {
        //Get the data from the json file
        const user = {
            email: profile._json?.email,
            name: profile._json?.name,
            picture: profile._json?.picture,
        }
        
        return Login(user)
    }
    
);

authenticator.use(auth0Strategy);

export let {getSession, commitSession, destroySession} = sessionStrorage;