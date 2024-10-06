const textBox = document.getElementById("textBox");
const videoBox1 = document.getElementById("videoBox1");
const videoBox2 = document.getElementById("videoBox2");
const videoBox3 = document.getElementById("videoBox3");
const workcontainer = document.getElementById("workcontainer");
const moveDownButton = document.getElementById("moveDownButton");
const image = document.getElementById("image");

const toggleButton = document.getElementById("me");
const container = document.getElementById("about");
const blurrer = document.getElementById("blurrer");
const blurcolor = document.getElementById("blurcolor");
const aboutall = document.getElementById("aboutall");

const data = [
  {
    code: "32490",
    title: "Pink and Green Berries",
    coordinates: "(40.2724051, -76.9898047)",
    desc: "Ipsum faucibus vitae aliquet nec ullamcorper sit. Mauris pharetra et ultrices neque ornare aenean.",
    textColor: "#a2c20e",
    vidType: "wg.m4v",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1292157504070881312/1292157577492172830/pgberries.jpg?ex=67035fc5&is=67020e45&hm=3c32ae71ee5b7a4fbdb64c4817d5bcfa5cdead2e5a7911581b9a0784dd0208c7&",
  },
  {
    code: "11111",
    title: "Blueberries in the Sky",
    coordinates: "(40.2724051, -76.9898047)",
    desc: "Suspendisse potenti. Sed vulputate mi sit amet mauris commodo.",
    textColor: "#2596be",
    vidType: "wigglebox2.m4v",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1292157504070881312/1292159975363186798/IMG_5158.jpg?ex=67036201&is=67021081&hm=9ce64951a2cd66df63f4811654fab531f6b0705d657121bcea0ec73d3213574a&",
  },
  {
    code: "22222",
    title: "Golden Apple Fields",
    coordinates: "(40.2724051, -76.9898047)",
    desc: "Mauris pharetra et ultrices neque ornare aenean.",
    textColor: "#ff0000",
    vidType: "wg.m4v",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1292157504070881312/1292361123231961149/IMG_5396.jpg?ex=67037496&is=67022316&hm=cc3b5512110a07cc2321802fef4abd7b69fcd2e0217e64c48dc61a3696a12790&",
  },
];

let videosUp = false;

// Set initial transition properties
videoBox1.style.transition = "transform 1s ease, opacity 0.7s ease";
videoBox2.style.transition = "transform 1s ease, opacity 0.7s ease";
videoBox3.style.transition = "transform 1s ease, opacity 0.7s ease";
workcontainer.style.transition = "transform 1s ease, opacity 0.7s ease";
moveDownButton.style.transition = "bottom 1s ease";

// Function to handle moving the videos up
function moveVideosUp() {
  if (textBox.value) {
    const selectedData = data.find((item) => item.code === textBox.value);
    const imgElement = document.getElementById("image");
    const titleElement = document.querySelector(".title");
    const coordinatesElement = document.querySelector(".coords");
    const descElement = document.querySelector(".desc");
    const vidElement = document.getElementById("video-background");

    titleElement.textContent = selectedData.title;
    titleElement.style.color = selectedData.textColor;
    descElement.innerHTML = "<i>" + selectedData.coordinates + "</i> - " + selectedData.desc;
    descElement.style.color = selectedData.textColor;
    imgElement.src = selectedData.imageUrl;
    vidElement.src = "vid/" + selectedData.vidType;
    videosUp = true;
    videoBox1.style.transform = "translateY(-120%)";
    videoBox2.style.transform = "translateY(-120%)";
    videoBox3.style.transform = "translateY(-120%)";
    workcontainer.style.transform = "translateY(-100%)";
    moveDownButton.style.bottom = "calc(100vh - 5rem)";

    // Text color change animation
    textBox.style.color = "#f5d554";
    setTimeout(() => {
      textBox.style.color = "#d5305e";
      setTimeout(() => {
        textBox.style.color = "black";
        setTimeout(() => {
          textBox.style.color = "black";
        }, 200); //back to black
      }, 200); // change to black
    }, 400); // change to pink
  }
}

// Function to handle moving the videos down
function moveVideosDown() {
  videosUp = false;
  videoBox1.style.transform = "translateY(0)";
  videoBox2.style.transform = "translateY(0)";
  videoBox3.style.transform = "translateY(0)";
  workcontainer.style.transform = "translateY(0)";
  moveDownButton.style.bottom = "-4rem";
}

// Function to handle cursor change when hovering over the video boxes
function handleCursorChange() {
  if (data.some((item) => item.code === textBox.value)) {
    videoBox1.style.cursor = "pointer";
    videoBox2.style.cursor = "pointer";
    videoBox3.style.cursor = "pointer";
  } else {
    videoBox1.style.cursor = "default";
    videoBox2.style.cursor = "default";
    videoBox3.style.cursor = "default";
  }
}

textBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const value = textBox.value.trim();
    if (data.some((item) => item.code === value)) {
      moveVideosUp();
    }
  }
});

let angle = 0; // Initial rotation angle
let sway = 0; // Initial sway position
let swayDirection = 1; // To control the sway direction

// Function to animate the image in a circular path with swaying
function animateImage() {
  angle += 1.7; // Adjust the angle increment for slower rotation
  sway += 0.01 * swayDirection; // Adjust the sway increment for slower swaying

  // Reverse the sway direction at a sway angle of .9 degrees
  if (Math.abs(sway) >= 0.9) {
    swayDirection *= -1;
  }

  const radius = 0.7; // Adjust the radius of the circular path

  const x = radius * Math.cos(angle * (Math.PI / 180)); // Calculate new X position
  const y = radius * Math.sin(angle * (Math.PI / 180)); // Calculate new Y position

  image.style.transform = `translate(-50%, -50%) rotate(${sway}deg) translate(${x}%, ${y}%)`; // Apply transform
  requestAnimationFrame(animateImage); // Request the next animation frame
}

animateImage(); // Start the animation

moveDownButton.addEventListener("click", moveVideosDown);

let isOpen = false;

toggleButton.addEventListener("click", () => {
  if (!isOpen) {
    container.style.display = "block";
    setTimeout(() => {
      blurrer.style.opacity = "0.99";
    }); // Delay for opacity transition effect
    setTimeout(() => {
      blurcolor.style.opacity = "0.7";
    }); // Delay for opacity transition effect
    setTimeout(() => {
      aboutall.style.opacity = "1";
    }); // Delay for opacity transition effect
  } else {
    blurrer.style.opacity = "0";
    blurcolor.style.opacity = "0";
    aboutall.style.opacity = "0";
    setTimeout(() => {
      container.style.display = "none"; // Set display none after opacity transition
    }, 1000); // Delay to match opacity transition duration
  }

  isOpen = !isOpen;
});

// Add click event listeners to video boxes
videoBox1.addEventListener("click", moveVideosUp);
videoBox2.addEventListener("click", moveVideosUp);
videoBox3.addEventListener("click", moveVideosUp);

// Handle cursor change when hovering over video boxes
videoBox1.addEventListener("mouseover", handleCursorChange);
videoBox2.addEventListener("mouseover", handleCursorChange);
videoBox3.addEventListener("mouseover", handleCursorChange);

// Reset cursor when moving out of video boxes
videoBox1.addEventListener("mouseout", () => {
  videoBox1.style.cursor = "default";
});
videoBox2.addEventListener("mouseout", () => {
  videoBox2.style.cursor = "default";
});
videoBox3.addEventListener("mouseout", () => {
  videoBox3.style.cursor = "default";
});

textBox.addEventListener("input", () => {
  if (videosUp) {
    if (textBox.value.length < 5) {
      moveVideosDown();
    }
  }
  if (textBox.value.length === 5) {
    if (data.some((item) => item.code === textBox.value)) {
      videoBox1.style.opacity = "0";
      videoBox2.style.opacity = "0";
      videoBox3.style.opacity = "1";
    } else {
      videoBox1.style.opacity = "0";
      videoBox2.style.opacity = "1";
      videoBox3.style.opacity = "0";
    }
  } else {
    videoBox1.style.opacity = "1";
    videoBox2.style.opacity = "0";
    videoBox3.style.opacity = "0";
  }
});
