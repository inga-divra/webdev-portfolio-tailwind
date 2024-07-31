import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return <section className='bg-white py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img className='w-full h-64'
                src={aboutSvg}
                alt="about-img" />
            <article>
                <SectionTitle text='code, coffee and cats' />
                <p className='text-slate-600 mt-8 leading-loose'>
                    These are at the heart of my passions.
                    I'm fueled by creativity and have a keen interest in design and art.
                    My journey in web development is driven by a continuous desire to grow and enhance my skills,
                    always striving for excellence in every project.
                </p>
            </article>
        </div>
    </section>
}

export default About