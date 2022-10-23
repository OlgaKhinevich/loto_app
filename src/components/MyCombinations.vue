<template>
  <div>
      <div class="flex flex-col md:flex-row justify-between my-2">
        <h3 class="text-lg mb-2 md:mb-0">Current round</h3>
        <button class="active-btn text-sm mt-0 mb-3 md:m-0 w-1/2 md:w-1/6"><router-link to="/add">add combination</router-link></button>
      </div>
      
      <table class="table">
        <tr>
            <th class="label w-5/6 pb-1.5">combinations</th>
            <th class="label w-1/6 pb-1.5">type</th>
        </tr>
        <tr class="bg-row-clr" v-for="my_combination in my_combinations" :key="my_combination._id">
            <td class="rounded-l-md pl-3 py-1.5">
              <span class="comb-num bg-comb-clr py-1 text-center" v-for="n in my_combination.combination" :key="n">
                {{n}}
              </span>
            </td>
            <td class="rounded-r-md font-semibold text-h3-clr py-1.5 text-sm">{{my_combination.game_type}}</td>
        </tr>
      </table>
  </div>
</template>

<script>

export default {
  props: ['my_combinations']
}
</script>

<style>

</style>