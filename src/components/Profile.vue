<template>
<div class="component-container">
    <div class="w-full bg-bg-clr h-1/8 py-2 px-8 flex fixed top-0 left-0 justify-between items-center">
        <div>logo</div>
        <div>
            <span class="text-h3-clr">{{user_info._id}}</span>
            <img class="inline-block w-6 pl-2" src="../static/img/bx_bx-exit.svg" alt="exit" />
        </div>     
    </div>
    <div class="w-3/4 h-5/6">
        <h3 class="ml-2 mb-4">Profile</h3>
        <div class="flex justify-between">
            <div class="wrapper shadow-wrap-sh w-1/3 h-1/3 m-2 items-start justify-start">
                <div>
                    <p class="label">balance</p>
                    <div class="mt-2">
                        <span class="text-end-gr-clr text-3xl font-bold">{{user_info.balance}}</span>
                        <span class="text-end-gr-clr pl-2 text-3xl font-bold">BON</span>
                    </div>
                </div> 
            </div>
            <div class="wrapper shadow-wrap-sh w-1/3 h-1/3 m-2 items-start justify-start">
                <div>
                    <p class="label">till the end of receiving combinations</p>
                </div>
            </div>
            <div class="wrapper shadow-wrap-sh w-1/3 h-1/3 m-2 items-start justify-start">
                <div>
                    <p class="label">till the upcoming round</p>
                </div>  
            </div>
        </div>
        <div class="wrapper shadow-wrap-sh w-9/10 h-2/3 m-2 py-3 items-start justify-start">
            <div class="w-full flex">
                <div :class="profile_mode == 'current' ? 'text-end-gr-clr pb-2 label mr-6 my-0 border-b-2' : 'pb-2 my-0 label mr-6'" @click="change_mode('current')">
                    <p>my combinations</p>
                </div>
                <div :class="profile_mode == 'history' ? 'text-end-gr-clr pb-2 label my-0 border-b-2' : 'pb-2 my-0 label'"  @click="change_mode('history')">
                    <p>history</p>
                </div>
            </div>
            <hr class="text-label-clr w-full mb-1">
            <History v-if="profile_mode == 'history'" /> 
            <MyCombinations v-else />
        </div>
    </div>
</div>
  
</template>

<script>
import History from './History.vue';
import {HOSTNAME} from '../assets/constants.js';
import MyCombinations from './MyCombinations.vue';

export default {
    data() {
        return {
            user_info: {
                _id: '',
                balance: 0
            },
            profile_mode: 'current'
        }
    },
    components: {
        History,
        MyCombinations
    },
    mounted() {
        this.get_user_info();
    },
    methods: {
        async get_user_info() {
            try {
                const response = await fetch(`${HOSTNAME}/api/user_info`);
                if(!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                console.log(data);
                Object.assign(this.user_info, data);
                console.log(this.user_info);
            } catch(err) {
                console.log(err);
            }
        },
        change_mode(mode) {
            this.profile_mode = mode;
        }
    }
}
</script>
