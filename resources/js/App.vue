<template>
  <Header @showMenu="menuShown = true" @showCalendar="calendarShown = !calendarShown" v-bind="{ calendarShown }" />

  <div class="fixed lg:flex inset-0 mt-14">
    <div class="overflow-y-auto h-full w-full lg:w-1/2" @scroll.passive="scroll" :class="calendarShown ? 'hidden lg:block' : ''" ref="routerView">
      <div class="flex flex-col items-stretch h-full">
        <div class="flex-grow">
          <router-view @updateTitle="updateTitle" />
        </div>
        <div class="bg-blue relative text-black z-[40]">
          <Footer />
          <button @click="scrollToTop" class="absolute bg-linen bottom-0 font-display font-light h-12 m-4 rounded-full right-0 text-4xl w-12">&uarr;</button>
        </div>
      </div>
    </div>
    <div class="overflow-y-auto h-full w-full lg:w-1/2" @scroll.passive="scroll" :class="!calendarShown ? 'hidden lg:block' : ''">
      <div class="flex flex-col items-stretch h-full">
        <div class="flex-grow">
          <Calendar />
        </div>
        <div class="bg-linen relative text-black z-[20]">
          <Footer />
        </div>
      </div>
    </div>
  </div>

  <div class="fixed hidden lg:flex lg:flex-col inset-0 justify-between px-4 py-3 pointer-events-none text-2xl text-blue underline-offset-sans underline-thickness-sans uppercase w-full z-[30]">
    <div class="text-right">
      <AppLink class="pointer-events-auto hover:underline" :to="$i18nRoute({ name: 'Info' })">{{ $t('Zámer') }}</AppLink><br>
      <AppLink class="pointer-events-auto hover:underline" :to="$i18nRoute({ name: 'Team' })">{{ $t('Kto sme') }}</AppLink>
    </div>
    <div class="flex justify-between items-end">
      <div>
        <AppLink class="pointer-events-auto hover:underline" :to="$i18nRoute({ name: 'Home', hash: '#jaromir-krejcar' })">Jaromír Krejcar</AppLink><br>
        <AppLink class="pointer-events-auto hover:underline" :to="$i18nRoute({ name: 'Home', hash: $t('#ld-machnac') })">{{ $t('LD Machnáč') }}</AppLink>
      </div>
      <div><AppLink class="pointer-events-auto hover:underline" :to="$i18nRoute({ name: 'Faq' })">FAQ</AppLink></div>
    </div>
  </div>

  <Menu :shown="menuShown" @close="menuShown = false" />

  <div v-show="$route.name == 'Home' && !calendarShown" :class="claimShown ? 'top-1/2' : '-top-1/2'" class="duration-1000 fixed font-display leading-none left-1/2 pointer-events-none text-[15vw] lg:text-[7.5vw] text-blue text-center transform transition-all -translate-x-1/2 -translate-y-1/2 uppercase whitespace-pre z-[80]">
    {{ $t('Vyvlastnime\nMachnáč!') }}
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'

export default {
  components: { Calendar, Footer, Header, Menu },
  data() {
    return {
      menuShown: false,
      claimShown: true,
      calendarShown: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.scroll, { passive: true })
    this.$emitter.on('app-link.click', this.appLinkClicked)
  },
  unmounted() {
    window.removeEventListener('scroll', this.scroll, { passive: true })
  },
  watch: {
    '$i18n.locale'() {
      this.updateTitle(this.$t(this.$route?.meta?.title ?? ''))
    },
    '$route'() {
      this.updateTitle(this.$t(this.$route?.meta?.title ?? ''))
    }
  },
  methods: {
    updateTitle(title) {
      if (title) {
        document.title = `${title} – ${this.$t('Spoločnosť Jaromíra Krejcara')}`
      } else {
        document.title = this.$t('Spoločnosť Jaromíra Krejcara')
      }
    },
    appLinkClicked(route) {
      this.menuShown = false
      this.calendarShown = false
      if (route.hash) {
        const el = document.querySelector(route.hash)
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth'
          })
        }
      } else {
        this.$refs.routerView.scroll(0, 0)
      }
    },
    scroll(e) {
      const top = e.target === document ? window.scrollY : e.target.scrollTop
      if (top > 200) {
        this.claimShown = false
      }
    },
    scrollToTop(e) {
        e.target.closest('.overflow-y-auto').scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    },
  },
}
</script>