$(document).ready(function(){
 	$("#Login").click(function() {
		$("#g2").hide("slow");
		$("#g1").show("slow");
		$("#btn").css("left","0");
		$("#btn").css("right","40.99%");
	});
	$("#Register").click(function() {
		$("#g1").hide("slow");
		$("#g2").show("slow");
		$("#btn").css("right","0");
		$("#btn").css("left","40.99%");
	});
});


function f (){
	$.ajax({
		url: "http://localhost:5000/productosM",
		Type:'GET',
		dataType:'json',
		success: function(rta){
			console.log(rta);
		}
	});
}
