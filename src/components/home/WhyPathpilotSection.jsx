import Container from "../layout/Container";


export default function WhyPathpilotSection() {



    return (
        <section>
            <Container className="
            bg-red-600 min-h-[400px]
            flex flex-col items-center justify-center
            ">
                <h2 className="mb-5">Why PathPilot?</h2>
                <div className="
                w-full
                grid grid-cols-1 gap-4
                md:grid-cols-3
                ">
                    <div className=" 
                    bg-green-500 rounded-xl p-10
                    flex flex-col items-center justify-center
                    ">
                        <h3 className="mb-2.5">Discover</h3>
                        <p className="text-center">Explore different career paths and understand what each profession involves.</p>
                    </div>
                    <div className=" 
                    bg-green-500 rounded-xl p-10
                    flex flex-col items-center justify-center
                    ">
                        <h3 className="mb-2.5">Learn</h3>
                        <p className="text-center">Follow curated learning roadmaps designed for beginners.</p>
                    </div>
                    <div className=" 
                    bg-green-500 rounded-xl p-10
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