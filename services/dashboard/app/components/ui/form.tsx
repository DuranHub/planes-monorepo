export default function Forms({ className , children} : {className : string , children : any}){
    return(
        <div className="flex flex-colums h-full w-auto items-center justify-center text-center  mr-5 mt-10   rounded-md bg-white px-2.5 py-2.5 shadow-sm shadow-gray-800 dark:bg-slate-900  ">
            <form method="post" className={className}>
                {children}
            </form>
        </div>

    )

}