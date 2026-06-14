import Container from "../layout/Container";
import useFadeTop from "../../hooks/useFadeTop";


export default function WhyPathpilotSection() {


    const cardRef =  useFadeTop()


    return (
        <section>
            <Container className="
            min-h-[500px]
            flex flex-col items-center justify-center
            ">
                <h2 className="mb-5">Why PathPilot?</h2>
                <div className="
                w-full
                grid grid-cols-1 gap-10
                md:grid-cols-3
                "
                ref={cardRef}
                >
                    <div className=" 
                    shadow-xs shadow-white rounded-xl p-10
                    flex flex-col items-center justify-center
                    "
                    
                    >
                        <h3 className="mb-2.5">Discover</h3>
                        <p className="text-center">Explore different career paths and understand what each profession involves.</p>
                    </div>
                    <div className=" 
                    shadow-xs shadow-white rounded-xl p-10
                    flex flex-col items-center justify-center
                    ">
                        <h3 className="mb-2.5">Learn</h3>
                        <p className="text-center">Follow curated learning roadmaps designed for beginners.</p>
                    </div>
                    <div className=" 
                    shadow-xs shadow-white rounded-xl p-10
                    flex flex-col items-center justify-center
                    ">
                        <h3 className="mb-2.5">Grow</h3>
                        <p className="text-center">Build skills with confidence and move toward your goals.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}