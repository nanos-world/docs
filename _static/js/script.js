$(document).ready(function() {
	$(".server-only-label").attr("title", "server-only");
	$(".client-only-label").attr("title", "client-only");
	$(".client-read-only-label").attr("title", "client-read-only");
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