const tenders = ["one", "two", "three"]
const tendersStatus = ["sent", "sent", "recieved"]
const tendersClose = "31/12/2022"

function PreContract({props}) {
  //console.log(props)
  return (
    <div className='w-full flex justify-center bg-gray-50 text-black  h-screenNav'>
      <div className='w-5/6 bg-white p-4 my-8 border-2 border-gray-200'>

      <div className="bg-white flex p-2">
        <img
          className=" h-24 w-24 border-2 bg-gray-200 border-blue-900 rounded-lg"
          src={props.project?.img}
        />
        <div className="w-full p-2">
          <p className="text-2xl font-bold">{props.project.name.toUpperCase()}</p>
          <p className="text-sm">{props.project.jobCode}</p>
          <p className="text-sm">{props.project.location}</p>
        </div>
      </div>  

      <table 
        className="w-full bg-white rounded-lg text-base"
        cellSpacing="0"
        cellPadding="10"
      >
        <tbody className="">
          <tr className="text-left">
              <th>Code</th>
              <th>Trade</th>
              <th className="text-right">Estimate</th>
              <th className="text-right">Contract</th>
              <th className="text-right">Profit/Loss</th>
              <th>Tenders</th>
              <th>Status</th>
              <th>Tender Date</th>
              <th>SubContractor</th>
              <th>Status</th>
              <th>Acceptance</th>
              <th>Quote</th>
          </tr>

          {props.trade.map((item, index) => (
            <tr key={index}>
                <td>{item.costCode}</td>
                <td>{item.name.toUpperCase()}</td>
                {/* (item.estimateValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} We would like to format our currency but it messes with the comma in the csv export*/}
                <td className="text-right">{item.estimateValue.toFixed(2)}</td>
                <td className="text-right">{item.contractValue.toFixed(2)}</td>
                <td className="text-right" className="text-right">{(item.estimateValue - item.contractValue)}</td>
                
                <td className="text-xs">
                  {tenders.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </td>
                <td className="text-xs">
                  {tendersStatus.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </td>

                <td className="text-xs">{tendersClose}</td>
                <td>{item.assigned}</td>
                <td>{item.subArgeementStatus}</td>
                <td><img className="m-auto h-10 w-10 hover:cursor-pointer" src="/icons/pdf.svg" alt="" /></td>
                <td><img className="m-auto h-10 w-10 hover:cursor-pointer" src="/icons/pdf.svg" alt="" /></td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  )
}

export default PreContract