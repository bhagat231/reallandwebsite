import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../Data/Product'


export default function Single() {
    let {id}=useParams();
    var abc=Product.find((x)=>x.id==id)
    var two=Product.filter((q)=>q.cat==51)
  return (
    <>
      <div className='container py-3 text-center'>
    <div className='row justify-content-center shadow p-3 mb-5 bg-body rounded'>
    <h1 className="card-title py-2 text-dark fw-bolder">{abc.title}</h1>
  <div className="card" style={{width: '50rem'}}>
  <img src={abc.img} className="card-img-top dog" alt="..." />
  <div className="card-body">
    <h5 className="card-title fw-bolder owl text-danger ">{abc.price}</h5>
    <p className="card-text fw-bold  "><span className='text-danger'>Area</span>:&nbsp;{abc.Area}</p>
    <p className="card-text fw-bold "><span className='text-danger'>Description:</span><br/>{abc.desc}</p>
  </div>
</div>

    </div>
  </div>

  {/* other office listing */}
  <section>
  <div className='container py-3'>
  <h2>Latest Office Listings</h2>
  <hr/>
    <div className='row gy-2'>
      {two.slice(0,4).map((z)=>(
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
</section>
    </>
  )
}
