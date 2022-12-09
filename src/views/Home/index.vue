
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
        </Swiper> 

        <div class="movies_content">
          
          <h3>recommend</h3>
          <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card" flat bordered>
              <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />

              <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  @click="expanded = !expanded"
                />
              </q-card-actions>

              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    {{ 111 }}
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
            <q-card class="my-card" flat bordered>
              <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />

              <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  @click="expanded = !expanded"
                />
              </q-card-actions>

              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    {{ 111 }}
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
            <q-card class="my-card" flat bordered>
              <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />

              <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

                <q-space />

                <q-btn
                  color="grey"
                  round
                  flat
                  dense
                  :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  @click="expanded = !expanded"
                />
              </q-card-actions>

              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    {{ 111 }}
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
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

<style scoped lang="sass">
.content
  width: 100%

.q-page-container
  padding-right: 0
.movies_content
  padding: 16px
.swiper-slide
  width: 100% !important
  margin-right: 0 !important
  line-height: 100px
  font-size: 30px
  text-align: center
  background-color: black
.Hero--hasImage
  width: 100%
  height: 30vw
  background-color: black
  position: relative
.Hero--hasImage .banner
  width: 100%
  height: auto
.info_box
    background: linear-gradient(90deg,#181818 10%,hsla(0,0%,9%,.98) 20%,hsla(0,0%,9%,.97) 25%,hsla(0,0%,9%,.95) 35%,hsla(0,0%,9%,.94) 40%,hsla(0,0%,9%,.92) 45%,hsla(0,0%,9%,.9) 50%,hsla(0,0%,9%,.87) 55%,hsla(0,0%,9%,.82) 60%,hsla(0,0%,9%,.75) 65%,hsla(0,0%,9%,.63) 70%,hsla(0,0%,9%,.45) 75%,hsla(0,0%,9%,.27) 80%,hsla(0,0%,9%,.15) 85%,hsla(0,0%,9%,.08) 90%,hsla(0,0%,9%,.03) 95%,hsla(0,0%,9%,0))
    bottom: 0
    content: ""
    left: 0
    position: absolute
    right: -200px
    top: 0
    z-index: 1
    width: 22vw
    height: 100%
    color: #fff
    font-size: 16px
    line-height: 20px
    text-align: center
    font-weight: bold
.info_box .logo
    margin-left: 5vw
    
</style>