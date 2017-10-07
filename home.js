// start home page

// start main section of home page
// start the variables of components of home section

content_pages.homePage = new Layout().div;

content_pages.homePage.slider = new Layout().div;
content_pages.homePage.slider.slides = new Layout().div;
content_pages.homePage.slider.slideRightArrow = new Layout().span;
content_pages.homePage.slider.slideLeftArrow = new Layout().span;

// end variables of components



//appending components to content of body element
content_pages.appendChild(content_pages.homePage);
content_pages.homePage.appendChild(content_pages.homePage.slider);
content_pages.homePage.slider.appendChild(content_pages.homePage.slider.slideRightArrow);
content_pages.homePage.slider.appendChild(content_pages.homePage.slider.slideLeftArrow);
var slideObject = {};

var sliderArrayComponents = [];
var sliderArrayComponents = [];
for (var z = 0; z < 10; z++) {

	content_pages.homePage.slider.slides = new Layout().div;
	//content_pages.homePage.slider.appendChild(content_pages.homePage.slider.slides);
	slideObject.slideTitle = content_pages.homePage.slider.slides;
	slideObject.slideParagraph = new Layout().p;
	slideObject.slideImage = new Layout().img;
	//slideObject.slideRightArrow = new Layout().span;
	//slideObject.slideLeftArrow = new Layout().span;
	sliderArrayComponents.push(slideObject)
	//content_pages.homePage.slider.appendChild(arr[z].w)
	content_pages.homePage.slider.container = new Layout().div;
	for (var a = 0; a < sliderArrayComponents.length; a++) {
		//content_pages.homePage.slider.appendChild(arr[ee].z);
		content_pages.homePage.slider.container.appendChild(sliderArrayComponents[a].slideTitle);
		content_pages.homePage.slider.container.appendChild(sliderArrayComponents[a].slideParagraph);
		content_pages.homePage.slider.container.appendChild(sliderArrayComponents[a].slideImage);
		//content_pages.homePage.slider.container.appendChild(sliderArrayComponents[a].slideRightArrow);
		//content_pages.homePage.slider.container.appendChild(sliderArrayComponents[a].slideLeftArrow);
		content_pages.homePage.slider.appendChild(content_pages.homePage.slider.container);
		setAttributes([content_pages.homePage.slider.container], {
			"css": "width:100%;height:100%;background-color:red;"
		});
	}
}	

//content_pages.homePage.slider.appendChild(arr[0].)
 
// style for home page
setAttributes([content_pages.homePage], {
	"css": "width:95%;height:auto;background-color:white;margin:auto;border:.7px solid #cecece;"
});

