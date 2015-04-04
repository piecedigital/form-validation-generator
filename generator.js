var gen = $("#generator-form");
var update = function() {
	/*gather form data*/
	var formData = $(gen);
	console.log(formData);
};
update();
$(document).on("keyup", update);