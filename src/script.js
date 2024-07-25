function setup() {
  //createCanvas(800, 800);
  let canvas = createCanvas(800, 800);
  // canvas.parent("canvas-container");
  canvas.id('canvas3d');
  canvas.parent('overlay-canvas');
  translate(width / 2, height / 2); // Di chuyển gốc tọa độ vào giữa canvas
  scale(50, -50); // Tăng kích thước các điểm để dễ quan sát hơn và đảo trục y để phù hợp với hệ tọa độ Cartesian

  // Tọa độ các điểm
  let points = {
    A: { x: 0, y: 4.639 },
    B: { x: 0.899, y: 0 },
    C: { x: -1.057, y: 1.696 },
    D: { x: -1.742, y: 2.293 },
    E: { x: -2.04, y: 0 },
    F: { x: -3.455, y: 0 },
    G: { x: 2.6, y: 0 },
    H: { x: 4, y: 0 },
    I: { x: 2.599, y: 2.849 },
    J: { x: 1.655, y: 1.685 },
    K: { x: -4.419, y: -1.265 },
    L: { x: -1.84, y: -2.3 },
    M: { x: 0.692, y: -7.236 },
    N: { x: 1.16, y: -6.009 },
    O: { x: 1, y: -2 },
    P: { x: -0.821, y: 0 },
    Q: { x: 4.826, y: -1.443 },
    T: { x: 0.345, y: -4.999 }
  };

  // Danh sách các mã màu hex cho các đa giác
  let c1 = "#228be6"; // Màu đầu tiên
  let c2 = "#a5d8ff"; // Màu thứ hai
  let c3 = "#4dabf7"; // Màu thứ ba
  let c4 = "#0288d1"; // Màu thứ tư
  let c5 = "#0277bd"; // Màu thứ năm
  let c6 = "#01579b"; // Màu thứ sáu

  // Nối các điểm để tạo thành hình dạng
  stroke(0);
  strokeWeight(0.02); // Làm cho đường nối nhỏ lại
  strokeCap(ROUND); // Làm cho các đoạn kết thúc được bo tròn

  function drawPolygon(color, ...vertices) {
    fill(color); // Thiết lập màu với mã hex
    beginShape();
    vertices.forEach((v) => vertex(points[v].x, points[v].y));
    endShape(CLOSE);
  }

  // Nối các điểm theo yêu cầu và tô màu cho từng đa giác
  drawPolygon(c2, "A", "B", "C");
  drawPolygon(c1, "A", "B", "G");
  drawPolygon(c3, "I", "J", "G");
  drawPolygon(c1, "I", "G", "H");
  drawPolygon(c1, "D", "E", "B");
  drawPolygon(c2, "D", "F", "E");
  drawPolygon(c4, "F", "E", "L", "K");
  drawPolygon(c5, "E", "P", "O", "N", "L");
  drawPolygon(c4, "P", "H", "Q", "O");
  drawPolygon(c5, "K", "M", "L");
  drawPolygon(c6, "L", "M", "N");
  drawPolygon(c6, "O", "Q", "N");
}

function draw() {
  // Không cần vẽ lại canvas mỗi lần
  noLoop();
}
