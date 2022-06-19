const options = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': '250246b494mshb71546ff0f42cfdp17d3bajsn709eb5e8c195',
        'X-RapidAPI-Key': '1762544dd8mshe34828a6f5afe52p122723jsnefed696f6944',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};
// 'X-RapidAPI-Key': '1762544dd8mshe34828a6f5afe52p122723jsnefed696f6944'
// 1762544dd8mshe34828a6f5afe52p122723jsnefed696f6944

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
// function searchbar(){
//     document.getElementById("vs-search-container").removeAttribute("class","hidden");
// }
// function hidden(){
   

//     document.getElementById("vs-search-container").setAttribute("class","hidden");
// }
function  redirectTOsecond(){

    window.location.href = "listPage.html"
}
// let displayDebounce = document.getElementById("displayDebounce") ; 
// let appendData = (data) =>{
//     // console.log(data) ;  
// 	let cityData = data.suggestions[0].entities ; 
// 	// console.log(cityData) ; 
// 	displayDebounce.innerHTML = null ; 
//     let data_search= document.getElementById("vs-search-data")
// 	cityData.forEach(function(el,i){
// 		data_search.innerHTML = null ; 
// 		console.log(el);
// 		console.log(el.destinationId)
        
// 		let div = document.createElement("div") ;
// 		div.style.cursor = "pointer"
// 		div.addEventListener("click",function(){
//             data_search.innerText=el.name;
//             localStorage.setItem("destinationID",el.destinationId) ; 
// 			window.location.href = "listPage.html"
// 		})
// 		let p = document.createElement("p") ;
// 		p.innerHTML = el.caption ; 
//         p.style.width="450px";
//         p.setAttribute("id","vs-caption");
// 		let name = document.createElement("p") ; 
// 		name.innerText = el.name ; 
//         name.style.width="450px";
//         name.style.fontSize="22px"
//         name.setAttribute("id","vs-name")
// 		div.append(name,p) ; 
// 		displayDebounce.append(div) ;
		
        
// 	})

// }

// // div.addEventListener("click",function(){
// //     localStorage.setItem("destinationID",el.destinationId) ; 
// //     window.location.href = "listPage.html"
// // })

// let id ; 
// function debounce(func,delay){
//     console.log(delay)
//     if(id){
//         clearTimeout(id) ; 
//     }
//    id =  setTimeout(function(){
//         func() ; 
//     },delay)
// }





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