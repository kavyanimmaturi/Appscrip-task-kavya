import amexIcon from "../assets/amex-icon.png";
import applePay from "../assets/applePay-icon.png";
import googlePay from "../assets/GPay-icon.jpg";
import icon from "../assets/Group 136192.png";
import insta from "../assets/Insta.png";
import linkedin from "../assets/linkedIn.png";
import pay from "../assets/pay-icon.png";
import payIcon from "../assets/payy-icon.png";
import country from "../assets/United States of America (US).png";


const Footer = () => {
  return (
   <div>
    <div className="footer">
      <div className="footer-content">
            <div className="footer-content-left">
               <h1>BE THE FIRST TO KNOW</h1>
               <p>Sign up for updates from metta muse.</p>
               <div className="footer-input-cont">
                  <input type="text" placeholder="Enter your e-mail..." className="input-box"/>
                  <button className="subscribe-btn">SUBSCRIBE</button>
               </div>
            </div> 
            <div className="footer-content-right">
                     <h2>CONTACT US</h2>
                     <ul>
                        <li>+44 221 133 5360</li>
                        <li>customercare@mettamuse.com</li>
                     </ul>

                     <h2>CURRENCY</h2>
                     <ul className="currency-cont">
                        <img src={country} alt=""/>
                        <li>USD</li>
                     </ul>
                     <p className="transaction">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                 </div>   
            </div>
            <hr/>

            <div className="footer-bottom-cont">
               <div className="footer-bottom">
                   <div className="footer-bottom-left">
                      <h1 className="footer-text">metta muse</h1>
                        <ul className="footer-list">
                           <li>About Us</li>
                           <li>Stories</li>
                           <li>Artisans</li>
                           <li>Boutiques</li>
                           <li>Contact Us</li>
                           <li>EY Compliances Docs</li>
                         </ul>  
                      </div>
                </div>  

                <div className="footer-bottom-center">
                  <h1 className="footer-text">QUICK LINKS</h1>
                   <ul className="footer-list">
                       <li>Orders & Shipping</li>
                       <li>Join/Login as a Seller</li>
                       <li>Payment & Pricing</li>
                       <li>Return & Refunds</li>
                       <li>FAQs</li>
                       <li>Privacy Policy</li>
                       <li>Terms & Conditions</li>
                   </ul>
                </div>  
                <div className="footer-bottom-right">
                      <div className="footer-bottom">
                        <h1 className="text">FOLLOW US</h1>
                        <div className="footer-icons">
                           <img src={linkedin} alt="" />
                           <img src={insta} alt="" />
                        </div>
                      </div>
                      <div className="card-icons">
                        <h1 className="text">metta muse ACCEPTS</h1>
                        <div className="icons-box">
                              <img src={googlePay} alt="" />
                              <img src={pay} alt="" />
                              <img src={payIcon} alt="" />
                              <img src={amexIcon} alt="" />
                              <img src={applePay} alt="" />
                              <img src={icon} alt="" />
                           </div>
                      </div>
                  </div>
            </div>
            <p className="copyright">Copyright © 2023 mettamuse.All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer
