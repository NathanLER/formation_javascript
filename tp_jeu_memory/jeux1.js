const tab1 = new Array(12).fill(null);
for (let i = 0; i < 12; i++) {
    tab1[i]=i
}

const tab_temp = [...tab1, ...tab1]

function melanger(tab) {
    let tab2 = [];
    for (let i = 0; i < tab.length; i++) {
      do {
        // je genere un nb alea de 0 à taille du tableau
        x = Math.floor(Math.random() * tab.length);
      } while (tab2[x] != undefined);
      // tant que l'emplacement n'est pas vide
      tab2[x]=tab[i]
    }
    return tab2;
  }

const tab2 = melanger(tab_temp)

const template = document.getElementById('temp');

for (let i = 0; i < 24; i++) {
    const clone = template.content.cloneNode(true);
    const image = clone.getElementById("img")
    image.src = "img/" + tab2[i] + ".webp"
    document.getElementById('cont').appendChild(clone)
}

let startTime = null

let index_selc=null
let carte_supr=0
document.querySelectorAll('.carte').forEach(function(carte, index) {
    const carte_img = carte.querySelector('img')
    carte_img.onclick = () =>{
        
        if (carte.classList.contains('green')){
            index_selc =null
            carte.classList.remove('green')
        }
        else {
            
            if (index_selc == null) {
                carte.classList.add('green')
                index_selc = index
                if (startTime == null){
                    startTime = new Date();
                }
            }
            else if (tab2[index]===tab2[index_selc]){
                
                carte_img.remove()
                document.querySelectorAll('.carte')[index_selc].classList.remove('green')
                document.querySelectorAll('.carte')[index_selc].querySelector('img').remove()
                index_selc = null
                carte_supr+=1
                if (carte_supr == 12) {
                    endTime = new Date();
                    alert('Bravo tu a fini en ' + (endTime - startTime) / 1000)
                }
            }
            else {
                
                document.querySelectorAll('.carte')[index_selc].classList.remove('green')
                index_selc=null
                

            }
        }
    }

})