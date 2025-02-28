let streak = 0;
let plantImage = document.getElementById("plant-image");
let streakDisplay = document.getElementById("streak");
let growthStatus = document.getElementById("growth-status");

function updatePlantGrowth() {
    streak++;
    streakDisplay.textContent = `Streak: ${streak} days`;

    // Update the plant image based on the streak
    if (streak >= 30) {
        growthStatus.textContent = "The plant has bloomed into a beautiful flower!";
        plantImage.src = "images/flower.png";  // Image for the fully bloomed flower
        plantImage.style.width = "150px";  // Increase size for bloom
        setTimeout(() => {
            streak = 0;  // Reset streak after 1 month
            growthStatus.textContent = "The plant has reset.";
            plantImage.src = "images/seed.png";  // Reset to seed image
            plantImage.style.width = "100px";  // Reset size
            streakDisplay.textContent = `Streak: 0 days`;
        }, 5000);  // Wait for 5 seconds before resetting
    } else if (streak >= 25) {
        plantImage.src = "images/mature_plant.png";  // Mature plant
        plantImage.style.width = "125px";
    } else if (streak >= 20) {
        plantImage.src = "images/growing_plant.png";  // Growing plant
        plantImage.style.width = "120px";
    } else if (streak >= 10) {
        plantImage.src = "images/young_plant.png";  // Young plant
        plantImage.style.width = "110px";
    } else if (streak >= 5) {
        plantImage.src = "images/seedling.png";  // Seedling
        plantImage.style.width = "105px";
    } else {
        plantImage.src = "images/seed.png";  // Seed
        plantImage.style.width = "100px";
    }
}

// Listen for button click to increase streak
document.getElementById("increase-streak").addEventListener("click", updatePlantGrowth);
