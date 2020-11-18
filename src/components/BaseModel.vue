<template>
  <div class="flex flex-col items-center">
    <h1 class="text-grey-800 uppercase p-4 font-bold text-2xl">Ruin this ML</h1>
    <h2 class="text-grey-200 p-4 text-xl">
      Draw Numbers and Purposely Submit Incorrect Data back
    </h2>

    <main class="flex flex-col items-center">
      <div class="content flex flex-row">
        <div class="canvas px-5">
          <canvas
            id="c"
            class="border-black border-2 bg-gray-200"
            width="400"
            height="400"
            @mousemove="draw"
            @mousedown="beginDrawing"
            @mouseup="stopDrawing"
          ></canvas>
          <div class="px-5 flex justify-between items-center">
            <label class="text-grey-400 p-2 font-bold" for="brush"
              >Brush Size</label
            >
            <input
              class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-4 w-800"
              type="range"
              min="1"
              max="50"
              step="1"
              name="brush"
              v-model="brushWidth"
            />
          </div>
        </div>
        <!-- Placeholder for the Prediction and the Visualization -->
        <div class="canvas">
          <canvas
            id="c"
            class="border-black border-2 bg-gray-200"
            width="400"
            height="400"
          ></canvas>
        </div>
      </div>
    </main>

    <div class="flex justify-between items-center my-3">
      <button
        class="mx-2 rounded-full bg-blue-800 py-2 px-3 text-xs font-bold cursor-pointer tracking-wider text-white hover:bg-blue-100 hover:text-black"
        @click="submitDrawing"
      >
        Submit
      </button>
      <button
        class="mx-2 rounded-full bg-gray-200 py-2 px-3 text-xs font-bold cursor-pointer tracking-wider text-navy-800 hover:bg-blue-800 hover:text-white"
        @click="clearCanvas"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
import MNISTmodel from "@/utils/model.js";

export default {
  name: "BaseCanvas",
  data() {
    return {
      brushWidth: 15,
      coords: [],
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false,
      model: MNISTmodel,
    };
  },
  methods: {
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineCap = "round";
      ctx.lineWidth = this.brushWidth;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    draw(e) {
      if (this.isDrawing) {
        let pointer = {};
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
        pointer.x = e.offsetX;
        pointer.y = e.offsetY;
        this.coords.push(pointer);
        // console.log(this.coords);
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    },
    clearCanvas() {
      this.canvas.clearRect(0, 0, 400, 400);
    },
    getMinBox() {
      var coorX = this.coords.map(function (p) {
        return p.x;
      });
      var coorY = this.coords.map(function (p) {
        return p.y;
      });

      var min_coords = {
        x: Math.min.apply(null, coorX),
        y: Math.min.apply(null, coorY),
      };
      var max_coords = {
        x: Math.max.apply(null, coorX),
        y: Math.max.apply(null, coorY),
      };

      return {
        min: min_coords,
        max: max_coords,
      };
    },
    getImageData() {
      const coordsMinMax = this.getMinBox();
      const dpi = window.devicePixelRatio;

      const imgData = this.canvas.getImageData(
        coordsMinMax.min.x * dpi,
        coordsMinMax.min.y * dpi,
        (coordsMinMax.max.x - coordsMinMax.min.x) * dpi,
        (coordsMinMax.max.y - coordsMinMax.min.y) * dpi
      );
      return imgData;
    },
    submitDrawing() {
      let image_img = this.getImageData();

      this.clearCanvas();
      console.log(image_img);
    },
  },
  mounted() {
    var c = document.getElementById("c");
    this.canvas = c.getContext("2d");
  },
};
</script>

<style scoped>
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="range"]::-webkit-slider-thumb {
    width: 15px;
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    cursor: ew-resize;
    background: #fff;
    box-shadow: -405px 0 0 400px #2fafff;
    border-radius: 50%;
  }
}
</style>
