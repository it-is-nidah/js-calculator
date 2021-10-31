const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const key = e.target
const action = key.dataset.action

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        //action
        if(!action) {
            console.log('this is a numbber key')
        
        if (
            action === "add" ||
            action === "minus" ||
            action === "divide" ||
            action === "multiply" ||
            action === "modulus"
            ) {
                console.log ('operator key!')
            }
        
        if (action === 'decimal') {
                console.log('decimal key!')
              }
              
        if (action === 'reset') {
                console.log('reset key!')
              }
              
        if (action === 'calculate') {
                console.log('equal key!')
              }
    }
}
})



