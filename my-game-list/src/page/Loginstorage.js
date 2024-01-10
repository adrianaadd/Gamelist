import { defineStore } from 'pinia';
import { signup } from '../services/Users';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    options: {
      email: "",
      password: "",
      username: "",
    },
  }),
  actions:  {
 
    async onSignup(){
        try {
           
            const signupResponse = await signup({UserName:this.options.username,email: this.options.email, role: "Client",password: this.options.password,})
            localStorage.setItem("token", signupResponse.token)
            localStorage.setItem("rol", "Client")
            
        } catch (error) {
            console.log(error)
        }
    },
      
 
    increment(option) {
      this.options[option]++;
    },


  },

  getters: {
    
    totalClicks() {
      return Object.values(this.options).reduce((total, current) => {
        return total + current;
      }, 0);
    },
  },
});