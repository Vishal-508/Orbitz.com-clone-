const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2988766804msh3709a2157f0e0d3p1f1e2djsn983587b3c261',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};



async function main(){
	
	let query = document.getElementById("search").value ; 
	console.log(query)
	
	let link = `https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=${query}&currency=USD&locale=en_US` ;


	try{
		let res = await fetch(link,options) ; 
		let data = await res.json() ; 
		
		appendData(data) ; 


	}catch(err){
		console.log(err) ; 
	}

}
let displayDebounce = document.getElementById("displayDebounce") ; 
let appendData = (data) =>{
	// console.log(data) ;  
	let cityData = data.suggestions[0].entities ; 
	// console.log(cityData) ; 
	displayDebounce.innerHTML = null ; 
	cityData.forEach(function(el,i){
		console.log(el);
		console.log(el.destinationId)

		let div = document.createElement("div") ;
		div.style.cursor = "pointer"
		div.addEventListener("click",function(){
			localStorage.setItem("destinationID",el.destinationId) ; 
			window.location.href = "listPage.html"
		})
		let p = document.createElement("p") ;
		p.innerHTML = el.caption ; 
		let name = document.createElement("p") ; 
		name.innerText = el.name ; 
		div.append(name,p) ; 
		displayDebounce.append(div) ;
		

	})

}


let id ; 



function debounce(func,delay){
	// console.log(func)
	if(id){
		clearTimeout(id) ; 
	}
   id =  setTimeout(function(){
		func() ; 
	},delay)
}