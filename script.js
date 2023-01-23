 
const placar = document.querySelector('#placar-box')
const resultado = document.querySelector('#result')
const pedra = document.querySelector('.pedra')
const papel = document.querySelector('.papel')
const tesoura = document.querySelector('.tesoura')
const gameBox = document.getElementById('game-box')
const restartGame = document.getElementById('restart-box')
let userScore = 0
let pcScore = 0

  
const atualizaPlacar = () => {
    placar.innerHTML = ` Você: ${userScore} <br>
    Computador:${pcScore}`     
}

const checkWinner = (choice) => {
    const pcChoice = compChoice()

    const userGanha = choice === 'Pedra' && pcChoice === 'Tesoura' || 
    choice === 'Papel' && pcChoice === 'Pedra' ||
    choice === 'Tesoura' && pcChoice === 'Papel'
   
    const pcGanha = pcChoice === 'Pedra' && choice === 'Tesoura' || 
    pcChoice === 'Papel' && choice === 'Pedra' ||
    pcChoice === 'Tesoura' && choice === 'Papel'
    
    if(userGanha){
        userScore++
        gameBox.style.display = 'none'
        resultado.innerHTML = `<h2>Você Ganhou!</h2><br>
        Computador: ${pcChoice} <br> Jogador: ${choice}`
        restartGame.style.display = 'flex'
        atualizaPlacar()

    }else if(pcGanha){
        pcScore++
        gameBox.style.display = 'none'
        resultado.innerHTML = `<h2>Computador Ganhou!</h2><br>
        Computador: ${pcChoice} <br> Jogador: ${choice}`
        restartGame.style.display = 'flex'
        atualizaPlacar()
    }
}

const compChoice = () => {
    const computerChoice = ['Pedra', 'Papel', 'Tesoura']
    const randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    return randomChoice
}

restartGame.addEventListener('click', ()=>{
    gameBox.style.display = 'flex'
    restartGame.style.display = 'none'
    resultado.innerHTML = ``
})

const play = (a) => {
    const pcChoice = compChoice()
    
    if(pcChoice === a){
        resultado.innerHTML = `<h2>Deu Empate!</h2><br>
        Computador: ${pcChoice} <br> Jogador: ${a}`
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

