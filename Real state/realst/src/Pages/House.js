import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Data/Data'
import Product from '../Data/Product'

export default function House() {
var six=Product.filter((q)=>q.cat==55)
  return (
    <>
    <div className='container my-3'>
        <div className='row'>
            {Icon.map((s)=>(
            <div className='col-lg-1'>
                <div className='col-lg-12'>
      <div>
<Link to={`/cat/${s.id}`}><img  src={s.img} className="card-img-top tops zoom " alt="..." /></Link>
  <div className="card-body">
    <p className="card-title "><Link className='link-dark' to={`/cat/${s.id}`}>{s.title}</Link></p>
    </div>
  </div>

            </div>
            </div>
            ))}
        </div>
    </div>
    <div className='container py-5'>
        <div className='row'>
            {six.map((x)=>(
            <div className='col-lg-3 py-3'>
          <div className="card zoom " style={{width: '18rem'}}>
<Link to={`/details/${x.id}`}><img src={x.img} className="card-img-top dog " alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title fw-bold owl">{x.price}</h5>
    <p className="card-text fw-bold">{x.Area}</p>
    <p className="card-text fw-bold">{x.title}</p>
  </div>
</div>

                
            </div>
            ))}
        </div>
    </div>
    </>
  )
}
