import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer' >
        <div className='footer__main' >
            <div>
                <h6>ONLINE SHOPING</h6>
                {/* <p>ONLINE SHOPING</p> */}
                <ul className='footer__ul' >
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Home & Living</li>
                    <li>Beauty</li>
                    <li>Gifts Card</li>
                    <li>Myntra Insider</li>
                </ul>
                <h6>USEFULL LINKS</h6>
                <ul className='footer__ul' >
                    <li>Blog</li>
                    <li>Career</li>
                    <li>Site Map</li>
                    <li>Coorporate Information</li>
                    <li>Whitehat</li>
                </ul>
                <h6>POPULAR SEARCHES</h6>
            </div>
            <div>
                <h6>CUSTOMER POLICIES</h6>
                <ul className='footer__ul'>
                    <li>ContactUs</li>
                    <li>FAQ</li>
                    <li>T&C</li>
                    <li>Terms Of Use</li>
                    <li>Track Orders</li>
                    <li>Shipping</li>
                    <li>Cancellation</li>
                    <li>Returns</li>
                    <li>Privacy Policy</li>
                    <li>Grievance Officer</li>
                </ul>
            </div>
            <div>
                <h6>Experience Myntra On Mobile</h6>
                <div className='footer__img' >
                    <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                    <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />
                </div>
                <h6>Keep in Touch</h6>
                <div className='footer__social' >
                    <img src='https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png' alt='' />
                    <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt='' />
                    <img src='https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png' alt='' />
                    <img src='https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png' alt='' />
                </div>
            </div>
            <div>
                <div className='footer__100' >
                    <img src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' alt="" />
                    <strong>100% ORIGINAL</strong><small>guarantee for all products at myntra.com</small>
                </div>
                <div className='footer__100' >
                <img src='https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png' alt="" />
                    <strong>RETURN WITHIN 30 DAYS</strong><small>of receiving your order</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer