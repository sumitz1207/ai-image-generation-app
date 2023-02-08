
var imageView;

var init = function(){	
	imageView = new imageView();
	
	vaultCash.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + imageView.cards.length);

			var source = $("#card-list-template").html();
			var template = Handlebars.compile(source);

			var context = {cards:imageView.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
