import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const W = 320;
const H = 200;
const OUT = 'src/assets/scenes';
mkdirSync(OUT, { recursive: true });

const C = {
  black: [4, 4, 10, 255],
  ink: [236, 239, 222, 255],
  dim: [78, 96, 116, 255],
  blue: [42, 98, 173, 255],
  cyan: [75, 207, 222, 255],
  green: [44, 166, 78, 255],
  darkGreen: [20, 84, 48, 255],
  yellow: [236, 205, 82, 255],
  orange: [223, 113, 49, 255],
  red: [189, 34, 43, 255],
  magenta: [168, 66, 164, 255],
  purple: [70, 47, 122, 255],
  brown: [114, 72, 42, 255],
  grey: [116, 124, 129, 255],
  dark: [16, 19, 28, 255]
};

function crc32(buf) {
  let c = ~0;
  for (const b of buf) {
    c ^= b;
    for (let k = 0; k < 8; k += 1) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const t = Buffer.from(type);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
}

function png(pixels, path) {
  const raw = Buffer.alloc((W * 4 + 1) * H);
  for (let y = 0; y < H; y += 1) {
    const row = y * (W * 4 + 1);
    raw[row] = 0;
    pixels.copy(raw, row + 1, y * W * 4, (y + 1) * W * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  writeFileSync(path, Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]));
}

function makeCanvas() {
  const p = Buffer.alloc(W * H * 4);
  const set = (x, y, col) => {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || x >= W || y < 0 || y >= H) return;
    const i = (y * W + x) * 4;
    p[i] = col[0]; p[i + 1] = col[1]; p[i + 2] = col[2]; p[i + 3] = col[3];
  };
  const rect = (x, y, w, h, col) => {
    for (let yy = y; yy < y + h; yy += 1) for (let xx = x; xx < x + w; xx += 1) set(xx, yy, col);
  };
  const line = (x0, y0, x1, y1, col) => {
    x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
    const dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    const dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    while (true) {
      set(x0, y0, col);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
  };
  const box = (x, y, w, h, col) => { line(x, y, x + w, y, col); line(x + w, y, x + w, y + h, col); line(x + w, y + h, x, y + h, col); line(x, y + h, x, y, col); };
  const circle = (cx, cy, r, col, fill = false) => {
    for (let y = -r; y <= r; y += 1) for (let x = -r; x <= r; x += 1) {
      const d = x * x + y * y;
      if (fill ? d <= r * r : d <= r * r && d >= (r - 1.8) * (r - 1.8)) set(cx + x, cy + y, col);
    }
  };
  const poly = (pts, col) => {
    let minY = Math.floor(Math.min(...pts.map(([, y]) => y))), maxY = Math.ceil(Math.max(...pts.map(([, y]) => y)));
    for (let y = minY; y <= maxY; y += 1) {
      const xs = [];
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const [xi, yi] = pts[i], [xj, yj] = pts[j];
        if ((yi > y) !== (yj > y)) xs.push(((xj - xi) * (y - yi)) / (yj - yi) + xi);
      }
      xs.sort((a, b) => a - b);
      for (let i = 0; i < xs.length; i += 2) for (let x = Math.ceil(xs[i]); x <= Math.floor(xs[i + 1]); x += 1) set(x, y, col);
    }
  };
  rect(0, 0, W, H, C.black);
  for (let y = 0; y < H; y += 2) for (let x = (y / 2) % 2; x < W; x += 4) set(x, y, [8, 10, 20, 255]);
  const api = { p, set, rect, line, box, circle, poly };
  api.ground = (col = C.darkGreen) => { rect(0, 146, W, 54, col); for (let x = 0; x < W; x += 8) line(x, 146, x + 18, 200, [12, 46, 30, 255]); };
  api.building = (x, y, w, h, wall = C.blue) => { rect(x, y, w, h, wall); box(x, y, w, h, C.ink); for (let wx = x + 14; wx < x + w - 12; wx += 32) { rect(wx, y + 18, 15, 20, C.black); box(wx, y + 18, 15, 20, C.cyan); } };
  api.tree = (x, y) => { rect(x - 3, y, 6, 44, C.brown); circle(x, y - 2, 22, C.green, true); circle(x - 14, y + 8, 16, C.darkGreen, true); circle(x + 15, y + 8, 16, C.green, true); };
  api.dog = (x, y) => { rect(x, y, 26, 12, C.brown); circle(x + 27, y + 3, 8, C.brown, true); line(x + 1, y + 3, x - 10, y - 8, C.brown); line(x + 6, y + 12, x + 3, y + 22, C.ink); line(x + 20, y + 12, x + 23, y + 22, C.ink); set(x + 31, y + 1, C.ink); };
  api.monster = (x, y, r = 24) => { circle(x, y, r, C.red, true); circle(x - 9, y - 5, 4, C.ink, true); circle(x + 9, y - 5, 4, C.ink, true); line(x - 12, y + 9, x + 12, y + 9, C.black); for (let k = -8; k <= 8; k += 8) line(x + k, y + 9, x + k + 3, y + 16, C.ink); line(x - r, y - r, x - r - 12, y - r - 14, C.red); line(x + r, y - r, x + r + 12, y - r - 14, C.red); };
  return api;
}

const scenes = {
  start(c) { c.ground(); c.building(78, 48, 164, 88, C.blue); c.rect(130, 100, 28, 36, C.black); c.box(116, 72, 84, 18, C.yellow); c.line(40, 146, 280, 146, C.ink); for (let x = 56; x <= 264; x += 28) c.line(x, 146, x, 190, C.grey); c.circle(268, 154, 10, C.brown, true); },
  toilets(c) { c.ground(C.dark); c.building(62, 48, 196, 96, C.purple); for (let x = 86; x < 220; x += 44) { c.rect(x, 92, 20, 52, C.black); c.box(x, 92, 20, 52, C.ink); } for (let i = 0; i < 18; i += 1) c.circle(70 + i * 10, 157 + (i % 3) * 4, 2, C.red, true); c.line(40, 146, 275, 146, C.grey); },
  pipe(c) { c.ground(C.dark); c.building(48, 42, 224, 104, C.purple); for (let y = 62; y < 126; y += 18) c.line(68, y, 254, y + 16, C.grey); for (let i = 0; i < 7; i += 1) c.circle(118 + i * 14, 74 + (i % 2) * 22, 5, i % 2 ? C.orange : C.red, true); c.monster(252, 142, 14); },
  office(c) { c.ground(C.dark); c.building(54, 42, 212, 106, C.blue); c.rect(136, 91, 48, 57, C.brown); c.box(94, 68, 48, 30, C.yellow); c.box(188, 62, 42, 48, C.cyan); c.circle(222, 132, 6, C.ink, true); },
  courts(c) { c.ground([22, 72, 78, 255]); for (let x = 28; x < 300; x += 38) c.line(x, 56, x + 8, 190, C.cyan); for (let y = 74; y < 180; y += 28) c.line(20, y, 300, y, C.ink); c.circle(238, 117, 11, C.orange, true); c.line(90, 135, 130, 135, C.yellow); },
  corridor(c) { c.rect(0, 0, W, H, C.dark); c.poly([[42, 30], [278, 30], [222, 146], [98, 146]], C.purple); c.box(42, 30, 236, 116, C.ink); for (let x = 80; x <= 220; x += 70) { c.rect(x, 72, 28, 74, C.black); c.box(x, 72, 28, 74, C.yellow); } c.circle(55, 154, 4, C.red, true); c.circle(68, 161, 3, C.red, true); },
  library(c) { c.ground(C.dark); c.building(42, 50, 236, 96, C.brown); for (let x = 62; x < 258; x += 34) for (let y = 70; y < 132; y += 16) c.rect(x, y, 20, 9, [60 + (x % 3) * 40, 80 + (y % 2) * 70, 130, 255]); c.rect(142, 120, 36, 26, C.black); c.circle(246, 46, 12, C.yellow, true); },
  room10(c) { c.ground(C.dark); c.building(52, 45, 216, 101, C.blue); c.box(72, 66, 64, 40, C.yellow); c.monster(104, 84, 18); c.rect(206, 92, 8, 48, C.red); c.line(208, 91, 226, 60, C.red); c.circle(228, 58, 7, C.red, true); },
  garden(c) { c.ground(); c.tree(55, 94); c.tree(264, 96); for (let x = 102; x <= 196; x += 20) c.line(x, 146, x + 32, 84, C.green); c.rect(120, 135, 92, 17, C.brown); c.dog(72, 139); c.monster(190, 130, 22); },
  hall(c) { c.ground(C.dark); c.building(34, 42, 252, 106, C.purple); c.rect(72, 65, 176, 70, C.black); c.rect(86, 66, 58, 68, C.red); c.rect(176, 66, 58, 68, C.red); c.line(160, 66, 160, 135, C.yellow); c.circle(160, 128, 28, C.dark, true); },
  backstage(c) { c.ground(C.dark); c.building(42, 42, 236, 106, C.brown); for (let x = 70; x < 240; x += 34) c.line(x, 44, x - 18, 140, C.grey); c.rect(83, 119, 42, 20, C.red); c.rect(190, 113, 42, 26, C.orange); c.monster(158, 126, 18); },
  ending(c) { c.ground(); c.monster(160, 96, 36); c.rect(96, 140, 128, 22, C.dark); for (let x = 112; x < 216; x += 20) c.circle(x, 151, 7, C.red, true); for (let x = 50; x < 290; x += 30) c.line(x, 182, x + 18, 154, C.green); },
  cloakbay(c) { c.ground(C.dark); c.building(52, 44, 216, 102, C.blue); for (let x = 70; x < 250; x += 22) { c.line(x, 65, x, 91, C.ink); c.circle(x, 94, 7, x % 44 ? C.purple : C.green, true); } c.circle(144, 150, 3, C.red, true); c.circle(152, 158, 3, C.red, true); },
  playground(c) { c.ground([20, 72, 68, 255]); for (let i = 0; i < 6; i += 1) c.box(70 + i * 28, 91 + (i % 2) * 21, 25, 24, C.ink); c.circle(250, 116, 14, C.orange, true); c.line(36, 146, 286, 146, C.yellow); },
  musicroom(c) { c.ground(C.dark); c.building(52, 46, 216, 100, C.purple); c.circle(112, 111, 28, C.orange); c.circle(112, 111, 18, C.black, true); c.line(185, 65, 185, 137, C.ink); c.line(201, 65, 201, 137, C.ink); for (let y = 70; y < 136; y += 16) c.line(170, y, 216, y + 8, C.cyan); },
  propRoom(c) { c.ground(C.dark); c.building(52, 44, 216, 102, C.brown); c.circle(160, 92, 43, C.yellow); c.line(160, 92, 160, 57, C.ink); c.line(160, 92, 194, 92, C.ink); c.rect(72, 124, 50, 18, C.red); c.rect(211, 118, 35, 24, C.purple); },
  vegegarden(c) { c.ground(); for (let x = 60; x < 260; x += 28) { c.line(x, 146, x + 24, 198, C.brown); c.circle(x + 10, 139, 7, C.red, true); c.line(x + 10, 133, x + 1, 119, C.green); } for (let x = 46; x < 276; x += 100) { c.circle(x, 118, 11, C.grey, true); c.circle(x - 3, 115, 2, C.black, true); c.circle(x + 4, 115, 2, C.black, true); } },
  bikeshed(c) { c.ground(C.dark); c.building(44, 48, 232, 96, C.blue); for (let x = 70; x < 245; x += 54) { c.circle(x, 134, 13, C.ink); c.circle(x + 32, 134, 13, C.ink); c.line(x, 134, x + 16, 112, C.cyan); c.line(x + 16, 112, x + 32, 134, C.cyan); c.line(x, 134, x + 32, 134, C.cyan); } c.circle(260, 80, 12, C.red, true); },
  oldwing(c) { c.rect(0, 0, W, H, C.dark); c.poly([[42, 32], [278, 32], [236, 146], [84, 146]], C.grey); c.box(42, 32, 236, 114, C.ink); for (let x = 75; x < 250; x += 42) { c.line(x, 47, x + 22, 70, C.black); c.line(x + 22, 47, x, 70, C.black); } c.line(116, 154, 202, 154, C.red); c.circle(230, 124, 10, C.red, true); },
  boiler(c) { c.rect(0, 0, W, H, C.dark); c.building(38, 44, 244, 104, C.brown); for (let x = 74; x < 244; x += 34) { c.rect(x, 52, 13, 84, C.grey); c.box(x, 52, 13, 84, C.ink); } c.circle(108, 137, 9, C.red, true); c.rect(171, 123, 44, 18, C.orange); c.line(70, 154, 250, 176, C.cyan); }
};

for (const [name, draw] of Object.entries(scenes)) {
  const canvas = makeCanvas();
  draw(canvas);
  png(canvas.p, join(OUT, `${name}.png`));
}
console.log(`Generated ${Object.keys(scenes).length} scene images in ${OUT}`);
