const loadCard = document.querySelectorAll('.content')
  
setTimeout(() => {
    for(let i = 0; i < loadCard.length; i++) {
        loadCard[i].classList.remove('loading')
    }   
}, 1500)
    
