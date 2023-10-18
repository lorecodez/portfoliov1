import Link from "next/link";
import Yelp_reviews from "@/components/Yelp_reviews";

export default function services(){
    return(
        <div className="h-full">
            <section className="flex items-center flex-col">
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
                            Desktop & Laptop Repair
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/data'>
                            Data Transfer
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
                            Technical Support
                    </Link>
                    <Link 
                        className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                        href='/services/network'>
                            Home Network Configuration
                    </Link>
                </fieldset>
                <div className="p-10 group text-center">
                    <h3 className="font-bold text-center pt text-2xl">
                        Not finding what you are looking for?
                    </h3>
                    <Link href='/contact' className="font-bold text-center text-lg group-hover:scale-105 transition py-2 hover:underline w-min">
                         click here to send us a message to see if we offer what you need as a service.
                    </Link>
                </div>
            </section>
            <Yelp_reviews/>
        </div>
    );
}
