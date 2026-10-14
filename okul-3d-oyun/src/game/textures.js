import * as THREE from 'three';

/**
 * Procedural PBR Texture Generator for Realistic School Environment
 */

// 1. Realistic Grass Texture with color variation and blades
export function createGrassTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base grass greens
  ctx.fillStyle = '#2d6a2e';
  ctx.fillRect(0, 0, 512, 512);

  // Noise patches
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const size = Math.random() * 3 + 1;
    const hue = 115 + Math.random() * 25; // 115 to 140
    const lightness = 25 + Math.random() * 25; // 25% to 50%
    ctx.fillStyle = `hsl(${hue}, 55%, ${lightness}%)`;
    ctx.fillRect(x, y, size, size * 2.5);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  return texture;
}

// 2. Realistic Stone Paver Texture for the Walkway
export function createPaverTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#cbd5e1';
  ctx.fillRect(0, 0, 512, 512);

  const tileSize = 64;
  for (let y = 0; y < 512; y += tileSize) {
    for (let x = 0; x < 512; x += tileSize) {
      const shade = 195 + Math.floor(Math.random() * 30);
      ctx.fillStyle = `rgb(${shade}, ${shade + 2}, ${shade + 6})`;
      ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);

      // Grout seam
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, tileSize, tileSize);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 6);
  return texture;
}

// 3. Polished Institutional Marble Tile Texture for Corridor
export function createMarbleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base off-white marble
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, 512, 512);

  // Tile grids (large 128x128 tiles)
  const tileSize = 128;
  for (let y = 0; y < 512; y += tileSize) {
    for (let x = 0; x < 512; x += tileSize) {
      const brightness = 244 + Math.floor(Math.random() * 11);
      ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness + 2})`;
      ctx.fillRect(x + 1, y + 1, tileSize - 2, tileSize - 2);

      // Subtle marble veins
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x + 10, y + 20);
      ctx.bezierCurveTo(x + 40, y + 60, x + 80, y + 40, x + 115, y + 105);
      ctx.stroke();

      // Grout line
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x, y, tileSize, tileSize);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 3);
  return texture;
}

// 4. Realistic Classroom Wood Parquet Texture
export function createParquetTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#b45309';
  ctx.fillRect(0, 0, 512, 512);

  const plankHeight = 32;
  const plankWidth = 128;

  for (let y = 0; y < 512; y += plankHeight) {
    const xOffset = (y / plankHeight) % 2 === 0 ? 0 : plankWidth / 2;
    for (let x = -plankWidth; x < 512 + plankWidth; x += plankWidth) {
      // Wood plank tone
      const r = 217 + Math.floor((Math.random() - 0.5) * 30);
      const g = 119 + Math.floor((Math.random() - 0.5) * 25);
      const b = 6 + Math.floor((Math.random() - 0.5) * 10);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x + xOffset + 1, y + 1, plankWidth - 2, plankHeight - 2);

      // Wood grain lines
      ctx.strokeStyle = 'rgba(120, 53, 15, 0.3)';
      ctx.lineWidth = 1;
      for (let g = 0; g < 3; g++) {
        const lineY = y + 6 + g * 8;
        ctx.beginPath();
        ctx.moveTo(x + xOffset, lineY);
        ctx.lineTo(x + xOffset + plankWidth, lineY + (Math.random() - 0.5) * 4);
        ctx.stroke();
      }

      // Plank gap
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x + xOffset, y, plankWidth, plankHeight);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 4);
  return texture;
}

// 5. Realistic School Facade Brick Texture
export function createBrickTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Mortar
  ctx.fillStyle = '#e2e8f0';
  ctx.fillRect(0, 0, 512, 512);

  const brickH = 28;
  const brickW = 64;

  for (let y = 0; y < 512; y += brickH) {
    const offset = (y / brickH) % 2 === 0 ? 0 : brickW / 2;
    for (let x = -brickW; x < 512 + brickW; x += brickW) {
      // Warm modern school brick
      const r = 180 + Math.floor(Math.random() * 35);
      const g = 80 + Math.floor(Math.random() * 25);
      const b = 60 + Math.floor(Math.random() * 20);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x + offset + 2, y + 2, brickW - 4, brickH - 4);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 2);
  return texture;
}

// 6. Realistic Blackboard Texture with subtle chalk smudges
export function createBlackboardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Deep chalkboard green
  ctx.fillStyle = '#064e3b';
  ctx.fillRect(0, 0, 512, 256);

  // Subtle chalk smudges
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 256;
    const rad = 20 + Math.random() * 40;
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  return new THREE.CanvasTexture(canvas);
}
