$(document).ready(function() {
	$(".server-only-label").attr("title", "server-only");
	$(".client-only-label").attr("title", "client-only");
	$(".client-read-only-label").attr("title", "client-read-only");

	$(".server-only-label, .client-only-label, .client-read-only-label").parent().parent().css("padding", "0").css("text-align", "center");
});

function DrawCard(url, image_url, header, body, new_tab) {
	document.write(`
		<a class="nanos-card" href="${url}" ${new_tab ? "target='_blank'" : ""}>
			<img src="${image_url}"/>
			<h4>${header}</h4>
			<p>${body}</p>
		</a>
	`);
}