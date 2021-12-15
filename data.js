export const useProjects = [
  {
    id: "1",
    code: "JOB001",
    name: "Project 1",
    url: "/project2.png",
    dateCreated: "05/07/2019"
  },
  {
    id: "2",
    code: "JOB002",
    name: "Project 2",
    url: "/project2.png",
    dateCreated: "17/07/1993"
  },
  {
    id: "3",
    code: "JOB003",
    name: "Project 3",
    url: "/project3.png",
    dateCreated: "17/07/1993"
  },
]

export const defaultPreContract = [
  {
    id: "9999",
    code: "9999",
    name: "TOTAL",
    GST: "15%",
    estimateValue: 0,
    contractValue: 0,
  },
  {
    id: "1",
    code: "0100",
    name: "Preliminary and General",
    status: "-",
    tenderDate: "25/12/2021",
    estimateValue: 64300.54,
    contractValue: 64300.54,
    subContractor:"In House",
    subAcceptance:"-",
    secondayItems: [
      // Project Team
      {
        id: "0",
        code: "0100",
        name:"Project Team",
        quantity: "1",
        unit: "no",
        estimateValue: 0,
        contractValue: 0,
        tertiary: [
          {id: "1", code: "0101", name: "Project Manager", quantity: "300", unit: "hr", rate: "$75.00", value: ""},
          {id: "2", code: "0102", name: "Quantity Surveyor", quantity: "62", unit: "hr", rate: "$75.00", value: ""},
        ]
      },
      // Consents
      {id: "1", code: "0110", name:"Item 1"},
      //Utilities
      {id: "2", code: "0120", name:"Item 2"},
      //Tools and Pant
      {id: "3", code: "0130", name:"Item 3"},
      //Health & Safety
      {id: "4", code: "0140", name:"Item 4"},
    ]
  },
  {
    id: "2",
    code: "0200",
    name: "Excavation",
    status: "Tender Recieved",
    tenderDate: "25/12/2021",
    estimateValue: 30956.04,
    contractValue: 28500.00,
    subContractor:"RJ Civil",
    subAcceptance:"Yes",
    secondayItems: [
      {id: "0", code: "0200", name:"Item 0"},
      {id: "1", code: "0210", name:"Item 1"},
      {id: "2", code: "0220", name:"Item 2"},
      {id: "3", code: "0230", name:"Item 3"},
    ]
  },
  {
    id: "3",
    code: "0300",
    name: "Concrete",
    status: "Tender Recieved",
    tenderDate: "25/12/2021",
    estimateValue: 25244.44,
    contractValue: 24100.00,
    subContractor:"Southern Foundations",
    subAcceptance:"Yes",
    secondayItems: [
      {id: "0", code: "0200", name:"Item 0"},
      {id: "1", code: "0210", name:"Item 1"},
      {id: "2", code: "0220", name:"Item 2"},
      {id: "3", code: "0230", name:"Item 3"},
    ]
  },
]