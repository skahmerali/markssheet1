function abc(){
    var obtainMarks = document.getElementById("OBTAIN-MARKS").value;
    var totalMarks = document.getElementById("TOTAL-MARKS").value;
    var Fpercentage = parseInt (obtainMarks) * parseInt (totalMarks);
    Fpercentage = document.getElementById('percentage').innerHTML;
    // console.log(percentage);
    // percentage= document.write
    
}
function grade(){
    var Fgrade=document.getElementById("grade").value;
    if(percentage<=100 && percentage <=80){
                 Fgrade="CONGRATS YOY GET A+ GRADE";
            }
            else if(percentage<=79 && percentage<=70 ){
                 Fgrade="CONGRATS YOY GET A GRADE";
            }
            else if(percentage<=69 && percentage<=60){
                 Fgrade="CONGRATS YOY GET B GRADE";
            }
            else if(percentage<=59 && percentage<=50){
                 Fgrade="CONGRATS YOY GET C GRADE";
            }
            else if(percentage<=49 && percentage<=40){
                 Fgrade="CONGRATS YOY GET D GRADE";
            }
            else{
                Fgrade="so harsh but u are failed ! try again"
            }
            
            
        }