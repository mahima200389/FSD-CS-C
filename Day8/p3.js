async function fetchdata(){
    try{
        let response =await fetch("https://api.github.com/users?per_page=10");
        let data =await response.json();
        // console.log(data);
        data.forEach(element=>{
            console.log(`Login ${element.login} Node Id ${element.node_id} URL ${element.html_url}`);
        });
    }
    catch(error){
        console.log(error);
     }
}
fetchdata();
