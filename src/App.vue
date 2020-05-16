<template>
  <div id="app" class="grid">
    <header>
      <Header />
    </header>
    <nav>
      <Sidebar />
    </nav>
    <main>Content</main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import axios from "axios";
export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Footer
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    axios
      .get("https://api.github.com/users")
      .then(res => (this.users = res.data));
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
:root {
  --primary-color: #000140;
  --secondary-color: aliceblue;
  --active-color: darkblue;
}
.grid {
  display: grid;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 10% 1fr;
  height: 100vh;
  font-family: sans-serif;
}
.text-center {
  text-align: center;
}
header {
  grid-area: header;
}
nav {
  grid-area: nav;
}
main {
  grid-area: main;
}
footer {
  grid-area: footer;
}
.all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
