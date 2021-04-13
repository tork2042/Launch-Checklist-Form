window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( (response) => {
      response.json().then( (planetaryDataArray) => {
      const div = document.getElementById("missionTarget");

      div.innerHTML = `
         <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${planetaryDataArray[1].name}</li>
                  <li>Diameter: ${planetaryDataArray[1].diameter}</li>
                  <li>Star: ${planetaryDataArray[1].star}</li>
                  <li>Distance from Earth: ${planetaryDataArray[1].distance}</li>
                  <li>Number of Moons: ${planetaryDataArray[1].moons}</li>
               </ol>
               <img src="${planetaryDataArray[1].image}"></img>
         `;                  
      });
   });   
      
   let form = document.getElementById("launchForm");

  
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      
 
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let coPilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let faultyItems = document.getElementById("faultyItems");
      
      if(isNaN(pilotName.value) === false || isNaN(coPilotName.value) === false ||
       isNaN(fuelLevel.value) === true || isNaN(cargoMass.value)=== true){
         alert("All fields are required or Invalid Entry");
         launchStatus = launchStatus;

      }

      
      if(isNaN(pilotName.value) === true || isNaN(coPilotName.value) === true ||
      isNaN(fuelLevel.value) === false || isNaN(cargoMass.value)=== false){
         faultyItems.style.visibility = 'visible';

      }


      if(pilotName.value = ''){
         pilotStatus.innerHTML = `No pilot assigned to Shuttle`;
      }else{
         faultyItems.style.visibility = 'visible';
         pilotStatus.innerHTML = `Pilot: ${pilotName.value} is ready for launch`;
      }
      if(coPilotName.value = ''){
         coPilotStatus.innerHTML = `No Co-Pilot assigned to Shuttle`;
      }else{
         faultyItems.style.visibility = 'visible';
         coPilotStatus.innerHTML = `Co-Pilot: ${coPilotName.value} is ready for launch`;
         
      }   

      if(fuelLevel.value < 10000 && cargoMass.value > 10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = `There is not enough fuel for the journey`;
         cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
      }
      else if(fuelLevel.value < 10000 && cargoMass.value < 10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = `There is not enough fuel for the journey`;
         cargoStatus = cargoStatus;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
      }
      else if(fuelLevel.value > 10000 && cargoMass.value > 10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus = fuelStatus;
         cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
      }
      else if(fuelLevel.value > 10000 && cargoMass.value < 10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus = fuelStatus;
         cargoStatus = cargoStatus;
         launchStatus.innerHTML = `Ready to Launch`;
         launchStatus.style.color = 'green';
      }else {
   
      }

      
   });
   

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
