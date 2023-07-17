import Body from './components/Body';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import './App.css';
import {useState} from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen]= useState(true)
  const [isLogedin, setIsLogedin]= useState(false)
  const [username, setUsername] = useState('')

  const troggle = () =>{
    setIsSidebarOpen(!isSidebarOpen)
  } 

  const handleLogin = (un) => {
    setIsLogedin(true)
    setIsSidebarOpen(false)
    setUsername(un)
  }

  return (
    <div className="App">
      <header className='navbar-container'>
        <NavBar onToggleSidebar={troggle} un = {username}/>
      </header>
      <main className='fullbody-container '>
        {
          isSidebarOpen && 
            <div className='sidebar-container '>
              <SideBar/>
            </div>
        }
        <div className='body-container'>
          <Body onHandleLogin = {handleLogin} />
        </div>
      </main>
    </div>
  );
}

export default App;
