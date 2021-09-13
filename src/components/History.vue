<template>
  <div>
      <h3 class="text-lg my-2">Past rounds</h3>
      <table class="table">
        <tr>
          <th class="label w-1/12 pb-1.5">round</th>
          <th class="label w-2/12 pb-1.5">date</th>
          <th class="label w-2/12 pb-1.5">5 of 5</th>
          <th class="label w-2/12 pb-1.5">4 of 5</th>
          <th class="label w-2/12 pb-1.5">3 of 5</th>
          <th class="label w-3/12 pb-1.5">lose combinations</th>
          <th class="label w-2/12 pb-1.5">prize</th>
          <th class="w-7"></th>
        </tr>
        <tr class="bg-row-clr">
          <td valign="top" class="pl-3 py-1.5 font-semibold text-sm text-h3-clr rounded-l-md">1</td>
          <td valign="top" class="py-1.5 font-semibold text-sm text-h3-clr">01.06.2021</td>
          <td valign="top" class="py-1.5 pr-4">
            <div v-if="combination">
              <span class="comb-num bg-comb-clr">2</span>
              <span class="comb-num bg-comb-clr">6</span>
              <span class="comb-num bg-comb-clr">7</span>
              <span class="comb-num bg-comb-clr">12</span>
              <span class="comb-num bg-comb-clr">20</span>
            </div>
          </td>
          <td valign="top" class="py-2 pr-4">
            <div v-if="combination">
              <span class="comb-num bg-comb-clr">2</span>
              <span class="comb-num bg-comb-clr">6</span>
              <span class="comb-num bg-comb-clr">7</span>
              <span class="comb-num bg-comb-clr">12</span>
              <span class="comb-num bg-comb-clr">20</span>
            </div>
          </td>
          <td valign="top" class="py-1.5 pr-4">
            <div v-if="combination">
              <span class="comb-num bg-comb-clr">2</span>
              <span class="comb-num bg-comb-clr">6</span>
              <span class="comb-num bg-comb-clr">7</span>
              <span class="comb-num bg-comb-clr">12</span>
              <span class="comb-num bg-comb-clr">20</span>
            </div>
          </td>
          <td valign="top" class="py-1.5 pr-4">
            <div v-if="combination">
              <span class="comb-num bg-comb-clr">2</span>
              <span class="comb-num bg-comb-clr">6</span>
              <span class="comb-num bg-comb-clr">7</span>
              <span class="comb-num bg-comb-clr">12</span>
              <span class="comb-num bg-comb-clr">20</span>
            </div>
            <div v-if="combination">
              <span class="comb-num bg-comb-clr">2</span>
              <span class="comb-num bg-comb-clr">6</span>
              <span class="comb-num bg-comb-clr">7</span>
              <span class="comb-num bg-comb-clr">12</span>
              <span class="comb-num bg-comb-clr">20</span>
            </div>
          </td>
          <td valign="top" class="py-1.5 text-sm font-semibold text-h3-clr">5000 BON</td>
          <td valign="top" class="py-2 pr-3 rounded-r-md">
            <img :src="srcImg" @click="open_combinations" />
          </td>
        </tr>   
      </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      combination: false
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
    open_combinations() {
      this.combination = !this.combination;
    }
  }
}
</script>
