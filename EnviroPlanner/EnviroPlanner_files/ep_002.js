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
				"<Var>AlertMessage</Var>" + "\n         " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n"; 
        
//Heat alert Level, 
		var choice1 = 
			    "<Atom>" + "\n         " +
			    "<Rel>heatAlert</Rel>" + "\n         " + 
				"<Ind type=\"integer\">40</Ind>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>alert</Fun>" + "\n            " +
				"<Var>Level</Var>" + "\n            " +
				"<Var>DegereeOfComfort</Var>" + "\n           " +
				"<Var>Effects</Var>" + "\n         " +
				"</Expr>" + "\n      " + 
			    "</Atom>" + "\n"; 
				
//Fredericton region available emission neutralizer
//?Pollutant, ?Remedy, ?ChemCompound, measurement[?AmountofPollutant, // ?AmountofRemedy, ?UnitofMeasurement])

		var choice2 =  	
				"<Atom>" + "\n         " +
			    "<Rel>emissionNeutralizer</Rel>" + "\n         " + 
				"<Ind type=\"string\">AB Chemical Limited</Ind>" + "\n         " +
				"<Var>Pollutant</Var>" + "\n         " + 
				"<Var>Remedy</Var>" + "\n        " + 
				"<Var>ChemCompound</Var>" + "\n        " + 
				"<Expr>" + "\n            " +
				"<Fun>measurement</Fun>" + "\n            " +					
				"<Var>AmountofPollutant</Var>" + "\n           " + 
				"<Var>AmountofRemedy</Var>" + "\n           " +
				"<Var>UnitofMeasurement</Var>" + "\n      " +
				"</Expr>" + "\n      " + 
				"</Atom>" + "\n";
				
//Fredericton region power stations 
    
		var choice3 = 
			    "<Atom>" + "\n         " +
			    "<Rel>powerStation</Rel>" + "\n          " + 
				"<Var>StationName</Var>" + "\n            " +
				"<Var>InstalledCapacity</Var>" + "\n            " +
				"<Var>StationType</Var>" + "\n            " +
				"<Var>HydraulicHead</Var>" + "\n            " +
				"<Var>Turbines</Var>" + "\n            " +	
				"<Var>TypeofDam</Var>" + "\n            " +
				"<Var>Height</Var>" + "\n            " +
				"<Var>Length</Var>" + "\n            " +
				"<Var>NumofSpillways</Var>" + "\n         " +
			    "</Atom>" + "\n"; 
						
				
//EnviroPlanner: Watershed protection zones in Fredericton 
//?CO2Tolerance:integer, ?NO2Tolerance:integer, ?NH4Tolerance:integer, ?ToleranceLevel, ?Tolerability
		var choice4 =  	
				"<Atom>" + "\n         " +
			    "<Rel>chemTolerance</Rel>" + "\n         " + 
				"<Ind type=\"string\">City A</Ind>" + "\n         " +
				"<Ind type=\"integer\">2</Ind>" + "\n         " +
				"<Ind type=\"integer\">3</Ind>" + "\n         " +
				"<Ind type=\"integer\">2</Ind>" + "\n         " +				
				"<Var>ToleranceLevel</Var>" + "\n         " + 
				"<Var>Tolerability</Var>" + "\n        " + 
				"</Atom>" + "\n";
				
			     			      
//EnviroPlanner soil Pollutant Emissions	
//Organization: Release soil Pollution Substances
		var choice5 = 
			    "<Atom>" + "\n         " +
			    "<Rel>soilPollutantRelease</Rel>" + "\n         " + 
				"<Ind type=\"integer\">2012</Ind>" + "\n         " +
				"<Ind type=\"string\">XY Paper Industries</Ind>" + "\n         " +
                "<Var>FacilityName</Var>" + "\n         " +
				"<Var>AmountofDumpedTrash</Var>" + "\n         " +
				"<Var>TotalRelease</Var>" + "\n         " +
				"<Var>MajorSubstances</Var>" + "\n      " +
			    "</Atom>" + "\n";
			
//EnvioPlanner: Water service rates in Saint John region 
		var choice6 = 
			    "<Atom>" + "\n         " +
			    "<Rel>waterServiceRates</Rel>" + "\n         " + 
				"<Var>MeterSize</Var>" + "\n            " +
				"<Expr>" + "\n            " +
				"<Fun>waterRate</Fun>" + "\n            " +
				"<Var>BiMonthlyWaterRate</Var>" + "\n            " +
				"<Var>AnnualWaterRate</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>sewerRate</Fun>" + "\n            " +
				"<Var>BiMonthlySewerRate</Var>" + "\n           " +
				"<Var>AnnualSewerRate</Var>" + "\n         " +
				"</Expr>" + "\n         " + 
				"<Var>CombinedBiMonthyRate</Var>" + "\n         " +
			    "</Atom>" + "\n"; 

//EnvioPlanner: Nuclear Power station in Saint John   
		var choice7 = 
			    "<Atom>" + "\n         " +
			    "<Rel>nuclearPowerStation</Rel>" + "\n         " + 
				"<Var>StationName</Var>" + "\n          " +
				"<Var>Capacity</Var>" + "\n         " +
				"<Var>ReactorType</Var>" + "\n         " +
				"<Var>ReactorSupplier</Var>" + "\n         " +
				"<Var>AnnualGeneration</Var>" + "\n         " +
				"<Var>NetGeneration</Var>" + "\n         " +
				"<Var>RefurbishCost</Var>" + "\n         " +
				"<Var>RefurbishTime</Var>" + "\n         " +
			    "</Atom>" + "\n"; 		
	
//EnvioPlanner: Moncton Petitcodiac river restoration  
		var choice8 =
			    "<Atom>" + "\n         " +
			      "<Rel>riverRestoration</Rel>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>petitcodiacRiver</Fun>" + "\n            " +
				"<Var>NickName</Var>" + "\n            " +
				"<Var>Source</Var>" + "\n            " +
				"<Var>StreamMouth</Var>" + "\n            " + 
				"<Var>Length</Var>" + "\n            " +
				"<Var>DrainageBasin</Var>" + "\n          " +
				"<Var>RightBankTributaries</Var>" + "\n         " +				
				"<Var>LeftBankTributaries</Var>" + "\n         " +						
				"</Expr>" + "\n        " + 
				"<Expr>" + "\n            " +
				"<Fun>restoration</Fun>" + "\n            " +
				"<Var>PhaseOne</Var>" + "\n            " +
				"<Var>PhaseTwo</Var>" + "\n          " +
				"<Var>PhaseThree</Var>" + "\n        " +
				"<Var>RestorationTimeLine</Var>" + "\n        " +
				"<Var>TotalCost</Var>" + "\n          " +
				"</Expr>" + "\n         " + 
				"<Var>RestorationBenefits</Var>" + "\n         " + 
			    "</Atom>" + "\n"; 
        
//EnvioPlanner: Moncton soil pollutants   
		var choice9 = 
				"<Atom>" + "\n         " +
			    "<Rel>airPollutantEmission</Rel>" + "\n         " + 
				"<Ind type=\"integer\">2011</Ind>" + "\n         " +
				"<Ind type=\"string\">Moncton Oil Company</Ind>" + "\n         " +
                "<Var>FacilityName</Var>" + "\n         " +
				"<Var>UnitofMeasure</Var>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>greenHouseGas</Fun>" + "\n            " +	
				"<Var>TotalGHGEmission</Var>" + "\n           " +
				"<Var>AmountofCO2</Var>" + "\n           " +
				"<Var>AmountofCH4</Var>" + "\n          " +
				"<Var>AmountofN2O</Var>" + "\n          " +
				"<Var>AmountofOtherGHGases</Var>" + "\n         " +
				"</Expr>" + "\n          " + 
				"<Var>TotalEmission</Var>" + "\n         " +
			    "</Atom>" + "\n";
			
//EnvioPlanner: Web Resource and Air Expert's Contact
		var choice10 = 
				"<Atom>" + "\n         " +
			    "<Rel>getExpertContact</Rel>" + "\n         " + 
				"<Ind>enviroPlanner_Air</Ind>" + "\n         " +				
				"<Var>WebResource</Var>" + "\n     " +
			    "</Atom>" + "\n";
			     			
//EnvioPlanner: Web Resource and Energy Expert's Contact
		var choice11 = 
				"<Atom>" + "\n         " +
			    "<Rel>getExpertContact</Rel>" + "\n         " + 
				"<Ind>enviroPlanner_Energy</Ind>" + "\n         " +				
				"<Var>WebResource</Var>" + "\n     " +
			    "</Atom>" + "\n";

//EnvioPlanner: Web resource and water expert's contact			
		var choice12 = 
				"<Atom>" + "\n         " +
			    "<Rel>getExpertContact</Rel>" + "\n         " + 
				"<Ind>enviroPlanner_Water</Ind>" + "\n         " +				
				"<Var>WebResource</Var>" + "\n     " +
			    "</Atom>" + "\n";
			   			
//EnvioPlanner: Web resource and soil expert's contact			
		var choice13 = 
				"<Atom>" + "\n         " +
			    "<Rel>getExpertContact</Rel>" + "\n         " + 
				"<Ind>enviroPlanner_Soil</Ind>" + "\n         " +				
				"<Var>WebResource</Var>" + "\n     " +
			    "</Atom>" + "\n";
				
//EnvioPlanner: Soil Expert Soil Test centre 
		var choice14 = 
				"<Atom>" + "\n         " +
				"<Rel>soilTest</Rel>" + "\n         " + 
				"<Var>SoilSample</Var>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>fees</Fun>" + "\n            " +
				"<Var>WormTestFee</Var>" + "\n             " +
				"<Var>RecordTestFee</Var>" + "\n           " +
				"<Var>PHTestFee</Var>" + "\n           " +
				"</Expr>" + "\n           " +  
				"<Var>TestCenterAddress</Var>" + "\n         " +	
			    "</Atom>" + "\n";

	 var messageHeader =
                  "<RuleML xmlns=\n  \"http://www.ruleml.org/0.91/xsd\"" + "\n" +
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
				  
//EnviroPlanner English Description: Air quality and health effects 						  
	 var choice15 ="When maximum Nitrogen Dioxide (NO2) tolerance of a person is thirty parts per million (ppm), what is the air quality level for that threshold? What are the health effects of that level? If any current date is given, for example, 27th March, 2013, display the dates when air quality level might be same like the current date";
 
 	 var choice16 ="When Humidex is 40, what is the heat alert level, and degree Of comfort in Fredericton? What is the effects of that level?";
 
 	 var choice17 ="What chemical remedies can be used to neutralize the pollutants emitted by AB Chemical Limited, and what chemical compound is produced as a outcome of the neutralization process?";
  	 
	 var choice18 ="What are the available electrical power generation stations in Fredericton? What are the characteristics of these power stations?";
	 
	 var choice19 ="In a scale of 1 to 3, a user's chemical tolerances are 2, 1, and 1 for Carbon dioxide, Nitrogen dioxide, and Methane respectively. Compare the user's tolerances with City A's respective chemical tolerance, and show me the tolerance level and tolerability.";

 	 var choice20 ="How much soil pollutants were released by XY Paper Industries in 2012? What are the major substances released by by this company?";
 
 	 var choice21 ="Based on a meter size, what are the water and sewer service rates, bimonthly and annually, in Saint John? What is the combined rate?";
 
 	 var choice22 ="What is the refurbish cost and time-frame of the nuclear power generation station in Saint John? What is the capacity? How much electricity does it generate annually? What type of reactor does it use, and who is the reactor supplier?";
 
 	 var choice23 ="What is the source, stream-mouth, length, and drainage basin of the petitcodiac river? What are the right-bank and left-bank tributaries of this river? What is the restoration time-frame, and restoration phases of the petitcodiac river? What is the approximate total cost of this entire restoration process?";
 
 	 var choice24 ="How much air pollutants were released by Moncton Oil Company in 2012? What are the amounts of greenhouse gases released by Moncton Oil Company in the same year?"; 
 
 	 var choice25 ="Retrieve the available web resources and air quality expert(s)?";
 
 	 var choice26 ="Retrieve the available web resources and energy expert(s)?";
 
 	 var choice27 ="Retrieve the available web resources and water quality expert(s)?";
 
 	 var choice28 ="Retrieve the available web resources and soil quality expert(s)?";
 
 	 var choice29 ="Retrieve the available soil quality testing facilities? What are the fees for different soil tests?";
 
		if(choice == 0){
			document.form2.box1.value = messageHeader + choice0 + messageFooter; 
			document.form5.box2.value = choice15;
		}else if(choice == 1){
			document.form2.box1.value = messageHeader + choice1 + messageFooter;
			document.form5.box2.value = choice16;
		}else if(choice == 2){
			document.form2.box1.value = messageHeader + choice2 + messageFooter;
			document.form5.box2.value = choice17;
		}else if(choice == 3){
			document.form2.box1.value = messageHeader + choice3 + messageFooter;
			document.form5.box2.value = choice18;
		}else if(choice == 4){
			document.form2.box1.value = messageHeader + choice4 + messageFooter;
			document.form5.box2.value = choice19;
		}else if(choice == 5){
			document.form2.box1.value = messageHeader + choice5 + messageFooter;
			document.form5.box2.value = choice20;
		}else if(choice == 6){
			document.form2.box1.value = messageHeader + choice6 + messageFooter;
			document.form5.box2.value = choice21;
		}else if(choice == 7){
			document.form2.box1.value = messageHeader + choice7 + messageFooter;
			document.form5.box2.value = choice22;
		}else if(choice == 8){
			document.form2.box1.value = messageHeader + choice8 + messageFooter;
			document.form5.box2.value = choice23;
		}else if(choice == 9){
			document.form2.box1.value = messageHeader + choice9 + messageFooter;
			document.form5.box2.value = choice24;
		}else if(choice == 10){
			document.form2.box1.value = messageHeader + choice10 + messageFooter;
			document.form5.box2.value = choice25;
		}else if(choice == 11){
			document.form2.box1.value = messageHeader + choice11 + messageFooter;
			document.form5.box2.value = choice26;
		}else if(choice == 12){
			document.form2.box1.value = messageHeader + choice12 + messageFooter;
			document.form5.box2.value = choice27;
		}else if(choice == 13){
			document.form2.box1.value = messageHeader + choice13 + messageFooter;
			document.form5.box2.value = choice28;
		}else if(choice == 14){
			document.form2.box1.value = messageHeader + choice14 + messageFooter;
			document.form5.box2.value = choice29;
		}
	}
	
	function elementSelected3(){   
 
		var choice = document.form3.select3.selectedIndex;    
			
//Fredericton region air Pollutant Emissions 
		var choice0 = 
				"<Atom>" + "\n         " +
			    "<Rel>airPollutantEmission</Rel>" + "\n         " + 
				"<Ind type=\"integer\">2012</Ind>" + "\n         " +
				"<Ind type=\"string\">ABC Corporation</Ind>" + "\n         " +
                "<Var>FacilityName</Var>" + "\n         " +
				"<Var>UnitofMeasure</Var>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>greenHouseGas</Fun>" + "\n            " +	
				"<Var>TotalGHGEmission</Var>" + "\n         " +
				"<Var>AmountofCO2</Var>" + "\n         " +
				"<Var>AmountofCH4</Var>" + "\n        " +
				"<Var>AmountofN2O</Var>" + "\n        " +
				"<Var>AmountofOtherGHGases</Var>" + "\n         " +
				"</Expr>" + "\n        " + 
				"<Var>TotalEmission</Var>" + "\n         " +
			    "</Atom>" + "\n";

//Fredericton region available Energy Services
		var choice1 =  	
				"<Atom>" + "\n         " +
			    "<Rel>powerStation</Rel>" + "\n         " + 
				"<Var>StationName</Var>" + "\n         " + 
				"<Var>InstalledCapacity</Var>" + "\n        " +
				"<Var>StationType</Var>" + "\n         " +
				"<Var>HydraulicHead</Var>" + "\n         " + 
				"<Var>Turbines</Var>" + "\n        " + 
				"<Var>TypeofDam</Var>" + "\n         " + 
				"<Var>Height</Var>" + "\n        " + 
				"<Var>Length</Var>" + "\n        " + 
				"<Var>NumofSpillways</Var>" + "\n        " + 				
				"</Atom>" + "\n";


//Fredericton released water pollutant emissions        	
		var choice2 = 
				"<Atom>" + "\n         " +
			    "<Rel>waterPollutantRelease</Rel>" + "\n         " + 
				"<Ind type=\"integer\">2012</Ind>" + "\n         " +
				"<Ind type=\"string\">ABC Corporation</Ind>" + "\n         " +
                "<Var>FacilityName</Var>" + "\n         " +
				"<Var>DirectDischarge</Var>" + "\n         " +
				"<Var>TotalRelease</Var>" + "\n         " +
				"<Var>MajorSubstances</Var>" + "\n      " +
			    "</Atom>" + "\n";
			 		

//Fredericton watercourse and wetland alteration permit		 
		var choice3 = 
				"<Atom>" + "\n         " +
			    "<Rel>alterationPermit</Rel>" + "\n         " + 
				"<Var>PermitType</Var>" + "\n         " + 
				"<Var>IntendedWork</Var>" + "\n      " + 
				"<Var>PermitFee</Var>" + "\n      " + 
				"<Var>YearlyRenewalFee</Var>" + "\n      " + 
				"</Atom>" + "\n";
				
// Fredericton Soil Expert Soil Test centre 
		var choice4 = 
				"<Atom>" + "\n         " +
				"<Rel>soilTest</Rel>" + "\n         " + 
				"<Var>SoilSample</Var>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>fees</Fun>" + "\n            " +
				"<Var>WormTestFee</Var>" + "\n             " +
				"<Var>RecordTestFee</Var>" + "\n           " +
				"<Var>PHTestFee</Var>" + "\n           " +
				"</Expr>" + "\n           " +  
				"<Var>TestCenterAddress</Var>" + "\n         " +	
			    "</Atom>" + "\n";

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
				  
//Fredericton Region English Description:  						  
	 var choice5 ="How much air pollutants were released by ABC Corporation in 2012? What are the amounts of greenhouse gases released by ABC Corporation in the same year?"; 
 
 	 var choice6 ="What is the installed electrical capacity of the Mactaquac Dam? What is the type, height, length, number of the turbines and Spillways of the Dam?"; 
 
 	 var choice7 ="How much water pollutants were released by ABC Corporation in 2012? How much water pollutants were directly discharged into water? how much was the total release, and what were the main substances released by the same company?"; 
  	 
	 var choice8 ="What types of water course and wetland alteration permits are available? How much is the permit fees, and how much is the yearly renewal fees";
	 
	 var choice9 ="Retrieve the available soil quality testing facilities in Fredericton? What are the fees for different soil tests?";

		if(choice == 0){
			document.form2.box1.value = messageHeader + choice0 + messageFooter;
			document.form5.box2.value = choice5;
		}else if(choice == 1){
			document.form2.box1.value = messageHeader + choice1 + messageFooter;
			document.form5.box2.value = choice6;
		}else if(choice == 2){
			document.form2.box1.value = messageHeader + choice2 + messageFooter;
			document.form5.box2.value = choice7;
		}else if(choice == 3){
			document.form2.box1.value = messageHeader + choice3 + messageFooter;
			document.form5.box2.value = choice8;
		}else if(choice == 4){
			document.form2.box1.value = messageHeader + choice4 + messageFooter;
			document.form5.box2.value = choice9;
		}
	}	
	
	function elementSelected4(){ 
		var choice = document.form4.select4.selectedIndex;	    
				
//Saint John region air Pollutant Emissions      
		var choice0 = 
				"<Atom>" + "\n         " +
			    "<Rel>airPollutantEmission</Rel>" + "\n         " + 
				"<Ind type=\"integer\">2011</Ind>" + "\n         " +
				"<Ind type=\"string\">NB Oil Corporation</Ind>" + "\n         " +
                "<Var>FacilityName</Var>" + "\n         " +
				"<Var>UnitofMeasure</Var>" + "\n         " +
				"<Expr>" + "\n            " +
				"<Fun>greenHouseGas</Fun>" + "\n            " +	
				"<Var>AmountofCO2</Var>" + "\n             " +
				"<Var>AmountofSO2</Var>" + "\n             " +
				"<Var>AmountofN2O</Var>" + "\n             " +
				"<Var>AmountofOtherGHGases</Var>" + "\n       " +
				"<Var>TotalGHGEmission</Var>" + "\n          " +
				"</Expr>" + "\n             " +
				"<Var>TotalEmission</Var>" + "\n            " +
			    "</Atom>" + "\n";


// Nuclear Power station in Saint John   
		var choice1 = 
			    "<Atom>" + "\n         " +
			    "<Rel>nuclearPowerStation</Rel>" + "\n         " + 
				"<Var>StationName</Var>" + "\n          " +
				"<Var>InstalledCapacity</Var>" + "\n         " +
				"<Var>AnnualGeneration</Var>" + "\n         " +
				"<Var>NetGeneration</Var>" + "\n         " +
				"<Var>ReactorType</Var>" + "\n         " +
				"<Var>TurbineType</Var>" + "\n         " +
				"<Var>TurbineSpeed</Var>" + "\n         " +
				"<Var>SteamTemperature</Var>" + "\n         " +
				"<Var>Condenser</Var>" + "\n         " +
			    "</Atom>" + "\n"; 		

//Saint John released water pollutant emissions        	
		var choice2 = 
				"<Atom>" + "\n         " +
			    "<Rel>waterPollutantRelease</Rel>" + "\n         " + 
				"<Ind type=\"integer\">2012</Ind>" + "\n         " +
				"<Ind type=\"string\">JDC Power Corporation</Ind>" + "\n         " +
                "<Var>FacilityName</Var>" + "\n         " +
				"<Var>DirectDischarge</Var>" + "\n         " +
				"<Var>TotalRelease</Var>" + "\n         " +
				"<Var>MajorSubstances</Var>" + "\n      " +
			    "</Atom>" + "\n";
							
				
// Saint John Soil Test centre 
		var choice3 = 
				"<Atom>" + "\n         " +
				"<Rel>soilTest</Rel>" + "\n         " + 
				"<Var>SoilSample</Var>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>fees</Fun>" + "\n            " +
				"<Var>WormTestFee</Var>" + "\n             " +
				"<Var>RecordTestFee</Var>" + "\n           " +
				"<Var>PHTestFee</Var>" + "\n           " +
				"</Expr>" + "\n           " +  
				"<Var>TestCenterAddress</Var>" + "\n         " +	
			    "</Atom>" + "\n";
  						  
        
// Saint John soil pollutants   
		var choice4 = 
			    "<Atom>" + "\n         " +
			    "<Rel>soilPollutantRelease</Rel>" + "\n         " + 
				"<Ind type=\"integer\">2012</Ind>" + "\n         " +
				"<Ind type=\"string\">XY Paper Industries</Ind>" + "\n         " +
                "<Var>FacilityName</Var>" + "\n         " +
				"<Var>AmountofDumpedTrash</Var>" + "\n         " +
				"<Var>TotalRelease</Var>" + "\n         " +
				"<Var>MajorSubstances</Var>" + "\n      " +
			    "</Atom>" + "\n";
				
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
		
				  
 //Saint John Region English Description:  						  
	 var choice5 ="How much air pollutants were released by NB Oil Corporation in 2011? What are the amounts of greenhouse gases released by NB Oil Corporation in the same year?";
 
 	 var choice6 ="What is the installed capacity, annual generation, and net generation of the Point Lepreau nuclear power station? What types of turbines and reactors does it use?";
 
 	 var choice7 ="How much water pollutants were released by JDC Power Corporation in 2012? How much water pollutants were directly discharged into water? How much was the total release, and what were the main substances that were released by the company?"; 
  	 
	 var choice8 ="Retrieve the available soil quality testing facilities in Saint John? What are the fees for different soil tests?";
	 
	 var choice9 ="How much soil pollutants were released by XY Paper Industries in 2012? What are the major substances released by this company?";
 
 
		if(choice == 0){
			document.form2.box1.value = messageHeader + choice0 + messageFooter;
			document.form5.box2.value = choice5;
		}else if(choice == 1){
			document.form2.box1.value = messageHeader + choice1 + messageFooter;
			document.form5.box2.value = choice6;
		}else if(choice == 2){
			document.form2.box1.value = messageHeader + choice2 + messageFooter;
			document.form5.box2.value = choice7;
		}else if(choice == 3){
			document.form2.box1.value = messageHeader + choice3 + messageFooter;
			document.form5.box2.value = choice8;
		}else if(choice == 4){
			document.form2.box1.value = messageHeader + choice4 + messageFooter;
			document.form5.box2.value = choice9;
		}
	}	
	
	function elementSelected6(){ 
		var choice = document.form6.select6.selectedIndex;
		

// Moncton region power stations  
		var choice0 = 
			    "<Atom>" + "\n         " +
			    "<Rel>powerStation</Rel>" + "\n         " + 
				"<Var>StationName</Var>" + "\n            " +
				"<Var>TotalCapacity</Var>" + "\n            " +
				"<Var>AnnualProduction</Var>" + "\n         " +
				"<Var>TurbineModel</Var>" + "\n         " +	
				"<Var>NumOfTurbine</Var>" + "\n         " +
				"<Var>BladeLength</Var>" + "\n         " +
			    "</Atom>" + "\n"; 

// Moncton Petitcodiac river restoration  
		var choice1 =
			    "<Atom>" + "\n         " +
			      "<Rel>riverRestoration</Rel>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>river</Fun>" + "\n            " +
				"<Var>RiverName</Var>" + "\n            " +
				"<Var>Source</Var>" + "\n            " +
				"<Var>StreamMouth</Var>" + "\n            " + 
				"<Var>Length</Var>" + "\n            " +
				"<Var>DrainageBasin</Var>" + "\n          " +
				"<Var>RightBankTributaries</Var>" + "\n         " +				
				"<Var>LeftBankTributaries</Var>" + "\n         " +						
				"</Expr>" + "\n        " + 
				"<Expr>" + "\n            " +
				"<Fun>restoration</Fun>" + "\n            " +
				"<Var>PhaseOne</Var>" + "\n            " +
				"<Var>PhaseTwo</Var>" + "\n          " +
				"<Var>PhaseThree</Var>" + "\n        " +
				"<Var>RestorationTimeLine</Var>" + "\n        " +
				"<Var>TotalCost</Var>" + "\n          " +
				"</Expr>" + "\n         " + 
				"<Var>RestorationBenefits</Var>" + "\n         " + 
			    "</Atom>" + "\n"; 
        		 		
		// Moncton Soil Test center 
		var choice2 = 
				"<Atom>" + "\n         " +
				"<Rel>soilTest</Rel>" + "\n         " + 
				"<Var>SoilSample</Var>" + "\n         " + 
				"<Expr>" + "\n            " +
				"<Fun>fees</Fun>" + "\n            " +
				"<Var>WormTestFee</Var>" + "\n             " +
				"<Var>RecordTestFee</Var>" + "\n           " +
				"<Var>PHTestFee</Var>" + "\n           " +
				"</Expr>" + "\n           " +  
				"<Var>TestCenterAddress</Var>" + "\n         " +	
			    "</Atom>" + "\n"; 			  
		 
 	 var messageHeader =
                  "<RuleML xmlns=\n   \"http://www.ruleml.org/0.91/xsd\"" + "\n" +
				  " xmlns:xsi=\n   \"http://www.w3.org/2001/XMLSchema-instance\"" + "\n" +
				  " xsi:schemaLocation=\n   \"http://www.ruleml.org/0.91/xsd" + "\n   " +
				  " http://ibis.in.tum.de/research/" + "\n    " + "ReactionRuleML/0.2/rr.xsd\"" + "\n" +
				  " xmlns:ruleml2011=" + "\n   " + "\"http://ibis.in.tum.de/projects/paw#\">" + "\n" +
				  "\n " + "<Message mode=\"outbound\"" + "\n  " + "directive=\"query-sync\">" +
			      "\n   " + "<oid>" + "\n      " + 
			      "<Ind>EP-REGION-MONCTON</Ind>" + "\n   " +
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
				  
 //Moncton Region English Description:  						  
 	 var choice3 ="What is the total capacity of the Moncton wind farm? What kind of turbine does it use, and what is the length of the turbine's blade?";
 
 	 var choice4 ="What is the source, stream-mouth, length, and drainage basin of the Moncton Petitcodiac River? What are the right-bank and left-bank tributaries of the river? What is the restoration time frame, and what are the restoration phases of the Petitcodiac River? What is the approximate total cost of the entire restoration process?";
  	 
	 var choice5 ="Retrieve the available soil quality testing facilities in Moncton? What are the fees for different soil tests?";
	   
		if(choice == 0){
			document.form2.box1.value = messageHeader + choice0 + messageFooter;
			document.form5.box2.value = choice3;
		}else if(choice == 1){
			document.form2.box1.value = messageHeader + choice1 + messageFooter;
			document.form5.box2.value = choice4;
		}else if(choice == 2){
			document.form2.box1.value = messageHeader + choice2 + messageFooter;
			document.form5.box2.value = choice5;
		}
	}