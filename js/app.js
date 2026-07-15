// FactNova Main JavaScript


document.addEventListener("DOMContentLoaded", () => {


/* HEADER */

const header = `

<header>

<div class="navbar">

<div class="logo">
FactNova
</div>


<nav>

<ul>

<li><a href="index.html">Home</a></li>

<li><a href="category.html?cat=Animals">Animals</a></li>

<li><a href="category.html?cat=Space">Space</a></li>

<li><a href="category.html?cat=Science">Science</a></li>

<li><a href="category.html?cat=History">History</a></li>

<li><button id="darkMode">
🌙
</button></li>


</ul>

</nav>

</div>

</header>

`;



/* FOOTER */


const footer = `

<footer>

<h3>FactNova</h3>

<p>
Amazing facts about animals, science, space and history.
</p>


<p>
© 2026 FactNova. All rights reserved.
</p>


</footer>

`;



document.querySelector("#header").innerHTML = header;


document.querySelector("#footer").innerHTML = footer;





/* DARK MODE */


const darkButton=document.querySelector("#darkMode");


if(darkButton){

darkButton.onclick=()=>{

document.body.classList.toggle("dark");


localStorage.setItem(
"dark",
document.body.classList.contains("dark")
);

};


}



if(localStorage.getItem("dark")=="true"){

document.body.classList.add("dark");

}




loadArticles();


});





// LOAD ARTICLES


async function loadArticles(){


const container=document.querySelector("#trending");


if(!container) return;



try{


const response = await fetch("data/articles.json");


const articles = await response.json();



container.innerHTML="";



articles.slice(0,6).forEach(article=>{


container.innerHTML += `


<div class="card">


<img src="${article.image}" alt="${article.title}">


<div class="card-content">


<span class="category">
${article.category}
</span>


<h3>
${article.title}
</h3>


<p>
${article.description}
</p>


<small>
${article.readingTime} • ${article.date}
</small>


<br>


<a class="btn" href="article.html?id=${article.id}">
Read
</a>


</div>


</div>


`;



});



}

catch(error){

console.log(error);

}



}