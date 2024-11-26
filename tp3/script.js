document.getElementById("btnAjouter").onclick = () => {
    const template = document.getElementById('tempFruit');

    const clone = template.content.cloneNode(true);

    const fruit = document.getElementById('fruit').value;
    document.getElementById('fruit').value=''; 

    if (fruit.length<1){
        console.log('trop court')
    }
    else{
        clone.querySelector('td').innerHTML = fruit

        clone.querySelector('button').onclick = (event) =>{
            event.target.closest('tr').remove()
        }

        document.getElementById('myTbody').appendChild(clone)
    }


}
