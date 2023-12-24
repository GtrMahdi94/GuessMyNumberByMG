var x= Math.floor(Math.random() * 101)
 var z=0
function guessMyNumberByMG (number){
   
    
    if (z===0){
    console.log ('here we began your first try ')
        z=z+1;
    }
    else if (z<5) {
       z=z+1
      console.log (z+' Try ')
       ; 
        
    }
    else{
        return ("You Already Lose")
    
    }

    if (number===x){
        return ("You Did it in "+z+" Times")
    }
       else if (x<number){
        console.log("Try a Lower Number ")
           
       }
    else if (x>number){
        console.log ("Try a Higher Number ")
    }




    
    }