/* ----------- VAR FOR SERVER-REQUEST ----------- */
var xhr = new XMLHttpRequest();

/* ----------- VAR TO STORE SERVER RESPONSE ----------- */
var data;

/* ----------- OPEN SERVER CONNECTION ----------- */
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

/* ----------- EVENT LISTENER ----------- */
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    }
};

/* ----------- DELAY EXECUTION ----------- */
setTimeout(function(){
    console.log(data);
}, 500);

/* document.getElementById("data").innerHTML = this.responseText; */