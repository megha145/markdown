import axios from 'axios'
import { useState } from 'react';
import './App.css';


function App() {
  const[markdownText, setmarkdownText] = useState('')
  const[renderedHtml , setrenderedHtml] = useState('')

  const handleMarkDownChange = (e)=>{
     setmarkdownText(e.target.value)
  }

  const handleRender = async()=>{
    try{
         const response = await axios.post('http://localhost:3050/markdown', {markdownText})
         setrenderedHtml(response.data)
    }catch(error){
      console.error('Error rendering Markdown:', error);
    }
  }
  return (

    <div className="App">
     <textarea value={markdownText}
     onChange = {handleMarkDownChange}></textarea>
     <button onClick = {handleRender}>Render</button>
     <div className="App1" dangerouslySetInnerHTML={{ __html:renderedHtml }}></div>
    </div>
  );
}

export default App;
