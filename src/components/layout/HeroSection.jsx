import Container from "./Container";
import pathpilotHeroImg from  "../../assets/pathpilot-hero-img.png"



export default function HeroSection () {


    return (
        <section>
            <Container className="
            min-h-[600px] grid grid-cols-1 bg-transparent

            md:grid-cols-2
            
            ">

                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-6xl font-semibold leading-20 mb-5">Discover Your Future, One Step at a Time.</h1>
                    <p className="text-lg leading-8">PathPilot helps students explore careers, discover interests, and follow structured learning roadmaps to build confidence in their future.</p>
                    <div className="mt-10 flex gap-6">
                        <button className="primary-btn px-3 py-2.5">Explore Careers</button>
                        <button className="secondary-btn px-3 py-2.5">Take Career Quiz</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <img src={pathpilotHeroImg} alt="" />
                </div>
            </Container>
        </section>
    )
}