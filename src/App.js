import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import FoodItems from './Components/FoodItems/FoodItems';
import HeaderNavbar from './Components/HeaderNavbar/HeaderNavbar';
import { createContext, useState } from 'react';
import WhyYouChooseUs from './Components/WhyYouChooseUs/WhyYouChooseUs';
import Footer from './Components/Footer/Footer';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LoginForm from './Components/LoginForm/LoginForm';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import OrderPlaced from './Components/OrderPlaced/OrderPlaced';

export const cartContext = createContext()

function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <cartContext.Provider value={[cartItem, setCartItem]}>
      <Router>
        <Switch>
          <Route path="/home">
            <HeaderNavbar></HeaderNavbar>
            <Header></Header>
            <FoodItems></FoodItems>
            <WhyYouChooseUs></WhyYouChooseUs>
            <Footer></Footer>
          </Route>
          <Route path="/signup">
            <SignUpForm></SignUpForm>
          </Route>
          <Route path="/login">
            <LoginForm></LoginForm>
          </Route>
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/OrderPlaced">
            <OrderPlaced></OrderPlaced>
          </Route>
          <Route exact path="*">
            <HeaderNavbar></HeaderNavbar>
            <Header></Header>
            <FoodItems></FoodItems>
            <WhyYouChooseUs></WhyYouChooseUs>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
