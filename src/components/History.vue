<template>
  <b-row>
    <b-col>
      <h3 class="text-lg my-2">Past rounds</h3>
      <b-table class="table" :items="history_combinations" :fields="fields" borderless>
        <template #cell(five_of_five)="data">
          <span v-for="(num, i) in data.item.five_of_five"
            :key="i"
            class="comb-num bg-comb-clr"
          >{{ num }}</span>
        </template>
        <template #cell(four_of_five)="data">
          <span v-for="(num, i) in data.item.four_of_five"
            :key="i"
            class="comb-num bg-comb-clr"
          >{{ num }}</span>
        </template>
        <template #cell(three_of_five)="data">
          <span v-for="(num, i) in data.item.three_of_five"
            :key="i"
            class="comb-num bg-comb-clr"
          >{{ num }}</span>
        </template>
        <template #cell(lose_combinations)="data">
          <span v-for="(num, i) in data.item.three_of_five"
            :key="i"
            class="comb-num bg-comb-clr"
          >{{ num }}</span>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        'round',
        'date',
        'five_of_five',
        'four_of_five',
        'three_of_five',
        'lose_combinations',
        'prize'
      ],
      history_combinations: [
        {
          round: 1,
          date: "21.06.2021",
          five_of_five: [1, 2, 3, 4, 20],
          four_of_five: [1, 2, 3, 4, 20],
          three_of_five: [1, 2, 3, 4, 20],
          lose_combinations: [1, 2, 3, 4, 20],
          prize: 10,
        }
      ]
    }
  },
  computed: {
    srcImg() {
      if (!this.combination) {
        return require(`../static/img/arrow-down.svg`);
      } else {
        return require(`../static/img/arrow-up.svg`);
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
