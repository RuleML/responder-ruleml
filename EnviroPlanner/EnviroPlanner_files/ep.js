function elementSelected(){
 
		var choice = document.form1.select1.selectedIndex;
	    // EnviroPlanner Air Quality Threshold and Health Effects 
		var choice0 = 
			    "<Atom>" + "\n         " +
			      "<Rel>airQuality</Rel>" + "\n         " + 
				"<Ind type=\"integer\">30</Ind>" + "\n         " +
				"<Ind type=\"string\">NitrogenDioxide</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>results</Fun>" + "\n            " +
				"<Var>Level</Var>" + "\n            " +
				"<Var>HealthEffects</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>performative</Fun>" + "\n            " +
				"<Var>Action</Var>" + "\n         " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n"; 
				
	    //Clean Transportation
		var choice1 = 
				 "<Atom>" + "\n         " +
			      "<Rel>cleanTransportation</Rel>" + "\n         " + 
				"<Var>UsePublicTransit</Var>" + "\n         " +
				"<Var>fuelEffecVehicles</Var>" + "\n      " +
				 "</Atom>" + "\n"; 
				 
       //Electric Power Generation Stations
	   var choice2 = 
				"<Atom>" + "\n         " +
			    "<Rel>powerPlants</Rel>" + "\n         " + 
				"<Var>PowerPlantName</Var>" + "\n         " + 
				"<Var>Capacity</Var>" + "\n      " + 
				"<Var>PowerPlantTypes</Var>" + "\n      " + 
				"</Atom>" + "\n";
				
	    //Street Lighting
		var choice3 = 		
			    "<Atom>" + "\n         " +
			      "<Rel>lightingRentalService</Rel>" + "\n         " + 
				"<Ind type=\"integer\">200</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>lightingRental</Fun>" + "\n            " +
				"<Var>LightName</Var>" + "\n            " +
				"<Var>Benefits</Var>" + "\n            " +
				"<Var>MonthlyRental</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
				"<Ind type=\"integer\">25</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>discountOnRental</Fun>" + "\n            " +
				"<Var>DiscountRate</Var>" + "\n            " +
				"<Var>TotalCost</Var>" + "\n            " +
				"<Var>TCafterDiscount</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
			    "</Atom>" + "\n";
						
		//Water Heater
		var choice4 = 		
				"<Atom>" + "\n         " +
			    "<Rel>waterHeater</Rel>" + "\n         " + 
				"<Var>TankCapacity</Var>" + "\n         " + 
				"<Var>Height</Var>" + "\n      " + 
				"<Var>Diameter</Var>" + "\n      " + 
				"<Var>MonthlyRental</Var>" + "\n      " + 
				"</Atom>" + "\n"; 
		
		//Drinking Water Quality
		var choice5 = 		
			    "<Atom>" + "\n         " +
			      "<Rel>drinkingWaterQuality</Rel>" + "\n         " + 
				"<Ind type=\"integer\">20</Ind>" + "\n         " +
                "<Ind type=\"string\">Manganese</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>qualityLevel</Fun>" + "\n            " +
				"<Var>Level</Var>" + "\n            " +
				"<Var>Drinkable</Var>" + "\n            " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
				
		//Drinking Water Service Rate
		var choice6 = 	
			    "<Atom>" + "\n         " +
			      "<Rel>dwServiceRate</Rel>" + "\n         " + 
				"<Ind type=\"integer\">2</Ind>" + "\n         " +
			    "<Var>ServiceProvider</Var>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>flatRateService</Fun>" + "\n            " +
				"<Var>MonthlyRate</Var>" + "\n            " +
				"<Var>HalfYearlyRate</Var>" + "\n            " +
				"<Var>FSTotalAnnualRate</Var>" + "\n            " +
				"<Var>MonthlyPenalty</Var>" + "\n            " +
				"</Expr>" + "\n      " + 
				"<Expr>" + "\n            " +
				"<Fun>meteredService</Fun>" + "\n            " +
				"<Var>MeterSize</Var>" + "\n            " +
				"<Var>BiMonthlyRate</Var>" + "\n            " + 
				"<Var>MSTotalAnnualRate</Var>" + "\n            " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
				
		//Water Course and Wetland Alteration Permit
		var choice7 = 
				"<Atom>" + "\n         " +
			    "<Rel>alterationPermit</Rel>" + "\n         " + 
				"<Var>PermitType</Var>" + "\n         " + 
				"<Var>IntendedWork</Var>" + "\n      " + 
				"<Var>SuitableFor</Var>" + "\n      " + 
				"<Var>YearlyPermitFee</Var>" + "\n      " + 
				"</Atom>" + "\n";
		
				  
		//Water Quality Check for Water Heater Rental
		var choice8 = 
			    "<Atom>" + "\n         " +
			      "<Rel>rentalWaterHeater</Rel>" + "\n         " + 
				  "<Expr>" + "\n            " +
				"<Fun>waterTank</Fun>" + "\n            " +
				"<Var>TankCapacity</Var>" + "\n            " +
				"<Var>Height</Var>" + "\n            " +
				"<Var>Diameter</Var>" + "\n            " +
				"<Var>MonthlyRental</Var>" + "\n            " +
				"</Expr>" + "\n      " + 
				"<Ind type=\"integer\">10</Ind>" + "\n         " +
                "<Ind type=\"string\">TotalSuspendedSolids</Ind>" + "\n         " +				
				"<Expr>" + "\n            " +
				"<Fun>dwQuality</Fun>" + "\n            " +
				"<Var>Level</Var>" + "\n            " +
				"<Var>Drinkable</Var>" + "\n            " + 
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
				

        //Water Shed Protection Zone
		var choice9 = 
			      "<Atom>" + "\n         " +
			      "<Rel>watershedProtectionZone</Rel>" + "\n         " + 
               "<Ind type=\"string\">A</Ind>" + "\n         " +				
				"<Expr>" + "\n            " +
				"<Fun>shedProtection</Fun>" + "\n            " +
				"<Var>WaterShedName</Var>" + "\n            " +
				"<Var>Boundary</Var>" + "\n            " + 
				"<Var>PermittedActivities</Var>" + "\n            " + 
				"</Expr>" + "\n      " + "\n           " + 
			    "</Atom>" + "\n";
				  
       //Drinking Water Well Field
	   var choice10 = 
				"<Atom>" + "\n         " +
			    "<Rel>wellField</Rel>" + "\n         " + 
				"<Var>AreaName</Var>" + "\n         " + 
				"<Var>PumpingRate</Var>" + "\n      " + 
				"<Var>Region</Var>" + "\n      " + 
				"</Atom>" + "\n";
				
		//Water Usage In Power Plants
		var choice11 = 
				"<Atom>" + "\n         " +
			    "<Rel>waterUsageInPowerPlants</Rel>" + "\n         " + 
				"<Ind type=\"string\">Hydro</Ind>" + "\n         " +				
				"<Var>LowCase</Var>" + "\n         " + 
				"<Var>AverageCase</Var>" + "\n      " + 
				"<Var>HighCase</Var>" + "\n      " + 
				"<Var>PowerPlantName</Var>" + "\n      " + 
				"</Atom>" + "\n";
				  
		//Specific Soil Quality Test
		var choice12 = 
			      "<Atom>" + "\n         " +
			      "<Rel>soilTest</Rel>" + "\n         " + 
				  "<Var>TestCentre</Var>" + "\n         " + 
				  "<Var>AvailableTests</Var>" + "\n      " + 
			      "</Atom>" + "\n";
				  
	 	//Sources of Pollutants
		var choice13 = 
				"<Atom>" + "\n         " +
			    "<Rel>sourcesOfPollutants</Rel>" + "\n         " + 
				"<Ind type=\"string\">Air</Ind>" + "\n         " +				
				"<Var>MajorPollutants</Var>" + "\n         " + 
				"<Var>PollutantSectors</Var>" + "\n      " + 
				"<Var>PollutionEffects</Var>" + "\n      " + 
				"<Var>TotalPollution</Var>" + "\n      " + 
				"</Atom>" + "\n";
			      
		var choice14 =
			"<Atom>" + "\n\t\t" +
			"<Rel>getTopicsOfATrack</Rel>" + "\n\t\t" +
			"<Ind type=\"string\">Rules and Norms</Ind>" + "\n\t\t" +
			"<Var>Topic</Var>" + "\n\t    " +
			"</Atom>";

	  

				  
	 var messageHeader =
                  "<RuleML xmlns=\n   \"http://www.ruleml.org/0.91/xsd\"" + "\n" +
				  " xmlns:xsi=\n   \"http://www.w3.org/2001/XMLSchema-instance\"" + "\n" +
				  " xsi:schemaLocation=\n   \"http://www.ruleml.org/0.91/xsd" + "\n   " +
				  " http://ibis.in.tum.de/research/" + "\n    " + "ReactionRuleML/0.2/rr.xsd\"" + "\n" +
				  " xmlns:ruleml2011=" + "\n   " + "\"http://ibis.in.tum.de/projects/paw#\">" + "\n" +
				  "\n " + "<Message mode=\"outbound\"" + "\n  " + "directive=\"query-sync\">" +
			      "\n   " + "<oid>" + "\n      " + 
			      "<Ind>EnviroPlanner</Ind>" + "\n   " +
			      "</oid>" + "\n   " +
			      "<protocol>" + "\n      " +
			      "<Ind>esb</Ind>" + "\n   " +
			      "</protocol>" + "\n   " +
			      "<sender>" + "\n      " +
			      "<Ind>User</Ind>" + "\n   " +
			      "</sender>" + "\n   " +
			      "<content>" + "\n      ";					
		
	 var messageFooter = 			     
				"   " + "</content>" + "\n " +
			      "</Message>" + "\n" +
			      "</RuleML>";
		
 
		if(choice == 0){
			document.form2.box1.value = messageHeader + choice0 + messageFooter;
		}else if(choice == 1){
			document.form2.box1.value = messageHeader + choice1 + messageFooter;
		}else if(choice == 2){
			document.form2.box1.value = messageHeader + choice2 + messageFooter;
		}else if(choice == 3){
			document.form2.box1.value = messageHeader + choice3 + messageFooter;
		}else if(choice == 4){
			document.form2.box1.value = messageHeader + choice4 + messageFooter;
		}else if(choice == 5){
			document.form2.box1.value = messageHeader + choice5 + messageFooter;
		}else if(choice == 6){
			document.form2.box1.value = messageHeader + choice6 + messageFooter;
		}else if(choice == 7){
			document.form2.box1.value = messageHeader + choice7 + messageFooter;
		}else if(choice == 8){
			document.form2.box1.value = messageHeader + choice8 + messageFooter;
		}else if(choice == 9){
			document.form2.box1.value = messageHeader + choice9 + messageFooter;
		}else if(choice == 10){
			document.form2.box1.value = messageHeader + choice10 + messageFooter;
		}else if(choice == 11){
			document.form2.box1.value = messageHeader + choice11 + messageFooter;
		}else if(choice == 12){
			document.form2.box1.value = messageHeader + choice12 + messageFooter;
		}else if(choice == 13){
			document.form2.box1.value = messageHeader + choice13 + messageFooter;
		}else if(choice == 14){
			document.form2.box1.value = messageHeader + choice14 + messageFooter;
		}
	}
	
	function elementSelected3(){   
 
		var choice = document.form3.select3.selectedIndex;
	     
		var choice0 = 
			     "<Atom>" + "\n         " +
			      "<Rel>cleanCommunities</Rel>" + "\n         " + 
				"<Var>CommuInitiatives</Var>" + "\n         " +
				"<Var>LongTermVisions</Var>" + "\n      " +
				  "</Atom>" + "\n";
	    
		var choice1 =
				 "<Atom>" + "\n         " +
			      "<Rel>cleanTransportation</Rel>" + "\n         " + 
				"<Var>UsePublicTransit</Var>" + "\n         " +
				"<Var>FuelEffecVehicles</Var>" + "\n      " +
				 "</Atom>" + "\n";
       
	   var choice2 = 
			    "<Atom>" + "\n         " +
			      "<Rel>airQuality</Rel>" + "\n         " + 
				"<Ind type=\"integer\">50</Ind>" + "\n         " +
				"<Ind type=\"string\">SulfurDioxide</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>results</Fun>" + "\n            " +
				"<Var>Level</Var>" + "\n            " +
				"<Var>HealthEffects</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>performative</Fun>" + "\n            " +
				"<Var>Action</Var>" + "\n         " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
	    
		var choice3 = 		
				"<Atom>" + "\n         " +
			    "<Rel>powerPlants</Rel>" + "\n         " + 
				"<Var>PowerPlantName</Var>" + "\n         " + 
				"<Var>Capacity</Var>" + "\n      " + 
				"<Var>PowerPlantTypes</Var>" + "\n      " + 
				"</Atom>" + "\n";
				
		
		var choice4 = 		
			    "<Atom>" + "\n         " +
			      "<Rel>lightingRentalService</Rel>" + "\n         " + 
				"<Ind type=\"integer\">200</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>lightingRental</Fun>" + "\n            " +
				"<Var>LightName</Var>" + "\n            " +
				"<Var>Benefits</Var>" + "\n            " +
				"<Var>MonthlyRental</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
				"<Ind type=\"integer\">25</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>discountOnRental</Fun>" + "\n            " +
				"<Var>DiscountRate</Var>" + "\n            " +
				"<Var>TotalCost</Var>" + "\n            " +
				"<Var>DiscountedCost</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
			    "</Atom>" + "\n";
		
		var choice5 = 	
				"<Atom>" + "\n         " +
			    "<Rel>waterHeater</Rel>" + "\n         " + 
				"<Var>TankCapacity</Var>" + "\n         " + 
				"<Var>Height</Var>" + "\n      " + 
				"<Var>Diameter</Var>" + "\n      " + 
				"<Var>MonthlyRental</Var>" + "\n      " + 
				"</Atom>" + "\n"; 
		
		var choice6 = 		
			    "<Atom>" + "\n         " +
			      "<Rel>drinkingWaterQuality</Rel>" + "\n         " + 
				"<Ind type=\"integer\">20</Ind>" + "\n         " +
                "<Ind type=\"string\">Arsenic</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>qualityLevel</Fun>" + "\n            " +
				"<Var>Level</Var>" + "\n            " +
				"<Var>Drinkable</Var>" + "\n            " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
		
		var choice7 = 
				"<Atom>" + "\n         " +
			    "<Rel>alterationPermit</Rel>" + "\n         " + 
				"<Var>PermitType</Var>" + "\n         " + 
				"<Var>IntendedWork</Var>" + "\n      " + 
				"<Var>SuitableFor</Var>" + "\n      " + 
				"<Var>YearlyPermitFee</Var>" + "\n      " + 
				"</Atom>" + "\n";
		
		var choice8 = 	
				"<Atom>" + "\n         " +
			    "<Rel>wellField</Rel>" + "\n         " + 
				"<Var>AreaName</Var>" + "\n         " + 
				"<Var>PumpingRate</Var>" + "\n      " + 
				"<Var>Region</Var>" + "\n      " + 
				"</Atom>" + "\n";

		var choice9 = 	 
				"<Atom>" + "\n         " +
			    "<Rel>watershedprotecZone</Rel>" + "\n         " + 
				"<Ind type=\"string\">B</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>shedprotec</Fun>" + "\n            " +
				"<Var>WaterShedName</Var>" + "\n            " +
				"<Var>Boundary</Var>" + "\n            " +
			    "<Var>PermittedActivities</Var>" + "\n            " +				
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
				
		var choice10 = 	
			"<Atom>" + "\n\t\t" +
			"<Rel>soilTest</Rel>" + "\n\t\t" +
			"<Var>TestCentre</Var>" + "\n\t    " +
			"<Var>AvailableTests</Var>" + "\n    " +
			"</Atom>";
				
		
    
 	 var messageHeader =
                  "<RuleML xmlns=\n   \"http://www.ruleml.org/0.91/xsd\"" + "\n" +
				  " xmlns:xsi=\n   \"http://www.w3.org/2001/XMLSchema-instance\"" + "\n" +
				  " xsi:schemaLocation=\n   \"http://www.ruleml.org/0.91/xsd" + "\n   " +
				  " http://ibis.in.tum.de/research/" + "\n    " + "ReactionRuleML/0.2/rr.xsd\"" + "\n" +
				  " xmlns:ruleml2011=" + "\n   " + "\"http://ibis.in.tum.de/projects/paw#\">" + "\n" +
				  "\n " + "<Message mode=\"outbound\"" + "\n  " + "directive=\"query-sync\">" +
			      "\n   " + "<oid>" + "\n      " + 
			      "<Ind>EP-REGION-FREDERICTON</Ind>" + "\n   " +
			      "</oid>" + "\n   " +
			      "<protocol>" + "\n      " +
			      "<Ind>esb</Ind>" + "\n   " +
			      "</protocol>" + "\n   " +
			      "<sender>" + "\n      " +
			      "<Ind>User</Ind>" + "\n   " +
			      "</sender>" + "\n   " +
			      "<content>" + "\n      ";			
			

			
	 var messageFooter = 			     
				"   " + "</content>" + "\n " +
			      "</Message>" + "\n" +
			      "</RuleML>";
		
 
		if(choice == 0){
			document.form2.box1.value = messageHeader + choice0 + messageFooter;
		}else if(choice == 1){
			document.form2.box1.value = messageHeader + choice1 + messageFooter;
		}else if(choice == 2){
			document.form2.box1.value = messageHeader + choice2 + messageFooter;
		}else if(choice == 3){
			document.form2.box1.value = messageHeader + choice3 + messageFooter;
		}else if(choice == 4){
			document.form2.box1.value = messageHeader + choice4 + messageFooter;
		}else if(choice == 5){
			document.form2.box1.value = messageHeader + choice5 + messageFooter;
		}else if(choice == 6){
			document.form2.box1.value = messageHeader + choice6 + messageFooter;
		}else if(choice == 7){
			document.form2.box1.value = messageHeader + choice7 + messageFooter;
		}else if(choice == 8){
			document.form2.box1.value = messageHeader + choice8 + messageFooter;
		}else if(choice == 9){
			document.form2.box1.value = messageHeader + choice9 + messageFooter;
		}else if(choice == 10){
			document.form2.box1.value = messageHeader + choice9 + messageFooter;
		}
	}
	
	
	function elementSelected4(){
 
		var choice = document.form4.select4.selectedIndex;
	    
		var choice0 = 
			     "<Atom>" + "\n         " +
			      "<Rel>cleanIndustry</Rel>" + "\n         " + 
				"<Var>Energy</Var>" + "\n         " +
				"<Var>Innovation</Var>" + "\n      " +
				"<Var>EmissionReduction</Var>" + "\n      " +
				  "</Atom>" + "\n";
	    
		var choice1 =
				 "<Atom>" + "\n         " +
			      "<Rel>cleanTransportation</Rel>" + "\n         " + 
				"<Var>UsePublicTransit</Var>" + "\n         " +
				"<Var>fuelEffecVehicles</Var>" + "\n      " +
				 "</Atom>" + "\n";
       
	   var choice2 = 
			    "<Atom>" + "\n         " +
			      "<Rel>airQuality</Rel>" + "\n         " + 
				"<Ind type=\"integer\">50</Ind>" + "\n         " +
				"<Ind type=\"string\">CarbonMonoxide</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>results</Fun>" + "\n            " +
				"<Var>Level</Var>" + "\n            " +
				"<Var>HealthEffects</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>performative</Fun>" + "\n            " +
				"<Var>Action</Var>" + "\n         " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
	    
		var choice3 = 		
				"<Atom>" + "\n         " +
			    "<Rel>powerPlants</Rel>" + "\n         " + 
				"<Var>PowerPlantName</Var>" + "\n         " + 
				"<Var>Capacity</Var>" + "\n      " + 
				"<Var>PowerPlantTypes</Var>" + "\n      " + 
				"</Atom>" + "\n";
				
		var choice4 = 		
				"<Atom>" + "\n         " +
			    "<Rel>nuclrPwrStation</Rel>" + "\n         " + 
				"<Var>Station</Var>" + "\n         " + 
				"<Var>Capacity</Var>" + "\n      " + 
				"<Var>Station</Var>" + "\n      " + 
				"</Atom>" + "\n";
		
		var choice5 = 		
			    "<Atom>" + "\n         " +
			      "<Rel>lightingRentalService</Rel>" + "\n         " + 
				"<Ind type=\"integer\">200</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>lightingRental</Fun>" + "\n            " +
				"<Var>LightName</Var>" + "\n            " +
				"<Var>Benefits</Var>" + "\n            " +
				"<Var>MonthlyRental</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
				"<Ind type=\"integer\">25</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>discountOnRental</Fun>" + "\n            " +
				"<Var>DiscountRate</Var>" + "\n            " +
				"<Var>TotalCost</Var>" + "\n            " +
				"<Var>DiscountedCost</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
			    "</Atom>" + "\n";
		
		var choice6 = 	
				"<Atom>" + "\n         " +
			    "<Rel>waterHeater</Rel>" + "\n         " + 
				"<Var>TankCapacity</Var>" + "\n         " + 
				"<Var>Height</Var>" + "\n      " + 
				"<Var>Diameter</Var>" + "\n      " + 
				"<Var>MonthlyRental</Var>" + "\n      " + 
				"</Atom>" + "\n"; 
		
				
		var choice7 = 		
			    "<Atom>" + "\n         " +
			      "<Rel>drinkingWaterQuality</Rel>" + "\n         " + 
				"<Ind type=\"integer\">95</Ind>" + "\n         " +
                "<Ind type=\"string\">Arsenic</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>qualityLevel</Fun>" + "\n            " +
				"<Var>Level</Var>" + "\n            " +
				"<Var>Drinkable</Var>" + "\n            " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
				
		
		var choice8 = 
				"<Atom>" + "\n         " +
			    "<Rel>alterationPermit</Rel>" + "\n         " + 
				"<Var>PermitType</Var>" + "\n         " + 
				"<Var>IntendedWork</Var>" + "\n      " + 
				"<Var>SuitableFor</Var>" + "\n      " + 
				"<Var>YearlyPermitFee</Var>" + "\n      " + 
				"</Atom>" + "\n";
		
		var choice9 = 	
				"<Atom>" + "\n         " +
			    "<Rel>wellField</Rel>" + "\n         " + 
				"<Var>AreaName</Var>" + "\n         " + 
				"<Var>PumpingRate</Var>" + "\n      " + 
				"<Var>Region</Var>" + "\n      " + 
				"</Atom>" + "\n";

		var choice10 = 	 
				"<Atom>" + "\n         " +
			    "<Rel>watershedprotecZone</Rel>" + "\n         " + 
				"<Ind type=\"string\">A</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>shedprotec</Fun>" + "\n            " +
				"<Var>WaterShedName</Var>" + "\n            " +
				"<Var>Boundary</Var>" + "\n            " +
			    "<Var>PermittedActivities</Var>" + "\n            " +				
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n";
				
		var choice11 = 	
			"<Atom>" + "\n\t\t" +
			"<Rel>soilTest</Rel>" + "\n\t\t" +
			"<Var>TestCentre</Var>" + "\n\t    " +
			"<Var>AvailableTests</Var>" + "\n    " +
			"</Atom>";
				
		
    
 	 var messageHeader =
                  "<RuleML xmlns=\n   \"http://www.ruleml.org/0.91/xsd\"" + "\n" +
				  " xmlns:xsi=\n   \"http://www.w3.org/2001/XMLSchema-instance\"" + "\n" +
				  " xsi:schemaLocation=\n   \"http://www.ruleml.org/0.91/xsd" + "\n   " +
				  " http://ibis.in.tum.de/research/" + "\n    " + "ReactionRuleML/0.2/rr.xsd\"" + "\n" +
				  " xmlns:ruleml2011=" + "\n   " + "\"http://ibis.in.tum.de/projects/paw#\">" + "\n" +
				  "\n " + "<Message mode=\"outbound\"" + "\n  " + "directive=\"query-sync\">" +
			      "\n   " + "<oid>" + "\n      " + 
			      "<Ind>EP-REGION-SAINTJOHN</Ind>" + "\n   " +
			      "</oid>" + "\n   " +
			      "<protocol>" + "\n      " +
			      "<Ind>esb</Ind>" + "\n   " +
			      "</protocol>" + "\n   " +
			      "<sender>" + "\n      " +
			      "<Ind>User</Ind>" + "\n   " +
			      "</sender>" + "\n   " +
			      "<content>" + "\n      ";			
			

			
	 var messageFooter = 			     
				"   " + "</content>" + "\n " +
			      "</Message>" + "\n" +
			      "</RuleML>";
		
 
		if(choice == 0){
			document.form2.box1.value = messageHeader + choice0 + messageFooter;
		}else if(choice == 1){
			document.form2.box1.value = messageHeader + choice1 + messageFooter;
		}else if(choice == 2){
			document.form2.box1.value = messageHeader + choice2 + messageFooter;
		}else if(choice == 3){
			document.form2.box1.value = messageHeader + choice3 + messageFooter;
		}else if(choice == 4){
			document.form2.box1.value = messageHeader + choice4 + messageFooter;
		}else if(choice == 5){
			document.form2.box1.value = messageHeader + choice5 + messageFooter;
		}else if(choice == 6){
			document.form2.box1.value = messageHeader + choice6 + messageFooter;
		}else if(choice == 7){
			document.form2.box1.value = messageHeader + choice7 + messageFooter;
		}else if(choice == 8){
			document.form2.box1.value = messageHeader + choice8 + messageFooter;
		}else if(choice == 9){
			document.form2.box1.value = messageHeader + choice9 + messageFooter;
		}else if(choice == 10){
			document.form2.box1.value = messageHeader + choice10 + messageFooter;
		}else if(choice == 11){
			document.form2.box1.value = messageHeader + choice10 + messageFooter;
		}
	}
