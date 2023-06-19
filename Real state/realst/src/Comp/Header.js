import React from 'react'
import Menu from '../Data/Data'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Cat from '../Pages/Cat';
import Single from '../Pages/Single';
import House from '../Pages/House';
import PostAd from '../Pages/PostAd';


export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white  text-dark ">
  <div className="container">
    <Link className="navbar-brand px-5" to="/"><img width="200" src='https://www.gharghaderi.com/icon/gg_aclo_logo.svg'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-5  mb-2 mb-lg-0 d-flex align-item-center">
        <li className="nav-item">
          <Link  className="nav-link active link-dark" aria-current="/" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="/" to="/"><Link className='link-dark' to={"/hou"}>House</Link></Link>
        </li>
        {Menu.map((x)=>(
        <li className="nav-item">
          <a className="nav-link" href="#"><Link className='link-dark' to={`/cat/${x.id}`}>{x.catName}</Link></a>
        </li>
        ))}
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Rent</a>
        </li> */}
        <button className='btn btn-outline-light-success my-1 py-1 '><Link className='link-dark' to={"/post"}>POST ADS</Link></button>
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2 cde " type="search" placeholder="SearchCity,Area,ID" aria-label="Search" />
        <button className='btn bg-danger text-white px-3 kyu'><i class="bi bi-search"></i></button>
      </form>
     </div>
     <button className="btn btn-outline-light-success mx-2" type="submit"><Link className='link-dark' to={"/post"}>LOG IN</Link></button>
     <button className="btn btn-outline-light-success mx-2" type="submit"><Link className='link-dark' to={"/post"}>SIGN UP</Link></button>
     <button className="btn btn-outline-light-success" type="submit"><i class="bi bi-justify"></i></button>
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<Cat />} />
        <Route path="/details/:id" element={<Single />} />
        <Route path="/hou" element={<House />} />
        <Route path="/post" element={<PostAd />} />
        
        
      </Routes>


    </>
  )
}
