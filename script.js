
/*
Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/


// stampa numeri da 1 a 100

for(i=1; i<=100; i++){
    

    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz', i)
    } else if (i % 3 === 0){
        console.log('Fizz', i)
    } else if (i % 5 === 0 ){
        console.log('Buzz', i)
    } else {
        console.log(i)
    }
        

}
 

//