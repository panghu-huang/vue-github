<template functional>
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'Spinner'
  }
</script>

<style lang="scss">
  // copy from loading.io
  @keyframes spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .spinner {
    position: relative;
  }

  .spinner div {
    left: 93px;
    top: 32px;
    position: absolute;
    -webkit-animation: spinner linear 1s infinite;
    animation: spinner linear 1s infinite;
    background: var(--primary-color);
    width: 14px;
    height: 32px;
    border-radius: 60%;
    -webkit-transform-origin: 7px 68px;
    transform-origin: 7px 68px;
  }

  .spinner div:nth-child(1) {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-animation-delay: -0.888888888888889s;
    animation-delay: -0.888888888888889s;
  }

  .spinner div:nth-child(2) {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    -webkit-animation-delay: -0.777777777777778s;
    animation-delay: -0.777777777777778s;
  }

  .spinner div:nth-child(3) {
    -webkit-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-animation-delay: -0.666666666666667s;
    animation-delay: -0.666666666666667s;
  }

  .spinner div:nth-child(4) {
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg);
    -webkit-animation-delay: -0.555555555555556s;
    animation-delay: -0.555555555555556s;
  }

  .spinner div:nth-child(5) {
    -webkit-transform: rotate(160deg);
    transform: rotate(160deg);
    -webkit-animation-delay: -0.444444444444444s;
    animation-delay: -0.444444444444444s;
  }

  .spinner div:nth-child(6) {
    -webkit-transform: rotate(200deg);
    transform: rotate(200deg);
    -webkit-animation-delay: -0.333333333333333s;
    animation-delay: -0.333333333333333s;
  }

  .spinner div:nth-child(7) {
    -webkit-transform: rotate(240deg);
    transform: rotate(240deg);
    -webkit-animation-delay: -0.222222222222222s;
    animation-delay: -0.222222222222222s;
  }

  .spinner div:nth-child(8) {
    -webkit-transform: rotate(280deg);
    transform: rotate(280deg);
    -webkit-animation-delay: -0.111111111111111s;
    animation-delay: -0.111111111111111s;
  }

  .spinner div:nth-child(9) {
    -webkit-transform: rotate(320deg);
    transform: rotate(320deg);
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  .spinner {
    width: 46px !important;
    height: 46px !important;
    -webkit-transform: translate(-23px, -23px) scale(0.23) translate(23px, 23px);
    transform: translate(-23px, -23px) scale(0.23) translate(23px, 23px);
  }
</style>
