const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '250246b494mshb71546ff0f42cfdp17d3bajsn709eb5e8c195',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};



async function showData(){
	let query = input.value  ;
	console.log(query)
	let link = `https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=${query}&currency=USD&locale=en_US` ;


	try{
		let res = await fetch(link,options) ; 
		let data = await res.json() ; 
		console.log(data)
		let destinationId = (data.suggestions[0].entities[0].destinationId) ;

		localStorage.setItem("destinationID",destinationId)
		window.location.href = "listPage.html"

	}catch(err){
		console.log(err) ; 
	}

}

let input = document.getElementById("search") ; 
// console.log(input)
	input.addEventListener("keypress",function(event){
		if(event.key === "Enter"){
			event.preventDefault() ; 
			// document.getElementById("btn").click() ; 
			showData() ; 
		}
	}) ; 