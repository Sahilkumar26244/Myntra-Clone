import React, { useState } from 'react'
import Header from './Header'
import "../styles/MenPage.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import SearchIcon from '@mui/icons-material/Search';

function WomenPage() {

    const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        const getData = async () => {
            let res = await fetch("https://myntrafinaldata.herokuapp.com/women");
            let data = await res.json();
            setProducts(data);
        };
        getData();
    },[])
    console.log(products.length)

  return (
    <div className='menPage' >
        <Header/>
        <div className='menPage__totalProducts' >
            <strong>Sports Apparel</strong><p> - {products.length} items</p>
        </div>
        <div className='menPage__filter' >
            <div className='menPage__filter1' >
                <div>FILTERS</div>
                <div id='clear' >CLEAR ALL</div>
            </div>
            <div className='menPage__filter2' >
                <div>Bundles</div><ExpandMoreIcon style={{color:"lightgray",marginLeft:"-40px",marginTop:"8px"}} />
                <div>Character</div><ExpandMoreIcon style={{color:"lightgray",marginLeft:"-40px",marginTop:"8px"}} />
                <div>Closure</div><ExpandMoreIcon style={{color:"lightgray",marginLeft:"-40px",marginTop:"8px"}} />
                <div>Country of Origin</div><ExpandMoreIcon style={{color:"lightgray",marginLeft:"-40px",marginTop:"8px"}} />
                <div>Fabric</div><ExpandMoreIcon style={{color:"lightgray",marginLeft:"-40px",marginTop:"8px"}} />
                <div>Fabric 2</div><ExpandMoreIcon style={{color:"lightgray",marginLeft:"-40px",marginTop:"8px"}} />
                <div>Fabric Type</div><ExpandMoreIcon style={{color:"lightgray",marginLeft:"-40px",marginTop:"8px"}} />
            </div>
            <div className='menPage__filter3' >
                <div className='menPage__sort' >
                    <div>Sort by : <strong>Recommended</strong></div>
                    <div><ExpandMoreIcon style={{marginTop:"-5px"}} /></div>
                </div>
            </div>
        </div>
        <div className='products' >
            <div className='filter__section' >
            <div className='category' >
                    <div className='category1' >
                        <div>CATEGORY</div>
                        <div><SearchIcon/></div>
                    </div>
                    <div className='checkboxes' >
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}} >Sarees</strong>(11224)</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}} >Saree Blouse</strong>(3245)</p>
                        </div>
                        
                    </div>
                </div>
                <div className='category1' >
                        <div>BRAND</div>
                        <div><SearchIcon/></div>
                    </div>
                <div className='checkboxes' >
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}} >KALINI</strong>(10897)</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}} >Pothys</strong>(18798)</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}}>Mitera</strong>(78965)</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}}>SAADHVI</strong>(43112)</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}}>Florence</strong>(4104)</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}}>Saree mall</strong>(82876)</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}}>Unnati Silks</strong>(2799)</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p><strong style={{marginRight:"5px"}}>The Chennai Silks</strong>(65876)</p>
                        </div>
                </div>
            </div>
            <div className='allProducts' >
                {products.map((men)=> {
                    return (
                        <>
                        
                        <div  className='singleProduct' >
                        <Link style={{color:"black",textDecoration:"none"}} to={`/singleWomenPage/${men.id}`} >
                                <div className='singleProduct1' >
                                <img alt="" src={men.images.image1} />
                                </div>
                                <div className='men__details' >
                                    <div className='brand' > {men.brand} </div>
                                    <div className='title' >{men.title}</div>
                                </div>
                                <div className='price__details' >
                                    <div style={{ fontSize: "12px", fontWeight: "bold" }} >Rs.{men.price}</div>
                                    <div style={{fontSize: "12px",textDecorationLine: "line-through"}} >{men.off_price ? `Rs ${men.off_price}` : "NA"}</div>
                                    <div style={{ fontSize: "12px", color: "orange" }} >{men.discount ? `(${men.discount}% OFF)` : "NA"}</div>
                                </div>
                            
                            
                                </Link>
                        </div>
                        
                        </>   
                    )
                    
                })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default WomenPage;