import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

const canvas = document.getElementById("bg-canvas")

const cursorEffect = TubesCursor(canvas, {
  tubes: {
    colors: ["#00ffff", "#ff00ff", "#ffff00"],
    lights: {
      intensity: 180,
      colors: ["#00ffff", "#ff8800", "#ff00aa"]
    }
  }
})

document.addEventListener("click", () => {
  cursorEffect.tubes.setColors(generateRandomColors(3))
  cursorEffect.tubes.setLightsColors(generateRandomColors(3))
})

function generateRandomColors(amount) {
  return Array.from({ length: amount }, () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
  })
}