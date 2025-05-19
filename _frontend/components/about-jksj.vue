<template>
  <div class="w-[100vw] overflow-hidden">

    <div id="about--intro" class="flex flex-col justify-end items-center h-screen space-y-8">

      <div class="flex justify-center items-center">
        <div class="w-[33px] h-[33px] md:w-[86px] md:h-[86px] hover:!bg-gray-800" style="background:
                    url('../../assets/images/jk/jk-icon-384.png') black no-repeat; background-size: 100%">
        </div>

        <div class="bg-[rgba(255,255,255,0.7)] h-[66px] md:h-[86px] pr-[9px] md:pr-[117px]">
          <h1 class="ml-2 bg-sky-400 hover:bg-[mediumvioletred]/40 h-[17px] single-title [line-height:1]
                     md:[font-size:revert] md:h-[20px]"
          >Johnella Kyle San Juan</h1>
        </div>
      </div>

      <div>
        <a href="#profile" class="text-[#a64d00] font-bold"
         @click.prevent="() => { showPage('profile') }"
        >Profile</a> /
        <a href="#designs" class="text-[#a64d00] font-bold"
         @click.prevent="showPage('designs')"
        >Designs</a> /
        <a href="#nation" class="text-[#a64d00] font-bold"
         @click.prevent="showPage('nation')"
        >Nation</a> /
        <a href="#team" class="text-[#a64d00] font-bold"
         @click.prevent="showPage('team')"
        >Team</a>
      </div>
    </div>

    <div class="about--content">
    </div>

    <div id="profile">
      <div id="designs">
        <div id="nation">
          <div id="team">

            <div id="about--page--bg" class="content-page [top:1em] w-full [overflow:hidden]"
            >
              <div id="jk-i" class="w-full hover:!bg-gray-900">
              </div>
            </div>

            <div id="about-page__profile" class=""
            v-if="currentPage === 'profile'">
              <div id="about--profile">
                <div id="about__profile-bg-layout" class="flex [flex-wrap:wrap] h-[70vh] justify-center items-center">
                  <div id="about--profile-bg"></div>
                  <div class="[flex-basis:100%] [font-family:Play]">
                    <h2 class="text-white bg-purple-700/20 p-2 hover:text-black animate-text duration-1 my-0"
                    >Ube Theme</h2>
                  </div>
                </div>

              </div>
            </div>

            <div id="about-page__designs" class="flex justify-center items-center"
            v-if="currentPage === 'designs'">
              <div class="page--designs-bg [aspect-ratio:1920/1219] w-[70vh] hover:!bg-gray-900" />
            </div>

            <div id="about-page__nation" class="flex justify-center items-center"
            v-if="currentPage === 'nation'" >
              <div class="page--nation-bg w-[300px] h-[150px] border border-solid border-[#0000003b]
                      bg-[#ffffff08] hover:!bg-gray-200" />
            </div>

            <div id="about-page__team" class=""
            v-if="currentPage === 'team'">
              <div class="profile-screen h-[319px] max-w-[500px] md:h-[560px]">
                <div class="profile-navbar">
                  <div class="list animate-pulse">
                    <div class="item">
                      <div class="img"></div>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div class="item">
                      <div class="img"></div>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div class="item">
                      <div class="img"></div>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div class="item">
                      <div class="img"></div>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {nextTick, onMounted, ref} from 'vue';

type Page = 'profile' | 'designs' | 'nation' | 'team'
const currentPage = ref<Page>('profile');

function showPage(page: Page) {
  currentPage.value = page;

  let elSelector: string | null | undefined = null;
  switch (page) {
    case "profile":
      elSelector = '#profile #about-page__profile';
      break;
    case "designs":
      elSelector = '#designs #about-page__designs';
      break;
    case "nation":
      elSelector = '#nation #about-page__nation';
      break;
    case "team":
      elSelector = '#team #about-page__team';
      break;
    default:
      elSelector = undefined;
      break;
  }
  if (elSelector) {
    setTimeout( () => {
        const pageEl = document.querySelector(elSelector!) as unknown as HTMLElement;
        pageEl.classList.remove('show');
        setTimeout(() => { pageEl.classList.add('show')} , 150);
    }, 150);
  }

}

onMounted( () => {
  showPage('profile');
})

</script>

<style>

#about--intro {
  padding-top: 6em;
}

#jk-i {
  background: black url('/assets/images/jk/jk-i.png') repeat min(500%, calc(50vw - 250px)) 40vh;
  background-size: min(99vw, 130vh);
  height: 115vh;
}

@media (min-height: 613px) {
  #jk-i {
    background-position: 0px -160%;
    background-size: 1093px;
  }
}
@media (min-height: 683px) {
  #jk-i {
    background-position: center -132%;
    background-size: 1230px;
  }
}

#about--profile {
  top: 0;
  left: 0;
  width: 100%;
}

#about--profile-bg::after {
  display: block;
  content: '';

  background: gray url('/assets/images/jk/jk-login.png') no-repeat 30% center;
  background-size: min(70vh, 800px);
  width: 50vh;
  height: 50vh;
  border-radius: 9999px;
}
#about__profile-bg-layout h2 {
  transition: transform ease 1000ms;
  transform: translateX(-50vw);
}

#about-page__profile.show #about__profile-bg-layout h2 {
  transform: translateX(0px);
  transition-delay: 500ms;
}

#about--page--bg {
  left: 0;
  z-index: -1;
}

#about-page__profile, #about-page__designs, #about-page__nation, #about-page__team {
  opacity: 0;
  left: -320vw;
  position: relative;
  transition: transform 0.5s ease, opacity 700ms;
}

#profile #about-page__profile.show,
#designs #about-page__designs.show,
#nation #about-page__nation.show,
#team #about-page__team.show {
  opacity: 1;
  transform: translateX(320vw);
  transition-delay: .4s;
}

.page--nation-bg {
  background-image: url("../../assets/images/jk/jk-c.png");
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: center center;
}

.page--designs-bg {
  background-image: url("../../assets/images/jk/jk-cd-large.png");
  background-repeat: no-repeat;
  background-size: 70vh;
  background-position: center center;
}

div.profile-screen {
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    background: #31558a;
}
</style>