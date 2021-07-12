import React from 'react'
import './Styles/style.css'
// import './Styles/design'

function SignIn() {
    return (
        <>
        <div class="container">
          <div class="forms-container">
            <div class="signin-signup">
              <form action="#" class="sign-in-form">
                <h2 class="title">Sign in</h2>
                <div class="input-field">
                  <i class="fa fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <i class="fa fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" class="btn solid" />
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fa fa-google"></i>
                  </a>

                </div>
              </form>
              
            </div>
          </div>

          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                  ex ratione. Aliquid!
                </p>
                <button class="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
              </div>
              <img src="images/logo.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
                </p>
                <button class="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="images/register.svg" class="image" alt="" />
            </div>
          </div>
        </div>
        </>
    )
}

export default SignIn
