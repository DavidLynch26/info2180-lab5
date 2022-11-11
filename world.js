window.onload = function(){
    var country;

    document.getElementById("lookup").addEventListener("click", function(event){
        event.preventDefault();

        country = country = document.getElementById("country").value.trim().replace(/(<([^>]+)>)/gi, "");

        // fetch("world.php?country="+country) Using fetch API
        //     .then(response => response.text())
        //     .then(data => {
        //         document.getElementById("result").innerHTML = this.responseText;
        //     })

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
        }
        xhttp.open("GET", "world.php?country="+country);
        xhttp.send();
    });

    document.getElementById("lookupCity").addEventListener("click", function(event){
        event.preventDefault();

        country = country = document.getElementById("country").value.trim().replace(/(<([^>]+)>)/gi, "");

        if(country !== ""){
            const xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    document.getElementById("result").innerHTML = this.responseText;
                }
            }
            xhttp2.open("GET", "world.php?country="+country+"&lookup=cities");
            xhttp2.send();
        }
    })
}