<template>
  <div class="main-nav">
    <div class="container mx-auto flex justify-between py-2 px-2">
      <div class="logo flex md:flex-1 flex-row justify-between">
        <a href="/">
          <img
            class="w-1/2 md:w-1/3"
            src="@/static/full-color-logo-new.png"
            alt=""
          />
        </a>
        <!-- humbugar menu -->
        <div class="humburger-menu md:hidden">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="nav-links hidden md:flex">
        <ul class="flex flex-row gap-4 h-full items-center justify-center">
          <li><a href="#">Buy a car</a></li>
          <li><a href="#">Sell a car </a></li>
          <li><a href="#">Car loans</a></li>
          <li><a href="#">Fix your car</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.main-nav {
  z-index: 1;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.humburger-menu .line {
  width: 30px;
  height: 3px;
  background-color: #000;
  margin: 5px 0;
}
</style>
