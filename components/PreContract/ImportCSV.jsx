import {useState} from 'react'

function importCSV() {
  return (
    <form 
      id='importCSV'
      className='bg-blue-500 rounded'
    >
      <input
        id='csvFile'
        type='file'
        accept='.csv'
        onChange={(e) => setCSVFile(e.target.files[0])}
      />
      <br />
      <button 
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}

export default importCSV

//From https://dev.to/theallegrarr/read-csv-files-in-react-apps-without-installing-any-package-hn7