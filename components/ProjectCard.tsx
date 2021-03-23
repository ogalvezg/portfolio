import { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../types'
import Image from 'next/image'

const ProjectCard:FunctionComponent<{
    project:IProject;
    showDetail:null | number,
    setShowDetail:(id:null | number)=>void
}> = ({
    project: {
        name,
        description,
        image_path,
        deployed_url,
        github_url,
        category,
        key_techs,
        id,
    },
    showDetail,
    setShowDetail,
}) => {
       
    return (
        <div>
            <Image 
                src={image_path} 
                alt={name} 
                className='cursor-pointer' 
                onClick={()=>setShowDetail(id)} 
                width='600'
                height='300'
                layout='responsive'
                quality='100'
            />
            <p className='my-2 text-center'>{name}</p>

            { showDetail === id && (
                <div className='absolute left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 top-24 bot md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100'>
                    <div className='border-4 border-gray-100'>
                        <Image 
                            src={image_path} 
                            alt={name} 
                            width='600'
                            height='300'
                            layout='responsive'
                            quality='100'
                        />

                        <div className='flex justify-center my-4 space-x-3'>
                            <a href={github_url} 
                                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
                            >
                                <AiFillGithub /> <span>Github</span>
                            </a>
                            <a href={deployed_url} 
                                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
                            >
                                <AiFillProject /> <span>Project</span>
                            </a>
                        </div>

                    </div>
                    <div>

                        <h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
                        <h3 className='mb-3 font-medium'>{description}</h3>
                        <div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                            {
                                key_techs.map((tech)=> (
                                <span key={tech}
                                    className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'
                                >{tech}</span>))                        
                            }
                        </div> 
                    </div>

                    <button onClick={()=>setShowDetail(null)}
                        className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'
                    >
                        <MdClose size={30} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard
