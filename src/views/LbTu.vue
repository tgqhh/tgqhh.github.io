<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in imgs" :key="index"
      ><img v-bind:src="item.ip" alt="" />
      <button @click="fn">dd</button>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";

export default {
  name: "carrousel",
  data() {
    return {
      imgs: [
        { ip: require("@/assets/img/1.jpg") },
        { ip: require("@/assets/img/2.jpg") },
        { ip: require("@/assets/img/3.jpg") },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  methods: {
    fn() {
      let docum = document.querySelectorAll("img");
      console.log(docum);
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
    fetch("/api/v2/users/history.php")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
<style>
img {
  width: 600px;
  height: 500px;
}
</style>