import { Routes, Route } from "react-router-dom";

import React from "react";
import { Home } from "../HomePageComponents/Home";
import { Login } from "../Logincomponent/Login";
import { Otp } from "../Logincomponent/Otp";
import { Password } from "../Logincomponent/Password";
import { Cart } from "../CartComponent/Cart";
import { WomenKurti } from "../components/WomenKurti";
import { WomenTops } from "../components/WomenTops";
import { MenJeans } from "../components/MenJeans";
import { MenTshirts } from "../components/MenTshirts";
import { Wishlist } from "../ComponentsWishlist/Wishlist";

import { Search } from "../components/Search";
import { Payment } from "../CartComponent/Payment";
import { SingleProduct } from "../SingleProduct/SingleProduct";
import { Empty } from "../Logincomponent/Empty";
import { EmptyCart } from "../Logincomponent/EmptyCart";
import { Error } from "../CartComponent/Error";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/password" element={<Password />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/women-kurti" element={<WomenKurti />} />
      <Route path="/women-tops" element={<WomenTops />} />
      <Route path="/men-jeans" element={<MenJeans />} />
      <Route path="/men-tshirts" element={<MenTshirts />} />
      <Route path="/wishlist" element={<Wishlist /> } />
      <Route path="/checkout/cart" element={<Wishlist /> } />
      <Route path="/checkout/address" element={<Wishlist /> } />
      <Route path="/cehckout/payment" element={<Wishlist /> } />

      <Route path="/search/:q" element={<Search />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/emptywishlist" element={<Empty />} />
      <Route path="/emptycart" element={<EmptyCart />} />
      <Route path="*" element={<Error />} />
      {/* <Route path="/productSingle/:tag/:id" element={<SingleProduct />} /> */}
      <Route path="/:tag/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default AllRoutes;
