window.onload = function(){
    document.getElementById("lookup").addEventListener("click", function(event){
        event.preventDefault();
        let country = document.getElementById("country").value.trim().replace(/(<([^>]+)>)/gi, "");;

        // fetch("world.php?country="+country) Using fetch API
        //     .then(response => response.text())
        //     .then(data => {
        //         document.getElementById("result").innerHTML = this.responseText;
        //     })

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("result").innerHTML = this.responseText;
                console.log(country);
            }
        }
        xhttp.open("GET", "world.php?country="+country);
        xhttp.send();
    });
}