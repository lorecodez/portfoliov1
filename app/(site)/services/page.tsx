import Link from "next/link";

export default function services(){
    return(
        <div className="h-full">
            <section className="flex justify-center">
                <fieldset className="flex flex-col gap-y-4 items-center font-bold rounded px-2 py-4 border-grey-500 border-2 md:w-1/2">
                    <legend className="md:p-2 flex p-1 justify-center self-center mx-auto">
                        <h1 className="text-center md:text-3xl text-2xl font-bold w-fit">
                            What Can I Do For You?
                        </h1>
                    </legend>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/web-dev'>
                        Web Development
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/repair'>
                            Computer Repair
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/repair'>
                            Laptop Repair
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/data'>
                            Data Recovery and Transfer
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/builds'>
                            Custom Computer Builds
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/virus'>
                            Virus and Malware Removal
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/support'>
                            Remote Tech Support
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/support'>On-Site Tech Support
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/network'>
                            Home Network Configuration
                    </Link>
                </fieldset>
            </section>
        </div>
    );
}
