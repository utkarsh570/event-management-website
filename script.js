//  Home Section
function validate()
         {
         if( document.getElementById("t1").value== "" )
         {
            alert( "Please provide your name!" );
            document.getElementById("t1").focus() ;
            return false;
         }
         
         if( document.getElementById("t2").value == "" )
         {
            alert( "Please provide your Email!" );
            document.getElementById("t2").focus() ;
            return false;
         }
         
        if( document.getElementById("t5").value == "" )
         {
            alert( "Please provide your Mobile number" );
document.getElementById("t5").focus() ;
            return false;
         }
if(isNaN(document.getElementById("t5").value ))
         {
            alert( "It's not a valid number" );
document.getElementById("t5").focus() ;
            return false;
         }
if( document.getElementById("t5").value.length<10 )
         {
            alert( "Please provide valid Mobile number" );
document.getElementById("t5").focus() ;
            return false;
         }
         if( document.getElementById("t7").value== "" )
         {
            alert( "Please provide your message!" );
            document.getElementById("t7").focus() ;
            return false;
         }


       return( true );
      }