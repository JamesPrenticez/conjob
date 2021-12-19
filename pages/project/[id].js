import prisma from '../../lib/prisma';
import { useState } from 'react';
import { useRouter } from 'next/router'
import ImportCSV from '../../components/PreContract/importCSV';
import PreContract from '../../components/PreContract/PreContract';
import { exportToCSV } from '../../components/PreContract/exportToCSV.helper'

function Project(props) {
  const router = useRouter()
  const [toggleImportCSV, setToggleImportCSV] = useState(false)

  return (
    <>
      {/* Sudo Nav*/}
      <div className="h-16 w-full bg-white inline-flex justify-center items-center drop-shadow-sm">
        <div className="h-full w-5/6 inline-flex items-center space-x-4">
          <button
            onClick={() => router.push("/precontract")}
            className="m-4 w-20 h-10 text-xl hover:cursor-pointer bg-blue-700 hover:bg-blue-600 hover:border-blue-600 text-white border-2 border-blue-700 rounded-lg mr-auto"
          >
            BACK
          </button>

          <button
            className="hover:cursor-pointer hover:text-blue-600 text-sm p-2 ml-auto"
            type="button"
            onClick={() => setToggleImportCSV(!toggleImportCSV)}
          >
            Import CSV
          </button>

          <button
            className="hover:cursor-pointer hover:text-blue-600 text-sm p-2 ml-auto"
            type="button"
            onClick={() => exportToCSV(props.project.name)}
          >
            Download CSV
          </button>

        </div>
      </div>

      {/*console.log(props)*/}

      {toggleImportCSV ? (<ImportCSV/>) : ("")}

      <PreContract props={props}/>

     </>
  );
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