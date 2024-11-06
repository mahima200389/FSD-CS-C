async function fetchdata(){
    try{
        let response =await fetch("https://v2.jokeapi.dev/joke/Any");
        let data =await response.json();
            // console.log(data);
            data.forEach(element=>{
                let =document.createElement("h2");
                h2.textContent=element.login;
                let a=document.createElement("a");
                a.textContent=element.node_id;
                a.setAttribute("href",element.html_url);
                let top=document.getElementById("bottom");
                bottom.appendChild(h1);
                bottom.appendChild(a);   
        
    });
    catch(error){
        console.log(error);
     }
}

