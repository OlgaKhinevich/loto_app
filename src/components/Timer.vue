<template>
    <div class="flex">
        <div class="bg-bg-clr p-2 mr-1 mt-1 rounded text-end-gr-clr font-bold text-lg">{{ countdown.days }}</div>
        <div class="bg-bg-clr p-2 mr-1 mt-1 rounded text-end-gr-clr font-bold text-lg">{{ countdown.hours }}</div>
        <div class="bg-bg-clr p-2 mr-1 mt-1 rounded text-end-gr-clr font-bold text-lg">{{ countdown.minutes }}</div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: ['date'],
    data() {
        return {
            timer: null,
            countdown: {
                days: 0,
                hours: 0,
                minutes: 0,  
            },
            expired: false
        }
    },  
    destroyed() {
        //this.stop_timer();
    },
    methods: {
        pretty_date(n){
            if(n<10) return `0${n}`;
            return n;
        },
        start_timer() {
            const self = this;
            this.timer = setTimeout(function run(){
                const total = self.get_remaining_time(self.date);
                if (total.days <= 0 && total.hours <= 0 && total.minutes <= 0) {
                    for (let key in total) {
                        total[key] = self.pretty_date(0);
                    }
                    self.stop_timer();
                } else {
                    for (let key in total) {
                        total[key] = self.pretty_date(total[key]);
                    }
                }
                Object.assign(self.countdown, total);
                self.timer = setTimeout(run, 60000);
            }, 0);
        },
        get_remaining_time(end_date){
            const now = moment();
            const then = moment(end_date);
            const diff = then.diff(now);
            const duration_object = moment.duration(diff);
            let parts = {} ;
            for (const item of ['days', 'hours', 'minutes']) {
                const d = duration_object[item]();
                duration_object.subtract(moment.duration(d, item));
                parts[item] = d;
            }
            return parts;
        },
        stop_timer() {
            clearInterval(this.timer);    
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