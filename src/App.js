import './App.css';
import Sidebar from './Component/Sidebar';
import Main from './Component/Main';
import Portfolio from './Component/Portfolio/Portfolio';
import Blog from './Component/Blog/Blog';
import Works from './Component/Works/Works'
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Resume from './Component/Resume/Resume';
import Request from './Component/Request/Request';
function App() {
  
  return (
    <Router>
     <div className="App">
      <Sidebar />
      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/portfolio" element={<Portfolio/>}/>
      <Route exact path="/blog" element={<Blog/>}/>
      <Route exact path="/resume" element={<Resume/>}/>
      <Route exact path="/works" element={<Works/>}/>
      <Route exact path="/request" element={<Request/>}/>
      </Routes>
    
    </div>
    </Router>
    
  );
}

export default App;
