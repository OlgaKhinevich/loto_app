<template>
<b-container fluid>
    <b-row>
        <b-col cols="12">
            <h3 class="mb-4 ml-3">Profile</h3>
            <b-row>
                <b-col cols="4">
                    <b-card class="wrapper d-flex flex-column justify-content-between h-100">
                        <h5 class="label mt-0 mb-2">balance</h5>
                        <div>
                            <h2 class="user-balance">{{user_info.balance}} BON</h2>
                        </div>
                    </b-card>
                </b-col>
                <b-col cols="4">
                    <b-card class="wrapper h-100">
                        <h5 class="label mt-0 mb-2">till the end of receiving combinations</h5>
                        <Timer :date="game_info.combination_add_expire_date" />
                    </b-card>
                </b-col>
                <b-col cols="4">
                    <b-card class="wrapper">
                        <h5 class="label mt-0 mb-2">till the upcoming round</h5>
                        <Timer :date="game_info.date" /> 
                        <b-button
                            class="active-btn mt-3"
                            @click="active_round = true"
                        >open round
                        </b-button>
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="pt-3">
                <b-col cols="12">
                    <b-card class="wrapper">
                        <div class="d-flex">
                            <h5 :class="profile_mode == 'current' ? 'active-label label': 'label'"
                                @click="change_mode('current')"
                            >
                                my combinations
                            </h5>
                            <h5 
                                :class="profile_mode == 'history' ? 'active-label label ml-3': 'label ml-3'"
                                @click="change_mode('history')"
                            >
                                history
                            </h5>
                        </div>
                        <hr>
                        <History v-if="profile_mode == 'history'" /> 
                        <MyCombinations :my_combinations="my_combinations" v-else />
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
    <Round v-if="active_round" />
</b-container>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import History from './History.vue';
import Timer from './Timer.vue';
import MyCombinations from './MyCombinations.vue';
import Round from "./Round.vue";

export default {
    data() {
        return {
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
            my_combinations: [],
            profile_mode: 'current',
            active_round: false
        }
    },
    components: {
        History,
        MyCombinations,
        Timer,
        Round
    },
    mounted() {
        this.get_user_info();
        this.get_game_info();
        this.get_my_combinations(1,1);
        this.get_round_info();
        this.get_round_history();
    },
    computed:{
        ...mapGetters(["user_info"])
    },
    methods: {
        ...mapActions([
            "get_user_info",
            "get_game_info",
            "get_round_info",
            "get_round_history",
            "get_my_combinations"
        ]),
        change_mode(mode) {
            this.profile_mode = mode;
        }
    }
}
</script>