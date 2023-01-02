<template>
    <div class="d-flex mt-3">
        <div>
            <div class="timer-number mr-2">{{ countdown.days }}</div>
            <small>days</small>
        </div>
        <div>
            <div class="timer-number mr-2">{{ countdown.hours }}</div>
            <small>hours</small>
        </div>
        <div>
            <div class="timer-number">{{ countdown.minutes }}</div>
            <small>minutes</small>
        </div>
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