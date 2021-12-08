import { useRouter } from "next/router"
import {useProjects} from "../../data"
import PreContract from "../../components/Tenders/PreContract"

function Project() {
  const router = useRouter()
  const projects = useProjects
  const {id} = router.query

  return (
    <>
      <div className="h-16 w-full bg-white inline-flex justify-center items-center">
        <div className="h-full w-5/6 inline-flex items-center space-x-4">
          <button
            onClick={() => router.push("/tenders")}
            className="m-4 w-20 h-10 bg-blue-900 text-white text-xl rounded-md"
          >
            BACK
          </button>
          <h1 className="text-2xl">{projects[id].name.toUpperCase()}</h1>
          <h1>{projects[id].code}</h1>
          <h1 className="text-sm">Created at: {projects[id].dateCreated}</h1>
          <img 
              src={projects[id].url} 
              className="col-start-10 lg:col-start-12 col-span-3 lg:col-span-1 row-span-3 bg-purple-800 border h-12 w-12 border-red-500 rounded-full"
            />
        </div>
      </div>



          
        <div className="my-4 flex justify-center">

          <PreContract />
        </div>

    </>
  )
}

export default Project
