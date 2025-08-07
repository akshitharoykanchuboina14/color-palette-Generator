function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = ""; // clear previous colors

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorDiv = document.createElement("div");
    colorDiv.className = "color";
    colorDiv.style.backgroundColor = color;

    const hex = document.createElement("div");
    hex.className = "hex";
    hex.innerText = color;

    // Copy to clipboard on click
    colorDiv.onclick = () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} to clipboard!`);
    };

    colorDiv.appendChild(hex);
    palette.appendChild(colorDiv);
  }
}

// Generate palette on page load
window.onload = generatePalette;
