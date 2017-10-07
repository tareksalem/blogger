// set the elements of all pages
function Layout() {
	this.div = document.createElement("div");
	this.header = document.createElement("header");
	this.nav = document.createElement("nav");
	this.footer = document.createElement("footer");
	this.h1 = document.createElement("h1");
	this.h2 = document.createElement("h2");
	this.h3 = document.createElement("h3");
	this.h4 = document.createElement("h4");
	this.span = document.createElement("span");
	this.p = document.createElement("p");
	this.a = document.createElement("a");
	this.section = document.createElement("section");
		this.img = document.createElement("img");
}
// set the elements of header of layout 
var header = new Layout().header;
//appending the header to body
document.body.appendChild(header);
// appending the small components to header
header.appendChild(header.navbar = new Layout().nav);
header.navbar.appendChild(header.navbar.container = new Layout().div);
header.navbar.container.appendChild(header.navbar.container.logo = new Layout().div);
header.navbar.container.appendChild(header.navbar.container.links = new Layout().div);

header.navbar.container.links.appendChild(header.navbar.container.links.home = new Layout().a);
header.navbar.container.links.appendChild(header.navbar.container.links.about = new Layout().a);
header.navbar.container.links.appendChild(header.navbar.container.links.service = new Layout().a);
header.navbar.container.links.appendChild(header.navbar.container.links.blog = new Layout().a);
//content of layout
 // start the body of layout
 		var content_pages = new Layout().section;
 		document.body.appendChild(content_pages);
		//end body of layout
//logo of navbar

setAttributes([header.navbar.container.logo], {
	"content": ["single page application"],
	"style": {"color": "wheat", "width": "40%", "float": "left", "font-size": "24px", "padding": "15px", "cursor": "pointer"}
});
// start content of links on header

setAttributes([header.navbar.container.links.home, header.navbar.container.links.about,  header.navbar.container.links.service, header.navbar.container.links.blog], {
	"style": {"color": "white", "font-size": "17px", "margin":"10px", "text-decoration": "none", "padding": "10px"},
	"content": ["home", "about", "service", "blog"],
	"href": ["#home", "#about", "#service", "#blog"],

});
setAttributes([header.navbar.container.links], {
	"id": "link"
});
// end content of layout
// style of layout
document.body.style.cssText = "margin:0px;padding:0px;font-family: 'Roboto', sans-serif;";
// set the classes and style for header and compoenets of it
setAttributes([header], {
	"style": {"width": "100%","height": "auto","overflow": "hidden"}
});
setAttributes([header.navbar], {
	"style": {"width": "100%","height": "55px","background-color": "black","position": "fixed"}
});
header.navbar.container.style.cssText = "width:100%;height:100%;background-color:black;";
header.navbar.container.links.style.cssText = "height:50%;width:40%;background-color:black;position:relative;top:15px;padding:5px;float:right;padding-right:20px";


// functions
document.onreadystatechange = function () {
	if (document.readyState === "complete") {
		var homeScript = document.createElement("script");
		setAttributes([homeScript], {
			"type": "text/javascript",
			"src": "./js/pages/home.js"
		});
		document.body.appendChild(homeScript)
	}
}

//respnosive design
if (window.innerWidth < 900) {
	header.navbar.container.logo.textContent = "spag"
	header.navbar.container.links.style.cssText = "width:200px;background-color:#2e2842;height:210px;float:right;position:absolute;top:0px;z-index:10;right:2px;top:56px;display:none;";
	header.navbar.container.appendChild(header.navbar.container.button = new Layout().span);
	setAttributes([header.navbar.container.button], {
		"css": "float:right;color:white;margin:15px 20px 0px 0px;cursor:pointer;line-height:.4em;font-size:17px",
		"content": ["___" + "<br>" + "___" + "<br>" + "___"]
	});
	var links = header.navbar.container.links.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].style.cssText += "color:white;display:block;border-top:1px solid #cecece;text-align:center";
		links[0].style.borderTop = "none";
	}
	var test = true;
	header.navbar.container.button.addEventListener("click", function () {
			
		if (test === true) {
			header.navbar.container.links.style.display = "block";
			test = false;
		} else if (test === false) {
			header.navbar.container.links.style.display = "none";
			test = true;
		}
	});
}
content_pages.style.marginTop = "120px";
//end styl of layout



