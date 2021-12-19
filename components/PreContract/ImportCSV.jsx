import {useState} from 'react'

function ImportCSV() {
  const [CSVFile, setCSVFile] = useState()
  const [CSVArray, setCSVArray] = useState([])

  const processCSV = (str, delim=',') => {
    const headers = str.slice(0,str.indexOf('\n')).split(delim);
    const rows = str.slice(str.indexOf('\n')+1).split('\n');
  
    const newArray = rows.map( row => {
        const values = row.split(delim);
        const eachObject = headers.reduce((obj, header, i) => {
            obj[header] = values[i];
            return obj;
        }, {})
        return eachObject;
    })
    setCSVArray(newArray)
  }

  const submit = () => {
    const file = CSVFile;
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        console.log(text);
        processCSV(text)
    }

    reader.readAsText(file);
  }

  return (
    <>
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
          onClick={() => submit()}
        >
          Submit
        </button>
      </form>
    </div>

    <div className='h-full w-full bg-gray-50'>
      {CSVArray.length > 0 ? 
            <>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Rank</th>
                    </thead>
                    <tbody>
                        {
                            CSVArray.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.rank}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </> : null
          }
    </div>
    </>

  )
}

export default ImportCSV

//From https://dev.to/theallegrarr/read-csv-files-in-react-apps-without-installing-any-package-hn7