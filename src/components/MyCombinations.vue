<template>
  <div>
      <div class="flex justify-between my-2">
        <h3 class="text-lg">Current round</h3>
        <button class="active-btn text-sm m-0">add combination</button>
      </div>
      
      <table class="table">
        <tr>
            <th class="label w-5/6 pb-1.5">combinations</th>
            <th class="label w-1/6 pb-1.5">type</th>
        </tr>
        <tr class="bg-row-clr">
            <td class="rounded-l-md pl-3 py-1.5">
            <span class="comb-num bg-comb-clr">2</span>
            <span class="comb-num bg-comb-clr">6</span>
            <span class="comb-num bg-comb-clr">7</span>
            <span class="comb-num bg-comb-clr">12</span>
            <span class="comb-num bg-comb-clr">20</span>
            </td>
            <td class="rounded-r-md font-semibold text-h3-clr py-1.5 text-sm">single</td>
        </tr>
        <tr class="bg-row-clr">
            <td class="rounded-l-md pl-3 py-1.5">
            <span class="comb-num bg-comb-clr">2</span>
            <span class="comb-num bg-comb-clr">6</span>
            <span class="comb-num bg-comb-clr">7</span>
            <span class="comb-num bg-comb-clr">12</span>
            <span class="comb-num bg-comb-clr">20</span>
            <span class="label text-end-gr-clr ml-3 text-sm">all combinations</span>
            </td>
            <td class="rounded-r-md font-semibold text-h3-clr py-1.5 text-sm">system</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>