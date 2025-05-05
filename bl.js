// Blood availability data (dummy data for now)
const bloodData = [
    { group: "A+", units: 15 },
    { group: "A-", units: 5 },
    { group: "B+", units: 8 },
    { group: "B-", units: 2 },
    { group: "AB+", units: 10 },
    { group: "AB-", units: 0 },
    { group: "O+", units: 20 },
    { group: "O-", units: 1 }
  ];
  
  // Function to render blood data
  function renderBloodData() {
    const tableBody = document.getElementById("blood-data");
  
    bloodData.forEach(item => {
      const row = document.createElement("tr");
  
      const groupCell = document.createElement("td");
      groupCell.textContent = item.group;
  
      const unitsCell = document.createElement("td");
      unitsCell.textContent = item.units;
  
      const statusCell = document.createElement("td");
      const status = getStatus(item.units);
      statusCell.textContent = status.text;
      statusCell.className = status.class;
  
      row.appendChild(groupCell);
      row.appendChild(unitsCell);
      row.appendChild(statusCell);
  
      tableBody.appendChild(row);
    });
  }
  
  // Function to determine status based on units
  function getStatus(units) {
    if (units === 0) {
      return { text: "Out of Stock", class: "status-out" };
    } else if (units < 5) {
      return { text: "Low Stock", class: "status-low" };
    } else {
      return { text: "Available", class: "status-available" };
    }
  }
  
  // Function to find blood group
  function findBloodGroup() {
    const input = document.getElementById("blood-group-input").value.trim().toUpperCase();
    const resultMessage = document.getElementById("result-message");
  
    const bloodGroup = bloodData.find(item => item.group === input);
  
    if (bloodGroup) {
      const status = getStatus(bloodGroup.units);
      resultMessage.textContent = `${bloodGroup.group}: ${status.text} (${bloodGroup.units} units available)`;
      resultMessage.className = status.class;
    } else {
      resultMessage.textContent = "Blood group not found. Please enter a valid blood group.";
      resultMessage.className = "status-out";
    }
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    renderBloodData();
    document.getElementById("find-button").addEventListener("click", findBloodGroup);
  });
  