import { WrappingPaper } from './wrapping-paper.js';

class Paper extends WrappingPaper {

  constructor(w, h) {
    super(w, h);

    const colorPalette = [];
    colorPalette.push("#f0f0f0");
    colorPalette.push("#ff8b00");
    colorPalette.push("#ff2b00");
    colorPalette.push("#d90a00");
    colorPalette.push("#02756e");
    colorPalette.push("#2c0826");
    colorPalette.push("#2d0826");

    const specPalette = [];
    specPalette.push("#ddd");
    specPalette.push("#ccc");
    specPalette.push("#bbb");
    specPalette.push("#aaa");
    specPalette.push("#999");
    specPalette.push("#888");
    specPalette.push("#777");

    this.drawRect(0, 0, 512, 512, '#fff', '#000');

    for (let i = 0; i < 2000; i++) {
      const paletteIndex = Math.floor(Math.random() * colorPalette.length);
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = 2 + Math.random() * 10;
      const op = { specularColor: specPalette[paletteIndex] };
      this.drawCircle(x, y, r, colorPalette[paletteIndex], op);
      this.drawCircle(x + 512, y, r, colorPalette[paletteIndex], op);
      this.drawCircle(x - 512, y, r, colorPalette[paletteIndex], op);
      this.drawCircle(x, y + 512, r, colorPalette[paletteIndex], op);
      this.drawCircle(x, y - 512, r, colorPalette[paletteIndex], op);
    }
  }
}

export { Paper }