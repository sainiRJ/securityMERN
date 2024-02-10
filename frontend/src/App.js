import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import LandingPage from "./components/pages/landingPages/LandingPage";
import TradeReport from "./userDashboard/pages/tradeReport/TradeReport";
import Sidebar from './userDashboard/pages/tradeReport/header/Sidebar';
import ClientSection from './components/clientSection/ClientSection';
function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>  
    <Route path="/" element={<LandingPage />} />  
    <Route path="/headpage" element={<Sidebar />} />  
    <Route path="/client" element={<ClientSection />} />  
    
    <Route path="/trade-report" element={<TradeReport />} />  

    </Routes>
  </BrowserRouter>
    </>
  )
  
}

export default App;
