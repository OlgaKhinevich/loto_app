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
            <div class="wrapper px-5 py-4 shadow-wrap-sh w-1/3 h-auto m-2 items-start justify-between">
                <p class="label mt-0 mb-1">balance</p>
                <div>
                    <span class="text-end-gr-clr text-3xl font-bold">{{user_info.balance}}</span>
                    <span class="text-end-gr-clr pl-2 text-3xl font-bold">BON</span>
                </div>
            </div>
            <div class="wrapper px-5 py-4 shadow-wrap-sh w-1/3 h-auto m-2 items-start justify-between">
                <p class="label mt-0 mb-1">till the end of receiving combinations</p>
                <Timer :date="game_info.combination_add_expire_date" />
            </div>
            <div class="wrapper px-5 py-4 shadow-wrap-sh w-1/3 h-auto m-2 items-start justify-between">
                <p class="label mt-0 mb-1">till the upcoming round</p>
                <Timer :date="game_info.date" />
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
import Timer from './Timer.vue';
import {HOSTNAME} from '../assets/constants.js';
import MyCombinations from './MyCombinations.vue';

export default {
    data() {
        return {
            user_info: {
                _id: '',
                balance: 0
            },
            game_info: {
                current_round: 0,
                prize_allocation_supply: 0,
                date: 0,
                combination_add_expire_date: 0
            },
            round_info: {
                prize_allocation_supply: 0,
                combination: [],
                _id: 0,
                date: 0,
                winners_count: 0
            },
            round_history: {
                has_next_page: false,
                rounds: []
            },
            profile_mode: 'current'
        }
    },
    components: {
        History,
        MyCombinations,
        Timer
    },
    mounted() {
        this.get_user_info();
        this.get_game_info();
        //this.get_round_info();
        //this.get_round_history();
    },
    methods: {
        async get_user_info() {
            try {
                const response = await fetch(`${HOSTNAME}/api/user_info`);
                if(!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                Object.assign(this.user_info, data);
            } catch(err) {
                console.log(err);
            }
        },
        async get_game_info() {
            try {
                const response = await fetch(`${HOSTNAME}/api/game_info`);
                if(!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                Object.assign(this.game_info, data);
                //console.log(this.game_info);
            } catch(err) {
                console.log(err);
            }
        },
        change_mode(mode) {
            this.profile_mode = mode;
        },
        async get_round_info(round_id) {
            try {
                const response = await fetch(`${HOSTNAME}/api/round_info`, {round_id});
                if(!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                Object.assign(this.round_info, data);
                //console.log(this.round_info);
            } catch(err) {
                console.log(err);
            }
        },
        async get_round_history() {
            try {
                const response = await fetch(`${HOSTNAME}/api/round_history`);
                if(!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                Object.assign(this.round_history, data);
                //console.log(this.round_history);
            } catch(err) {
                console.log(err);
            }
        },
    }
}
</script>
