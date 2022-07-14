import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DynamicList } from './Components/DynamicList/Main';
import { DynamicMasonry } from './Components/DynamicMasonry';
import { DynamicCard } from './Components/DynamicCard';


function App() {
  let styles = {
    container: {
   
      alignItems:'center',
      justifyContent:'center',
      display:'flex'
    }
  }
  const items = []

 for(let i=0; i<50; i++){
 let url= `https://picsum.photos/id/${i+10}/200/300`
 items.push(<DynamicCard image={url}/>)
 }
  
  return (
    <div style={styles.container}>
      <DynamicMasonry items={items}/>
      
    </div>
  );
}


export default App;
