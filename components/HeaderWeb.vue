<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <h1><a class="navbar-brand" href="#">
      Bumi Style
    </a></h1>
    </div>
    <div id="navbarRightAlignExample" class="collapse navbar-collapse">
      <!-- Left links -->
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">History</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li id="login" class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
      <!-- Left links -->
    </div>
  <!-- Container wrapper -->
</nav>
</template>

<script>
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    background: #e3e6f3;
    box-shadow: 0 5px 15px rgba(0,0,0,0.06);
    z-index: 999;
    position: sticky;
    opacity: 0.9;
    top: 0;
    left: 0;
}

.navbar-brand {
  font-size: 30px;
  font-style: italic;
}

.navbar-nav .nav-item {
  font-size: 18px;
  font-family: 'attack', sans-serif;
}
</style>
