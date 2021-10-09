<template>
  <div class="component-container">
    <div class="w-3/4 h-5/6 flex">
      <div class=" flex flex-col w-3/5 h-full justify-between mx-4">
        <div class="flex justify-between mx-2.5 items-end">
          <h3>Choose number</h3>
          <p class="text-note-clr text-xs">Clear all</p>
        </div>
        <table v-if="table_cells.length > 0" class="table-fixed w-full h-5/6 text-center border-separate" style="border-spacing: 10px 10px">        
         <tr v-for="row_item in loto_numbers" :key="row_item + 'a'">      
           <td v-for="cell_item in 6" :key="cell_item + 'b'" @click="choose_number(row_item + cell_item)" 
            :class="table_cells[row_item + cell_item] && table_cells[row_item + cell_item].isChosen ? 'bg-start-gr-clr p-7 rounded-lg text-h3-clr font-bold' : 'bg-wrap-clr p-7 rounded-lg text-h3-clr font-bold' "> 
              {{row_item + cell_item}}
            </td>
         </tr>  
        </table>
        <div class="flex justify-between mx-2.5">
          <p class="text-note-clr text-xs"><router-link to="/profile">&#60; Back</router-link></p>
          <p class="text-note-clr text-xs">You have chosen {{combination.length}} numbers out of {{active_system}}</p>
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
        <table class="table-auto w-full text-center border-separate" style="border-spacing: 7px 7px">
          <tr>
            <td :class="active_system == 6 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm' : 'bg-row-clr rounded text-h3-clr py-1 text-sm'" @click="select_system(6)">5/6</td>
            <td :class="active_system == 7 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm' : 'bg-row-clr rounded text-h3-clr py-1 text-sm'" @click="select_system(7)">5/7</td>
            <td :class="active_system == 8 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm' : 'bg-row-clr rounded text-h3-clr py-1 text-sm'" @click="select_system(8)">5/8</td>
          </tr>
          <tr>
            <td :class="active_system == 9 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm' : 'bg-row-clr rounded text-h3-clr py-1 text-sm'" @click="select_system(9)">5/9</td>
            <td :class="active_system == 10 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm' : 'bg-row-clr rounded text-h3-clr py-1 text-sm'" @click="select_system(10)">5/10</td>
            <td class="bg-row-clr rounded text-h3-clr py-1 text-sm" @click="reset_system">reset</td>
          </tr> 
        </table>
        <div class="flex w-full justify-between items-center">
          <p class="label mt-3">selected combinations</p>
          <div>
            <img src="../static/img/help.svg" alt="help" class="h-4">
          </div>
        </div>
        <div class="flex w-full justify-between items-center h-4/6">
        </div>
        <hr class="text-label-clr w-full my-1">
        <div class="flex w-full justify-between items-end">
          <p class="label text-lg font-semibold">total</p>
          <p class="text-end-gr-clr text-lg font-semibold">123 BON</p>
        </div>
        <button class="active-btn self-center" @click="add_combination">buy</button>
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
      loto_numbers: [0, 6, 12, 18, 24, 30],
      max_numbers_amount: 5
    }
  },
  created(){
    this.fill_table_arr();
  },
  methods: {
    fill_table_arr() {
      for(let i=0;i<36;i++) {
        this.table_cells.push({'id': i, 'isChosen': false });
      }
    },
    choose_number(cell) {
      if(this.combination.length >= this.active_system) {
        alert ("It's impossible to add more numbers for the selected combination");
      } 
      this.table_cells.forEach((item) => {
        if(item.id == cell) {
          item.isChosen = true;
          this.combination.push(item.id);
        }
      })
    },
    select_system(number) {
      this.reset_system();
      this.active_system = number;
    },
    reset_system() {
      this.active_system = 5;
    },
    count_price() {
      
    },
    async add_combination() {

    }
  }
}

</script>

<style>

</style>