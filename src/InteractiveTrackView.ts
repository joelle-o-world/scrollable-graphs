import TrackView from "./TrackView";

class InteractiveTrackView extends TrackView {
  canvas: HTMLCanvasElement;

  constructor(canvas:HTMLCanvasElement = document.createElement('canvas')) {
    super(canvas)
    this.canvas.addEventListener('wheel', e => {
      e.preventDefault()

      let rect = this.canvas.getBoundingClientRect();
      let mouseX = e.clientX-rect.left;
      let mouseY = e.clientY-rect.top;

      if(Math.abs(e.deltaX) > 20)
        this.lockedToPlayhead = false

      this.zoom(
        Math.pow(1.01, -e.deltaY),
        this.tAtX(mouseX),
      )
      this.scroll(e.deltaX * this.tSpan/this.canvas.width)

      this.draw()
    })

    this.canvas.addEventListener('click', e => {
      let rect = this.canvas.getBoundingClientRect();
      let mouseX = e.clientX-rect.left;
      let offset = this.tAtX(mouseX)

      this.play(offset)
    })
  }
}
export {InteractiveTrackView}