const afficherEquipeHTML = () => {
  var e,
    t = document.querySelector(".equipe"),
    n = ((t.innerHTML = ""), document.getElementById("templateEquipe")),
    r = document.getElementById("selectEquipe"),
    o = ((r.innerHTML = ""), document.createElement("option"));
  (o.value = -1), (o.innerText = "Pas d'Ã©quipe"), r.appendChild(o);
  let l = 0;
  for (e of entreprise.equipes) {
    var i = n.content.cloneNode(!0);
    i.querySelector("table").setAttribute("data-indice", l);
    (i.querySelector("h3").innerHTML = e.nom),
      ((btnDelEquipe = i.querySelector(".btn-enlever-equipe")).onclick = (
        e
      ) => {
        e = e.target.closest("table").dataset.indice;
        entreprise.equipes.splice(e, 1), afficherEquipeHTML();
      });
    var u,
      a = document.createElement("option"),
      c =
        ((a.value = l),
        (a.innerText = e.nom),
        r.appendChild(a),
        i.querySelector(".tbodyEquipe")),
      m = document.getElementById("templateEquipePersonne");
    for (u of e.personnes) {
      var d = m.content.cloneNode(!0),
        p = d.querySelectorAll("td");
      (p[0].innerHTML = u.prenom), (p[1].innerHTML = u.nom), c.appendChild(d);
    }
    t.appendChild(i), l++;
  }
};
let t = [];
for (let e = 0; e < 12; e++) t.push(e);
let a = (t = obama(t)).slice(0, 12),
  b = a.concat(a);
b = obama(b);
const depot = document.querySelector(".container");
for (let n of b) {
  let e = document.createElement("div"),
    t = document.createElement("img");
  (t.src = "img/" + n + ".webp"), e.appendChild(t), depot.appendChild(e);
}
let m = -1,
  w = 0,
  d1 = new Date();
const tu = document.querySelectorAll(".container img");
for (let t = 0; t < tu.length; t++)
  tu[t].onclick = (e) => {
    -1 == m
      ? ((m = t), e.target.parentElement.classList.add("green"))
      : (tu[m].parentElement.classList.remove("green"),
        m != t && b[m] == b[t] && (tu[m].remove(), tu[t].remove(), w++),
        12 == w &&
          ((e = (new Date().getTime() - d1.getTime()) / 1e3), alert(e)),
        (m = -1));
  };
const afficherPersonneHTML = () => {
    var e,
      t = document.getElementById("tbodyPersonne"),
      n = ((t.innerHTML = ""), document.getElementById("templatePersonne"));
    for (e of entreprise.personnes) {
      var r = n.content.cloneNode(!0),
        o =
          (r.querySelector("tr").setAttribute("data-id", e.id),
          r.querySelectorAll("td"));
      (o[0].innerHTML = e.prenom), (o[1].innerHTML = e.nom), t.appendChild(r);
    }
  },
  afficherEquipeHTML2 = () => {
    var e = document.getElementById("equipe").value,
      e = ((document.getElementById("equipe").value = ""), new Equipe(e));
    entreprise.equipes.push(e), console.log(entreprise), afficherEquipeHTML();
  },
  afficherEquipeHTML3 = () => {
    var e = document.getElementById("nom").value,
      t = document.getElementById("prenom").value,
      n = document.getElementById("selectEquipe").value,
      r =
        ((document.getElementById("nom").value = ""),
        (document.getElementById("prenom").value = ""),
        (document.getElementById("selectEquipe").value = -1),
        Date.now()),
      r = new Personne(r, t, e);
    entreprise.personnes.push(r),
      afficherPersonneHTML(),
      -1 != n &&
        (console.log("abbs"),
        entreprise.equipes[n].personnes.push(r),
        afficherEquipeHTML());
  };
function obama(t) {
  var n = [];
  for (let e = 0; e < t.length; e++) {
    for (; null != n[(x = Math.floor(Math.random() * t.length))]; );
    n[x] = t[e];
  }
  return n;
}
