function aut(op){
	  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("status").innerHTML = this.responseText;
        }
      
    }; 
    let eml = document.getElementById("email").value;
    let pwd = document.getElementById("passwd").value;
    xhttp.open("POST",'server_file.php?e='+eml+'&p='+pwd+'&o='+op,true);
  	xhttp.send();
    
   
}