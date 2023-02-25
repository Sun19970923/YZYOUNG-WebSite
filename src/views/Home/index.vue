
<template>
  <q-layout view="hHh lpR fFr">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          YZYOUNG-WebSite
        </q-toolbar-title>

        <div>Hello </div>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <p>Login out</p>
    </q-drawer>

    <q-page-container>
      <div class="content">
        <Swiper    
            class="mySwiper"
            v-if="1"
            :loop="true"
            :speed="200"
            :navigation="true"
            :modules="modules"
            :autoplay="true"
            :effect="'creative'"
            :creativeEffect="{
                prev: {
                    shadow: true,
                    translate: ['-120%', 0, -500],
                },
                next: {
                    shadow: true,
                    translate: ['120%', 0, -500],
                },
        }">
          <swiper-slide>
            <section class="Hero Hero--hasImage">
              <img class="banner" src="https://occ-0-3996-3997.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW5dIfK8UT_AMFn0w8xFWI14gLfA0_mcNYQopk6Fh_IVNGwSeh7JRCVt89pxeB6kY7_cdgupaqlnisrYwvhz32wlFUHAO_RaWj9L.jpg?r=f10" alt="">
              <q-card class="info_box">
                <img src="https://occ-0-3996-3997.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQtQI4ADK8z4sP66xTSEHer4zc8JNIbTcGJbleCQ1ClYA04mG0jEGLe9s2A-0eJfkOZLd2HllyJqgJPqdn9gbeA2Xx7Z95jysR6mI9_39dkdVyHXEnFHlWZYXBEuc_muGDGw-gk4wwFweCIPogFvuGvtlu0B0Gn-zaS-c070ReXHDg87E0RUsg.png?r=bfa" alt="Troll" class="logo" data-uia="title-logo"/>
                <h2 class="title">Troll</h2>
                <p>2022 | Maturity Rating:TV-14 | 1h 43m | Action & Adventure</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5V6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V8C0 6.89543 0.89543 6 2 6H4V5ZM12 5V6H6V5C6 3.34315 7.3431 2 9 2C10.6569 2 12 3.34315 12 5ZM2 8V16H16V8H2ZM8 10V14H10V10H8Z" fill="white"></path></svg>
                Unavailable on Basic with ads plan due to licensing restrictions.
When an explosion in the Norwegian mountains awakens an ancient troll, officials appoint a fearless paleontologist to stop it from wreaking deadly havoc.
                <p>Starring:Ine Marie Wilmann, Kim22 Falck, Mads Sjøgård Pettersen</p>  
              </q-card>
            </section>
          </swiper-slide>
          <swiper-slide>
            <section class="Hero Hero--hasImage">
              <img class="banner" src="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_450,q_auto,w_1600/v1666970795/amc-cdn/production/2/movies/68300/68331/HeroDesktopDynamic/145150.jpg" alt="">
              <q-card class="info_box">
                <h2 class="title">Violent Night</h2>
                <p>2022 | Maturity Rating:TV-14 | 1h 43m | Action & Adventure</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5V6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V8C0 6.89543 0.89543 6 2 6H4V5ZM12 5V6H6V5C6 3.34315 7.3431 2 9 2C10.6569 2 12 3.34315 12 5ZM2 8V16H16V8H2ZM8 10V14H10V10H8Z" fill="white"></path></svg>
                David Harbour ('Black Widow') stars in this thrilling holiday movie about a team of mercenaries who take a group of people hostage on Christmas Eve, never expecting their biggest combatant to be Santa Claus. Action producer David Leitch ('John Wick') teams with the writers of the 'Sonic the Hedgehog' franchise (Patrick Casey and Josh Miller), bringing an edge to the classic holiday cheer and showing why this Nick is no saint.
              </q-card>
            </section>
          </swiper-slide>  

        </Swiper> 

        <div class="movies_content">
          
          <h3>Hot film</h3>
          <div class="q-pa-md row items-start q-gutter-md">
            <div class="q-pa-md row items-start q-gutter-md" style="width: 100%;">
              <q-card class="my-card">
                <img src="https://www.boxofficepro.com/wp-content/uploads/2023/02/antmanwaspquant-cocainebear-jesusrevolution775x970-copy-479x600.png">

                <q-card-section>
                  <div class="text-h6 ellipsis1">Ant-Man and the Wasp: Quantumania to Conquer Again</div>
                  <div class="text-subtitle2 ellipsis1">Shawn Robbins • February 22 2023</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1668003212/amc-cdn/production/2/movies/68300/68331/PosterDynamic/145720.jpg">

                <q-card-section>
                  <div class="text-h6 ellipsis1">Violent Night</div>
                  <div class="text-subtitle2 ellipsis1">1 HR 52 MIN</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663766838/amc-cdn/production/2/movies/56500/56477/PosterDynamic/143261.jpg">

                <q-card-section>
                  <div class="text-h6 ellipsis1">Strange World</div>
                  <div class="text-subtitle2 ellipsis1">1 HR 42 MIN</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663614001/amc-cdn/production/2/movies/69600/69554/PosterDynamic/143200.jpg">

                <q-card-section>
                  <div class="text-h6 ellipsis1">The Menu</div>
                  <div class="text-subtitle2 ellipsis1">1 HR 47 MIN</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1659370391/amc-cdn/production/2/movies/69600/69572/PosterDynamic/140386.jpg">
                <q-card-section>
                  <div class="text-h6 ellipsis1">Devotion</div>
                  <div class="text-subtitle2 ellipsis1">2 HR 20 MIN</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <!-- <HW :time="'100'" onTime="onTime()"/> -->

            </div>
          </div>
          <h3>Recommend</h3>
          <div class="q-pa-md row items-start q-gutter-md">
            <div class="q-pa-md row items-start q-gutter-md" style="width: 100%;">
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1664804476/amc-cdn/production/2/movies/56500/56467/PosterDynamic/143958.jpg">

                <q-card-section>
                  <div class="text-h6 ellipsis1">Black Panther: Wakanda Forever</div>
                  <div class="text-subtitle2 ellipsis1">2 HR 41 MINPG13Released Nov 11, 2022</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1668003212/amc-cdn/production/2/movies/68300/68331/PosterDynamic/145720.jpg">

                <q-card-section>
                  <div class="text-h6 ellipsis1">Violent Night</div>
                  <div class="text-subtitle2 ellipsis1">1 HR 52 MIN</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663766838/amc-cdn/production/2/movies/56500/56477/PosterDynamic/143261.jpg">

                <q-card-section>
                  <div class="text-h6 ellipsis1">Strange World</div>
                  <div class="text-subtitle2 ellipsis1">1 HR 42 MIN</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663614001/amc-cdn/production/2/movies/69600/69554/PosterDynamic/143200.jpg">

                <q-card-section>
                  <div class="text-h6 ellipsis1">The Menu</div>
                  <div class="text-subtitle2 ellipsis1">1 HR 47 MIN</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <q-card class="my-card">
                <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1659370391/amc-cdn/production/2/movies/69600/69572/PosterDynamic/140386.jpg">
                <q-card-section>
                  <div class="text-h6 ellipsis1">Devotion</div>
                  <div class="text-subtitle2 ellipsis1">2 HR 20 MIN</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-chip clickable color="teal" text-color="white" icon="bookmark">
                    {{ 'war' }}
                  </q-chip>
                </q-card-section>
              </q-card>
              <!-- <HW :time="'100'" onTime="onTime()"/> -->

            </div>
          </div>
        </div>

      </div>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>YZYOUNG-WebSite</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Mousewheel, Autoplay, Navigation} from "swiper";
import "swiper/css";
import {useRoute, useRouter} from 'vue-router'
const route = useRoute();
const router = useRouter();
import HW from '../../components/HelloWorld.vue'

SwiperCore.use([ Mousewheel, Autoplay, Navigation]);

const modules: any[] = [Navigation];

const onSwiper = (swiper: any) => {
  console.log(swiper);
};


const $q = useQuasar()
console.log($q);

const rightDrawerOpen: any = ref(false)

const expanded: any = ref(false)

const toggleRightDrawer: any = () => {
  
  router?.push("/login");
  rightDrawerOpen.value = !rightDrawerOpen.value
}

onMounted(() => {
  $q.loading.show()
  setTimeout(() => {
    $q.loading.hide()
  }, 1000);
  rightDrawerOpen.value = false
})
</script>

<style scoped lang="scss">
.content{
  width: 100%;
}


.q-page-container{
  padding-right: 0;
}

.movies_content{
  padding: 16px;
  h3{
    padding-left: 50px;
  }
}

.swiper-slide{
  width: 100% !important;
  margin-right: 0 !important;
  line-height: 100px;
  font-size: 30px;
  text-align: center;
  background-color: black;
}

.Hero--hasImage{
  width: 100%;
  height: 30vw;
  background-color: black;
  position: relative;
}

.Hero--hasImage .banner{
  width: 100%;
  height: auto;
}

.info_box{
    background: linear-gradient(90deg,#181818 10%,hsla(0,0%,9%,.98) 20%,hsla(0,0%,9%,.97) 25%,hsla(0,0%,9%,.95) 35%,hsla(0,0%,9%,.94) 40%,hsla(0,0%,9%,.92) 45%,hsla(0,0%,9%,.9) 50%,hsla(0,0%,9%,.87) 55%,hsla(0,0%,9%,.82) 60%,hsla(0,0%,9%,.75) 65%,hsla(0,0%,9%,.63) 70%,hsla(0,0%,9%,.45) 75%,hsla(0,0%,9%,.27) 80%,hsla(0,0%,9%,.15) 85%,hsla(0,0%,9%,.08) 90%,hsla(0,0%,9%,.03) 95%,hsla(0,0%,9%,0));
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: -200px;
    top: 0;
    z-index: 1;
    width: 22vw;
    height: 100%;
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-weight: bold;
    padding-left: 9vw;
    padding-top: 5vw;
}

    
.info_box .logo{
  margin-left: 5vw;
}
.my-card{
  width: 18%;
  img{
    width: 100%;
    height: 400px;
  }
  
  // img
  //   height: 200px
  //   width: 100%
  
}
    
</style>