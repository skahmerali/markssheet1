var obtainMarks = document.getElementById("OBTAIN-MARKS").value;
var totalMarks = document.getElementById("TOTAL-MARKS").value;
var Fpercentage;


function abc() {
console.log("data: ",obtainMarks)
console.log("data: ",totalMarks)

     Fpercentage = ( parseInt(obtainMarks) / parseInt(totalMarks) ) * 100;
     document.getElementById('percentage').value = Fpercentage + "%";
}

// function fgrade(){
//      const zubair=Fpercentage;
//      console.log(zubair)

// }

function fgrade() {
     var res = document.getElementById("grade");
     if (Fpercentage >= 80 && Fpercentage <= 100) {
          res = "CONGRATS YOY GET A+ GRADE";
          console.log(Fpercentage)
     }
     else if (Fpercentage >= 70 && Fpercentage <= 79) {
          res.value = "CONGRATS YOY GET A GRADE";
     }
     else if (Fpercentage >= 60 && Fpercentage <= 69) {
          res.value = "CONGRATS YOY GET B GRADE";
     }
     else if (Fpercentage >= 50 && Fpercentage <= 59) {
          res.value = "CONGRATS YOY GET C GRADE";
     }
     else if (Fpercentage >= 40 && Fpercentage <= 49) {
          res.value = "CONGRATS YOY GET D GRADE";
     }
     else {
          res.value = "so harsh but u are failed ! try again"
     }


}