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
        await this.$axios.$get('https://jylpaciooxarhelwslji.supabase.co/rest/v1/products', {
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
        console.log('Product: ', this.products)
    },
}
</script>

<style scoped>

</style>