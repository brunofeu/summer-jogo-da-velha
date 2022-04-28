function addEventsHandleButtons() {
  const buttonX = document.getElementById('X')
  const buttonO = document.getElementById('O')
  
  buttonX.addEventListener('click', function() {
    buttonO.classList.remove('selected');
    buttonX.classList.add('selected');
  })
  buttonO.addEventListener('click', function() {
    buttonX.classList.remove('selected');
    buttonO.classList.add('selected');
  })
}

function reloadGame() {
  const buttonReset = document.getElementById('reset')

  buttonReset.addEventListener('click', function() {
    document.location.reload(true)
  })
}

function createTableGame() {
  const tabuleiro = document.getElementById('tabuleiro');
    for ( let index = 0; index < 9; index += 1 ) {
    const pixel = document.createElement('div');
    pixel.id = (index + 1)
    pixel.className = 'coluna'
    pixel.addEventListener('click', jogar)
    tabuleiro.appendChild(pixel)
  }
}

function jogar (event) {
  const buttonSelected = document.querySelector('.selected')
  

  event.target.innerText = buttonSelected.innerText;

  table[event.target.id -1] = buttonSelected.innerText;


  if (event.target.innerText === 'X') {
    event.target.style.backgroundColor = '#e56e07'
  } else {
    event.target.style.backgroundColor = '#192c8b'
    event.target.style.color = '#ffffff' 
  }

  const msg = checkWinner();

  if (msg !== undefined) {
    const mensagem = document.querySelector('.mensagem')
    const p = document.createElement('p');
    p.innerText = msg;
    mensagem.appendChild(p);


    const buttonX = document.getElementById('X')
    const buttonO = document.getElementById('O')
    buttonX.disabled = true
    buttonO.disabled = true
  }

}

let table = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkWinner() {
  if (table[0] === table[1] && table[1] === table[2]){
    return ('Parabéns: ' + table[0] + ' é o vencedor')
  }
  if (table[3] === table[4] && table[4] === table[5]){
    return ('Parabéns: ' + table[3] + ' é o vencedor')
  }
  if (table[6] === table[7] && table[7] === table[8]){
    return ('Parabéns: ' + table[6] + ' é o vencedor')
  }
  if (table[0] === table[3] && table[3] === table[6]){
    return ('Parabéns: ' + table[0] + ' é o vencedor')
  }
  if (table[1] === table[4] && table[4] === table[7]){
    return ('Parabéns: ' + table[1] + ' é o vencedor')
  }
  if (table[2] === table[5] && table[5] === table[8]){
    return ('Parabéns: ' + table[2] + ' é o vencedor')
  }
  if (table[0] === table[4] && table[4] === table[8]){
    return ('Parabéns: ' + table[0] + ' é o vencedor')
  }
  if (table[3] === table[4] && table[4] === table[6]){
    return ('Parabéns: ' + table[3] + ' é o vencedor')
  } 

  let count = 0;
  for (let index = 0; index < table.length; index += 1) {
    
    if (typeof table[index] !== 'number' ) {
      count += 1;
    }
    
  }
    if (count === 9) {
      return 'Empate'
    }
}





addEventsHandleButtons();
reloadGame();
createTableGame();