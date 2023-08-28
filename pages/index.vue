<template>
    <div class="container-xxl my-container">
        <div class="hero">
           <h2>Sustainable <span class="text1">Clothing</span> with a <br> <span class="text2">Creative</span> Touch.</h2>
            <a href="#" class="btn active d-grid col-6 mx-auto" style="font-weight:500;color: #efefef;width: 220px;" role="button" data-bs-toggle="button" aria-pressed="true">Shop Now</a>
        </div>
        <div class="card-group" >
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
</template>
<script>
export default {

}
</script>
<style>
body {
    margin: 0;
    padding: 0;
}
.my-container .hero{
    height: 100vh;
    background-image: url('~/assets/img/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.my-container h2 {
    font-size: 60px;
    font-weight: 800;
    text-align: center;
    padding-top: 30%;
    color: #2b2610c5;
}

.hero .btn a {
    color: #efefef;
}

.card-group .card {
    margin: 5px;
}

.card-group .card img{
 width: 100%;
 height: 100%;
}

.card1 {
    min-width: 800px;
    height: 100%;
}

.card2 {
    max-height: 500px;
}

.card2 {
    width: 50%;
}
</style>