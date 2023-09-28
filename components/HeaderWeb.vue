<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-sm">
            <a class="navbar-brand" href="/">Bumi Style</a>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link " href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/product">Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/history">History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item" style="margin-top: 8px;">
                        <a 
                        href="/login" role="button" 
                        class=" myMasuk" fdprocessedid="3mg1yo"> Masuk</a>
                        <a 
                        href="/sign-up" role="button" 
                        class="myDaftar" fdprocessedid="3mg1yo"> Daftar</a>
                    </li>
                </ul>
            </b-collapse>
        </div>
    </nav>

   
</template>
<script>
export default {
    data() {
        return {
          
        }
    },
    method: {

    },
    head() {
        return {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: 'https://getbootstrap.com/docs/5.3/assets/css/docs.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css' }
            ],
            scripts: [
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js', body: true },
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', body: true
                }]
        }
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Merriweather Sans', sans-serif;
    padding: 20px 0;
    background-color: rgba(209, 209, 209, 0.305) !important;
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.185);
    z-index: 999;
    position: sticky;
    /* opacity: 0.9; */
    top: 0;
    left: 0;
}


.navbar-brand {
    font-size: 23px;
    font-weight:  600;
    font-family: 'Merriweather Sans', sans-serif;
}

.nav-item {
    font-size: 18px;
    font-family: 'Roboto Condensed', sans-serif;
}

.navbar-light .nav-link {
    color: rgb(0, 0, 0);
    transition-duration: .3s;
}
.navbar-light .nav-link:hover {
    color: #3877ff;
}

.myMasuk {
    font-size: 18px; 
    border-radius: 10px;   
    outline: none;
    padding: 6px 13px;
    text-decoration: none;
    color: #000000;
    transition: 0.5s;
}

.myDaftar {
    color: #fff; 
    background-color: #3877ff; 
    font-size: 18px; 
    border-radius: 10px; 
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.359);
    padding: 7px 14px;
    text-decoration: none;
    transition: 0.5s;
}

.myMasuk:hover {
    background-color: transparent;
    border: 1px solid #000000;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.359);
    padding: 5px 12px;
}
.myDaftar:hover {
    background-color: transparent;
    color: #000000;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.359);
    border: 1px solid #000000;
    padding: 5px 12px;
}

</style>
