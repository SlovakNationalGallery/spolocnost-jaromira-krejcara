<template>
    <div class="flex flex-wrap pb-6 px-4 pt-4 text-sm w-full">
        <div class="my-2 pr-4 w-full lg:w-1/3">
            <img class="max-w-full w-48" src="/img/logo_black.svg" alt="Logo" />
        </div>
        <div class="my-2 pr-4 w-full lg:w-1/3">
            <div class="flex flex-col h-full justify-between">
                <div>
                    {{ $t('Vysoká škola výtvarných umení') }}<br>
                    {{ $t('Spoločnosť Jaromíra Krejcara, n.\u00A0o.') }}<br>
                    Hviezdoslavovo námestie 175/18<br>
                    814 37 Bratislava
                </div>
                <div class="hidden lg:flex mt-4">
                    <Social />
                </div>
            </div>
        </div>
        <div class="my-2 pr-4 w-full lg:w-1/3">
            {{ $t('IČO') }}: 53 026 179<br>
            IBAN: SK52 1100 0000 0029 4908 4457<br>
            <br>
            {{ $t('Kontakt pre médiá') }}:<br>
            Martin Zaiček<br>
            0948 332 708<br>
            jaromir.krejcar@gmail.com
        </div>
        <div class="flex lg:hidden mt-4">
            <Social />
        </div>
    </div>
</template>

<script>
import Social from './Social.vue'

export default {
    components: { Social }
}
</script>
