<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
      height="100px"
      hide-on-scroll
    >
      <v-img
      class="ml-2"
      src="../src/assets/stepnewlogwn.png"
      max-width="180px"
      >
      </v-img>
    <v-spacer></v-spacer>
    <v-toolbar-items class=" hidden-sm-and-down">
      <v-btn v-scroll-to="{el:'#home', duration:800}" text>Home</v-btn>
      <v-btn v-scroll-to="{el:'#about', duration:800}" text>About</v-btn>
      <v-btn v-scroll-to="{el:'#speakers', duration:800}" text>Speakers</v-btn>
      <v-btn v-scroll-to="{el:'#contact', duration:800}" text>Contact</v-btn>
    </v-toolbar-items>
    <v-btn color="success" class=" hidden-sm-and-down" href="https://www.yepdesk.com/pes-step-2020" target="_blank">Register</v-btn>
     <v-app-bar-nav-icon
      class="hidden-md-and-up mr-5"
    @click.stop="drawer = !drawer" x-large
  ></v-app-bar-nav-icon>
    </v-app-bar>

<v-navigation-drawer
  disable-resize-watcher
    v-model="drawer"
    height="100%"
    width="200px"
    color="black"
    app
    dark
    right
    class="hidden-md-and-up"
>
<v-list dark>
  <v-list-item-group>
    <v-list-item  v-scroll-to="{el:'#home', duration:800}">
      <v-list-item-content>
        <span class="text-center">HOME</span>
      </v-list-item-content>
    </v-list-item>
    <v-list-item  v-scroll-to="{el:'#about', duration:800}">
      <v-list-item-content>
        <span class="text-center">ABOUT</span>
      </v-list-item-content>
    </v-list-item>
    <v-list-item  v-scroll-to="{el:'#speakers', duration:800}">
      <v-list-item-content>
        <span class="text-center">SPEAKERS</span>
      </v-list-item-content>
    </v-list-item>
    <v-list-item  v-scroll-to="{el:'#contact', duration:800}">
      <v-list-item-content>
        <span class="text-center">CONTACT</span>
      </v-list-item-content>
    </v-list-item>
    <v-list-item :ripple="false" inactive>
      <v-list-item-content>
        <v-btn color="success" href="https://www.yepdesk.com/pes-step-2020" target="_blank">Register</v-btn>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</v-list>
</v-navigation-drawer>
    <v-content id="home">

<v-layout>
  <v-card
  class="overflow-hidden"
  width="100%"
  height="100%"
  flat
  tile
  >
  <v-parallax class="mainanim">
    <div style="">
    <div>
    <div class="textmain font-weight-black ml-5">
      PES STEP '20
    </div>
    <div class="ml-5 font-weight-bold textsub">
      College of Engineering Adoor
    </div>
    <div class="ml-5 font-weight-regular datesub">
      February 16th, 2020
    </div>
    </div>
    <div style="position:absolute;right:0%;top:0%;" class="windmil">
      <div class="containerwind">
      <div class="stolby">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="511.411px" height="407.229px" viewBox="0 0 511.411 407.229" enable-background="new 0 0 511.411 407.229"
        xml:space="preserve">
        <g>
          <polygon points="374.238,407.229 336.238,407.229 346.238,32.229 364.238,32.229"/>
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="374.3179" y1="233.0791" x2="332.9839" y2="234.4131">
        <stop  offset="0" style="stop-color:#6A4301"/>
        <stop  offset="0.1656" style="stop-color:#eaeaea"/>
        <stop  offset="0.4969" style="stop-color:#cccccc"/>
        <stop  offset="1" style="stop-color:#eeeeee"/>
        </linearGradient>
        <path fill="url(#SVGID_1_)" d="M354.571,60.562c-3.076,0-6.105-0.24-9.07-0.698l-9.263,347.365h38l-9.27-347.601
        C361.581,60.229,358.11,60.562,354.571,60.562z"/>
        <path fill="#eaeaea" d="M365.125,0.643c0,0-45.873,12.13-40.393,26.906c5.48,14.776,50.432,2.771,50.432,2.771
        s14.19-8.514,7.741-21.09C376.238-3.771,365.125,0.643,365.125,0.643z"/>
        <g>
          <path d="M382.905,9.229c-0.193-0.376-0.391-0.734-0.591-1.082c0.701,8.776-8.046,15.199-8.046,15.199s-41.478,15.309-49.883,2.916
          c0.074,0.427,0.187,0.855,0.347,1.287c5.48,14.776,50.432,2.771,50.432,2.771S389.354,21.806,382.905,9.229z"/>
          <path fill="#eaeaea" d="M374.268,23.346c0,0,8.747-6.422,8.046-15.199c-6.711-11.663-17.189-7.504-17.189-7.504
          s-43.229,11.432-40.739,25.619C332.791,38.655,374.268,23.346,374.268,23.346z"/>
          </g>
          <circle cx="369.561" cy="15.612" r="15.611"/>
          <path fill="#FFFFFF" d="M351.489,8.312c0,0-20.962,7.299-23.834,14.25c-2.146,5.193,22.5-2.667,22.5-2.667s-1.083-2.333-0.666-6
          S351.489,8.312,351.489,8.312"/>
          </g>
          <g opacity="0.83">
            <polygon points="177.916,407.268 163.957,407.268 167.63,269.515 174.243,269.515"/>
            <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="177.9448" y1="343.2949" x2="162.7619" y2="343.7849">
              <stop  offset="0" style="stop-color:#6A4301"/>
              <stop  offset="0.1656" style="stop-color:#eaeaea"/>
              <stop  offset="0.4969" style="stop-color:#cccccc"/>
              <stop  offset="1" style="stop-color:#eeeeee"/>
              </linearGradient>
              <path fill="url(#SVGID_3_)" d="M170.691,279.923c-1.13,0-2.243-0.089-3.332-0.257l-3.402,127.602h13.959l-3.405-127.688
              C173.266,279.801,171.992,279.923,170.691,279.923z"/>
              <path fill="#eaeaea" d="M174.568,257.912c0,0-16.851,4.456-14.838,9.884s18.525,1.018,18.525,1.018s5.213-3.128,2.844-7.747
              C178.65,256.291,174.568,257.912,174.568,257.912z"/>
              <g>
                <path d="M181.1,261.066c-0.071-0.139-0.144-0.27-0.217-0.397c0.258,3.224-2.955,5.583-2.955,5.583s-15.236,5.624-18.324,1.071
                c0.027,0.156,0.069,0.313,0.127,0.473c2.013,5.428,18.525,1.018,18.525,1.018S183.469,265.686,181.1,261.066z"/>
                <path fill="#eaeaea" d="M177.927,266.252c0,0,3.213-2.359,2.955-5.583c-2.465-4.284-6.314-2.757-6.314-2.757
                s-15.88,4.199-14.965,9.411C162.691,271.876,177.927,266.252,177.927,266.252z"/>
                </g>
                <circle cx="176.198" cy="263.41" r="5.735" fill="#eaeaea"/>
                <path fill="#eaeaea" d="M169.559,260.729c0,0-7.7,2.681-8.755,5.234c-0.788,1.907,8.265-0.979,8.265-0.979
                s-0.398-0.857-0.245-2.204S169.559,260.729,169.559,260.729"/>
                </g><g opacity="0.95"><polygon points="505.428,407.268 484.645,407.268 490.115,202.164 499.959,202.164"/>
  <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="505.4741" y1="312.0166" x2="482.8659" y2="312.7462">
    <stop  offset="0" style="stop-color:#6A4301"/>
    <stop  offset="0.1656" style="stop-color:#eaeaea"/>
    <stop  offset="0.4969" style="stop-color:#cccccc"/>
    <stop  offset="1" style="stop-color:#eeeeee"/>
    </linearGradient>
  <path fill="url(#SVGID_4_)" d="M494.671,217.661c-1.681,0-3.339-0.133-4.961-0.383l-5.065,189.989h20.783l-5.068-190.118
  C498.505,217.479,496.608,217.661,494.671,217.661z"/>
    <path fill="#eaeaea" d="M500.444,184.889c0,0-25.089,6.635-22.093,14.716c2.999,8.082,27.583,1.516,27.583,1.516
  s7.762-4.657,4.234-11.535C506.522,182.475,500.444,184.889,500.444,184.889z"/>
    <g>
    <path d="M510.168,189.585c-0.104-0.206-0.212-0.401-0.322-0.592c0.384,4.8-4.4,8.312-4.4,8.312s-22.686,8.374-27.283,1.596
    c0.041,0.232,0.102,0.467,0.188,0.703c2.999,8.082,27.583,1.516,27.583,1.516S513.696,196.463,510.168,189.585z"/>
      <path fill="#eaeaea" d="M505.446,197.306c0,0,4.784-3.513,4.4-8.312c-3.671-6.379-9.402-4.104-9.402-4.104
    s-23.643,6.252-22.281,14.013C482.76,205.68,505.446,197.306,505.446,197.306z"/>
      </g>
  <circle cx="502.872" cy="193.075" r="8.539" fill="#eaeaea"/>
  <path fill="#ccc" d="M492.986,189.084c0,0-11.465,3.991-13.035,7.793c-1.173,2.84,12.308-1.458,12.308-1.458
  s-0.594-1.276-0.365-3.282C492.122,190.132,492.986,189.084,492.986,189.084"/>
</g>
</svg>
</div>
<div id="v1">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 width="386.318px" height="383.263px" viewBox="0 0 386.318 383.263" enable-background="new 0 0 386.318 383.263"
 xml:space="preserve">
<g>
  <g>
    <path d="M130.94,3.861c0,0,22.969,107.389,27.945,126.642c7.857,30.4,27.35,60.646,27.35,60.646l12.485-2.974
    c0,0-59.456-196.799-67.78-187.881"/>
    <path d="M48.472,334.449c0,0,85.37-69.078,100.287-82.228c23.553-20.765,41.703-51.834,41.703-51.834l-8.302-9.78
    c0,0-148.589,142.079-136.869,145.465"/>
    <path d="M383.356,248.43c0,0-101.435-42.082-120.107-48.92c-29.485-10.797-65.449-11.929-65.449-11.929l-4.644,11.965
    c0,0,195.751,62.826,193.136,50.909"/>
    </g>
  <circle cx="193.021" cy="192.458" r="14.449" fill="#eaeaea"/>
  </g>
</svg>
  </div>
 <div id="v1">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 width="386.318px" height="383.263px" viewBox="0 0 386.318 383.263" enable-background="new 0 0 386.318 383.263"
 xml:space="preserve">
<g>
  <g>
    <path d="M130.94,3.861c0,0,22.969,107.389,27.945,126.642c7.857,30.4,27.35,60.646,27.35,60.646l12.485-2.974
    c0,0-59.456-196.799-67.78-187.881"/>
    <path d="M48.472,334.449c0,0,85.37-69.078,100.287-82.228c23.553-20.765,41.703-51.834,41.703-51.834l-8.302-9.789
    c0,0-148.589,142.079-136.869,145.465"/>
    <path d="M383.356,248.43c0,0-101.435-42.082-120.107-48.92c-29.485-10.797-65.449-11.929-65.449-11.929l-4.644,11.965
    c0,0,195.751,62.826,193.136,50.909"/>
    </g>
  <circle cx="193.021" cy="192.458" r="14.449" fill="#eaeaea"/>
</g>
</svg>
  </div>
  <div id="v3">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 width="386.318px" height="383.263px" viewBox="0 0 386.318 383.263" enable-background="new 0 0 386.318 383.263"
 xml:space="preserve">
<g>
  <g>
    <path d="M130.94,3.861c0,0,22.969,107.389,27.945,126.642c7.857,30.4,27.35,60.646,27.35,60.646l12.485-2.974
    c0,0-59.456-196.799-67.78-187.881"/>
    <path d="M48.472,334.449c0,0,85.37-69.078,100.287-82.228c23.553-20.765,41.703-51.834,41.703-51.834l-8.302-9.789
    c0,0-148.589,142.079-136.869,145.465"/>
    <path d="M383.356,248.43c0,0-101.435-42.082-120.107-48.92c-29.485-10.797-65.449-11.929-65.449-11.929l-4.644,11.965
    c0,0,195.751,62.826,193.136,50.909"/>
    </g>
    <circle cx="193.021" cy="192.458" r="14.449" fill="#eaeaea"/>
</g>
</svg>
  </div>
  <div id="v4">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 width="386.318px" height="383.263px" viewBox="0 0 386.318 383.263" enable-background="new 0 0 386.318 383.263" xml:space="preserve">
<g>
  <g>
    <path d="M130.94,3.861c0,0,22.969,107.389,27.945,126.642c7.857,30.4,27.35,60.646,27.35,60.646l12.485-2.974
    c0,0-59.456-196.799-67.78-187.881"/>
    <path d="M48.472,334.449c0,0,85.37-69.078,100.287-82.228c23.553-20.765,41.703-51.834,41.703-51.834l-8.302-9.789
    c0,0-148.589,142.079-136.869,145.465"/>
    <path d="M383.356,248.43c0,0-101.435-42.082-120.107-48.92c-29.485-10.797-65.449-11.929-65.449-11.929l-4.644,11.965
    c0,0,195.751,62.826,193.136,50.909"/>
</g>
<circle cx="193.021" cy="192.458" r="14.449"/>
</g>
</svg>
  </div>
</div>
    </div>
    <div style="z-index:-5;position:absolute;left:0;bottom:0">
      <div class="stars"></div>
      <div class="stars1"></div>
      <div class="stars2"></div>
      </div>
    </div>
  </v-parallax>

<v-container id="about">
  <v-layout class="mt-10" justify-center align-center row>
      <v-flex xs11 sm9 md6>
        <v-card class="text-center headline mb-3" flat>ABOUT THE EVENT</v-card>
        <v-card flat outlined>
          <v-card-text class="subtitle-1 text-black text-justify pt-5 pb-5 pl-5 pr-5 ">
            <span class="font-weight-medium">IEEE SB CEA</span> in association with <span class="font-weight-medium">IEEE PES KERALA CHAPTER</span>  is organizing PES STEP
            (STUDENT TRANSITION AND ELEVATION PARTNERSHIP). Here we aim to create PES Young Professionals. IEEE PES Professionals and Young Professionals provide career advantage resources and help members to leverage the power of
            the global network through its expanding Affinity Groups and volunteering opportunities. "Time is the most valuable thing a man can spend".
            The only reason for time is so that everything doesn't happen at once. It is the time for the another massive event hosted by IEEE Power
            and Energy Society Kerala Chapter , PES STEP2020 an event meant for professional elevation, a deal that could turn you to a rainbow,
            at College of Engineering Adoor on 16th February 2020.Do mark in mind and push yourself to be there because no one
            is going to do it for you.</v-card-text>
            <v-card-text class="text-center"><v-btn rounded color="success" dark href="https://www.yepdesk.com/pes-step-2020" target="_blank">Register Now</v-btn></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm8 md6 data-aos="zoom-in">
        <v-card flat class="mt-5">
          <v-card-text>
            <v-img
            src="../src/assets/stepnewlog.png"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
  <v-container class="mt-10 mb-10">
    <v-layout>
      <v-flex><div class="text-center"><countdown end="February 16, 2020" showDays showHours showMinutes showSeconds></countdown></div></v-flex>
    </v-layout>
  </v-container>

<v-card dark class="speakclass" id="speakers" tile style="z-index:0">
<v-container>
<div class="text-center display-1 font-weight-bold mt-5">OUR SPEAKERS</div>
      <div style="z-index:1">
     <v-layout justify-center align-center class="mt-10 pb-10" row>
          <v-flex xs10 sm5 md3 v-for="speaker in speakers" :key="speaker.name" class="ml-3 mr-3 mt-5 text-center" data-aos="fade-up">
            <v-card
            flat
            style="z-index:20"
            light
            dark
            >
              <v-img
              max-height="350px"
              min-height="350px"
              :src="speaker.image"
              >
                <v-card tile color="rgb(0,0,0,0.8)" height="100px" style="position:absolute;bottom:0px;" width="100%">
                  <v-layout align-center style="height:100%">
                    <v-card-text class="white--text">
                      <div class="title">{{ speaker.name }}</div>
                      <div class="body-2">{{ speaker.atr1 }}</div>
                      <div class="body-2">{{ speaker.atr2 }}</div>
                    </v-card-text>
                  </v-layout>
                </v-card>
              </v-img>
            </v-card>
          </v-flex>
      <div style="z-index:-1;position:absolute;left:0;bottom:0">
      <div class="stars"></div>
      <div class="stars1"></div>
      <div class="stars2"></div>
      </div>
      </v-layout>
      </div>
  </v-container>
</v-card>
<v-container>
<v-card flat tile>
  <v-expand-transition>
  <v-timeline v-show="shedule" style="text-transform:uppercase">
    <v-timeline-item
    small
    color="#EF5350"
    >
    <template v-slot:opposite>
      <span>9:00 AM - 9:30 AM</span>
    </template>
    <div>
      <span class="font-weight-light" style="color:#EF5350">Registration</span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>9:30 AM - 9:45 AM</span>
    </template>
    <div class="text-right">
      <span class=" font-weight-light">Cultural</span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>9:45 AM - 11:00 AM</span>
    </template>
    <div class="font-weight-light">Welcome Speech</div>
    <div class="font-weight-medium">Inaguration</div>
    <div class="font-weight-light">Inaguration Speech</div>
    <div class="font-weight-light body-2">Er. A.K Suhair</div>
    <div class="font-weight-light body-2">Prof. V K Damodaran</div>
    <div class="font-weight-light body-2">Prof. Muhammed Kasim S</div>
    <div class="font-weight-light body-2">Dr. John George</div>
    <div class="font-weight-light body-2">Dr. Jayasree V K</div>
    <div class="font-weight-light body-2">Er. Ajith Gopi</div>
    <div class="font-weight-light body-2">Dr. Boby Philip</div>
    </v-timeline-item>

    <v-timeline-item
    color="#69F0AE"
    small
    >
    <template v-slot:opposite>
      <span>11:00 AM - 11:15 AM</span>
    </template>
    <div class="text-right">
      <span class="font-weight-light">Break</span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>11:15 AM - 11:45 AM</span>
    </template>
    <div>
      <span class=" font-weight-medium">Er. A.K Suhair<span class="font-italic caption">(speaker)</span></span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>11:45 AM - 12:15 PM</span>
    </template>
    <div class="text-right">
      <span class=" font-weight-medium">Prof. V K Damodaran <span class="font-italic caption">(speaker)</span></span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>12:15 AM - 12:45 PM</span>
    </template>
    <div >
      <span class=" font-weight-medium">Er. Ajith Gopi <span class="font-italic caption">(speaker)</span></span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>12:45 AM - 1:45 PM</span>
    </template>
    <div class="text-right">
      <span class=" font-weight-light">Break</span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>1:45 PM - 2:15 PM</span>
    </template>
    <div >
      <span class=" font-weight-medium">Prof. Muhammed Kasim S<span class="font-italic caption">(speaker)</span></span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>2:15 PM - 3:15 pM</span>
    </template>
    <div class="text-right">
      <span class=" font-weight-light">YP's Session</span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>3:15 PM - 4:30 PM</span>
    </template>
    <div >
      <span class=" font-weight-light">Hackathon</span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>4:30 PM - 4:45 PM</span>
    </template>
    <div class="text-right">
      <span class=" font-weight-light">Felicitation</span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

    <v-timeline-item
    small
    color="#69F0AE"
    >
    <template v-slot:opposite>
      <span>4:45 PM - 5:00 PM</span>
    </template>
    <div >
      <span class=" font-weight-light">Photo Session</span>
      <!-- <div class="font-weight-regular"></div> -->
    </div>
    </v-timeline-item>

  </v-timeline>
  </v-expand-transition>
  <v-card class="text-center mt-5" flat tile>
    <v-btn @click="shedule = !shedule" fab width="98px" height="98px" class="success">
      <div><div v-show="!shedule">View</div><div v-show="shedule">Close</div>shedule<div><v-icon v-show="!shedule">keyboard_arrow_down</v-icon><v-icon v-show="shedule">keyboard_arrow_up</v-icon></div></div>
    </v-btn>
    </v-card>
</v-card>
</v-container>
    <v-layout justify-center class="mt-3">
      <v-flex xs10 sm10 md5>
        <v-card flat>
          <v-card-text class="text-justify subtitle-1 font-weight-light ">
            Don't hesitate and just take this STEP. IEEE PES Professionals and Young Professionals help to evaluate your career goals, polish your professional image, create the building blocks of a lifelong and diverse professional network.
Are you a 3rd or 4th year ebullient PES member then jump in !! Join at us at College of Engineering , Adoor . It only takes <span class="font-weight-bold">₹150</span> to build a extraordinary professional life.
Who's gonna miss this great opportunity? Apply now and experience the bliss
          </v-card-text>
          <v-card-text class="text-center">
            <v-btn class="success" href="https://www.yepdesk.com/pes-step-2020" target="_blank">Grab Your Seat Now</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  <v-container>
    <div class="mt-10 text-center display-1">PARTNERS &amp; SPONSORS</div>
    <v-layout class="mt-10" justify-center align-center row>
      <v-flex md8>
      <v-layout justify-center align-center row>
      <v-flex xs3 sm2 md2 class="ml-4 mr-4" data-aos="fade-zoom-in">
        <v-card flat>
          <v-img
        src="../src/assets/PES BW.png"
        ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs4 sm3 md3 class="ml-4 mr-4" data-aos="fade-zoom-in">
        <v-card flat>
        <v-img
        src="../src/assets/yppes.png"
        ></v-img>
        </v-card>
      </v-flex>
      <v-flex  xs3 sm2 md2 class="ml-4 mr-4" data-aos="fade-zoom-in">
        <v-card flat>
        <v-img
        src="../src/assets/sblogoai.png"
        ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs3 sm2 md2 class="ml-4 mr-4" data-aos="fade-zoom-in">
        <v-card flat>
        <v-img
        src="../src/assets/cea.jpg"
        ></v-img>
        </v-card>
      </v-flex>
      </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
 <v-card flat width="100%" height="100%" tile dark color="grey darken-4" class="mt-10 pb-10" id="contact">
      <div class="text-center mb-5 display-1 font-weight-black pt-10" >CONTACT US !</div>
      <v-container>
        <v-layout align-center justify-center row>
          <v-flex xs9 sm4 md5 class="mt-8">
            <v-card flat color="transparent">
              <div>
                <div class="overline"> <v-icon>home</v-icon> Address : </div>
                <div>College of Engineering Adoor, Adoor - Kollam Road, Manakala, Pathanamthitta Kerala 691551</div>
              </div>
              <div class="mt-4">
                <div class="overline"> <v-icon>email</v-icon> Email : </div>
                <div>ieeesbceadoor@gmail.com</div>
              </div>
              <div class="mt-4">
                <div class="overline"> <v-icon>phone</v-icon> Phone : </div>
                <div><span>Novin Francis :</span> (+91) 8137048039</div>
                <div><span>Hamna :</span> (+91) 8281805733</div>
              </div>
            </v-card>
          </v-flex>
            <v-card flat class="ml-5 mr-5 mt-8">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.244251518263!2d76.71592231473534!3d9.1323981934492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0611e606b00001%3A0x27dc62f29d54f358!2sCollege%20Of%20Engineering%2C%20Adoor!5e0!3m2!1sen!2sin!4v1575115687612!5m2!1sen!2sin"
                    frameborder="0"
                    height="250px"
                    style="border:0;"
                    allowfullscreen=""></iframe>
            </v-card>
        </v-layout>
      </v-container>
  </v-card>

  </v-card>
</v-layout>
    </v-content>
    <v-footer
    padless
    >
<v-card
    color="black"
    flat
    tile
    width="100%"
    class="overflow-hidden"
    dark
    >
    <v-card-text class="text-center">
        <v-flex xs12>
            <v-btn v-scroll-to="{el:'#home',duration:800}" text x-small color="rgb(255,255,255,0.8)">Home</v-btn> .
            <v-btn v-scroll-to="{el:'#contact',duration:800}" text x-small color="rgb(255,255,255,0.8)">Contact</v-btn> .
            <v-btn text x-small color="rgb(255,255,255,0.8)" href="https://www.ieeesbcea.com/" target="_blank">IEEE CEA</v-btn>
        </v-flex>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
          <div  class="text-center caption justify-center"> &#9400; Copyright - 2019 | Designed By <span style="cursor:pointer" class="font-weight-medium" ><a  href="https://www.linkedin.com/in/ajay-kodinhi/" target="_blank" style="text-decoration:none;color:inherit">Ajay K</a></span></div>
    </v-card-text>
    </v-card>
    </v-footer>
  </v-app>
</template>

<style>

.mainanim {
margin: 0;
width: 100%;
height: 100vh;
font-family: "Exo", sans-serif;
color: #fff;
background: linear-gradient(-45deg, #00C853,#69F0AE,#43A047, #23d5ab);
background-size: 400% 400%;
animation: gradientBG 30s ease infinite;
}

.speakclass {
  margin: 0;
width: 100%;
font-family: "Exo", sans-serif;
color: #fff;
background: linear-gradient(135deg,#43A047,#69F0AE);
background-size: 400% 400%;
animation: gradientBG 50s ease infinite;
}

@keyframes gradientBG {
0% {
 background-position: 0% 50%;
}
50% {
 background-position: 100% 50%;
}
100% {
 background-position: 0% 50%;
}
}
.textmain{
text-align: left;
}

@media screen and (min-width: 960px) {
  .textmain{
    font-size: 100px;
  }
  .textsub{
    font-size: 30px;
  }
}
@media screen and (min-width: 600px) and (max-width:959px) {
  .textmain{
    font-size: 60px;
    text-align: center;
  }
  .textsub{
    font-size: 20px;
    text-align: center;
  }
   .datesub{
    text-align: center;
  }
}
@media screen and (min-width: 0px) and (max-width: 599px) {
  .textmain{
    font-size: 40px;
    text-align: center;
  }
  .textsub{
    font-size: 15px;
    text-align: center;
  }
  .datesub{
    text-align: center;
  }
}

path{
  fill:#fff;
}

.containerwind {
  position:relative;
  width:1000px;
  margin:0 auto;
  height:586px;
  padding:0;
}

.stolby {
  position:absolute;
  left:200px;
  top:0;
  margin-top:18%;
}

#v1, #v2, #v3, #v4 {
     animation: 2s motion1 infinite linear;
   position:absolute;
    top:0;
}

#v1 {
  left:377px;
  top:3px;

}

#v2 {
    left:45px;
  top:80px;
-moz-transform: scale(0.7) rotate(0deg);
-webkit-transform: scale(0.7) rotate(0deg);
-o-transform: scale(0.7) rotate(0deg);
-ms-transform: scale(0.7) rotate(0deg);
transform: scale(0.7) rotate(0deg);
  animation: 2s motion2 infinite linear;
}

#v3 {
  left:510px;
  top:180px;
  -moz-transform: scale(0.5) rotate(0deg);
  -webkit-transform: scale(0.5) rotate(0deg);
  -o-transform: scale(0.5) rotate(0deg);
  -ms-transform: scale(0.5) rotate(0deg);
  transform: scale(0.5) rotate(0deg);
  animation: 2s motion3 infinite linear;
  opacity:0.9;
}

#v4 {
  left:184px;
  top:250px;
  -moz-transform: scale(0.3) rotate(0deg);
  -webkit-transform: scale(0.3) rotate(0deg);
  -o-transform: scale(0.3) rotate(0deg);
  -ms-transform: scale(0.3) rotate(0deg);
  transform: scale(0.3) rotate(0deg);
  animation: 2s motion4 infinite linear;
  opacity:0.7;
}

@keyframes motion1 {
  from {}

  to {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);

  }
}

@keyframes motion2 {
  from {}
  to {
  -moz-transform: scale(0.7) rotate(360deg);
  -webkit-transform: scale(0.7) rotate(360deg);
  -o-transform: scale(0.7) rotate(360deg);
  -ms-transform: scale(0.7) rotate(360deg);
  transform: scale(0.7) rotate(360deg);

  }
}

@keyframes motion3 {
  from {}
  to {
  -moz-transform: scale(0.5) rotate(360deg);
  -webkit-transform: scale(0.5) rotate(360deg);
  -o-transform: scale(0.5) rotate(360deg);
  -ms-transform: scale(0.5) rotate(360deg);
  transform: scale(0.5) rotate(360deg);

  }
}

@keyframes motion4 {
  from {}
  to {
  -moz-transform: scale(0.3) rotate(360deg);
  -webkit-transform: scale(0.3) rotate(360deg);
  -o-transform: scale(0.3) rotate(360deg);
  -ms-transform: scale(0.3) rotate(360deg);
  transform: scale(0.3) rotate(360deg);

  }
}

@media screen and (min-width:0px){
  .windmil{
    opacity: 0.2;
    z-index: -1;
  }
}

.speakef{
  z-index: -1;
}
</style>

<style lang="sass">
$starFieldWidth: 2560
$starFieldHeight: 2560
$starStartOffset: 600px

$starOneScrollDuration: 100s
$starTwoScrollDuration: 125s
$starThreeScrollDuration: 175s
$numStarOneStars: 1700
$numStarTwoStars: 700
$numStarThreeStars: 200
$numShootingStars: 10
$width: 100%

html
  body
    width: 100%
    margin: 0
.cover
  display: block
  position: relative
  width: 100%
  height: 100%
  background: linear-gradient(to bottom, #020107 0%, #201b46 100%)
  .text
    color: #FFF
    position: absolute
    top: 50%
    right: 50%
    margin: -10px -75px 0 0
    font-size: 20px
    font-family: sans-serif
    font-weight: bold
@function create-stars($n)

  $stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF"

  @for $i from 2 through $n
    $stars: "#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF"

  @return unquote($stars)

@mixin star-template($numStars, $starSize, $scrollSpeed)
  z-index: 10
  width: $starSize
  height: $starSize
  border-radius: 50%
  background: transparent
  box-shadow: create-stars($numStars)
  animation: animStar $scrollSpeed linear infinite
  &:after
    content: " "
    top: -$starStartOffset
    width: $starSize
    height: $starSize
    border-radius: 50%
    position: absolute
    backgroud: transparent
    box-shadow: create-stars($numStars)
@mixin shooting-star-template($numStars, $starSize, $speed)
  z-index: 10
  width: $starSize
  height: $starSize + 80px
  border-top-left-radius: 50%
  border-top-right-radius: 50%
  position: absolute
  bottom: 0
  right: 0
  background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1))
  animation: animShootingStar $speed linear infinite
.stars
  @include star-template($numStarOneStars, 1px, $starOneScrollDuration)
.stars1
  @include star-template($numStarTwoStars, 2px, $starTwoScrollDuration)
.stars2
  @include star-template($numStarThreeStars, 3px, $starThreeScrollDuration)
.shooting-stars
  @include shooting-star-template($numShootingStars, 5px, 10s)
@keyframes animStar
  from
    transform: translateY(0px)
  to
    transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px)
@keyframes animShootingStar
  from
    transform: translateY(0px) translateX(0px) rotate(-45deg)
    opacity: 1
    height: 5px
  to
    transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px) rotate(-45deg)
    opacity: 1
    height: 800px
</style>

<script>
export default {
  data () {
    return {
      drawer: false,
      speakers: [
        { name: 'Prof. V K Damodaran', image: `https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/vkdsir.jpg?alt=media&token=1db1fb07-4d7e-4ba8-8520-9d5d53bad927`, atr1: 'Fellow, IE(India)', atr2: 'Life Senior Member, IEEE' },
        { name: 'Prof. Muhammed Kasim S', image: `https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/kasimsir.jpeg?alt=media&token=8d6c3b67-19dd-4407-8229-5cf8b1a69472`, atr1: 'Chair, IA,IE,PEL Jt.Chapter', atr2: 'IEEE Kerala Section' },
        { name: 'Er. A.K Suhair', image: 'https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/suhairsir.png?alt=media&token=48f2a450-42a7-4075-990d-9b322193ee1d', atr1: 'Chair, IEEE PES Kerala Chapter', atr2: 'Life Senior Member, IEEE' },
        { name: 'Er. Ajith Gopi', image: 'https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/ajithgopi.jpeg?alt=media&token=902717f4-a419-42c6-881a-106e7580ce46', atr1: 'Heading Technical Consultancy', atr2: 'In Solar PV Projects at ANERT' },
        { name: 'Er. Staji Wilson', image: 'https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/staji.jpeg?alt=media&token=10919ef2-7f1e-4c63-861d-1f518841e75f', atr1: 'VICS & WIE ILC Travel Grant Recipient', atr2: 'Richard E Merwin Scholar' },
        { name: 'Er. Anish M S', image: 'https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/anish.jpeg?alt=media&token=5d279c5e-b7e2-4c1f-9af5-df9f12217bc5', atr1: 'Young Professional Volunteer', atr2: 'IEEE Kerala Section' },
        { name: 'Er. Anandhu S Kumar', image: 'https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/anandu.jpeg?alt=media&token=f7bea9ae-badc-48db-a743-f1a2509ee44e', atr1: 'Student Activity Coordinator', atr2: 'IEEE PES Kerala Section' },
        { name: 'Er. Saran K S', image: 'https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/saran.jpeg?alt=media&token=3d53e22e-4d24-4a8c-b537-26fb91634a3f', atr1: 'Young Professional Volunteer', atr2: 'IEEE Kerala Section' },
        { name: 'Er. Shyam Pradeep Alil', image: 'https://firebasestorage.googleapis.com/v0/b/pesstep-c8326.appspot.com/o/shyam.jpg?alt=media&token=f7aa1e66-5d66-4b80-969b-b9ab04250673', atr1: 'Entrepreneur & YP Volunteer', atr2: 'IEEE Kerala Section' }
      ],
      shedule: false
    }
  }
}
</script>
