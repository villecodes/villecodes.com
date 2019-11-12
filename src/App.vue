<template>
  <div
    id='app'
    class='flex flex-col justify-center w-full h-full items-center'
  >
    <img
      src='../public/img/logo.svg'
      alt='logo'
      class='absolute icon sm:w-40 sm:h-40 w-32 h-32'
    />

    <h3 class='absolute description sm:text-3xl text-2xl inline-block sm:w-2/5 w-full px-5 text-center'>Hello, I am Ville, a web developer, web designer, illustrator, game designer and game developer currently making an untitled indie game.</h3>

    <div class='absolute top-0 left-0 flex flex-row flex-wrap sm:ml-10 sm:my-10 my-5 ml-5'>
      <img
        src='../public/img/twitterLogo.svg'
        alt='logo'
        @click='openURL("https://twitter.com/vbackdev")'
        class='sm:mr-10 -mr-2 icon justify-center sm:w-12 sm:h-12 w-10 h-10'
      />
      <img
        src='../public/img/mailLogo.svg'
        alt='logo'
        @click='openURL("mailto:vback.dev@gmail.com?Subject=Hello")'
        class='sm:ml-10 ml-5 icon justify-center sm:w-12 sm:h-12 w-10 h-10'
      />
    </div>
  </div>
</template>

<script>
let loaded = false;

export default {
  name: 'app',
  mounted () {
    if (typeof window !== 'undefined') {
      loaded = true;
    }
  },
  methods: {
    openURL: url => {
      if (loaded == true) {
        window.location.href = url;
      }
    }
  }
};
</script>
