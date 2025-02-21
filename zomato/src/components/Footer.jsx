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
            <p style={{color:'white'}}>&copy; 2025 Dine_in</p>

            </div>
        </div>
    </footer>
    
    </div>
  )
}

export default Footer
