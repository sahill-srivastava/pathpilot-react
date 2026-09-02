import Container from "../layout/Container"

const FactsBox = ({data}) => {
    const {difficulty, duration, category} = data;

  return (
    <section>
           <Container
             className="
                  my-15 
                  flex flex-col items-center justify-center
                  "
           >
             <div className=" w-full grid grid-cols-1 md:grid-cols-4 gap-2.5">
             <div className="bg-violet-700 rounded-2xl flex flex-col items-center p-10">
               <h4>Difficulty</h4>
               {difficulty}
             </div>
             <div className="bg-violet-700 rounded-2xl flex flex-col items-center p-10">
               <h4>Duration</h4>
               {duration}
             </div>
             <div className="bg-violet-700 rounded-2xl flex flex-col items-center p-10">
               <h4>Career Type</h4>
               <p>Devlopment</p>
             </div>
             <div className="bg-violet-700 rounded-2xl flex flex-col items-center p-10">
               <h4>Category</h4>
               {category}
             </div>
            
             </div>
           </Container>
         </section>
  )
}

export default FactsBox