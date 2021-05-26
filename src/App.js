import './App.css';
import React,{useState} from 'react';
import autocomplete from './Api/api'

function App() {
  const [value,setValue]=useState();
  const [list,setList]=useState();
  
  let suggestion = [];

  const setInputvalue = (e,x)=>{
    setValue(x);
    suggestion=[];
    setList(suggestion);
  }

  const handleChange = (e)=>{

    setValue(e.target.value);
    autocomplete.forEach(x=>{
      if(x.substr(0,e.target.value.length).toLowerCase()===e.target.value.toLowerCase()){
        suggestion.push(x);
        console.log(suggestion);
        setList(suggestion.slice(0,8).map((x,i)=>{
          return <p key={i} onClick={(e)=>setInputvalue(e,x)} className="point">{x}</p>;
        }))
      }
    })

    if(e.target.value.length===0) setList('');
  }
  

  return (
    <div className="App">
      <div>
          <input type="text" placeholder="Enter a word" className="inputfield" onChange={(e)=>handleChange(e)} value={value}/>
      </div>
      <div>
        {list}
      </div>
    </div>
  );
}

export default App;
