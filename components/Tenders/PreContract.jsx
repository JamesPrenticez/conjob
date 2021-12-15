function PreContract({data}) {
  //console.log(data)
  return (
    <>
    <div className="w-full flex justify-center items-center">
        <table 
          className="w-5/6 bg-white border-2 border-blue-900 rounded-md"
          cellSpacing="0"
          cellPadding="10"
        >
          <tbody className="">
            <tr className="text-left">
                <th>Code</th>
                <th>Trade Name</th>
                <th className="text-right">Estimate Value</th>
                <th className="text-right">Contract Value</th>
                <th className="text-right">Difference</th>
                <th>Sub Contractor</th>
                <th>Status</th>
                <th>Sub Acceptance</th>
                <th>Sub Quote</th>
            </tr>

            {data.map((item, index) => (
              <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.name.toUpperCase()}</td>
                  {/* (item.estimateValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} */}
                  <td className="text-right">{item.estimateValue}</td>
                  <td className="text-right">{item.contractValue}</td>
                  <td className="text-right" className="text-right">{(item.estimateValue - item.contractValue).toFixed(2)}</td>
                  <td>{item.subContractor}</td>
                  <td>{item.status}</td>
                  <td>{item.subAcceptance}</td>
                  <td><img className="m-auto h-10 w-10 bg-red-500" src="/pfd.png" alt="" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PreContract
