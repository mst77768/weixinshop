import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store=new Vuex.Store({//状态管理
	state:{
		num:1
	},
	mutations:{
		add(state){
			state.num++
		}
	},actions:{
		
	}
})
export default store;//把这个对象抛出去