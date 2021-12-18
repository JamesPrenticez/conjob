import { useRouter } from "next/router"
import {useProjects} from "../../data"
import PreContract from "../../components/Tenders/PreContract"
import {tableToCSV} from "../../components/Tenders/exportToCSV.helper.js"
import {defaultPreContract} from "../../data"

import prisma from '../../lib/prisma';

async function getProjects(){
  const res = await fetch(`http://localhost:3000/api/posts/`, {method: 'GET'})
  const data = await res.json()
  //setPosts(data)
  return data
}


function Project(props) {
  const router = useRouter()
  const {id} = router.query
  const data0 = defaultPreContract
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
          <h1 className="text-2xl">{props.project[id]?.name.toUpperCase()}</h1>
          <h1>{projects[id].code}</h1>
          <h1 className="text-sm">Created at: {data[id]?.dateCreated}</h1>
          <img 
              src={props.project[id].url} 
              className="col-start-10 lg:col-start-12 col-span-3 lg:col-span-1 row-span-3 bg-purple-800 border h-12 w-12 border-red-500 rounded-full"
            />
          <button className="hover:cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white text-sm p-2 border-2 border-blue-900 rounded-lg" type="button" onClick={() => tableToCSV(props.project[id]?.name)}>
            Download CSV
          </button>
        </div>
      </div>



          
        {/* <div className="my-4 flex justify-center">
          <PreContract data={data}/>
        </div> */}
{console.log(props)}
        <p>
          {props.project.name}
          {props.trade.map((item, index) => (
            <div key={index} className="flex w-full">
              <p>{item.code} </p>
              <p>{item.name}</p>
              <p>{item.projectId}</p>
            </div>
          ))}

        </p>
    </>
  )
}

export default Project

export async function getServerSideProps({params}){
  const project = await prisma.project.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
  })
  const trade = await prisma.trade.findMany({
    where: {
      projectId: Number(params?.id) || -1,
    },
  })

  return {
    props: {project, trade}
  }
}