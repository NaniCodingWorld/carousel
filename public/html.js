
let searchEl = document.getElementById('search')

function fireUp(){
  console.log('nani')
}
let flag = true
function bouncing(){
   if(flag){
     fireUp()
     flag = false
     setTimeout(()=>{
      flag = true
     },2000)
   }
}


searchEl.addEventListener('keypress', bouncing)