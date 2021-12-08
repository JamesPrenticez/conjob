import {defaultPreContract} from "../../data"

const handleChange = (e) => {
  e.preventDefault
}

function PreContract() {
  //console.log(defaultPreContract)
  return (
    <div className="grid grid-cols-12 bg-white border border-gray-200 w-5/6 rounded">
      {/* Header */}
      <div className="col-span-12 grid grid-cols-12 items-center text-leftp-2 ">
        <h1 className="col-span-1 p-2 font-semibold">Code</h1>
        <h1 className="col-span-2 p-2 font-semibold">Trade Name</h1>
        <h1 className="col-span-1 p-2 font-semibold text-right">Estimate Value</h1>
        <h1 className="col-span-1 p-2 font-semibold text-right">Contract Value</h1>
        <h1 className="col-span-2 p-2 font-semibold text-left">Sub-Contractor</h1>
        <h1 className="col-span-1 p-2 font-semibold text-left">Status</h1>
        <h1 className="col-span-1 p-2 font-semibold">Sub Acceptance</h1>
        <h1 className="col-span-1 p-2 font-semibold">Sub Acceptance Date</h1>
        <h1 className="col-span-1 p-2 font-semibold">Sub Quote</h1>
      </div>

      {defaultPreContract.map((item, index) => (
        <div 
          key={index}
          className="col-span-12 grid grid-cols-12 items-center hover:bg-blue-700 hover:text-white"
        >
          <h1 className="col-span-1 p-2 ">{item.code}</h1>
          <h1 className="col-span-2 p-2 ">{item.name.toUpperCase()}</h1>
          <h1 className="col-span-1 p-2 text-right">{(item.estimateValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>


          
          <h1 className="col-span-1 p-2 text-right">{(item.contractValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
          <h1 className="col-span-1 p-2 text-right">{(item.estimateValue - item.contractValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>
          <h1 className="col-span-2 p-2 text-left">{item.subContractor}</h1>
          <h1 className="col-span-1 p-2 text-left">{item.status}</h1>
        </div>
      ))}

    </div> 
  )
}

export default PreContract
