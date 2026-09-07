import Container from "../layout/Container"

const CareerResponsibilities = ({data}) => {
    const { responsibilities } = data;
  return (
     <section>
          <Container
            className="
                          w-full h-full
                          flex flex-col items-start
                          "
          >
            <div className="flex flex-col items-start">
              
              <h2 className="mb-2 text-2xl md:mb-2 light:text-white">What will you do?</h2>
             <ul className="list-disc flex flex-col gap-2 ms-5">
              {responsibilities.map((r, index) => (
                <li key={index}>{r}</li>
              ))}
            </ul>
            </div>
          </Container>
        </section>
  )
}

export default CareerResponsibilities