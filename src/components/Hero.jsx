import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


const Hero = () => {
    return <div className='bg-emerald-100 py-24'>
        <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 
        items-center gap-8'>
            <article>
                <h1 className='text-7xl font-bold tracking-wider'>I'm Inga</h1>
                <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                    Front-End Developer
                </p>
                <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                    turning ideas into interactive reality
                </p>
                <div className='flex gap-x-4 mt-4'>
                    <a href='https://github.com/inga-divra' target='blank'>
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href='https://www.linkedin.com/in/inga-divra-b15532219/' target='blank'>
                        <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href='https://www.twitter.com' target='blank'>
                        <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                </div>
            </article>
            <article className='hidden md:block'>
                <img className='h-80 lg:h-96' src={heroImg} alt='hero-img' />
            </article>
        </div>
    </div>
}

export default Hero