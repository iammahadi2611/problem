let minusBtn = document.querySelector('.minusBtn');
let plusBtn = document.querySelector('.plusBtn');
let numItemS = document.querySelector('.numItem').innerText;
let numItem = parseFloat(numItemS) ;
// let priceTag = parseFloat(document.querySelector('.priceTag').innerText);

plusBtn.addEventListener('click', function(){
    document.querySelector('.numItem').innerText = numItem++ ;
    document.querySelector('.numItem').innerText;
    console.log(numItem)
})
minusBtn.addEventListener('click', function(){
    document.querySelector('.numItem').innerText = numItem--;
    document.querySelector('.numItem').innerText;
    if(numItem == 0){
        document.querySelector('.minusBtn').addEventListener('click', function(){
        })
    }
    console.log(numItem)
})

