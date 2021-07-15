const calculator = () =>{
    // making variables and stroing values using .getElementbyID and .value to obtain values fro that particular variable
      let webP = document.getElementById('webP').value;
      let maths = document.getElementById('maths').value;
      let com = document.getElementById('com').value;
      let physics = document.getElementById('physics').value;

      let grades = "";
    
    // Obtaining Total grades and as we are adding all the numbers we need to use parse inorder to add numbers 
      let totalGrades = parseFloat(webP) + parseFloat(maths) + parseFloat(com) + parseFloat(physics);

    //alert is a method in JS by which it displays the message in a box 
      alert(totalGrades);
    
      let percentage = (totalGrades/400) * 100;
      alert(percentage);
             
      if(percentage <= 100  && percentage >= 80){
        grades = 'A';
      }else if(percentage <= 79  && percentage >= 60){
         grades = 'B';
      }else if(percentage <= 59  && percentage >= 40){
         grades = 'C';
      }else{
         grades = 'F';
      }
    
      if(percentage >= 39.5){
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Pass. `
      }
      else{
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail. `
      }
    
      
    }
    
    