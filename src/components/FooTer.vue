<template>
  <div id="container">
    <div id="contacts">
      <!-- <div id="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div> -->
      <div id="contacts--social">
        <div>
          <a href="https://twitter.com/chrystiomar">
            <i class="icon fa-brands fa-square-twitter fa-2x"> </i>
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/chrystiomar-chimborski-3809a5176/"
          >
            <i class="icon fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>

        <div>
          <a href="https://github.com/Chimborski-Chrys">
            <i class="icon fa-brands fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      mention: "2022 | Developed by Rystiom",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

body {
  display: flex;
  background-color: #f0f8ff;
  height: 95vh;
  justify-content: center;
  align-items: flex-end;
  font-family: Open Sans;
}

#container {
  padding-top: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
  width: 100vw;
  color: white;
  /* background-color: #0d3b66; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
#contacts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
#contacts--contact {
  text-align: right;
}
#contacts--social {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
#contacts--social div {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
#mentions p {
  font-size: 0.5em;
  color: #ffff;
  padding-top: 15px;
}

.icon {
  color: #ffff;
}
</style>
