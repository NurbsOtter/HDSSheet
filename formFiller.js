var species = {
	canine:["Dog","Fox","Wolf","Coyote","Jackal"],
	feline:["Cat","Cheetah","Cougar","Lion","Tiger"],
	avialae:["Bird","Eagle","Hawk","Crow"], //Update: Removed owl. Don't talk about it.
	reptilia:["Lizard","Snake","Alligator","Gecko","Iguana"],
	mustelidae:["Weasel","Otter","Skunk","Badger","Wolverine"]
};
function onSelectFamily(){
	var familySelect = document.getElementById("familySelect");
	var speciesSelect = document.getElementById("speciesSelect");
	var selectedFamily = familySelect.value;
	console.log(selectedFamily);
	speciesSelect.options.length = 0;//Empty out da list!
	switch (selectedFamily){
		case "3":
			for (var i = 0; i < species.mustelidae.length;i++){
				var newOpt = new Option(species.mustelidae[i],i,false,false)
				speciesSelect.options.add(newOpt);
			}
		break;
		case "0":
			for (var i = 0; i < species.canine.length;i++){
				var newOpt = new Option(species.canine[i],i,false,false);
				speciesSelect.options.add(newOpt);
			}
		break;
		case "1":
			for (var i = 0; i < species.feline.length;i++){
				var newOpt = new Option(species.feline[i],i,false,false);
				speciesSelect.options.add(newOpt);
			}
		break;
		case "2":
			for (var i = 0; i < species.reptilia.length;i++){
				var newOpt = new Option(species.reptilia[i],i,false,false);
				speciesSelect.options.add(newOpt);
			}
		break;
		case "4":
			for (var i = 0; i < species.avialae.length;i++){
				var newOpt = new Option(species.avialae[i],i,false,false);
				speciesSelect.options.add(newOpt);
			}
		break;
	}
}