<template>
    <b-row>
        <b-col cols="12">
            <b-navbar fixed>
                <b-navbar-brand href="#">NavBar</b-navbar-brand>
                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <span class="text-white mr-2">User</span>
                        </template>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
export default {

}
</script>

<style>

</style>