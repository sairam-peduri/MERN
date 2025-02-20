import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="top">
            <h2>
            <a href="#bar" id="t">Go to the top</a>
            </h2>
        </div>
        <div class="continf">
            <div class="one">
                <h3><b id="dark"><strong>Get to Know Us</strong></b></h3>
                <a href="#" id="get" >About Us</a>
                <a href="#" id="get">Famous Places</a>
                <a href="#" id="get">Programs</a>
                <a href="#" id="get">Dine_in Specials</a>
            </div>
            <div class="two">
                <h3><b id="dark"><strong>Connect with Us</strong></b></h3>
                <a href="#" id="get" >Facebook</a>
                <a href="#" id="get">Twitter</a>
                <a href="#" id="get">Instagram</a>
            </div>
            <div class="three">
                <h3><b id="dark"><strong>Let Us Help You</strong></b></h3>
                <a href="#" id="get" >Your Account</a>
                <a href="#" id="get">Returns Centre</a>
                <a href="#" id="get">100% Purchase Protection</a>
                <a href="#" id="get">Dine_in App Download</a>
                <a href="#" id="get">Help</a>
            </div>

        </div>
        <br/>
        <div class="foo">
            <div class="fo">
                <select  default="English" id="f">
                <option value="English">English</option>
                <option value="Telugu">Telugu</option>
                <option value="Hindi">Hindi</option>
                </select>
            </div>
            <div class="rupees">
                <a href="#" id="cash">INR Rupees</a>
            </div>
        </div>
        <div class="cline">
            <div class="countryn">
                
                <a href="#" id="country">Australia</a>
                <a href="#" id="country">Brazil</a>
                <a href="#" id="country">Canada</a>
                <a href="#" id="country">China</a>
                <a href="#" id="country">France</a>
                <a href="#" id="country">Germany</a>
                <a href="#" id="country">Itlay</a>
                <a href="#" id="country">Japan</a>
                <a href="#" id="country">Mexico</a>
                <a href="#" id="country">Netherlands</a>
                <a href="#" id="country">Poland</a>
                <a href="#" id="country">Singapore</a>
                <a href="#" id="country">Spain</a>
                <a href="#" id="country">Turkey</a>
                <a href="#" id="country">United Arab Emirates</a>
                <a href="#" id="country">United Kingdom</a>
                <a href="#" id="country">United States</a>
            </div>
        </div>
    </footer>
    
    </div>
  )
}

export default Footer
