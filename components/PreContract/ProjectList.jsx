import {useRouter} from "next/router"

function ProjectList({projects}) {
  const router = useRouter()

  return (
  <div className="w-full flex justify-center h-screenNav">

      <div className="w-5/6 my-8 min-w-[300px] divide-y-2 divide-gray-200 border-2 border-gray-200 bg-white rounded-sm">

        <div className="bg-gray-200 w-full h-12 grid grid-cols-12 items-center font-bold">
            <p className="col-start-1 col-span-1 pl-4">CODE</p>
            <p className="col-start-2 col-span-5 pl-4">NAME</p>
            <p className="col-start-7 col-span-1 pl-4">DATE</p>
        </div>

        {projects.map((project, index) => (
          //Project Card
          <div
          key={index}
          onClick={() => router.push(`/project/${project.id}`)} 
            className="grid grid-cols-12 grid-rows-3 cursor-pointer hover:bg-blue-600 hover:text-white">
            <p className="col-start-1 col-span-1 row-start-2 pl-4">{project.id}</p>
            <p className="col-start-2 col-span-5 row-start-2 font-semibold pl-4">{project.name}</p>
            <p className="col-start-7 lg:col-start-11 col-span-1 row-start-2 text-xs font-gray-500 flex items-center">{project.dateCreated}</p>
            <div className="col-start-10 lg:col-start-12 col-span-3 lg:col-span-1 row-span-3 flex items-center justify-center">
              <img 
                src={project.url} 
                className=" bg-gray-300 border h-12 w-12 border-blue-900 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList


