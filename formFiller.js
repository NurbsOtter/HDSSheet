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
		case "mustelidae":
			for (var i = 0; i < species.mustelidae.length;i++){
				var newOpt = new Option(species.mustelidae[i],species.mustelidae[i],false,false)
				speciesSelect.options.add(newOpt);
			}
		break;
		case "canidae":
			for (var i = 0; i < species.canine.length;i++){
				var newOpt = new Option(species.canine[i],species.canine[i],false,false);
				speciesSelect.options.add(newOpt);
			}
		break;
	}
}