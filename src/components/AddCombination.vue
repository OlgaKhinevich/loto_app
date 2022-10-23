<template>
  <div class="component-container">
    <div class="w-3/4 h-5/6 flex">
      <div class=" flex flex-col w-3/5 h-full justify-between mx-4">
        <div class="flex justify-between mx-2.5 items-end">
          <h3>Choose number</h3>
          <p class="text-note-clr cursor-pointer" @click="reset_combination">Clear all</p>
        </div>
        <table v-if="table_cells.length > 0" class="table-fixed w-full h-5/6 text-center border-separate" style="border-spacing: 10px 10px">        
         <tr v-for="row_item in loto_numbers" :key="row_item + 'a'">      
           <td v-for="cell_item in 6" :key="cell_item + 'b'" @click="choose_number(row_item + cell_item)" 
            :class="table_cells[row_item + cell_item] && table_cells[row_item + cell_item].isChosen ? 'bg-start-gr-clr p-7 rounded-lg text-h3-clr font-bold cursor-pointer' : 'bg-wrap-clr p-7 rounded-lg text-h3-clr font-bold cursor-pointer' "> 
              {{row_item + cell_item}}
            </td>
         </tr>  
        </table>
        <div class="flex justify-between mx-2.5">
          <p class="text-note-clr cursor-pointer"><router-link to="/profile">&#60; Back</router-link></p>
          <p class="text-note-clr cursor-pointer">You have chosen {{combination.length}} numbers out of {{max_numbers_amount}}</p>
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
            <td :class="max_numbers_amount == 6 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm font-bold cursor-pointer w-1/3' : 'bg-row-clr rounded text-h3-clr py-1 text-sm font-medium cursor-pointer w-1/3'" @click="select_system(6)">5/6</td>
            <td :class="max_numbers_amount == 7 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm font-bold cursor-pointer w-1/3' : 'bg-row-clr rounded text-h3-clr py-1 text-sm font-medium cursor-pointer w-1/3'" @click="select_system(7)">5/7</td>
            <td :class="max_numbers_amount == 8 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm font-bold cursor-pointer w-1/3' : 'bg-row-clr rounded text-h3-clr py-1 text-sm font-medium cursor-pointer w-1/3'" @click="select_system(8)">5/8</td>
          </tr>
          <tr>
            <td :class="max_numbers_amount == 9 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm font-bold cursor-pointer w-1/3' : 'bg-row-clr rounded text-h3-clr py-1 text-sm font-medium cursor-pointer w-1/3'" @click="select_system(9)">5/9</td>
            <td :class="max_numbers_amount == 10 ? 'bg-start-gr-clr rounded text-h3-clr py-1 text-sm font-bold cursor-pointer w-1/3' : 'bg-row-clr rounded text-h3-clr py-1 text-sm font-medium cursor-pointer w-1/3'" @click="select_system(10)">5/10</td>
            <td class="bg-row-clr rounded text-h3-clr py-1 text-sm font-medium cursor-pointer x-1/3" @click="reset_system">reset</td>
          </tr> 
        </table>
        <div class="flex w-full justify-between items-center">
          <p class="label mt-3 mb-4">selected combinations</p>
          <div>
            <img src="../static/img/help.svg" alt="help" class="h-4">
          </div>
        </div>
        <div class="h-4/6 w-full overflow-y-auto">
            <table class="table-fixed w-full">
              <tr v-for="(row_item,index) in new_selected_combinations" :key="index">      
              <td v-for="(cell_item, index) in row_item" :key="index" class="text-note-clr font-semibold mb-1"> 
                  {{cell_item.join(' ')}}
              </td>
          </tr>
          </table>
        </div>
        <hr class="text-label-clr w-full my-1">
        <div class="flex w-full justify-between items-end">
          <p class="label text-lg font-semibold">total</p>
          <p class="text-end-gr-clr text-lg font-semibold">{{price}} BON</p>
        </div>
        <button class="active-btn self-center mt-5 mb-0 xl:mt-6 2xl:mt-10 w-1/3" @click="add_combination">buy</button>
      </div>
    </div>   
  </div>
</template>

<script>
import {com} from '../assets/lib/combination_script';
import AlertError from '../assets/lib/alert_error';
import json_fetch from '../assets/lib/json_fetch';
import {HOSTNAME} from '../assets/constants.js';

export default {
  data() {
    return {
      table_cells: [],
      combination: [],
      loto_numbers: [0, 6, 12, 18, 24, 30],
      max_numbers_amount: 5,
      price: 0,
      selected_combinations: [],
      new_selected_combinations: []
    }
  },
  created(){
    this.fill_table_arr();
  },
  watch: {
    combination: function() {
      if(this.combination.length == this.max_numbers_amount) {
        this.selected_combinations = com(this.combination, 5);
        for (let i = 0; i < this.selected_combinations.length; i+=3){
          this.new_selected_combinations.push(this.selected_combinations.slice(i,i+3));  
        }
      }
    }
  },
  methods: {
    fill_table_arr() {
      for(let i=0;i<37;i++) {
        this.table_cells.push({'id': i, 'isChosen': false });
      }
    },
    choose_number(cell) {
      this.table_cells.forEach((item) => {
          if(item.id == cell) {
            item.isChosen = !item.isChosen;
            this.selected_combinations = [];
            this.new_selected_combinations = [];
            this.combination.includes(cell) ? this.combination.splice(this.combination.indexOf(cell), 1) : this.combination.push(item.id);
          }
          if(this.combination.length > this.max_numbers_amount && item.id == cell && item.isChosen) {
            item.isChosen = false;
            if(this.combination.includes(cell)) {
              this.combination.splice(this.combination.indexOf(cell), 1);
            } else {
              alert ("It's impossible to add more numbers for the selected combination");
              return;
            }
            return;
          }
      })
    },
    select_system(number) {
      this.reset_system();
      this.reset_combination();
      this.max_numbers_amount = number;
    },
    reset_system() {
      this.max_numbers_amount = 5;
      this.reset_combination();
    },
    reset_combination() {
      this.combination = [];
      this.selected_combinations = [];
      this.new_selected_combinations = [];
      this.clear_numbers();
    },
    clear_numbers() {
      this.table_cells.forEach((item) => {
          item.isChosen = false;
      });
    },
    count_price() {
      
    },
    async add_combination() {
      try {
        const {combination} = this;
        if(!combination) throw new AlertError("Empty field!");
        let game_type = '';
        combination.length == 5 ? game_type = 'single' : game_type = 'system';
        const response = await json_fetch(`${HOSTNAME}/api/add_combination`, {combination, game_type});
        if(!response.ok) throw new Error(response.statusText);
      } catch(err) {
        console.log(err);
      }
    }
  }
}

</script>

<style>

</style>