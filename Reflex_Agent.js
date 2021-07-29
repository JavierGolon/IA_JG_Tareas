function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function MarkState(states){
	if (states[0]=="A" &&  states[1]=="DIRTY" && states[2]=="DIRTY"){// Estado 1
		contadores[0]=contadores[0]+1;
		document.getElementById("e1").innerHTML=contadores[0];
	}else if(states[0]=="B" &&  states[1]=="DIRTY" && states[2]=="DIRTY"){
		contadores[1]=contadores[1]+1;
		document.getElementById("e2").innerHTML=contadores[1];
	}else if(states[0]=="A" &&  states[1]=="DIRTY" && states[2]=="CLEAN"){
		contadores[2]=contadores[2]+1;
		document.getElementById("e3").innerHTML=contadores[2];
	}else if(states[0]=="B" &&  states[1]=="DIRTY" && states[2]=="CLEAN"){
		contadores[3]=contadores[3]+1;
		document.getElementById("e4").innerHTML=contadores[3];
	}else if(states[0]=="A" &&  states[1]=="CLEAN" && states[2]=="DIRTY"){
		contadores[4]=contadores[4]+1;
		document.getElementById("e5").innerHTML=contadores[4];
	}else if(states[0]=="B" &&  states[1]=="CLEAN" && states[2]=="DIRTY"){
		contadores[5]=contadores[5]+1;
		document.getElementById("e6").innerHTML=contadores[5];
	}else if(states[0]=="A" &&  states[1]=="CLEAN" && states[2]=="CLEAN"){
		contadores[6]=contadores[6]+1;
		document.getElementById("e7").innerHTML=contadores[6];
	}else if(states[0]=="B" &&  states[1]=="CLEAN" && states[2]=="CLEAN	"){
		contadores[7]=contadores[7]+1;
		document.getElementById("e8").innerHTML=contadores[7];
	}
}

function test(states){
		var mytimer;
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
		// Marcador de estado
		MarkState(states)
      	document.getElementById("logs").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") {
			if (states[1]=="CLEAN" && states[2]=="CLEAN"&&states[0]!="B"){
				if(repeat =="no"){
					document.getElementById("logs").innerHTML+="<br> En no 2";
					states[0]="B";
					repeat="si";
				}else{

				
				document.getElementById("logs").innerHTML+="<br> Ensuciando";
				states[0]="B";
				states[1] ="DIRTY";
				states[2] = "DIRTY";
				repeat="no"
			}
			}else{
				states[0] = "B";
			}  
			
		  }
      	else if (action_result == "LEFT") {
			if (states[1]=="CLEAN" && states[2]=="CLEAN" && states[0]!="A"){
				if (repeat == "no"){
					document.getElementById("logs").innerHTML+="<br> En no";
					states[0]="A";
					repeat="si";
				}else{
				document.getElementById("logs").innerHTML+="<br> Ensuciando 1";
				states[0]="A";
				states[1] ="DIRTY";
				states[2] = "DIRTY";
				repeat="no"
			}
			}else{
				states[0] = "A";
			}  
		}
	if (stopIteration()==true){
		clearTimeout(mytimer);
	}else{		
	mytimer = setTimeout(function(){ test(states); }, 2000);
	}
}
function stopIteration(mytimer){
	if (contadores[0]>=2 &&contadores[1]>=2 &&contadores[2]>=2 &&contadores[3]>=2 &&contadores[4]>=2 &&contadores[5]>=2 &&contadores[6]>=2){
		return true;
		
	}else{
		return false;
	}
}

function Inicio(){
	var mitimer;
	
}

var repeat = "no";
var states = ["A","DIRTY","DIRTY"];
var contadores =[0,0,0,0,0,0,0,0];
test(states);
