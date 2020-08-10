$(document).ready(function() {
	$(".server-only-label").attr("title", "server-only");
	$(".client-only-label").attr("title", "client-only");
	$(".client-read-only-label").attr("title", "client-read-only");

	$(".server-only-label").each(function(i, item) { AddClass(item.parentElement.parentElement, 'nanos-small-td-padding'); });
	$(".client-only-label").each(function(i, item) { AddClass(item.parentElement.parentElement, 'nanos-small-td-padding'); });
	$(".client-read-only-label").each(function(i, item) { AddClass(item.parentElement.parentElement, 'nanos-small-td-padding'); });
});

function DrawCard(url, image_url, header, body) {
	document.write(`
		<a class="nanos-card" href="${url}">
			<img src="${image_url}"/>
			<h4>${header}</h4>
			<p>${body}</p>
		</a>
	`);
}

// Add class helper
function AddClass(elements, myClass) {

	// if there are no elements, we're done
	if (!elements) { return; }
  
	// if we have a selector, get the chosen elements
	if (typeof(elements) === 'string') {
	  elements = document.querySelectorAll(elements);
	}
  
	// if we have a single DOM element, make it an array to simplify behavior
	else if (elements.tagName) { elements=[elements]; }
  
	// add class to all chosen elements
	for (var i=0; i<elements.length; i++) {
  
	  // if class is not already found
	  if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {
  
		// add class
		elements[i].className += ' ' + myClass;
	  }
	}
  }
  