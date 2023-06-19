import React from 'react'
import Menu from '../Data/Data'
import { Link } from 'react-router-dom'
import Product from '../Data/Product'
import { Icon } from '../Data/Data'
import { Family } from '../Data/Data'





export default function Home() {
  var one=Product.filter((q)=>q.cat==50)
  var two=Product.filter((q)=>q.cat==51)
  var three=Product.filter((q)=>q.cat==52)
  var four=Product.filter((q)=>q.cat==53)
  var five=Product.filter((q)=>q.cat==54)
  var nine=Product.filter((q)=>q.cat==1)
  return (
    <>
    {/* front page */}
    <div className='container'>
    <div className='row'>
   <section className='block1 d-flex flex-column justify-content-center'>
    <div className='container '>
        <div className='row  '>
            <div className='text-center' >
                <h1 className='text-white'>Find Top Real Estate in Nepal</h1>
                <form className="d-flex justify-content-center" role="search">
        <input className="form-control me-2 what " type="search" placeholder="SearchCity,Area,ID" aria-label="Search" />
        <button className='btn bg-danger text-white  love'><i class="bi bi-search fs-6"></i></button>
      </form>
      <p className='text-center text-white'>Sell My Property ⋅ Home Loans</p>
            </div>
            
        </div>
    </div>
    
   </section>
   </div>
   </div>
   {/* 2nd page */}
   <div className='container'>
<section>
    <div className='container py-3'>
        <div className='row d-flex justify-content-center '>
            <div className='col-lg-8'>
                <h5 className='text-center'>Buy verified properties by owners & agencies in Nepal</h5>
                <p className='text-center'>Search through our listing of real estate properties in Nepal and contact owner / agency directly to make a deal.</p>
                 <div className='d-flex gap-3 '>
                    <div className='d-flex wbc zoom'>
                      {two.slice(0,1).map((x)=>(
                        <>
                  <Link to={`/cat/${x.cat}`}><img width="50" src='https://www.gharghaderi.com/icon/house.png'/></Link>
                        <div className='d-flex flex-column justify-content-center'>
                    <Link className='link-dark' to={`/cat/${x.cat}`}><p className='px-3 fw-bolder '>House for sale</p></Link>
                        </div>
                        </>
                        ))}
                    </div>
                    <div className='d-flex wbc zoom  '>
                      {three.slice(0,1).map((x)=>(
                        <>
                    <Link to={`/cat/${x.cat}`}><img width="50" src='https://www.gharghaderi.com/icon/land.png'/></Link>
                        <div className='d-flex flex-column justify-content-center '>
                        <Link className='link-dark' to={`/cat/${x.cat}`}>  <p className='px-3 fw-bolder'>Land for sale </p></Link>  
                        </div>
                        </>
                        ))}
                    </div>
                    <div className=' wbc d-flex zoom '>
                      {four.slice(0,1).map((x)=>(
                        <>
                  <Link to={`/cat/${x.cat}`}><img width="50" src='https://www.gharghaderi.com/icon/rent.png'/></Link>
                        <div className=' d-flex flex-column justify-content-center'>
                <Link className='link-dark' to={`/cat/${x.cat}`}><p className='px-3 fw-bolder'>For Rent</p></Link> 
                        </div>
                        </>
                        ))}
                    </div>
                    <div className='d-flex wbc zoom '>
                      {five.slice(0,1).map((x)=>(
                        <>
                <Link to={`/cat/${x.cat}`}><img width="50" src='https://www.gharghaderi.com/icon/blog.png'/></Link>
                        <div className='d-flex flex-column justify-content-center'>
                     <Link className='link-dark' to={`/cat/${x.cat}`}><p className='px-3 fw-bolder'>News|Blogs</p></Link>
                        </div>
                        </>
                        ))}
                    </div>
                 </div>
                 <div className='container '>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='row'>
                      <div className='col-lg-6'>
                        <div className='row'>
                     <div className='py-5 d-flex mx-5  '>
                    <div className='mx-5 d-sm-none d-md-none d-lg-block '>
                    <p><i class="bi bi-whatsapp fs-1 fw-bolder "></i></p>
                    <p className='lh-1 fw-bolder'>9849124654</p>
                    </div>
                    <div className='mx-5 d-sm-none d-md-none d-lg-block'>
                    <p><i class="bi bi-instagram fs-1 fw-bolder"></i></p>
                    <p className='lh-1 fw-bolder'>contact us</p>
                    </div>
                    <div className='mx-5 d-sm-none d-md-none d-lg-block'>
                    <p><i class="bi bi-twitter fs-1 fw-bolder"></i></p>
                    <p className='lh-1 fw-bolder'>Tweet-<span></span>us</p>
                    </div>
                    <div className='mx-5 d-sm-none d-md-none d-lg-block'>
                    <p><i class="bi bi-hourglass-top fs-1 fw-bolder"></i></p>
                    <p className='lh-1 fw-bolder'>availabilty 24/7</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                      </div>
                    
                
               
                
            
            </div>
            <div className='col-lg-4'>
                <h4 className='text-center'>Post Demands</h4>
         <form action="/action_page.php">
         <label htmlfor="cars"><h6 className='text-dark fw-bolder'>i am looking for*</h6></label>
  <div>
<select id="cars" name="cars">
      <option value="volvo">Land</option>
      <option value="saab">House</option>
      <option value="fiat">Flat</option>
      <option value="audi">Apartment</option>
    </select>
  </div>
</form>
<form action="/action_page.php my-2">
         <label htmlfor="cars"><h6 className='text-dark fw-bolder'>Size*</h6></label>
  <div>
<select id="cars" name="cars">
      <option value="volvo">3-4 anna</option>
      <option value="saab">4-5 katha</option>
      <option value="fiat">6-7 dhur</option>
      <option value="audi">None</option>
    </select>
  </div>
</form>
<form action="/action_page.php my-2">
         <label htmlfor="cars"><h6 className='text-dark fw-bolder'>Location*</h6></label>
  <div>
<select id="cars" name="cars">
      <option value="volvo">Kathmandu</option>
      <option value="saab">Janakpur</option>
      <option value="fiat">Lalitpur</option>
      <option value="audi">Chitwan</option>
    </select>
  </div>
</form>
<form action="/action_page.php my-2">
         <label htmlfor="cars"><h6 className='text-dark fw-bolder'>Price Range*</h6></label>
  <div>
<select id="cars" name="cars">
      <option value="volvo">1-10lakh anna</option>
      <option value="saab">20-30lakh anna</option>
      <option value="fiat">30-40lakh anna</option>
      <option value="audi">40-50lakh anna</option>
    </select>
  </div>
</form>


            </div>
        </div>
    </div>
</section>
</div>

{/* third page */}

<section>
    <div className='container'>
      <div className='d-flex py-3 align-item-center '>
        <div className='simple'>
        <h5>Housing</h5>
        </div>
        <div>
          {nine.slice(0,1).map((x)=>(
          <button className=' btn bg-danger text-white mx-3'><Link className='link-light' to={`/cat/${x.cat}`}>see all</Link></button>
          ))}
        </div>
      </div>
      {/* {nine.slice(0,1).map((x)=>(
        <h5>Housings<span><button className='mx-2 btn bg-danger text-white'><Link className='link-light' to={`/cat/${x.cat}`}>see all</Link></button></span></h5>
        ))} */}
        <div className='row'>
          {nine.slice(0,4).map((x)=>(
            <div className='col-lg-3'>
      <div className="card zoom" style={{width: '18rem'}}>
<Link to={`/details/${x.id}`}><img src={x.img} className="card-img-top dog" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title owl">{x.price}</h5>
    <p className="card-text fw-bold">{x.Area}</p>
    <p className='fw-bold card-text'>{x.title}</p>
  </div>
</div>
</div>
))}


        </div>
    </div>
</section>

{/* fEATURED HOUSE page id 50 */}
<section>
  <div className='container py-3'>
  <div className='d-flex py-3 align-item-center  '>
    <div className='simple'>
        <h5>Featured House</h5>
        </div>
        <div>
          {one.slice(0,1).map((x)=>(
          <button className=' btn bg-danger text-white mx-3'><Link className='link-light' to={`/cat/${x.cat}`}>see all</Link></button>
          ))}
        </div>
      </div>
    {/* {one.slice(0,1).map((k)=>(
  <h2>Featured houses<span><button className='mx-2 btn bg-danger text-white'><Link className='link-light' to={`/cat/${k.cat}`}>see all</Link></button></span></h2>
  ))} */}
    <div className='row gy-2'>
      {one.slice(0,4).map((z)=>(
      <div className='col-lg-3'>
    <div className="card zoom" style={{width: '18rem'}}>
  <Link to={`/details/${z.id}`}> <img src={z.img} className="card-img-top dog " alt="..." /></Link>
  <div className="card-body lh-1">
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

{/* HOUSE FOR SALE PAGE  id 51*/}
<section>
  <div className='container py-3'>
  <div className='d-flex py-3 align-item-center '>
    <div className='simple'>
        <h5>House for sale</h5>
        </div>
        <div>
          {two.slice(0,1).map((x)=>(
          <button className=' btn bg-danger text-white mx-3'><Link className='link-light' to={`/cat/${x.cat}`}>see all</Link></button>
          ))}
        </div>
      </div>


    {/* {two.slice(0,1).map((k)=>(
  <h2>House for sale<span><button className='mx-2 btn bg-danger text-white'><Link className='link-light' to={`/cat/${k.cat}`}>see all</Link></button></span></h2>
  ))} */}
    <div className='row gy-2'>
      {two.slice(0,4).map((z)=>(
      <div className='col-lg-3'>
    <div className="card zoom" style={{width: '18rem'}}>
<Link to={`/details/${z.id}`}><img src={z.img} className="card-img-top dog " alt="..." /></Link>
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

{/* Land for sale page id 52 */}
<section>
  <div className='container py-3'>
  <div className='d-flex py-3 align-item-center '>
    <div className='simple'>
        <h5>Land for Sale</h5>
        </div>
        <div>
          {three.slice(0,1).map((x)=>(
          <button className=' btn bg-danger text-white mx-3'><Link className='link-light' to={`/cat/${x.cat}`}>see all</Link></button>
          ))}
        </div>
      </div>
    {/* {three.slice(0,1).map((k)=>(
  <h2>Land for sale<span><button className='mx-2 btn bg-danger text-white'><Link className='link-light' to={`/cat/${k.cat}`}>see all</Link></button></span></h2>
  ))} */}
    <div className='row'>
      {three.slice(0,4).map((z)=>(
      <div className='col-lg-3'>
    <div className="card zoom" style={{width: '18rem'}}>
<Link to={`/details/${z.id}`}><img src={z.img} className="card-img-top dog " alt="..." /></Link>
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

{/* for rent page id 53 */}
<section>
  <div className='container py-3'>
  <div className='d-flex py-3 align-item-center '>
    <div className='simple'>
        <h5>For Rent</h5>
        </div>
        <div>
          {four.slice(0,1).map((x)=>(
          <button className=' btn bg-danger text-white mx-3'><Link className='link-light' to={`/cat/${x.cat}`}>see all</Link></button>
          ))}
        </div>
      </div>


    {/* {four.slice(0,1).map((k)=>(
  <h2>For Rent<span><button className='mx-2 btn bg-danger text-white'><Link className='link-light' to={`/cat/${k.cat}`}>see all</Link></button></span></h2>
  ))} */}
    <div className='row'>
      {four.map((z)=>(
      <div className='col-lg-3'>
    <div className="card zoom" style={{width: '18rem'}}>
<Link to={`/details/${z.id}`}><img src={z.img} className="card-img-top dog " alt="..." /></Link>
  <div className="card-body ">
    <h5 className="card-title fw-bold owl">{z.price}</h5>
    <p className="card-text fw-bold ">{z.Area}</p>
    <p className="card-text fw-bold  ">{z.title}</p>
  </div>
</div>

      </div>
      ))}
    </div>
  </div>
</section>

{/* for news page id 54 */}
<section>
  <div className='container'>
  <div className='d-flex py-3 align-item-center '>
    <div className='simple'>
        <h5>News & Blogs </h5>
        </div>
        <div>
          {five.slice(0,1).map((x)=>(
          <button className=' btn bg-danger text-white mx-3'><Link className='link-light' to={`/cat/${x.cat}`}>see all</Link></button>
          ))}
        </div>
      </div>

    {/* {five.slice(0,1).map((k)=>(
  <h2>News & Blog<span><button className='mx-2 btn bg-danger text-white'><Link className='link-light' to={`/cat/${k.cat}`}>see all</Link></button></span></h2>
  ))} */}
    <div className='row py-2 my-2'>
      {five.map((w)=>(
      <div className='col-lg-4'>
        <div className='d-flex'>
       <Link to={`/details/${w.id}`}><img className='zoom' width="100" src={w.img}/></Link> 
          <div className='mx-2 my-2'>
            <h5 className='fw-bold'><Link className='link-dark' to={`/details/${w.id}`}>{w.title}</Link></h5>
          </div>
        </div>

      </div>
      ))}
    </div>
  </div>
</section>

{/* last page of the home page  */}

<section>
  <div className='container py-5'>
    <div className='simple'>
  <h2>Agencies<span><button className='mx-2 btn bg-danger text-white'>see all</button></span></h2>
  </div>
    <div className='row'>
      {Family.map((z)=>(
      <div className='col-lg-3  my-3'>
    <div className="card zoom" style={{width: '18rem'}}>
 <Link to={`/cat/${z.id}`}><img  src={z.img} className="card-img-top fox" alt="..." /></Link> 
  <div className="card-body">
    <h5 className="card-title text-center "><Link className='link-dark' to={`/cat/${z.id}`}>{z.title}</Link></h5>
    <p className="card-text text-center "><Link className='link-dark' to={`/cat/${z.id}`}>{z.head}</Link></p>
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
