let tiles = 100
let margin = 100

function setup() {
  let c = createCanvas(900, 900)

  tileSize = width / tiles

  ellipseMode(CORNER)
  noStroke()
  noLoop()

}

function draw() {
  background('#fafafa')

  fill(0,0,0,int(random(0,255)))
  for (var y = margin; y < height - margin; y = y + tileSize + 20) {
    for (var x = margin; x < width - margin; x = x + tileSize + 20) {
      r = int(random(0, 4))
      if (r == 0) {
        fill(0,0,0,int(random(0,255)))
        ellipse(x + tileSize, y + tileSize, tileSize + r , tileSize + r)
      } else if (r == 1) {
        ellipse(x, y + tileSize, tileSize + r, tileSize + r)
      } else if (r == 2) {
        ellipse(x + tileSize, y, tileSize + r, tileSize + r)
      } else if (r == 3) {
        ellipse(x, y, tileSize + r, tileSize + r)
      }
    }
  }
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}
