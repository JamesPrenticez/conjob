import {useState} from 'react'

function ImportCSV() {
  const [CSVFile, setCSVFile] = useState()

  return (
    <div className='bg-gray-900 text-white w-full h-16 flex justify-center items-center'>
      <form 
        id='importCSV'
        className='inline-flex w-5/6 truncate'
      >
        <input
          className='block cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-md ml-auto'
          id='csvFile'
          type='file'
          accept='.csv'
          onChange={(e) => setCSVFile(e.target.files[0])}
        />
        <button
          className='text-white bg-gray-700 hover:bg-gray-600 font-medium text-sm cursor-pointer border-0 px-4 ml-2 rounded-md'
          type='button'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ImportCSV

//From https://dev.to/theallegrarr/read-csv-files-in-react-apps-without-installing-any-package-hn7