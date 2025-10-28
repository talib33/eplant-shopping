import { useLocation } from "react-router-dom";
import Header from "./component/layout/header"
import Home from "./pages/home"
import RoutesCall from "./routes"

function App() {
   const location = useLocation();

  const hideHeaderFooter = location.pathname === "/";
  return (
    <>
   {!hideHeaderFooter && <Header />}
    <RoutesCall />
    
     
     
    </>
  )
}

export default App
