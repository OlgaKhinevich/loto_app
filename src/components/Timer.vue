<template>
    <div class="flex">
        <div class="bg-clr">{{ remaining_time }}</div>
        <div class="bg-clr"></div>
        <div class="bg-clr"></div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: ['date'],
    data() {
        return {
            timer: null,
            remaining_time: 0
        }
    },  
    computed: {

    },
    destroyed() {
        this.stop_timer();
    },
    methods: {
        start_timer() {
            const self = this; 
            this.timer = setTimeout(function run(){
                const to_game_moment = moment(self.date);
                const now = moment();
                const days = to_game_moment.diff(now, "days");
                const hours = to_game_moment.subtract(now.hours(), "hours").hours();
                const minutes = to_game_moment.subtract(now.minutes(), "minutes").minutes();
                self.remaining_time = moment(`${days}:${hours}:${minutes}`, "D:h:m").format("DD:hh:mm");
                self.timer = setTimeout(run, 60000);
            }, 0)
        },
        stop_timer() {
            clearTimeout(this.timer)
        }
    },
    watch: {
        date(date) {
            if (date) this.start_timer();
        }
    }
}
</script>

<style>

</style>