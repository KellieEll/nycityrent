$(document).ready(function () {

	var weddingColors = [

		{
			"name": "Tribeca, Manhattan ($4,835)",
			"width": "100%"

	},

		{
			"name": "Central Park, Manhattan ($4,478)",
			"width": "90%"

},

		{
			"name": "East Village, Manhattan ($3,663)",
			"width": "80%",


	},


		{
			"name": "Williamsburg, Brooklyn ($3,505)",
			"width": "70%"
		},

		{
			"name": "SoHo, Manhattan ($3,460)",
			"width": "60%"

},

		{
			"name": "Park Slope, Brooklyn ($2,940)",
			"width": "50%"


	},

		{
			"name": "Harlem, Manhattan ($2,476)",
			"width": "40%"

},


		{
			"name": "Chinatown, Manhattan ($2,224)",
			"width": "30%"


},

		{
			"name": "Jackson Heights, Queens ($1,699)",
			"width": "20%"


},

		{
			"name": "South Bronx, Bronx ($1,145)",
			"width": "10%"


}




	]


	var myHtml = "";




	for (var i = 0; i < weddingColors.length; i++) {
		var start = '<div class="color" style="background:' + weddingColors[i].color + ';width:' + weddingColors[i].width + ';">';
		var middle = '<span class="label">' + weddingColors[i].name + '</span>'
		var end = "</div>"
		myHtml += (start + middle + end);

	}


	$(".colorWrapper").append(myHtml);

})
