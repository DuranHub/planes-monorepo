import { useLoaderData } from "@remix-run/react";
import { getAuthenticatedUser } from "./services/auth.server.ts";
import { type MetaFunction } from '@remix-run/node'
import { LoaderFunctionArgs } from "@remix-run/node";
import {Link} from "@remix-run/react"

export const meta: MetaFunction = () => {
	return [
	  { title: "PlanEs" },
	  { name: "description", content: "Welcome to PlanES" },
	];
  };

export const loader = async ({request}: LoaderFunctionArgs) => {
	//We wait for the login, if the user are authenticated or not
	const user = await getAuthenticatedUser(request);
	//We get the only parameters that we need
	const {email, name, picture} = user;

	return {email, name, picture};
};

export default function Dashboard() {	
	//Get the data of user from loader
	const {email , name , picture} = useLoaderData<typeof loader>();

	return (
	<div className="flex flex-colums justify-around w-full">
		<div className='bg-gray-900 mt-10 w-auto flex flex-col justify-center items-center mr-5 h-5/6 text-center rounded-md shadow-gray-600 shadow-sm py-2.5 px-2.5'>
			<h1 className="text-3xl font-bold m-5">PlanES</h1>		

			<div className="flex flex-col justify-center items-center m-5 ">
				{/* Show the data */}
				<img className="rounded-full m-3" src={picture}></img>
				<h2>{name}</h2>
				<h2>{email}</h2>
			</div>
				{/* Button or link to logout */}
				<Link to="/logout" className="bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm py-1.5 px-1.5 m-5 w-3/4 transition ease-in-out delay-150 hover:bg-red-500 duration-300 ...">
					Logout
				</Link>
		</div>

		
	</div>
	
	);
}
//);
