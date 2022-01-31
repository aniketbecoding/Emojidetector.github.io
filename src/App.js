import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

var emojidictionary={
  "😀": "grinning face",
  "😂": "Face with tears of joy",
  "🤣": "Rolling over floor laughing (ROFL)",
  "🙂": "slightly smiling face",
  "😍": "smiling face with heart eyes (You loved it!)",
  "😜": "winking face with stuck-out toungue",


};
var emojisweknow=Object.keys(emojidictionary);      //to convert dictionary to array

function App() {
  
   var [meaning,setMeaning]= useState("");     

  function emojihandler(event){
    var userinput=event.target.value;
    var meaning=emojidictionary[userinput];

    if(meaning===undefined){
      meaning="We don't have this in our database!";
    }
    
    setMeaning(meaning);
  }
  function emojiclickhandler(emoji){
    var meaning=emojidictionary[emoji];
    setMeaning(meaning);
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Emoji Finder 😜</h1>

        <input onChange={emojihandler}/>          
           <h2> {meaning} </h2>           {/*Output*/ }
       
          <h3>Emojis we know</h3>
          {emojisweknow.map(function (emoji){
            return(
              <span 
              onClick={()=>emojiclickhandler(emoji)}
              style={{ fontSize: "2rem" ,padding:"0.5rem", cursor:"pointer"}} keys={emoji}>
              {emoji}</span>
            );
          })}
      </header>
    </div>
  );
}


export default App;
