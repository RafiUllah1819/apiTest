import React ,{useState, useEffect} from "react";
import {Route, Switch , Link} from 'react-router-dom'
import SingleData from "./component/SingleData";
import Home from './component/Home'

function App() {
  const [data, setData] = useState([])
  // const [search, setSearch] = useState('')
 

  return (
    <div className="App">
      
    <Switch>
      <Route exact path="/Home" render={(props)=><Home data={data} setData = {setData} {...props} />}/>
      <Route path="/SingleData" render={(props)=><SingleData data ={data} setData={setData} {...props} />}/>
    </Switch>
    </div>
  );
}

export default App;
