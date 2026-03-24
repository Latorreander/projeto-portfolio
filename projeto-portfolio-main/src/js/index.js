const tabs = document.querySelectorAll(".tab");

const informations = document.querySelectorAll(".information");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("selected")) {
      return;
    }

    const currentTab = document.querySelector(".selected");

    currentTab.classList.remove("selected");

    tab.classList.add("selected");
    

    const currentInformation = document.querySelector(".information.selected");

    currentInformation.classList.remove("selected");

    idElementInformationTab = `information-${tab.id}`;

    const informationToBeShown = document.getElementById(
      idElementInformationTab
    );

    informationToBeShown.classList.add("selected");
  });

});
