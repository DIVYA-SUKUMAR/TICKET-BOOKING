import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Availability from './pages/Availability';
import ProtectedRoute from './ProtectedRoute';
import Passenger from './pages/passenger/Passenger';
import Home from './pages/Home/Home';
import Contact from './pages/contactus/Contact';
import Payment from './pages/payment/Payment';
import Freight from './pages/freight/Freight';
import Freightform from './pages/freight/Freightform';
import Update from './pages/freight/Update';
import Pnr from './pages/pnr/pnr';
import Reserved from './pages/pnr/reserved';
import Fareseat from './pages/pnr/fareseat';
import Login from './pages/login/Login';
import BasicTabs from './pages/login/Tabs';
function App() {
  const user = localStorage.getItem("user")
  return (
    <Router>
      <Navbar/>
       <Switch>
      
       <ProtectedRoute  path="/fareseat" exact component={Fareseat} user={user}/>
       <ProtectedRoute  path="/reserved"exact component={Reserved} user={user}/>
       <ProtectedRoute  path="/pnr"exact component={Pnr} user={user}/>
       <ProtectedRoute  path="/update" exact component={Update} user={user}/>
       <ProtectedRoute  path="/freightform" exact component={Freightform} user={user}/>
        <ProtectedRoute  path="/freight"exact component={Freight} user={user}/>
        <ProtectedRoute  path="/payment"exact component={Payment} user={user}/>
        <ProtectedRoute  path="/passenger" exact component={Passenger} user={user}/>
        <ProtectedRoute  path="/avail" exact component={Availability} user={user}/>
        <ProtectedRoute path="/home" exact component={Home} user={user}/>
        {user?<Redirect to='/home'/>:""} 
        
        <Route path="/contact" exact component={Contact} /> 
        <Route path="/Register" exact component={BasicTabs}/>
        <Route path="/" exact component={Login}/> 
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
