const charge = document.getElementById("charge");
const chargeLevel = document.getElementById("charge-level");
window.onload = () => {
  //For browsers that don't support the battery status API
  if (!navigator.getBattery) {
    alert("Battery Status Api Is Not Supported In Your Browser");
    return false;
  }
};

navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargingInfo();
    updateLevelInfo();
  }
  updateAllBatteryInfo();

  //When the charging status changes
  battery.addEventListener("chargingchange", () => {
    updateAllBatteryInfo();
  });

  //When the Battery Levvel Changes
  battery.addEventListener("levelchange", () => {
    updateAllBatteryInfo();
  });

  function updateChargingInfo() {
    if (battery.charging) {
      charge.classList.add("active");
      chargingTimeRef.innerText = "";
    } else {
      charge.classList.remove("active");

      //Display time left to discharge only when it is a integer value i.e not infinity
   
    }
  }

  //Updating battery level
  function updateLevelInfo() {
    let batteryLevel = `${parseInt(battery.level * 100)}%`;
    charge.style.width = batteryLevel;
    chargeLevel.textContent = batteryLevel;
  }
});