<template>
  <div>
      <div class="d-flex md:flex-row justify-content-between my-2">
        <h3 class="text-lg mb-0">Current round</h3>
        <router-link to="/add">
          <b-button class="active-btn mt-0">
            add combination
          </b-button>
        </router-link>
      </div>
      
      <b-table class="table" :fields="fields" :items="my_combinations" borderless>
            <template #cell(combinations)="data">
              <span v-for="(comb, i) in data.item.combinations"
                :key="i"
                class="comb-num bg-comb-clr"
              >{{ comb }}</span>
              <b-button 
                class="link-btn ml-3"
                v-if="data.item.type == 'system'"
                variant="link"
              >
                all combinations
              </b-button>
            </template>
      </b-table>
  </div>
</template>

<script>

export default {
  // props: ['my_combinations'],
  data() {
    return {
      fields: [
        'combinations',
        'type'
      ],
      my_combinations: [
        {
          combinations: [6, 7, 12, 20, 30],
          type: "single"
        },
        {
          combinations: [6, 7, 12, 20, 30, 31, 32, 33],
          type: "system"
        }
      ]
    }
  }
}
</script>

<style>
</style>