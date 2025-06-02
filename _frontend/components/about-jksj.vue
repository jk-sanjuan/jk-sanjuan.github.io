<template>
  <div class="w-[100vw] overflow-hidden">

    <div id="about--intro" class="flex flex-col justify-end items-center h-full space-y-8">

      <div class="flex justify-center items-center">
        <div class="w-[33px] h-[33px] md:w-[86px] md:h-[86px] hover:!bg-gray-800" style="background:
                    url('../../assets/images/jk/jk-icon-384.png') black no-repeat; background-size: 100%">
        </div>

        <div class="bg-[rgba(255,255,255,0.7)] h-[66px] md:h-[86px] pr-[9px] md:pr-[117px]">
          <h1 class="ml-2 bg-sky-400 hover:bg-[mediumvioletred]/40 h-[17px] single-title [line-height:1] md:[font-size:revert] md:h-[20px]"
          style="transition: background-color ease 200ms;"
          >Johnella Kyle San Juan</h1>
        </div>
      </div>

      <div class="about-links">
        <a href="#profile" class="text-[#a64d00] font-bold"
         @click.prevent="() => { clickPage('profile') }"
         @mouseenter="() => { peekPage('profile'); }"
         @mouseleave="() => { peekOutPage()}"
        >Profile</a> /
        <a href="#designs" class="text-[#a64d00] font-bold"
         @click.prevent="clickPage('designs')"
         @mouseenter="() => { peekPage('designs'); }"
         @mouseleave="() => { peekOutPage()}"
        >Designs</a> /
        <a href="#nation" class="text-[#a64d00] font-bold"
         @click.prevent="clickPage('nation')"
         @mouseenter="() => { peekPage('nation'); }"
         @mouseleave="() => { peekOutPage()}"
        >Nation</a> /
        <a href="#team" class="text-[#a64d00] font-bold"
         @click.prevent="clickPage('team')"
         @mouseenter="() => { peekPage('team'); }"
         @mouseleave="() => { peekOutPage()}"
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

            <component :is="{
              profile: 'AboutProfile', 
              designs: 'AboutDesigns',
              nation: 'AboutNation',
              team: 'AboutTeam'
            }[currentPage] "></component>

            <!-- <AboutProfile v-if="currentPage === 'profile'"></AboutProfile> -->

            <!-- <AboutDesigns v-if="currentPage === 'designs'"></AboutDesigns> -->

            <!-- <AboutNation v-if="currentPage === 'nation'"></AboutNation> -->

            <!-- <AboutTeam v-if="currentPage === 'team'"></AboutTeam> -->

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';

type Page = 'profile' | 'designs' | 'nation' | 'team'
const currentPage = ref<Page>('profile');
const savedPage = ref<Page>();

let showPageTimeout: NodeJS.Timeout;

function getPageSelector(page: Page) {
  switch (page) {
    case "profile":
      return '#profile #about-page__profile';
    case "designs":
      return '#designs #about-page__designs';
    case "nation":
      return '#nation #about-page__nation';
    case "team":
      return '#team #about-page__team';
    default:
      return undefined;
  }
}

function clickPage(page: Page) {
  showPage(page);
  savedPage.value = currentPage.value;
}

function peekPage(page: Page) {
  if (savedPage.value === page) return;
  currentPage.value = page;

  const pageSelector = getPageSelector(page);

  if (pageSelector) {

    showPageTimeout && clearTimeout(showPageTimeout);
    showPageTimeout = setTimeout( () => {
      const pageEl = document.querySelector(pageSelector!)!;
      pageEl.classList.add('peek-in');
      setTimeout(() => {
        pageEl.classList.add('peek');
      }, 1000);
    }, 200);
  }
}

function peekOutPage() {
  if (savedPage.value === currentPage.value) return;
  const page = currentPage.value = savedPage.value!;

  const pageSelector = getPageSelector(page);

  if (pageSelector) {

    showPageTimeout && clearTimeout(showPageTimeout);
    showPageTimeout = setTimeout( () => {
      const pageEl = document.querySelector(pageSelector!)!;
      pageEl.classList.remove('peek-in');
      pageEl.classList.remove('peek');

      showPage(page);

    }, 200);

  }
}

function showPage(page: Page) {
  currentPage.value = page;

  const pageSelector = getPageSelector(page);
  
  if (pageSelector) {
    showPageTimeout && clearTimeout(showPageTimeout);
    showPageTimeout = setTimeout( () => {
      const pageEl = document.querySelector(pageSelector!) as unknown as HTMLElement;
      pageEl.classList.remove('show');
      setTimeout(() => { pageEl.classList.add('show')} , 150);
    }, 150);
  }

}

onMounted( () => {
  clickPage('profile');
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
    background-position: calc(50% + 105px) -132%;
    background-size: 1230px;
  }
}

@media (max-width: 860px) {
  #jk-i {
    background-position: 140vw -132%;
    background-size: 1230px;
  }
}

@media (max-width: 720px) {
  #jk-i {
    background-position: 31% -925%;
    background-size: 159vw;
    height: 110vw;
  }
}

.about-links {
  a {
    color: rgb(255, 202, 156);
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

  opacity: 0.7;

  transition: opacity ease 1s;

}

#about--profile-bg:hover::after {
  opacity: 1;
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
  transform: translateX(-320vw);
  position: relative;
  transition: transform 0.5s ease, opacity 700ms;
}

#profile #about-page__profile.show,
#designs #about-page__designs.show,
#nation #about-page__nation.show,
#team #about-page__team.show {
  opacity: 1;
  transform: translateX(0);
  transition-delay: .4s;
}

#profile #about-page__profile.peek-in,
#designs #about-page__designs.peek-in,
#nation #about-page__nation.peek-in,
#team #about-page__team.peek-in {
  opacity: 1;
  transform: translateX(0);
  rotate: 10deg;
  scale: 0.8;
  transform-origin: center;
  transition: opacity 700ms, rotate ease 1s, scale ease 1s;
}

#profile #about-page__profile.peek,
#designs #about-page__designs.peek,
#nation #about-page__nation.peek,
#team #about-page__team.peek {
  scale: 1;
  rotate: 0deg;
}

.page--nation-bg {
  background-image: url("../../assets/images/jk/jk-c.png");
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: center center;

  transition: background-color ease 1s;
}

.page--designs-bg {
  background-image: url("../../assets/images/jk/jk-cd-large.png");
  background-repeat: no-repeat;
  background-size: 70vh;
  background-position: center center;

  border-radius: 999px;
  opacity: 0.5;
}

.page--designs-bg:hover {
  opacity: 1;
}

div.profile-screen {
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    background: #31558a;
    
    opacity: 0.8;

    transition: opacity ease 1s;

    &:hover {
      opacity: 1;
    }
}
</style>