import React from "react";

function Technicians()
{const carpenter = [
    { Name: "Arshad Chaudry",
     Location:"Lyari",
    Bio : "i am very skillfull ,, hire me now",
   Rating: 5,
   Review : [""]
 },
 { Name: "Aslam khan",
 Location:"johar",
Bio : "i am very skillfull ,, hire me now",
Rating: 4,
Review : [""]
},
{ Name: "anas ahmed khan",
Location:"north karachi",
Bio : "i am very skillfull ,, hire me now",
Rating: 5,
Review : [""]
}    
];

const electrician = [
    { Name: "kareem Chaudry",
     Location:"Lyari",
    Bio : "i am very skillfull ,, hire me now",
   Rating: 5,
   Review : [""]
 },
 { Name: "zorawar  khan",
 Location:"johar",
Bio : "i am very skillfull ,, hire me now",
Rating: 4,
Review : [""]
},
{ Name: "maaz ahmed",
Location:"saddar",
Bio : "i am very skillfull ,, hire me now",
Rating: 5,
Review : [""]
}    
];
const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textalign:"center",
    margin: "20px",
    padding: "25px"
  };




// function Inner() {
//   const b = [
//     {
//       URL: "profile",
//       Name: "xyz",
//       Description:
//         "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
//     },
//     {
//       URL: "profile",
//       Name: "xyz",
//       Description:
//         "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
//     },
//     {
//       URL: "profile",
//       Name: "xyz",
//       Description:
//         "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
//     },
//     {
//       URL: "profile",
//       Name: "xyz",
//       Description:
//         "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
//     },
//     {
//       URL: "profile",
//       Name: "xyz",
//       Description:
//         "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
//     },
//   ];
 
  const arr = carpenter.map((cvalue) => (
    <div  style={styles}>

      <div className="m-2 p-2">
       <p>{cvalue.Name}</p>
        <p>{cvalue.Location}</p>
        <p>{cvalue.Bio}</p>
        <p>{cvalue.Rating}</p>
        <p>{cvalue.Review}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div>{arr[0]}</div>
      <div>{arr[1]}</div>
      <div>{arr[2]}</div>
    </div>
  );
}

export default Technicians ;