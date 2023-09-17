document.getElementById('btnSubmit').addEventListener('click', function(e){
   e.preventDefault();
   e.stopPropagation();
   var storeNames = [];
   const enterdNames = document.getElementById('txtAnswer').value;
   // Push individual names into the array using spread operator
   storeNames.push(...(enterdNames.split(",")));
   if(storeNames.length>1 && !storeNames.includes("")){
        const randomNumber = Math.round(Math.random()*storeNames.length);
        alert( storeNames[randomNumber]);
        document.getElementById('txtHostName').style.display = 'block';
        document.getElementById('txtHostName').textContent = (storeNames[randomNumber]+" " +"hoste the party"); 
    }else{
        //empty the array
        storeNames=[];
        //empty the text area fied
        document.getElementById('txtAnswer').value="";
        //hide the span element 
        document.getElementById('txtHostName').style.display = 'none';
        alert("enter atleast two names or  enter the names after the comma ");    
    }
});
