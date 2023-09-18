import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ContactWays from './components/ContactWays';
import './App.css';

function App() {
  const [page,setPage] = useState(0)

  return (
    <div className="App">
      <Navbar setPage={setPage}/>
      <Main page={page}/>
      <ContactWays/>
    </div>
  );
}

export default App;