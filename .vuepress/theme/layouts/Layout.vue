<template>
  <div class="theme-container">
    <div
      class="my-10"
      style="margin-left:calc(100vh + 400px);"
    >
      <!-- <SearchBox /> -->
    </div>

    <div class="flex flex-col flex-wrap justify-center my-20 items-center">
      <Content />

    </div>

  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Gaegu:400,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.1.2/tailwind.min.css");

.theme-container {
  font-family: "Gaegu", cursive;
}

a {
  text-decoration:underline;
}

@media screen and (min-width: 640px) {
  .theme-container {
    margin-left: 100px;
  }

  h1 {
    font-weight: bold;
    font-size: 50px;
  }

  h2 {
    font-weight: bold;
    font-size: 30px;
  }

  p {
    font-weight: normal;
    font-size: 25px;
    margin-bottom: 50px;
  }
  li {
    font-weight: normal;
    font-size: 25px;
  }
}

@media screen and (max-width: 640px) {
  h1 {
    font-weight: bold;
    font-size: 50px;
    text-align: center;
  }

  h2 {
    font-weight: bold;
    font-size: 40px;
    text-align: center;
  }

  p,
  li {
    font-weight: normal;
    font-size: 25px;
    text-align: center;
  }
}
</style>