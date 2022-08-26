import React from 'react'
import "../styles/Header.css"
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none",
    padding: "10px",
    color: "black",
    cursor:"pointer"
  };

function Header() {
  return (
    <div className="header" >
        <div className='header__main' >
          <Link to="/" >
          <img className='header__logo' src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt='' />
          </Link>
            
            <div className='header__section' >
                <ul >
                    <li className='dropdown' >
                        {/* <a  className='dropbtn' style={linkStyle} >MEN</a> */}
                        <Link className='dropbtn' style={linkStyle}  to="/menPage" >MEN</Link>
                        <div className='dropdownContent' >
                  <div
                    style={{
                      display: "grid",
                      width: "80%",
                      gridTemplateColumns: "repeat(10, auto) ",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                        fontStyle: "1px",
                      }}
                    >
                      <div style={{ color: "red" }}>Topwear</div>
                      <div> T-Shirts </div>
                      <div>Casual Shirts</div>
                      <div>Formal Shirts</div>
                      <div>Sweatshirts</div>
                      <div>Sweaters</div>
                      <div>Jackets</div>
                      <div>Blazers & Coats</div>
                      <div>Suits</div>
                      <div>Rain Jackets</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Indian & Festive Wear
                      </div>

                      <div>Kurtas & Kurta Sets</div>
                      <div>Sherwanis</div>
                      <div>Nehru Jackets</div>
                      <div>Dhotis</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Bottomwear</div>
                      <div> T-Shirts </div>
                      <div>Casual Trousers</div>
                      <div>Shorts</div>
                      <div>Track Pants & Joggers</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Innerwear & Sleepwear
                      </div>
                      <div>Briefs & Trunks</div>
                      <div>Boxers</div>
                      <div>Vests</div>
                      <div>Sleepwear & Loungewear</div>
                      <div>Thermals</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Plus Size
                      </div>
                      <div>Kurtas & Kurta Sets</div>
                      <div>Sherwanis</div>
                      <div>Nehru Jackets</div>
                      <div>Dhotis</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Footwear</div>
                      <div>Casual Shoes</div>
                      <div>Sports Shoes</div>
                      <div>Formal Shoes</div>
                      <div>Sneakers</div>
                      <div>Sandals & Floaters</div>
                      <div>Flip Flops</div>
                      <div>Socks</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Personal Care & Grooming
                      </div>
                      <div style={{ color: "red" }}>Sunglasses & Frames</div>
                      <div style={{ color: "red" }}>Watches</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Sports & Active Wear</div>
                      <div> Sports Shoes </div>
                      <div>Casual Shirts</div>
                      <div>Sports Sandals</div>
                      <div>Active T-Shirts</div>
                      <div>Track Pants & Shorts</div>
                      <div>Tracksuits</div>
                      <div>Jackets & Sweatshirts</div>
                      <div>Sport Accessories</div>
                      <div>Swimwaer</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Gadgets
                      </div>
                      <div>Smart Wearable</div>
                      <div>Fitness Gadget</div>
                      <div>Headphones</div>
                      <div>Speakers</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Fashion Acessories</div>
                      <div> Wallets </div>
                      <div>Belts</div>
                      <div>Perfumes & Body Mists</div>
                      <div>Trimmers</div>
                      <div>Deodorants</div>
                      <div>Ties, Cufflinks & Pocket Squares</div>
                      <div>Accessory Gift Sets</div>
                      <div>Caps & Hats</div>
                      <div>Mufflers, Scarves & Gloves</div>
                      <div>Phone Cases</div>
                      <div>Rings & Wristwear</div>
                      <div>Helmets</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Bags & Backpacks
                      </div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Luggages & Trolley
                      </div>
                    </div>
                  </div>
                </div>
                 </li>
                    
                      {/* Women */}

                    <li className='dropdown' >
                        {/* <a href="" className='dropbtn' style={linkStyle}  >WOMEN</a> */}
                        <Link className='dropbtn' style={linkStyle} to="/womenPage" >WOMEN</Link>
                        <div className="dropdownContent">
                  <div
                    style={{
                      display: "grid",
                      width: "80%",
                      gridTemplateColumns: "repeat(10, auto) ",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Indian & Fusion Wear</div>
                      <div> Kurtas & Suits </div>
                      <div>Kurtis, Tunics & Tops</div>
                      <div>Sarees</div>
                      <div>Ethnic Wear</div>
                      <div>Leggings, Salwars & Churidars</div>
                      <div>Skirts & Palazzos</div>
                      <div>Dress Materials</div>
                      <div>Lehenga Cholis</div>
                      <div>Dupattas & Shawls</div>
                      <div>Jackets</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Belts, Scarves & More
                      </div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Watches & Wearables
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Western Wear</div>
                      <div>Dresses</div>
                      <div>Tops</div>
                      <div>Tshirts</div>
                      <div>Jeans</div>
                      <div>Trousers & Capris</div>
                      <div>Shorts & Skirts</div>
                      <div>Co-ords</div>
                      <div>Playsuits</div>
                      <div>Jumpsuits</div>
                      <div>Shrugs</div>
                      <div>Sweaters & Sweatshirts</div>
                      <div>Jackets & Coats</div>
                      <div>Blazers & Waistcoats</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Plus Size
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Maternity</div>
                      <div>Sunglasses & Frames</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Footwear
                      </div>
                      <div>Flats</div>
                      <div>Casual Shoes</div>
                      <div>Heels</div>
                      <div>Boots</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Sports & Active Wear
                      </div>
                      <div>Clothing</div>
                      <div>Footwear</div>
                      <div>Sports Accessories</div>
                      <div>Sports Equipment</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Lingerie & Sleepwear</div>
                      <div>Bra</div>
                      <div>Briefs</div>
                      <div>Shapewear</div>
                      <div>Sleepwear & Loungewear</div>
                      <div>Swimwear</div>
                      <div>Camisoles & Thermals</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Beauty & Personal Care
                      </div>
                      <div>Makeup</div>
                      <div>Skincare</div>
                      <div>Premium Beauty</div>
                      <div>Lipsticks</div>
                      <div>Fragrances</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Gadgets</div>
                      <div>Smart Wearables</div>
                      <div>Fitness Gadgets</div>
                      <div>Headphones</div>
                      <div>Speakers</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Jewellery
                      </div>
                      <div>Fashion Jewellery</div>
                      <div>Fine Jewellery</div>
                      <div>Earrings</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Backpacks
                      </div>
                      <div>Handbags, Bags & Wallets</div>
                      <div>Luggages & Trolleys</div>
                    </div>
                  </div>
                </div>
                    </li>

                      {/* KIDS */}

                    <li className='dropdown' >
                        <a href="" className='dropbtn' style={linkStyle}  >KIDS</a>
                        <div className="dropdownContent">
                  <div
                    style={{
                      display: "grid",
                      width: "60%",
                      gridTemplateColumns: "repeat(5, auto) ",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        marign: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Boys Clothing</div>
                      <div>T-Shirts</div>
                      <div>Shirts</div>
                      <div>Shorts</div>
                      <div>Jeans</div>
                      <div>Trousers</div>
                      <div>Clothing Sets</div>
                      <div>Ethnic Wear</div>
                      <div>Track Pants & Pyjamas</div>
                      <div>Jacket, Sweater & Sweatshirts</div>
                      <div>Party Wear</div>
                      <div>Innerwear & Thermals</div>
                      <div>Nightwear & Loungewear</div>

                      <div>Value Packs </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        marign: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Girls Clothing</div>
                      <div>Dresses</div>
                      <div>Tshirts</div>
                      <div>Tops</div>
                      <div>Clothing Sets</div>
                      <div>Lehenga choli</div>
                      <div>Kurta Sets</div>
                      <div>Party wear</div>
                      <div>Dungarees & Jumpsuits</div>
                      <div>Skirts & shorts</div>
                      <div>Tights & Leggings</div>
                      <div>Jeans, Trousers & Capris</div>
                      <div>Jacket, Sweater & Sweatshirts</div>
                      <div>Innerwear & Thermals</div>
                      <div>Nightwear & Loungewear</div>
                      <div>Value Packs</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        marign: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Footwear</div>
                      <div>Casual Shoes</div>
                      <div>Sports Shoes</div>
                      <div>Formal Shoes</div>
                      <div>Sneakers</div>
                      <div>Sandals & Floaters</div>
                      <div>Flip Flops</div>
                      <div>Socks</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Toys
                      </div>
                      <div>Learning & Development</div>
                      <div>Activity Toys</div>
                      <div>Soft Toys</div>
                      <div>Action Figure / Play set</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        marign: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Infants</div>
                      <div>Bodysuits</div>
                      <div>Rompers & Sleepsuits</div>
                      <div>Clothing Sets</div>
                      <div>Tshirts & Tops</div>
                      <div>Dresses</div>
                      <div>Bottom wear</div>
                      <div>Winter Wear</div>
                      <div>Innerwear & Sleepwear</div>
                      <div>Infant Care</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Home & Bath
                      </div>
                      <div>Personal Care</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        marign: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Kids Accessories</div>
                      <div> Bags & Backpacks </div>
                      <div>Watches</div>
                      <div>Jewellery & Hair accessory</div>
                      <div>Masks & Protective Gears</div>
                      <div>Caps & Hats</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Brands
                      </div>
                      <div>H&M</div>
                      <div>Max Kids</div>
                      <div>Pantaloons</div>
                      <div>United Colors Of Benetton Kids</div>
                      <div>YK</div>
                      <div>U.S. Polo Assn. Kids</div>
                      <div>Mothercare</div>
                      <div>HRM</div>
                    </div>
                  </div>
                </div>
                    </li>

                      {/* HOME & LIVING  */}

                    <li className='dropdown' >
                        <a href="" className='a__dropbtn' style={linkStyle}  >HOME & LIVING</a>
                        <div className="dropdownContent">
                  <div
                    style={{
                      display: "grid",
                      width: "80%",
                      gridTemplateColumns: "repeat(10, auto) ",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Bed Linen & Furnishing</div>
                      <div>Bed Runners</div>
                      <div>Mattress Protectors</div>
                      <div>Bedsheets</div>
                      <div>Bedding Sets</div>
                      <div>Blankets, Quilts & Dohars</div>
                      <div>Pillows & Pillow Covers</div>
                      <div>Bed Covers</div>
                      <div>Diwan Sets</div>
                      <div>Chair Pads & Covers</div>
                      <div>Sofa Covers</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Flooring
                      </div>

                      <div>Floor Runners</div>
                      <div>Carpets</div>
                      <div>Floor Mats & Dhurries</div>
                      <div>Door Mats</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Bath</div>
                      <div>Bath Towels</div>
                      <div>Hand & Face Towels</div>
                      <div>Beach Towels</div>
                      <div>Towels Set</div>
                      <div>Bath Rugs</div>
                      <div>Bath Robes</div>
                      <div>Bathroom Accessories</div>
                      <div>Shower Curtains</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Lamps & Lighting
                      </div>
                      <div>Floor Lamps</div>
                      <div>Ceiling Lamps</div>
                      <div>Table Lamps</div>
                      <div>Wall Lamps</div>
                      <div>Outdoor Lamps</div>
                      <div>String Lights</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Home Décor</div>
                      <div>Plants & Planters</div>
                      <div>Aromas & Candles</div>
                      <div>Clocks</div>
                      <div>Mirrors</div>
                      <div>Wall Décor</div>
                      <div>Festive Decor</div>
                      <div>Pooja Essentials</div>
                      <div>Wall Shelves</div>
                      <div>Fountains</div>
                      <div>Showpieces & Vases</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Curtains
                      </div>
                      <div style={{ color: "red" }}>
                        Cushions & Cushion Covers
                      </div>
                      <div style={{ color: "red" }}>Home Gift Sets</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Kitchen & Table</div>
                      <div>Table Runners</div>
                      <div>Dinnerware & Serveware</div>
                      <div>Cups and Mugs</div>
                      <div>Bakeware & Cookware</div>
                      <div>Kitchen Storage & Tools</div>
                      <div>Bar & Drinkware</div>
                      <div>Table Covers & Furnishings</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Storage
                      </div>
                      <div>Bins</div>
                      <div>Hangers</div>
                      <div>Organisers</div>
                      <div>Hooks & Holders</div>
                      <div>Laundry Bags</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Brands</div>
                      <div>H&M</div>
                      <div>Marks & Spencer</div>
                      <div>Home Centre</div>
                      <div>Spaces</div>
                      <div>D'Decor</div>
                      <div>Story@Home</div>
                      <div>Pure Home & Living</div>
                      <div>Swayam</div>
                      <div>Raymond Home</div>
                      <div>Maspar</div>
                      <div>Trident</div>
                      <div>Cortina</div>
                      <div>Random</div>
                      <div>Ellementry</div>
                      <div>ROMEE</div>
                      <div>SEJ by Nisha Gupta</div>
                    </div>
                  </div>
                </div>
                    </li>

                      {/* BEAUTY */}
                      
                    <li className='dropdown' >
                        <a href="" className='a__dropbtn' style={linkStyle}  >BEAUTY</a>
                        <div className="dropdownContent">
                  <div
                    style={{
                      display: "grid",
                      width: "80%",
                      gridTemplateColumns: "repeat(10, auto) ",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Makeup</div>
                      <div>Lipstick</div>
                      <div>Lip Gloss</div>
                      <div>Lip Liner</div>
                      <div>Mascara</div>
                      <div>Eyeliner</div>
                      <div>Kajal</div>
                      <div>Eyeshadow</div>
                      <div>Foundation</div>
                      <div>Primer</div>
                      <div>Concealer</div>
                      <div>Compact</div>
                      <div>Nail Polish</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Skincare, Bath & Body</div>
                      <div>Face Moisturiser</div>
                      <div>Cleanser</div>
                      <div>Masks & Peel</div>
                      <div>Sunscreen</div>
                      <div>Serum</div>
                      <div>Face Wash</div>
                      <div>Eye Cream</div>
                      <div>Lip Balm</div>
                      <div>Body Lotion</div>
                      <div>Body Wash</div>
                      <div>Body Scrub</div>
                      <div>Hand Cream</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Baby Care
                      </div>
                      <div>Masks</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Haircare</div>
                      <div> Shampoo </div>
                      <div>Conditioner</div>
                      <div>Hair Cream</div>
                      <div>Hair Oil</div>
                      <div>Hair Gel</div>
                      <div>Hair Color</div>
                      <div>Hair Serum</div>
                      <div>Hair Accessory</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Fragrances
                      </div>
                      <div>Perfume</div>
                      <div>Deodorant</div>
                      <div>Body Mist</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Appliances</div>
                      <div>Hair Straightener</div>
                      <div>Hair Dryer</div>
                      <div>Epilator</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Men's Grooming
                      </div>
                      <div>Trimmers</div>
                      <div>Beard Oil</div>
                      <div>Hair Wax</div>
                      <div style={{ color: "red", borderTop: "1px solid red" }}>
                        Beauty Gift & Makeup Set
                      </div>
                      <div>Beauty Gift</div>
                      <div>Makeup Kit</div>
                      <div>Premium Beauty</div>
                      <div>Wellness & Hygiene</div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        width: "80%",
                        gridTemplateRows: "repeat(20,auto) ",
                        textAlign: "left",
                        margin: "10px",
                        padding: "10px",
                      }}
                    >
                      <div style={{ color: "red" }}>Top Brands</div>
                      <div> Lakme </div>
                      <div>Maybelline</div>
                      <div>Loreal</div>
                      <div>Philips</div>
                      <div>Deodorants</div>
                      <div>Bath & Body Works</div>
                      <div>THE BODY SHOP</div>
                      <div>Biotique</div>
                      <div>Mamaearth</div>
                      <div>MCaffeine</div>
                      <div>Nivea</div>
                      <div>Lotus Herbals</div>
                      <div>LOreal Professionnel</div>
                      <div>KAMA AYURVEDA</div>
                      <div>M.A.C</div>
                      <div>Forest Essentials</div>
                    </div>
                  </div>
                </div>
                    </li>

                      {/* STUDIO */}
                      
                    <li className='dropdown' >
                        <a href="" className='a__dropbtn' style={linkStyle}  >STUDIO</a>
                        <div className="dropdownContent">
                  <div style={{ width: "600px", textAlign: "center" }}>
                    <img
                      src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg"
                      alt=""
                      style={{ width: "100px", marginTop: "10px" }}
                    />
                    <div>Your daily inspiration for everything fashion</div>
                    <img
                      src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                      alt=""
                      style={{ width: "600px", marginTop: "10px" }}
                    />
                    <button
                      style={{
                        border:"none",
                        backgroundColor: "white",
                        margin: "10px",
                        borderRadius: "5%",
                        padding:"20px 5px 20px 5px",
                        fontSize:"15px",
                        border : "0.1px solid black",
                        fontWeight:"bold"
                      }}
                    >
                      {`EXPLORE STUDION >`}
                    </button>
                  </div>
                </div>
                    </li>
                </ul>
            </div>
            <div className='header__input' >
                <div>
                      <SearchIcon/>
                      <input
                        type="text"
                        placeholder="Search for products brands and more"
                        style={{
                        width: "300px",
                        height: "22px",
                        background: "none",
                        marginTop: "0px",
                        border: "none"
                        }}
              ></input>
                </div>
            </div>
            <div className='header__profile' >
              <Link to="/register" style={{textDecoration: "none",color: "black"}} >
              <div style={{ fontSize: "10px", color: "black" }} >
                        <PermIdentityIcon style={{ marginTop: "15px", padding: "0px" }} />{" "}
                        <br/>
                        Profile
                </div>
              </Link>
                <div style={{ fontSize:"10px", paddingLeft:"20px" }} >
                        <FavoriteBorderIcon style={{ marginTop:"15px" }}  /> <br/>
                        Wishlist
                </div>
                <Link style={{textDecoration: "none",color: "black"}}  to="/cart" >
                <div style={{
                fontSize: "10px",
                textDecoration: "none",
                color: "black",
                marginTop: "17px",
                paddingLeft: "10px",
              }} >
                
                    <Badge color='secondary' badgeContent={1} >
                        <ShoppingBagOutlinedIcon style={{ color:"black" }} />
                    </Badge>
                    <br/>
                    Cart
                    </div>
                </Link>
                
            </div>
        </div>
        
    </div>
  )
}

export default Header