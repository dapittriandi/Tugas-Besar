<template>
    <div>
    <div class="container-fluid my-container">
        <div class="hero">
            <h2>Sustainable <span class="text1">Clothing</span> with a <br> <span class="text2">Creative</span> touch.</h2>
<a href="/product">Shop Now</a>
        </div>
        <div class="all-card">
            <div class="card-group" style=" margin-top: 1px;">
                <div class="card card1">
                    <img src="~/assets/cloth9.jpg" class="card-img" alt="">
                </div>
                <div class="card card2">
                    <img src="~/assets/cloth8.jpg" class="card-img" alt="">
                </div>
            </div>
            <div class="card-group">
                <div class="card">
                    <img src="~/assets/cloth1.png" class="card-img" alt="">
                </div>
                <div class="card">
                    <img src="~/assets/cloth3.png" class="card-img" alt="">
                </div>
                <div class="card">
                    <img src="~/assets/cloth4.png" class="card-img" alt="">
                </div>
            </div>
            <div class="card-group">
                <div class="card">
                    <img src="~/assets/cloth2.png" class="card-img" alt="">
                </div>
                <div class="card">
                    <img src="~/assets/cloth7.png" class="card-img" alt="">
                </div>
            </div>
        </div>
       
    </div>
     <section id="newsletter" class="section-p1 section-m1">
            <div class="newstext">
                <h4>Sign Up For Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your email address">
                <button type="submit" class="normal">Sign Up</button>
            </div>
        </section>
</div>
</template>
<script>
export default {

    layout(context) {
        return 'custom'
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 4px 0 4px;
    width: 99.5%;
    height: 100vh;
    background-image: url('~/assets/img/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.hero h2 {
    font-size: 60px;
    font-weight: 800;
    padding-top: 30%;
    text-align: center;
    color: #2b2610c5;
}

.hero a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
    padding: 5px 100px;
    /* background-color: #24190cc5; */
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid #000000;
    outline: none;
    transition: 0.2s;
    list-style-type: none;
}

.hero a:hover {
    padding: 4px 99px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.541);
    color: #ffffffb9;
    border: 1px solid #ffffff9a;
}

.card {
    margin: 2px;
}

.card-group .card img {
    width: 100%;
    height: 100%;

}

.card-img, .card-img-bottom {
   border: none;
}

.card-img, .card-img-top {
    border: none;
}
.text1, .text2 {
    color: #1d79aeb7;
}

#newsletter {
    margin-left: -1rem;
    padding: 100px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-image: url('~/assets/img/b2.jpg'); */
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-color: #f5f5f5;
}

#newsletter h4 {
    font-size: 22px;
    font-weight: 700;
    color: #000000;
}

#newsletter p {
    font-size: 14px;
    font-weight: 600;
    color: #818ea0;
}

#newsletter p span {
    color: #ffbd27;
}

#newsletter .form {
    display: flex;
    width: 40%;
}

#newsletter input {
    height: 3.125rem;
    padding: 0 1.25rem;
    font-size: 14px;
    width: 100%;
    border: 1px solid #000;
    border-radius: 4px;
    outline: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

#newsletter button {
    /* width: 8rem; */
    /* background-color: #088178; */
    background-color: #1c8d84d2;
    color: #fff;
    white-space: nowrap;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

#newsletter button:hover {
    /* width: 8.1rem; */
    background-color: #9e844db2;
}

button.normal {
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
}
</style>