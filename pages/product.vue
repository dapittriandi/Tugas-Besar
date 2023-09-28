<template>
    <div id="app">
        <TheProductsHeader />
        <main class="productFor">
                <TheProducts v-for="(product, index) in products" :key="index" :product="product" />
        </main>
    </div>
</template>

<script>
import TheProductsHeader from '@/components/products/TheProductsHeader.vue'
import TheProducts from '@/components/products/TheProducts.vue'


export default {
    components: {
        TheProducts,
        TheProductsHeader
    },
    layout(context) {
        return 'custom'
    },
    data() {
        return {
            products: []
        }
    },
    async fetch() {
        await this.$axios.$get('rest/v1/products', {
            headers: {
                "apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bHBhY2lvb3hhcmhlbHdzbGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MjIxODYsImV4cCI6MjAxMTI5ODE4Nn0.DxbkTiy25jW5QSd3FgEvZm2G21JzU9kbcBSCdkOvmrU'
            }
        })
            .then((res) => {
                res.map((data) =>
                    this.products.push(data))
            })
    },
    head() {
        return {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' },
            ],
            scripts: [

            ]
        }
    },
    mounted() {
        // eslint-disable-next-line no-console
        console.log('product: ', this.products)
    },
}
</script>

<!-- <style scoped>
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

.section-p1 {
    padding: 40px 80px;
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

button.white {
    font-size: 13px;
    font-weight: 600;
    padding: 11px 18px;
    color: #fff;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #fff;
    outline: none;
    transition: 0.2s;
}

body {
    width: 100%;
}

.container {
    min-height: 80vh;
}

#product1 {
    text-align: center;

}

#product1 .pro-container {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;
    
}

#product1 .pro {
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;
    float: left;
}

#product1 .pro:hover {
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}

#product1 .pro img {
    width: 100%;
    border-radius: 20px;
}

#product1 .pro .des {
    text-align: start;
    padding: 10px 0;
}

#product1 .pro .des span {
    color: #606063;
    font-size: 12px;
}

#product1 .pro .des h5 {
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 700;
}

#product1 .pro .des i {
    font-size: 12px;
    color: rgb(243, 181, 25);
}

#product1 .pro .des h4 {
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
}

#product1 .pro .cart {
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
</style> -->