let minusBtnA = document.querySelector('.minusBtnA');
let minusBtnB = document.querySelector('.minusBtnB');
let plusBtnA = document.querySelector('.plusBtnA');
let plusBtnB = document.querySelector('.plusBtnB');
let numItemA = parseFloat(document.querySelector('.numItemA').innerText) ;
let numItemB = parseFloat(document.querySelector('.numItemB').innerText) ;
let priceTagA = parseFloat(document.querySelector('.priceTagA').innerText);
let priceTagB = parseFloat(document.querySelector('.priceTagB').innerText);

//Himu Series Book Javascript 
    plusBtnA.addEventListener('click', function(){

        document.querySelector('.numItemA').innerText = numItemA ++;  //problem with button response
    
        document.querySelector('.priceTagA').innerText = priceTagA * numItemA;
    
    
        console.log('numItemA',numItemA);
    
    })
    minusBtnA.addEventListener('click', function(){
        document.querySelector('.numItemA').innerText = numItemA --;  //problem with button response
    
        document.querySelector('.priceTagA').innerText = priceTagA * numItemA ; 

        console.log('numItemA',numItemA);
    })
//Sherlock Holmes Book Javascript
    plusBtnB.addEventListener('click', function(){

        document.querySelector('.numItemB').innerText = numItemB ++;  //problem with button response
    
        document.querySelector('.priceTagB').innerText = priceTagB * numItemB;
    
    
        console.log('numItemB',numItemB);
    
    })
    minusBtnB.addEventListener('click', function(){
        document.querySelector('.numItemB').innerText = numItemB --;  //problem with button response
    
        document.querySelector('.priceTagB').innerText = priceTagB * numItemB ; 
        
        console.log('numItemB',numItemB);
    })


