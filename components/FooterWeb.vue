<template>
  <footer class="section-p1" style="background-color: #ebebeb;">
    <div>
      <div class="col">
        <h2>Bumi Style</h2>
        <h4>Contact</h4>
        <p><strong>Addres: </strong>Telanai Pura, Buluran Kenali, Street Harapan, Jambi</p>
        <p><strong>phone: </strong>+62 823 **** ****/(+62) 823 **** ****</p>
        <p><strong>Gmail: </strong><a href="mailto:dpttrndi88@gmail.com">dpttrndi88@gmail.com</a></p>
        <div class="follow">
          <h4>Follow us</h4>
          <div class="icon" style="margin-left: 5px;">
            <a href="https://www.linkedin.com/dapittriandi"><i class="icon ion-social-linkedin"></i></a>
            <a href="https://www.github.com/dapittriandi"><i class="icon ion-social-github"></i></a>
            <a href="https://www.instagram/dpt_trndi"><i class="icon ion-social-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <h4>About</h4>
      <a href="/about">About Us</a>
      <a href="/history">Delivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Contact Us</a>
    </div>

    <div class="col">
      <h4>My Account</h4>
      <a href="/sign-up">Sign in</a>
      <a href="#">View Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>
    <div class="col profile">
      <h4>Profile Developer</h4>
      <p>Let me introduce myself, Dapit Triandi, I am currently studying for a bachelor's degree in technology, and this
        project is my first step in becoming a software engineer.</p>
    </div>
    
    <div class="copyright">
      <p>© 2023.Bumi Style | Powered by DptTrndi</p>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
h2 {
  font-size: 46px;
  line-height: 54px;
  color: #222;
}

h4 {
  font-size: 20px;
  color: #222;
}

p {
  font-size: 16px;
  color: #465b52;
  margin: 15px 0 20px 0;
}

.section-p1 {
  padding: 40px 80px;
}

footer {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

footer .col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

footer h4 {
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 5px;
}

footer p {
  font-size: 13px;
  margin: 0 0 8px 0;
}

footer a {
  font-size: 13px;
  text-decoration: none;
  color: #222;
  margin-bottom: 10px;
}

footer .follow.icon a i {
  font-size: 25px;
  color: #465b52;
  padding-right: 4px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  opacity: 0.75;
}

footer .follow a i:hover,
footer a i:hover,
footer a:hover {
  color: #088178;
  opacity: 0.8;
}


footer .profile p {
  font-size: 13px;
  color: #222;
  margin-bottom: 10px;
}


footer .copyright {
  border-top: 1px solid #2d2c2cb6;
  padding-top: 20px;
  width: 100%;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
}

@media (max-width:477px) {

  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 32px;
  }

  footer .copyright {
    text-align: start;
  }
}
</style>