import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';

import About from './about';
import SideBar from './sidebar';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
    </Router>
  );
}

function Layout () {
  return(
  <div className='h-auto'>
    <div className='min-w-full p-2 flex space-x-2' style={{backgroundColor:'#0AA736'}}>
      <div class="w-2 h-2 bg-white rounded-full hover:bg-red-500"></div>
      <div class="w-2 h-2 bg-white rounded-full hover:bg-yellow-500"></div>
      <div class="w-2 h-2 bg-white rounded-full hover:bg-green-500"></div>
    </div>
    <div className='flex md:flex-row flex-col h-full'>
      <div><SideBar/></div>
      <div className='m-3 w-full'><Outlet/></div>
    </div>
  </div>)
}

export default App;
