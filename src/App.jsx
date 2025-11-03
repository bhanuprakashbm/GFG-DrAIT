
import {useEffect } from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Events from './events/NewEvents.jsx';
import NotFound from './NotFound.jsx';
import Home from './home/Home.jsx'
import DSASheet from './dsa-sheet/DSASheet.jsx';
import DSAContest from './dsa-contest/DSAContest.jsx';
import Team from './team/Team.jsx';
import AboutUs from './about/AboutUs.jsx';
import POTD from './potd/POTD.jsx';
function App(){

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

   useEffect(() => {
    AOS.init({
      duration: 1000,
     });
  }, []);

  return (
    <Routes>
      <Route path="/">
      <Route index  element={<Home />} />
      <Route path="events" element={<Events />} />
      <Route path="team" element={<Team />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="potd" element={<POTD />} />
      <Route path="dsa-sheet" element={<DSASheet />} />
      <Route path="dsa-contest" element={<DSAContest/>}/>
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;