document.addEventListener("DOMContentLoaded",()=>{


loadArticle();


});





async function loadArticle(){


const params = new URLSearchParams(
window.location.search
);


const id = params.get("id");



const response = await fetch(
"data/articles.json"
);


const articles = await response.json();



const article = articles.find(
item=>item.id == id
);



if(!article){

document.querySelector("#articleContent").innerHTML =
"<h1>Article Not Found</h1>";

return;

}




// SEO Dynamic


document.title =
article.title + " | FactNova";



document
.querySelector("#metaDescription")
.setAttribute(
"content",
article.description
);



document
.querySelector("#ogTitle")
.setAttribute(
"content",
article.title
);



document
.querySelector("#ogDescription")
.setAttribute(
"content",
article.description
);






const related = articles
.filter(
item=>item.category === article.category
&& item.id != article.id
)
.slice(0,3);






document.querySelector("#articleContent").innerHTML = `



<img class="article-cover" 
src="${article.image}" 
alt="${article.title}">



<div class="article-info">

<span>
${article.category}
</span>


<h1>
${article.title}
</h1>


<p>
By ${article.author}
<br>
${article.date} • ${article.readingTime}
</p>


</div>





<!-- TABLE OF CONTENTS -->


<div class="toc">


<h3>
Table of Contents
</h3>


<ul>

<li>Introduction</li>

<li>Main Facts</li>

<li>Conclusion</li>

</ul>


</div>












<section class="article-text">


<h2>
Introduction
</h2>


<p>
${article.content}
</p>











<h2>
Main Facts
</h2>


<p>

${article.content}

</p>




<h2>
Conclusion
</h2>


<p>

FactNova brings you amazing discoveries from around the world.

</p>



</section>





<!-- SOCIAL SHARE -->


<div class="share">


<h3>
Share this article
</h3>


<button onclick="shareArticle()">
Share
</button>


</div>












<h2>
Related Articles
</h2>



<div class="articles-grid">


${
related.map(item=>`


<div class="card">


<img src="${item.image}">


<div class="card-content">


<h3>
${item.title}
</h3>


<a class="btn" 
href="article.html?id=${item.id}">
Read
</a>


</div>


</div>



`).join("")
}


</div>




`;






// Schema.org Article


const schema = document.createElement("script");

schema.type="application/ld+json";


schema.textContent=JSON.stringify({

"@context":"https://schema.org",

"@type":"Article",

"headline":article.title,

"author":{
"@type":"Person",
"name":article.author
},

"datePublished":article.date,

"description":article.description


});



document.head.appendChild(schema);



}






function shareArticle(){


navigator.share({

title:document.title,

url:window.location.href

});


}