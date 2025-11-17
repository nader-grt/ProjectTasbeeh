/**
 * 
 * 
 
سبحان الله

        
الحمد لله
   
الله أكبر    
 

   
لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير    


”

 */

const btnTasbeeh  = document.getElementById("btnTasbeeh")  ;
const contentTasbeeh = document.getElementById("contentTasbeeh")
const endTasbeeh  = document.getElementById("endTasbeeh")


function startingTasbeeh()
{
             let countTotal  = 1 ;
             let countTasbeeh = 0 ;

    console.log("Tasbeeh\t : " ,  btnTasbeeh.disabled )
    btnTasbeeh.disabled =  true ;
    btnTasbeeh.style.backgroundColor = "gray";
    btnTasbeeh.style.color = "black" ;
 
    function countTasbeehEachOnce()
    {
        countTasbeeh++  ;
        if(countTotal === 1)
        {

            contentTasbeeh.textContent = `  ${countTasbeeh} سبحان الله  `

            contentTasbeeh.style.color  = "white" ;

              if(countTasbeeh === 33)
              {
                countTotal = 2 ;
                countTasbeeh = 0
              }

        }

        else if(countTotal === 2)
        {
            contentTasbeeh.textContent =  `  ${countTasbeeh}  الحمد لله  ` 
            contentTasbeeh.style.color  = "red" ;

            if(countTasbeeh === 33)
                {
                  countTotal = 3 ;
                  countTasbeeh = 0
                }
        }
      

        else if(countTotal === 3)
            {
                contentTasbeeh.textContent =  `  ${countTasbeeh}  الله أكبر      `
                contentTasbeeh.style.color  = "gold" ;
    
                if(countTasbeeh === 33)
                    {
                      countTotal = 4 ;
                      countTasbeeh = 0
                    }
            }

          
            else if(countTotal === 4)
                {
                    contentTasbeeh.textContent =  `لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير    
     `
                    contentTasbeeh.style.color  = "green" ;
                    countTotal = 5 
                   
                    //   في ميزان حسناتك 
                 
                }


                else if(countTotal === 5)
                 {
                   

                   
                    btnTasbeeh.disabled =  false;
                    btnTasbeeh.style.backgroundColor = "gold"
                    btnTasbeeh.style.color = "white"
                    btnTasbeeh.fontSize ="larger"
                    btnTasbeeh.style.fontWeight = "700"


                    contentTasbeeh.textContent =""
                    endTasbeeh.textContent  = " في ميزان حسناتك "
                    endTasbeeh.style.color = "white";
                    endTasbeeh.style.fontSize  = "20px"
                    clearInterval(TasbeehEachTimeID)
                
                 }

                
                   


              // 

    }
      


    let TasbeehEachTimeID = setInterval(countTasbeehEachOnce,500)
  
}