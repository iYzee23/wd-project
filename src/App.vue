<template>
  <div>
    <nav id="main">
      <router-link to="/">Početna</router-link> |
      <router-link to="/onama">O nama</router-link> |&emsp;
      <router-link to="/">
        <img id="logoSlika" alt="Logo" src="./assets/logoAssassin.png" @click="$router.push('/')">
      </router-link>&emsp; |
      <router-link to="/umetnici">Umetnici</router-link> |
      <div class="dropdown">
        <span class="dropdown-label">Umetnine</span>
        <div class="dropdown-content">
          <router-link to="/umetnine/slike">Slike</router-link>
          <router-link to="/umetnine/skulpture">Skulpture</router-link>
          <router-link to="/umetnine/moda">Moda</router-link>
        </div>
      </div> |
      <router-link to="/mojprofil">Moj profil</router-link>
    </nav>
    <router-view/>
    <footer>
      © Copyright 2023
      <br>
      Autori: Predrag Pešić, Luka Nevajda
      <br>
      Odsek za softversko inženjerstvo
      <br>
      Elektrotehnički fakultet Univerziteta u Beogradu
    </footer>
  </div>
</template>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav > a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav > a.router-link-exact-active {
    color: purple;
  }

  #logoSlika {
    width: 3%;
    height: auto;
  }

  #main, footer {
    background-color: pink;
    padding: 30px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown .dropdown-label {
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: underline;
  }

  .dropdown .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 4px 0;
  }

  .dropdown .dropdown-content a {
    display: block;
    padding: 8px 16px;
    text-decoration: underline;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid #ddd;
  }

  .dropdown .dropdown-content a:last-child {
    border-bottom: none;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown .dropdown-content a:hover {
    background-color: #e9e9e9;
  }

  .dropdown .dropdown-content a.router-link-exact-active {
    color: purple;
  }

</style>
