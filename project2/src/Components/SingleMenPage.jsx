import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import "../styles/SingleMenPage.css";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import Footer from './Footer';

function SingleMenPage() {

  const [data,setData] = useState([]);

  const getData = async () => {
    let res = await fetch(`https://myntrafinaldata.herokuapp.com/men/${id}`);
    let datas = await res.json();
    console.log(datas);
    setData([datas]);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data)

  const { id } = useParams();
  console.log(id);
  return (
    <div>
        <Header/>
        <>
        {data.map((item)=> {
          return (
            <>
            <div className='singleMan__container' >
              <div className='singleMan__img' >
                <div>
                  <img src={item.images.image1} />
                </div>
                <div>
                  <img src={item.images.image2} />
                </div>
                <div>
                  <img src={item.images.image3} />
                </div>
                <div>
                  <img src={item.images.image4} />
                </div>
              </div>
            <div className='singleMan__details' >
              <div className='singleMan__details1' >
                <div className='singleMan__brand' >
                  {item.brand}
                </div>
                <div style={{ fontSize: "20px", color: "#8b8d97",marginTop:"20px" }} >
                  {item.title}
                </div>
                <div className='singleMan__rating' >
                  <div>
                    <b>
                      <p style={{fontSize:"15px"}} >{item.rating}</p>
                    </b>
                    <p style={{ color: "#48958f" }}>
                          <StarIcon fontSize="10px" />
                    </p>
                  </div>
                  <div style={{
                          color: "#8b8d97",
                          alignItems: "center",
                          alignSelf: "center",marginTop:"-4px"
                        }} > 
                        {" "}
                  <p style={{fontSize:"15px"}} > | {item.count} Ratings</p>
                  </div>
                </div>
                <hr style={{marginTop:"15px",fontWeight:"bolder",color:"black"}} ></hr>
                <div style={{ textAlign: "left", marginTop: "-5px" }}>
                        <div style={{display: "flex",gap: "10px",width: "auto"}}>
                          <p>
                            {" "}
                            <b style={{ color: "darkslategray", fontSize: "22px" }}>
                              {`₹ ${item.price}`}
                              </b>
                          </p>
                          <p style={{
                              color: "#8b8d97",
                              fontSize: "18px",
                              marginTop: "18px",
                            }}
                          >
                            {" "}
                            MRP
                            <span style={{ textDecoration: "line-through" }}>₹
                              {`${item.off_price}`}{" "}
                            </span>
                          </p>
                          <p style={{ color: "#ee9d20" }}>
                            <b style={{ fontSize: "22px" }}>
                              {" "}
                              {`(${item.discount}% OFF)`}{" "}
                            </b>
                          </p>
                        </div>
                    </div>
                    <div style={{marginTop: "-18px",color: "#79a987",fontSize: "14px",marginTop: "0px"}}>
                      <b>inclusive of all taxes</b>
                    </div>
                    <div className='size__box' >
                      <div style={{fontWeight:"bold",fontSize:"15px"}} >SELECT SIZE</div>
                      <div style={{fontWeight:"bold",color:"#ee4f6c",fontSize:"14px",marginTop:"4px",cursor:"pointer"}} >SIZE CHART {">"}</div>
                    </div>
                    <div style={{ display: "flex", gap: "10px" }} >
                          {item.sizes.map((el)=> {
                            return (
                              <div className='size__map' >
                                <p>{el}</p>
                              </div>
                            )
                          })}
                    </div>
                    <div className='cart__box' >
                        <div className='cart__box1' >
                            <ShoppingBagIcon style={{fontSize:"18px"}} />
                            <p>
                              <b style={{fontSize:"18px"}} >ADD TO BAG</b>
                            </p>
                        </div>
                        <div className='cart__box2' >
                            <FavoriteBorderIcon />
                            <b>
                            {" "}
                            <p>WISHLIST</p>
                            </b>
                        </div>
                    </div>
              </div>
            </div>
          </div>
          </>
          )
            
        })}
        
        </>
        <Footer/>
    </div>
  )
}

export default SingleMenPage