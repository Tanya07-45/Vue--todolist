// we wanna control the html part with the vue app and we do thi by using vue which is a globally available object
// it creates a vue app.
const app =Vue.createApp({
    data: function(){
        return{
            courseGoal:'finish the course',
            vueLink:'https://cli.vuejs.org/config/'
            //anything we return from there we can use that in our html part.
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber<0.5){
                return 'Learn Vue!!';
            }else{
                return 'Master Vue!!';
            }
        }
    }

});
// now we want to let vue know which part of this html code
// should be controlled by the vue app
//if we control a html element with vue,we'll also control all the child elements of that element.
app.mount('#user-goal') //we will connect our vue app with html code.


