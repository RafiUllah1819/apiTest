import React ,{useState, useEffect} from "react";
import {Route, Switch , Link} from 'react-router-dom'


function App({data, setData}) {
//   const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  console.log(data)
  useEffect(()=>{
    fetch('https://thronesapi.com/api/v2/Characters')
    // .then(response=>console.log(response))
    //  .then(myjson=> setData(myjson))
    .then(function(response){
      console.log(response)
      return response.json()
    })
    .then(function(myjson){
      console.log(myjson)
      setData(myjson)
    })
      
  },[])

  const filterList =  data.filter(fil =>{
    return fil.firstName.toLowerCase().includes(search.toLowerCase()) ||
     fil.lastName.toLowerCase().includes(search.toLowerCase())
})

  return (
    <div className="App">
      <div className="container">
        <div className="myapi mt-3">
          <h2 className="top text-center">My All datas</h2>
          <div className="form-group" 
          style={{width:"50%" }}
          >
            <input type="text"
            className="form-control"
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Please enter to search"
            >
            </input>
          </div>
        <table className="table table-striped table-hover">
       <thead>
         <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Full Name</th>
           <th>Show More</th>
         </tr>
       </thead>
       <tbody>
         {
           filterList.map((item, index)=>{
             return(
               <tr>
                 <td>{item.firstName}</td>
                 <td>{item.lastName}</td>
                 <td>{item.fullName}</td>
                 {/* <td><Link to="/SingleData/{id}">Show More</Link></td> */}
                 <td key={index}>{data.id} {data.firstName} <Link to={`/SingleData?id=${data.id}`}> Show Details</Link></td>
               </tr>
             )
           })
         }
       </tbody>
     </table>
        </div>
      </div>
   
    </div>
  );
}

export default App;
