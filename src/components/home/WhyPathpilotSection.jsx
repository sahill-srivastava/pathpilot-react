import Container from "../layout/Container";
import useFadeTop from "../../hooks/useFadeTop";


export default function WhyPathpilotSection() {

    const cardData = [
        {
            id: 1,
            title: "Discover",
            desc: "Explore different career paths and understand what each profession involves."
        },
        {
            id: 2,
            title: "Learn",
            desc: "Follow curated learning roadmaps designed for beginners."
        },
        {
            id: 3,
            title: "Grow",
            desc: "Build skills with confidence and move toward your goals."
        }
    ]

    const cardClass = "shadow-xs shadow-white light:shadow-black rounded-xl p-10 flex flex-col items-center justify-center";

    const cardTitleClass = "mb-2.5";

    const cardDescClass = "text-center";


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
                {
                    cardData.map(card => (
                        <div key={card.id} className={cardClass}>
                            <h3 className={cardTitleClass}>{card.title}</h3>
                            <p className={cardDescClass}>{card.desc}</p>
                        </div>
                    ))
                }
                </div>
            </Container>
        </section>
    )
}