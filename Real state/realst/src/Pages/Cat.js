import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../Data/Product'


export default function Cat() {
    let{cid}=useParams();
    var displayPost=Product.filter((q)=>q.cat==cid)
    var two=Product.filter((q)=>q.cat==51)
 

  return (
    <>
  <div className='container py-5'>
  <div className='d-flex py-3 align-item-center '>
  {displayPost.slice(0,1).map((x)=>(
    <> 
    <div className='simple'>
        <h5>{x.wow}</h5>
        </div>
        <div>
         
          <button className=' btn bg-danger text-white mx-3'><Link className='link-light' to={`/cat/${x.cat}`}>see all</Link></button>
         
        </div>
        </>
         ))}
      </div>
    {/* {displayPost. slice(0,1).map((x)=>(
  <h5>{x.wow}<span><button className='mx-2 btn bg-danger text-white'>see all</button></span></h5>
  ))} */}
    <div className='row py-5'>
      {displayPost.map((z)=>(
      <div className='col-lg-3'>
    <div className="card" style={{width: '18rem'}}>
<Link to={`/details/${z.id}`}><img src={z.img} className="card-img-top dog zoom" alt="..." /></Link> 
  <div className="card-body">
    <h5 className="card-title fw-bold owl ">{z.price}</h5>
    <p className="card-text fw-bold ">{z.Area}</p>
    <p className="card-text fw-bold ">{z.title}</p>
  </div>
</div>

      </div>
      ))}
    </div>
  </div>
  {/* button */}
  <div className='d-flex justify-content-center py-5'>
  {two.slice(0,1).map((k)=>(
  <button className='btn btn-danger text-white '><Link className='link-light' to={`/cat/${k.cat}`}>Show more listing</Link></button>
  ))}
  </div>

  <div className='container'>
    <h3>Kathmandu city</h3>
    <hr/>
    <div className='row'>
      <div className='col-lg-3'>
        <p>Ason house sale</p>
        <p>Bafal house sale</p>
       <p>Balaju house sale </p>
       <p>Balambu house sale</p> 
       <p>Baluwatar house sale</p> 
       <p>Dahachowk house sale </p> 
       <p>Dhapasi house sale</p>  
        </div>
        <div className='col-lg-3'>
        <p>Ason house sale</p>
        <p>Bafal house sale</p>
       <p>Balaju house sale </p>
       <p>Balambu house sale</p> 
       <p>Baluwatar house sale</p> 
       <p>Dahachowk house sale </p> 
       <p>Dhapasi house sale</p>  
        </div>
        <div className='col-lg-3'>
        <p>Ason house sale</p>
        <p>Bafal house sale</p>
       <p>Balaju house sale </p>
       <p>Balambu house sale</p> 
       <p>Baluwatar house sale</p> 
       <p>Dahachowk house sale </p> 
       <p>Dhapasi house sale</p>  
        </div>
        <div className='col-lg-3'>
        <p>Ason house sale</p>
        <p>Bafal house sale</p>
       <p>Balaju house sale </p>
       <p>Balambu house sale</p> 
       <p>Baluwatar house sale</p> 
       <p>Dahachowk house sale </p> 
       <p>Dhapasi house sale</p>  
        </div>
    </div>
  </div>



    </>
  )
}

   


