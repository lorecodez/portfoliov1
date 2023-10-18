import { getProject } from '@/sanity/schemas/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';



type Mcdata = {
        status: string,
        online: boolean,
        motd: string,
        motd_json: { text: string},
        favicon: string,
        error: string,
        players: {max: number, now: number, sample: Array<any>[]},
        server: {name: string, protocol: number},
        last_updated: string,
        duration: string
}

export default async function Project() {

    const project = await getProject('minecraft');


    const initServerData = async (serverIp : string,serverPort : string): Promise<Mcdata>=> {
        let data = await fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort);

        function handleServerStatus(data : Mcdata){
            if(data.status=='error'){
                console.log(data.error);
                return false;
            }
        }

        return await data.json();
    }
    let mcdata = await initServerData('mc.lorenzowashington.com', '25565') as Mcdata;


    mcdata.motd = mcdata.motd.replace('§f§o','');
    mcdata.motd = mcdata.motd.replace('§0','');
    mcdata.motd = mcdata.motd.replace('§4§1','');

    let mcimage = '';

    function handelFavicon(){
        mcdata.favicon.replace('=', "")
        mcimage = mcdata.favicon.replace(/^data:image\/\w+;base64,/, "")
    }

    mcdata.favicon ? handelFavicon() : console.log('no favicon');
    console.log(mcdata);

    return (
        <div className='h-fit py-15'>
            <header className='flex justify-between items-center h-full pt-5'>
                <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow h-full'>{project.name}</h1>
                <details title='View Project' className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-500 hover:text-blue-100 transition'>
                    <summary>View Project</summary>
                    <p className='w-min font-normal'>Open minecraft, select multiplayer, and <br/>enter the specified address</p>
                </details>
            </header>

            
            <div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-medium mb-5'>
                        Address: mc.lorenzowashington.com
                    </h1>
                    <picture>
                        <Image src={`data:image/jpeg;base64,${mcimage}`} alt='server image' width={100} height={100}/>
                    </picture>
                    <span className='text-slate-700 text-lg mb-3 mt-2 font-bold'>
                        {mcdata.motd}
                    </span>
                    <div>
                        {mcdata.online ? 
                        <div className='text-green-600 font-bold'> Online </div> : <div className='text-red-600 font-bold'> Offline </div>}
                    </div>
                    <div className='text-1xl'>
                        <span className='font-semibold'>
                            {mcdata.players.now}
                        </span> Players online out of <span className='font-semibold'>
                            {mcdata.players.max}
                        </span>. Using version <span>
                            {mcdata.server.name}
                        </span>.
                    </div>
                </div>
            </div>
            {/* content goes here */}
            <div className='text-lg text-grey-700 mt-5'>
                <PortableText value={project.content}/>
            </div>
            {/* image goes here */}

            {/* <div className='h-[50vh]'>
                {
                project.image ? <Image src={project.image} alt={project.name} width={1920} height={400} className='mt-10 border-2 border-gray-700 object-cover rounded-xl h-[50vh]'/> : 'Image not found'
                }
            </div> */}

        </div>
    );
}