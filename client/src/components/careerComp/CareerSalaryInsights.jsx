import React from 'react'
import Container from '../layout/Container';

const CareerSalaryInsights = ({data}) => {
    const {market, note, entry, mid, senior} = data.salaryInsights;
  return (
     <section className="h-full">
      <Container
        className="
          w-full h-full
          flex flex-col items-center gap-2.5
        "
      >
        <h2>Salary Insights</h2>

        <p className="mb-4 text-center">
          {market + " : " + note}
        </p>
     <div
          className="
            w-full h-fit mt-[80px]
            grid grid-cols-1
            md:grid-cols-[1fr_auto_1fr_auto_1fr]
            gap-4
          "
        >
             <div
                  className="
                    bg-zinc-900
                    inset-shadow-2xs inset-shadow-violet-800
                    relative h-full
                    px-4 py-10
                    rounded-xl
                    flex flex-col items-center
                    gap-10
                  "
                >
                  <h4 className="absolute top-[-50px] text-lg">s</h4>

                  <ul className="flex flex-col items-center gap-4 uppercase">
                      <li>hsdf</li>
                  </ul>
                </div>
        </div>
     
      </Container>
    </section>
  )
}

export default CareerSalaryInsights