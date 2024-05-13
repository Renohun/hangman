function jatek(betu, szo){

    console.log(betu); let db = 0; 

    for(let i = 0; i < szo.length; i++)
    {
        if(betu == szo[i].toUpperCase()){
            console.log("ind:" + i); db++;
            talalt_tomb[i] = betu; 
        }
    } 

    document.getElementById('eredmeny').innerHTML = ""

    talalt_szo = ""; let win_szo = ""

    for (let i = 0; i < talalt_tomb.length; i++){
       talalt_szo += talalt_tomb[i] + " "; win_szo += talalt_tomb[i]
    }

    document.getElementById('eredmeny').innerHTML = talalt_szo

    if(db == 0){ ita++; console.log(ita) }

    if(ita != 0 && ita < 12) { document.getElementById('kep').setAttribute("src", pics[ita]) }
    
    if(ita == 11)
    {
        alert("vesztettel")
        document.getElementById('eredmeny').innerHTML = szo
    }

    if(szo.toUpperCase() == win_szo.toUpperCase() && fel_check == false)
    {
        alert("gyoztel")
    }
}

let ita = 0;

let arr = ["Cseresznye", "Programozás", "Billentyűzet", "Dokumentáció", "Kutya", "JavaScript"]
let pics=[" ", "pics/af1.png","pics/af2.png","pics/af3.png","pics/af4.png","pics/af5.png","pics/af6.png","pics/af7.png","pics/af8.png","pics/af9.png","pics/af10.png","pics/af11.png"]

let num_rnd;
num_rnd = Math.floor(Math.random()*5)

console.log(arr[num_rnd])

for(let i = 0; i < arr[num_rnd].length; i++)
{
    if(arr[num_rnd][i] == " "){
        document.getElementById('eredmeny').innerHTML += " "
    }else{
        document.getElementById('eredmeny').innerHTML += "_ "
    }
}

let talalt_szo = document.getElementById('eredmeny').innerHTML;

let talalt_tomb = []

for(let i = 0; i < arr[num_rnd].length; i++){
    talalt_tomb.push("_")
}

let fel_check = false


let a = document.getElementById('A'); a.addEventListener("click", () => {jatek("A", arr[num_rnd]);})

let a_1 = document.getElementById('AA'); a_1.addEventListener("click", () => {jatek("Á", arr[num_rnd])})

let b = document.getElementById('B'); b.addEventListener("click", () => {jatek("B", arr[num_rnd])})

let c = document.getElementById('C'); c.addEventListener("click", () => {jatek("C", arr[num_rnd])})

let d = document.getElementById('D'); d.addEventListener("click", () => {jatek("D", arr[num_rnd])})

let e = document.getElementById('E'); e.addEventListener("click", () => {jatek("E", arr[num_rnd])})

let e_1 = document.getElementById('EE'); e_1.addEventListener("click", () => {jatek("É", arr[num_rnd])})

let f = document.getElementById('F'); f.addEventListener("click", () => {jatek("F", arr[num_rnd])})

let g = document.getElementById('G'); g.addEventListener("click", () => {jatek("G", arr[num_rnd])})

let h = document.getElementById('H'); h.addEventListener("click", () => {jatek("H", arr[num_rnd])})

let i = document.getElementById('I'); i.addEventListener("click", () => {jatek("I", arr[num_rnd])})

let i_1 = document.getElementById('II'); i_1.addEventListener("click", () => {jatek("Í", arr[num_rnd])})

let j = document.getElementById('J'); j.addEventListener("click", () => {jatek("J", arr[num_rnd])})

let k = document.getElementById('K'); k.addEventListener("click", () => {jatek("K", arr[num_rnd])})

let l = document.getElementById('L'); l.addEventListener("click", () => {jatek("L", arr[num_rnd])})

let m = document.getElementById('M'); m.addEventListener("click", () => {jatek("M", arr[num_rnd])})

let n = document.getElementById('N'); n.addEventListener("click", () => {jatek("N", arr[num_rnd])})

let o = document.getElementById('O'); o.addEventListener("click", () => {jatek("O", arr[num_rnd], )})

let o_1 = document.getElementById('O_1'); o_1.addEventListener("click", () => {jatek("Ó", arr[num_rnd])})

let o_2 = document.getElementById('O_2'); o_2.addEventListener("click", () => {jatek("Ö", arr[num_rnd])})

let o_3 = document.getElementById('O_3'); o_3.addEventListener("click", () => {jatek("Ő", arr[num_rnd])})

let p = document.getElementById('P'); p.addEventListener("click", () => {jatek("P", arr[num_rnd])})

let q = document.getElementById('Q'); q.addEventListener("click", () => {jatek("Q", arr[num_rnd])})

let r = document.getElementById('R'); r.addEventListener("click", () => {jatek("R", arr[num_rnd])})

let s = document.getElementById('S'); s.addEventListener("click", () => {jatek("S", arr[num_rnd])})

let t = document.getElementById('T'); t.addEventListener("click", () => {jatek("T", arr[num_rnd])})

let u = document.getElementById('U'); u.addEventListener("click", () => {jatek("U", arr[num_rnd], )})

let u_1 = document.getElementById('U_1'); u_1.addEventListener("click", () => {jatek("Ú", arr[num_rnd])})

let u_2 = document.getElementById('U_2'); u_2.addEventListener("click", () => {jatek("Ü", arr[num_rnd])})

let u_3 = document.getElementById('U_3'); u_3.addEventListener("click", () => {jatek("Ű", arr[num_rnd])})

let v = document.getElementById('V'); v.addEventListener("click", () => {jatek("V", arr[num_rnd])})

let w = document.getElementById('W'); w.addEventListener("click", () => {jatek("W", arr[num_rnd])})

let x = document.getElementById('X'); x.addEventListener("click", () => {jatek("X", arr[num_rnd])})

let y = document.getElementById('Y'); y.addEventListener("click", () => {jatek("Y", arr[num_rnd])})

let z = document.getElementById('Z'); z.addEventListener("click", () => {jatek("Z", arr[num_rnd])})

let felad = document.getElementById('GIVEUP'); felad.addEventListener("click", () => {document.getElementById('eredmeny').textContent = arr[num_rnd]; fel_check = true; location.reload()})


let theme_change = document.getElementById('theme'); theme_change.addEventListener("click", 

    () => {
        document.getElementById("eredmeny").style.color = "white";
        document.getElementById("kijelzo").style.borderBottomColor = "white"
        document.getElementById("kijelzo").style.borderTopColor = "white"
        //document.getElementsByClassName("tgomb").style.borderColor = "white"
    }
)