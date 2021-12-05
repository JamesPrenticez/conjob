const projects = [
  {
    id: "001",
    name: "Project 1",
    img: "/project1.png",
    dateCreated: "10/10/2021"
  },
  {
    id: "002",
    name: "Project 2",
    img: "/project2.png",
    dateCreated: "05/07/2019"
  },
  {
    id: "003",
    name: "Project 3",
    img: "/project1.png",
    dateCreated: "17/07/1993"
  },
]

function ProjectList() {
  return (
  <div className="w-full flex justify-center h-screenNav">

      <div className="w-5/6 lg:w-3/6 mt-8 mb-8 min-w-[300px] divide-y-2 divide-gray-200 border-2 border-gray-200 bg-white rounded-sm">

        <div className="bg-gray-200 w-full h-12">

        </div>

        {projects.map((project, index) => (
          //Project Card
          <div className="grid grid-cols-12 grid-rows-3 cursor-pointer hover:bg-blue-700 hover:text-white">
            <p className="col-start-1 col-span-1 row-start-2 pl-4">{project.id}</p>
            <p className="col-start-2 col-span-5 row-start-2 font-semibold pl-4">{project.name}</p>
            <p className="col-start-7 lg:col-start-11 col-span-1 row-start-2 text-xs font-gray-500 flex items-center">{project.dateCreated}</p>
            <img 
              src={project.img} 
              className="col-start-10 lg:col-start-12 col-span-3 lg:col-span-1 row-span-3 bg-gray-200 border border-red-500"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
