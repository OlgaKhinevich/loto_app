<template>
  <div class="component-container">
    <div class="w-3/4 h-5/6 flex">
      <div class="w-3/5 h-full mx-4">
        <div class="flex justify-between mx-2.5 items-end">
          <h3>Choose number</h3>
          <p class="text-note-clr text-xs">Clear all</p>
        </div>
        <table class="table-fixed w-full text-center border-separate" style="border-spacing: 10px 10px">        
         <tr v-for="row_item in loto_numbers" :key="row_item + 'a'">      
           <td v-for="cell_item in 6" :key="cell_item + 'b'" @click="choose_number(row_item + cell_item)" 
           :class="table_cells[row_item + cell_item].isChosen ? 'start-gr-clr p-4 rounded-md text-h3-clr font-bold' : 'bg-wrap-clr p-4 rounded-md text-h3-clr font-bold' ">
              {{row_item + cell_item}}
            </td>
         </tr>  
        </table>
        <div class="flex justify-between mx-2.5">
          <p class="text-note-clr text-xs"><router-link to="/profile">&#60; Back</router-link></p>
          <p class="text-note-clr text-xs">You have chosen {{combination.length}} numbers out of 6</p>
        </div>
      </div>
      <div class="wrapper w-2/5 h-full py-8 px-10 justify-between items-start">
        <h3>Combination</h3>
        <hr class="text-label-clr w-full mt-1">
        <div class="flex w-full justify-between items-center h-1/6">
          <p class="label">select a system</p>
          <div>
            <img src="../static/img/help.svg" alt="help" class="h-4">
          </div>
        </div>
        <table class="table-fixed w-full text-center border-separate" style="border-spacing: 7px 7px">
          <tr>
            <td class="bg-row-clr rounded text-h3-clr py-1 text-sm">5/6</td>
            <td class="bg-row-clr rounded text-h3-clr py-1 text-sm">5/7</td>
            <td class="bg-row-clr rounded text-h3-clr py-1 text-sm">5/8</td>
          </tr>
          <tr>
            <td class="bg-row-clr rounded text-h3-clr py-1 text-sm">5/9</td>
            <td class="bg-row-clr rounded text-h3-clr py-1 text-sm">5/10</td>
            <td class="bg-row-clr rounded text-end-gr-clr font-bold py-1 text-sm">reset</td>
          </tr> 
        </table>
        <div class="flex w-full justify-between items-center">
          <p class="label mt-3">selected combinations</p>
          <div>
            <img src="../static/img/help.svg" alt="help" class="h-4">
          </div>
        </div>
        <div class="flex w-full justify-between items-center h-3/6">
        </div>
        <hr class="text-label-clr w-full my-1">
        <div class="flex w-full justify-between items-end">
          <p class="label">total</p>
          <p class="text-end-gr-clr">123 BON</p>
        </div>
        <button class="active-btn self-center">buy</button>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      table_cells: [],
      combination: [],
      loto_numbers: [0, 6, 12, 18, 24, 30]
    }
  },
  mounted() {
    this.fill_table_arr();
  },
  methods: {
    fill_table_arr() {
      for(let i=0;i<36;i++) {
        this.table_cells.push({'id': i, 'isChosen': false })
      }
    },
    choose_number(cell) {
      this.table_cells.forEach((item) => {
        if(item.id == cell) {
          item.isChosen = true;
          this.combination.push(item.id);
        }
      })
    }
  }
}

</script>

<style>

</style>