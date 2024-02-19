import React, { useState } from 'react'
import Navbar from './components/subcomponents/Navbar'
import useFetch from './components/inputFetcher'











const App = ({category}) => {
  const {data,loading,error} = useFetch(category);
  if(loading){
    return <div>Loading...</div>;
  };
  if(error){
    return <div>Error: {error.message}</div>
  };
  const [datas,setData] = useState([]);
  return(
    <div>
      {
        data.map((items)=>(
            <ul key={items.id} className='hidden sm:inline-flex gap-4 mx-auto'>
              <li>
                {items.name}  
              </li>
            </ul>
        ))
      }
    </div>
  )
  
}

export default App
