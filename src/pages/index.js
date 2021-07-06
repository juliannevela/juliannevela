import Acomplishments from '../components-old/Acomplishments/Acomplishments';
import BgAnimation from '../components-old/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components-old/Hero/Hero';
import Projects from '../components-old/Projects/Projects';
import Technologies from '../components-old/Technologies/Technologies';
import Timeline from '../components-old/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
    return (
        <Layout>
            <Section grid>
                <Hero />
                <BgAnimation />
            </Section>
            <Projects />
            <Technologies />
            <Timeline />
            <Acomplishments />
        </Layout>
    );
};

export default Home;
