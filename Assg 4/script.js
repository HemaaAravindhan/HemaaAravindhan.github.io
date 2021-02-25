var names=new Array();
names[0]="Mahi";
names[1]="John";
names[2]="jinu";
names[3]="Athu";
names[4]="Rahul";
names[5]="Anu";
names[6]="Sinu";
names[7]="Achu";
names[8]="Simi";


for(var i=0; i<names.length; i++){
	if (names[i].chartAt(0)==='J'||names[i].chartAt(0)==='j') {
		console.log("Goodbye " + names[i])
	}
	else{
		console.log("Hello ", names[i])
	}
}