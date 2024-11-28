const url_api = 'http://www.omdbapi.com/?apikey=28193310&type=series'

document.getElementById("btnSearch").onclick = async() => {
    
    
    const film = document.getElementById('film').value;
    document.getElementById('film').value='';
    const url = `${url_api}&s=${film}`
    const response = await fetch(url)
    const data = await response.json(   )
    console.log(data.Search)

    const template = document.getElementById('templateTr');
    const template2 = document.getElementById('templateTr2');
    data.Search.forEach(function(element) {
        const clone = template.content.cloneNode(true);
        clone.querySelectorAll('td')[0].innerHTML = element.Title
        clone.querySelectorAll('td')[1].innerHTML = element.Year
        clone.querySelectorAll('td')[2].querySelector('img').src = element.Poster;
        
        clone.querySelector('button').onclick = async() =>{
            const clone2 = template2.content.cloneNode(true);
            clone2.querySelectorAll('td')[0].innerHTML = element.Title
            clone2.querySelectorAll('td')[1].innerHTML = element.Year
            const url2= `${url_api}&i=${element.imdbID}`
            const response2= await fetch(url2)
            const data2 = await response2.json()
            
            clone2.querySelectorAll('td')[2].innerHTML = data2.Ratings[0].Value
            clone2.querySelectorAll('td')[3].querySelector('img').src = element.Poster;
            clone2.querySelector('button').onclick = (event) =>{
                event.target.closest('tr').remove()
            }
            document.getElementById('myTbody2').appendChild(clone2)
        }

        document.getElementById('myTbody').appendChild(clone)
      });


    





}