<template>
    <b-container fluid>
        <navbar-component />
        <router-view></router-view>
    </b-container>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        'navbar-component': Navbar
    }
}
</script>

<style>

</style>