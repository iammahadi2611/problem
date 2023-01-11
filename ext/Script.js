let minusBtnA = document.querySelector('.minusBtnA');
let minusBtnB = document.querySelector('.minusBtnB');
let plusBtnA = document.querySelector('.plusBtnA');
let plusBtnB = document.querySelector('.plusBtnB');
let numItemA = parseFloat(document.querySelector('.numItemA').innerText) ;
let numItemB = parseFloat(document.querySelector('.numItemB').innerText) ;
let priceTagA = parseFloat(document.querySelector('.priceTagA').innerText);
let priceTagB = parseFloat(document.querySelector('.priceTagB').innerText);

let netBill = parseFloat(document.querySelector('.netBill').innerText);
let taxOfBill = parseFloat(document.querySelector('.taxOfBill').innerText);
let totalBill = parseFloat(document.querySelector('.totalBill').innerText);


//Himu Series Book Javascript 
    plusBtnA.addEventListener('click', function(){

        document.querySelector('.numItemA').innerText ++; 
        numItemA = document.querySelector('.numItemA').innerText;
        document.querySelector('.priceTagA').innerText = priceTagA * numItemA;
    
    
        console.log('numItemA',numItemA);
    
    })
    minusBtnA.addEventListener('click', function(){
        if(numItemA <= 0){
            alert("We do not buy old books!!!!!!!")
        } else {
        document.querySelector('.numItemA').innerText --; 
        numItemA = document.querySelector('.numItemA').innerText;
        document.querySelector('.priceTagA').innerText = priceTagA * numItemA ; 
        }
        console.log('numItemA',numItemA);
    })
//Sherlock Holmes Book Javascript
    plusBtnB.addEventListener('click', function(){

        document.querySelector('.numItemB').innerText ++;  
        numItemB = document.querySelector('.numItemB').innerText;
        document.querySelector('.priceTagB').innerText = priceTagB * numItemB;
    
    
        console.log('numItemB',numItemB);
    
    })
    minusBtnB.addEventListener('click', function(){
        if(numItemB <= 0){
            alert("We do not buy old books!!!!!!!")
        } else {
        document.querySelector('.numItemB').innerText --;  
        numItemB = document.querySelector('.numItemB').innerText;
        document.querySelector('.priceTagB').innerText = priceTagB * numItemB ;
        }
        
        console.log('numItemB',numItemB);
    })
        document.querySelector('.netBill').innerText = priceTagA + priceTagB;
        document.querySelector('.taxOfBill').innerText = (priceTagA + priceTagB) * 0.15 ;
        document.querySelector('.totalBill').innerText = priceTagA + priceTagB +  (priceTagA + priceTagB) * 0.15 ;
