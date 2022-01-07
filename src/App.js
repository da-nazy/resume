import './App.css';
import Sidebar from './Component/Sidebar';
import Main from './Component/Main';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
function App() {
  
  return (
    <Router>
     <div className="App">
      <Sidebar />
      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/cv" element={<h1>Under construction </h1>}/>
      </Routes>
    
    </div>
    </Router>
    
  );
}

export default App;
