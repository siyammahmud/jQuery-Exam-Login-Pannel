var mail = "gm.shimul@outlook.com";
var pass = "Martuza007";
$("#btn").mouseenter(function(){
	var a = $("#pass").val();
	var b = a.length;
	// $("#strength").text(b);

	 if(b <= 6){
		$("#strength").text("Weak")
		$("#strength").css("color","red")
	} else if (b <= 8) {
		$("#strength").text("Normal")
		$("#strength").css("color","limegreen")
	} else if (b > 8) {
		$("#strength").text("Strong")
		$("#strength").css("color","green")
	}

	
});
$("#btn").click(function(){
	var email = $("#mail").val();
	var password = $("#pass").val();
	if( email =='' || password ==''){
		
		alert("Please fill all fields...!!!!!!");
	}else{
		if( email == mail && password == pass ){
			alert("Login Succesfully ........!!")
		}else{
			alert("Wrong Email or Password ........!!")
		}
	}
})
