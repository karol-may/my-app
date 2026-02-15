import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import HelloPage from './test/Page';

const APP_URL =
  import.meta.env.VITE_APP_URL ??
  import.meta.env.VITE_VERCEL_PROJECT_PRODUCTION_URL ??
  "localhost:5173";

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
function Abc() {
  return(<>kjhgffdfgh</>);
}
function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abc" element={<Abc/>} />
          <Route path={"/hello/:email"} element={<HelloPage/>} />
        </Routes>
      </>
    );
}

function Home() {
  const [user, setUser] = useState(null);

  function buttonOnClickHandler(e){
    setUser("karol@imay.pl");
  }

  return (
    <>
      <Link to={"/test"}> test </Link>

      { user &&
          <>
            <QRCodeSVG value={"https://"+APP_URL+"/hello/kjhgfd"}></QRCodeSVG>
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
