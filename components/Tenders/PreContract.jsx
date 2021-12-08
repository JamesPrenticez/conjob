import {defaultPreContract} from "../../data"

function PreContract() {
  //console.log(defaultPreContract)
  return (
    <>
    <div className="w-full flex justify-center items-center ">
        <table 
          className="w-5/6 bg-white rounded-sm "
          cellSpacing="0"
          cellPadding="10"
        >
          <tbody className="">
            <tr className="text-left">
                <th>Code</th>
                <th>Trade Name</th>
                <th>Estimate Value</th>
                <th>Contract Value</th>
                <th>Difference</th>
                <th>Sub Contractor</th>
                <th>Status</th>
                <th>Sub Acceptance</th>
                <th>Sub Quote</th>
            </tr>

            {defaultPreContract.map((item, index) => (
              <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.name.toUpperCase()}</td>
                  <td>{(item.estimateValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                  <td>{(item.contractValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                  <td>{(item.estimateValue - item.contractValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
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
