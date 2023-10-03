<template>
    <div>
        <section id="sectionProduct" class="sectionPad">
            <div class="containerGrid">
                <div class="proGrid">
                    <img :src="product.gambar" alt="gambar-products">
                    <div class="productDeskripsi">
                        <span>{{ product.brand }}</span>
                        <h5>{{ product.title }}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>Rp.{{ product.harga }}.000</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a> 
                </div>
                </div>
        </section>
    </div>
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
            default:() => {}
        }
    }
    
}
</script>

<style scoped>

h1 {
    font-size: 50px;
    line-height: 64px;
    color: #222;
}

h2 {
    font-size: 46px;
    line-height: 54px;
    color: #222;
}

h4 {
    font-size: 20px;
    color: #222;
}

h6 {
    font-weight: 700;
    font-size: 12px;
}

p {
    font-size: 16px;
    color: #465b52;
    margin: 15px 0 20px 0;
}

body {
    width: 100%;
}

#sectionProduct{
    text-align: center;

}

.sectionPad {
    padding: 0 80px;
}

#sectionProduct .containerGrid {
    display: contents;
    justify-content: space-between;
    padding-top: 20px;
    align-items: center;
    flex-wrap: wrap;
    
}

#sectionProduct .proGrid {
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 10px;
    transition: 0.2s ease;
    position: relative;
    float: left;
}

#sectionProduct .proGrid:hover {
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}

#sectionProduct .proGrid img {
    width: 100%;
    border-radius: 20px;
}

#sectionProduct .proGrid .productDeskripsi {
    text-align: start;
    padding: 10px 0;
}

#sectionProduct .proGrid .productDeskripsi span {
    color: #606063;
    font-size: 12px;
}

#sectionProduct .proGrid .productDeskripsi h5 {
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 700;
}

#sectionProduct .proGrid .productDeskripsi i {
    font-size: 12px;
    color: rgb(243, 181, 25);
}

#sectionProduct .proGrid .productDeskripsi h4 {
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
}

#sectionProduct .proGrid .cart {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50px;
    background-color: #e8f6ea;
    font-weight: 500;
    color: #088178;
    border: 1px solid #cce7d0;
    position: absolute;
    bottom: 20px;
    right: 10px;
}
</style>