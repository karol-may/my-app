import { useState } from 'react';
import env from 'react-dotenv';
import { QRCodeSVG } from 'qrcode.react';
import './App.css'

const APP_URL = env?.APP_URL ?? "http://localhost:5173";

function LoginForm({buttonOnClickHandler}){
  return(
    <form
      style={{display: 'flex', flexDirection: 'column'}}
      onSubmit={(e)=>{
        e.preventDefault();
        buttonOnClickHandler(e);
      }}
      >
      <label htmlFor="email">e-mail</label>
      <input type="text" id="email"/>
      <label htmlFor="password">hasło</label>      
      <input type="password" id="password"/>
      <hr/>
      <button>Zaloguj</button>
    </form>
  )
}



function App() {
  const [user, setUser] = useState(null);

  function buttonOnClickHandler(e){
    setUser("karol@imay.pl");
  }

  return (
    <>
      { user &&
          <>
            Hi {user}, All let's get know each other!
            <QRCodeSVG value={APP_URL+"/"+user}></QRCodeSVG>
          </>
      }

      { !user &&
        <>
          <LoginForm buttonOnClickHandler={buttonOnClickHandler}/>        
        </>
      }     
    </>
  )
}

export default App
