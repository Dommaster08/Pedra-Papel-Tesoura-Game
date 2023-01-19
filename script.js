 
const computerChoice = ['Pedra', 'Papel', 'Tesoura']
const placar = document.querySelector('#placar-box')
const resultado = document.querySelector('#result')
const pedra = document.querySelector('.pedra')
const papel = document.querySelector('.papel')
const tesoura = document.querySelector('.tesoura')
const gameBox = document.getElementById('game-box')
const restartGame = document.getElementById('restart-box')

let userScore = 0
let pcScore = 0


const randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)]   


restartGame.addEventListener('click', ()=>{
    location.reload()
})


const atualizaPlacar = () =>{
    placar.innerHTML = ` Você: ${userScore} <br>
    Computador:${pcScore}`     
}


const checkWinner = (choice) => {
    const userGanha = choice === 'Pedra' && randomChoice === 'Tesoura' || 
    choice === 'Papel' && randomChoice === 'Pedra' ||
    choice === 'Tesoura' && randomChoice === 'Papel'
   
    const pcGanha = randomChoice === 'Pedra' && choice === 'Tesoura' || 
    randomChoice === 'Papel' && choice === 'Pedra' ||
    randomChoice === 'Tesoura' && choice === 'Papel'
    
    if(userGanha){
        gameBox.style.display = 'none'
        resultado.innerHTML = `<h2>Você Ganhou!</h2><br>
        Computador: ${randomChoice} <br> Jogador: ${choice}`
        userScore++
        atualizaPlacar()
        restartGame.style.display = 'flex'

    }else if(pcGanha){
        gameBox.style.display = 'none'
        resultado.innerHTML = `<h2>Computador Ganhou!</h2><br>
        Computador: ${randomChoice} <br> Jogador: ${choice}`
        pcScore++
        atualizaPlacar()
        restartGame.style.display = 'flex'
    }
}

const play = (a) => {
    if(randomChoice === a){
        resultado.innerHTML = `<h2>Deu Empate!</h2><br>
        Computador: ${randomChoice} <br> Jogador: ${a}`
        gameBox.style.display = 'none'
        restartGame.style.display = 'flex'
    }else{
        checkWinner(a)
    }
}


pedra.addEventListener('click', ()=>{
    play('Pedra')
})

papel.addEventListener('click', ()=>{
    play('Papel')
})

tesoura.addEventListener('click', ()=>{
    play('Tesoura')
})

