import * as THREE from 'three';
import {
  createGrassTexture,
  createPaverTexture,
  createMarbleTexture,
  createParquetTexture,
  createBrickTexture,
  createBlackboardTexture
} from './textures';
import {
  createRealisticCharacter,
  createRealisticDesk,
  createRealisticBook,
  createRealisticPencil,
  createRealisticEraser,
  createRealisticRuler
} from './realisticModels';

export class School3DWorld {
  constructor(canvasContainer, callbacks = {}) {
    this.container = canvasContainer;
    this.callbacks = callbacks; // onNearNPC, onNearCollectible, onLeaveInteractive, onCollectItem, onPlayerMoved

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = new THREE.Clock();

    // Player state
    this.player = null;
    this.playerMesh = null;
    this.playerBackpack = null;
    this.playerSpeed = 4.8; // Akıcı ve kontrollü yürüme hızı
    this.playerVelocity = new THREE.Vector3();
    this.isGrounded = true;
    this.walkCycle = 0;

    // Inputs
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      jump: false,
      sprint: false
    };

    // Virtual Joystick / Mobile input vector
    this.mobileInput = { x: 0, y: 0 };

    // Interactive entities
    this.npcs = [];
    this.collectibles = [];
    this.activeInteractable = null;
    this.animatedObjects = [];

    // Colliders (simple bounding boxes for walls)
    this.colliders = [];

    this.init();
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // 1. Scene & Atmosphere
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#87CEEB'); // Sky blue
    this.scene.fog = new THREE.FogExp2('#87CEEB', 0.02);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 150);
    this.camera.position.set(0, 7, 18);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting
    this.setupLighting();

    // 5. Environment & Architecture
    this.buildSchoolEnvironment();

    // 6. Player Avatar
    this.createPlayerAvatar();

    // 7. Event listeners
    this.bindEvents();

    // 8. Start Game Loop
    this.animate = this.animate.bind(this);
    this.animationId = requestAnimationFrame(this.animate);
  }

  setupLighting() {
    // Ambient Light
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.65);
    this.scene.add(ambientLight);

    // Directional Sun Light
    const sunLight = new THREE.DirectionalLight('#fff5e6', 1.2);
    sunLight.position.set(20, 35, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 80;
    const d = 30;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0005;
    this.scene.add(sunLight);

    // Soft Hemisphere Light (Sky vs Ground reflection)
    const hemiLight = new THREE.HemisphereLight('#87ceeb', '#4ade80', 0.35);
    this.scene.add(hemiLight);
  }

  buildSchoolEnvironment() {
    // 1. Ground: Schoolyard Realistic Grass (Z: 0 to 22)
    const grassGeo = new THREE.PlaneGeometry(54, 42);
    const grassMat = new THREE.MeshStandardMaterial({
      map: createGrassTexture(),
      roughness: 0.85,
      metalness: 0.05
    });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.set(0, 0, 10);
    grass.receiveShadow = true;
    this.scene.add(grass);

    // 2. Realistic Paver Pathway from gate to school entrance
    const pathGeo = new THREE.PlaneGeometry(5.2, 22);
    const pathMat = new THREE.MeshStandardMaterial({
      map: createPaverTexture(),
      roughness: 0.75,
      metalness: 0.05
    });
    const path = new THREE.Mesh(pathGeo, pathMat);
    path.rotation.x = -Math.PI / 2;
    path.position.set(0, 0.03, 10);
    path.receiveShadow = true;
    this.scene.add(path);

    // 3. Polished Institutional Marble Floor for Building (Z: -16 to 0, X: -16 to 16)
    const schoolFloorGeo = new THREE.BoxGeometry(32, 0.4, 18);
    const schoolFloorMat = new THREE.MeshStandardMaterial({
      map: createMarbleTexture(),
      roughness: 0.22, // Glossy reflective marble
      metalness: 0.12
    });
    const schoolFloor = new THREE.Mesh(schoolFloorGeo, schoolFloorMat);
    schoolFloor.position.set(0, 0.2, -8);
    schoolFloor.receiveShadow = true;
    this.scene.add(schoolFloor);

    // School Building Exterior Walls
    this.createBuildingWalls();

    // Interior Rooms: Classroom 5-A, Canteen, Library
    this.createClassroom();
    this.createCanteen();
    this.createLibrary();

    // Yard Decorations: Trees, Benches, Flagpole
    this.createYardDecorations();

    // Overhead Signs in Corridor
    this.createDirectionalSigns();
  }

  createBuildingWalls() {
    const brickMat = new THREE.MeshStandardMaterial({
      map: createBrickTexture(),
      roughness: 0.82,
      metalness: 0.04
    });
    const wallInteriorMat = new THREE.MeshStandardMaterial({
      color: '#f8fafc',
      roughness: 0.7,
      metalness: 0.02
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: '#2563eb',
      roughness: 0.4,
      metalness: 0.2
    });
    const roofMat = new THREE.MeshStandardMaterial({
      color: '#1e3a8a',
      roughness: 0.5,
      metalness: 0.1
    });

    // Back Wall (Z: -17)
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(32, 5, 0.6), brickMat);
    backWall.position.set(0, 2.7, -17);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    this.scene.add(backWall);
    this.colliders.push(new THREE.Box3().setFromObject(backWall));

    // Left Outer Wall (X: -16)
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.6, 5, 18), brickMat);
    leftWall.position.set(-16, 2.7, -8);
    leftWall.castShadow = true;
    this.scene.add(leftWall);
    this.colliders.push(new THREE.Box3().setFromObject(leftWall));

    // Right Outer Wall (X: 16)
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.6, 5, 18), brickMat);
    rightWall.position.set(16, 2.7, -8);
    rightWall.castShadow = true;
    this.scene.add(rightWall);
    this.colliders.push(new THREE.Box3().setFromObject(rightWall));

    // Front Wall with Entrance Archway (Z: 0.8)
    const frontWallLeft = new THREE.Mesh(new THREE.BoxGeometry(13, 5, 0.6), brickMat);
    frontWallLeft.position.set(-9.5, 2.7, 0.8);
    frontWallLeft.castShadow = true;
    this.scene.add(frontWallLeft);
    this.colliders.push(new THREE.Box3().setFromObject(frontWallLeft));

    const frontWallRight = new THREE.Mesh(new THREE.BoxGeometry(13, 5, 0.6), brickMat);
    frontWallRight.position.set(9.5, 2.7, 0.8);
    frontWallRight.castShadow = true;
    this.scene.add(frontWallRight);
    this.colliders.push(new THREE.Box3().setFromObject(frontWallRight));

    // Large glass school windows on the front wall
    const glassMat = new THREE.MeshStandardMaterial({
      color: '#93c5fd',
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.65
    });
    const winLeft = new THREE.Mesh(new THREE.BoxGeometry(4.5, 2.2, 0.1), glassMat);
    winLeft.position.set(-8.5, 2.8, 1.12);
    const winRight = new THREE.Mesh(new THREE.BoxGeometry(4.5, 2.2, 0.1), glassMat);
    winRight.position.set(8.5, 2.8, 1.12);
    this.scene.add(winLeft, winRight);

    // Top beam above entrance
    const entranceBeam = new THREE.Mesh(new THREE.BoxGeometry(6, 1.8, 0.8), accentMat);
    entranceBeam.position.set(0, 4.3, 0.8);
    entranceBeam.castShadow = true;
    this.scene.add(entranceBeam);

    // School Name Banner above Entrance
    const banner = this.createTextBanner('ATATÜRK ORTAOKULU - 5. SINIF', '#ffffff', '#1e3a8a');
    banner.position.set(0, 4.3, 1.25);
    this.scene.add(banner);

    // Roof Trims
    const roofTrim = new THREE.Mesh(new THREE.BoxGeometry(32.8, 0.5, 18.8), roofMat);
    roofTrim.position.set(0, 5.4, -8);
    roofTrim.castShadow = true;
    this.scene.add(roofTrim);

    // ==========================================
    // INTERIOR WALLS WITH OPEN DOORWAYS
    // ==========================================

    // Left Divider (Corridor <-> Classroom 5-A) with 3.5m Open Archway
    const divLeftFront = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.5, 4.0), wallInteriorMat);
    divLeftFront.position.set(-3.5, 2.45, -4.5); // Spans -2.5 to -6.5
    const divLeftBack = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.5, 4.5), wallInteriorMat);
    divLeftBack.position.set(-3.5, 2.45, -12.75); // Spans -10.5 to -15
    const divLeftArch = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.2, 4.0), accentMat);
    divLeftArch.position.set(-3.5, 4.1, -8.5); // Overhead arch above open doorway

    this.scene.add(divLeftFront, divLeftBack, divLeftArch);
    this.colliders.push(
      new THREE.Box3().setFromObject(divLeftFront),
      new THREE.Box3().setFromObject(divLeftBack)
    );

    // Right Divider (Corridor <-> Canteen & Library) with 2 Open Doorways
    const divRightFront = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.5, 2.5), wallInteriorMat);
    divRightFront.position.set(3.5, 2.45, -3.75); // Spans -2.5 to -5
    const divRightMid = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.5, 2.5), wallInteriorMat);
    divRightMid.position.set(3.5, 2.45, -9.0); // Between Canteen and Library
    const divRightBack = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.5, 2.0), wallInteriorMat);
    divRightBack.position.set(3.5, 2.45, -15.0);
    // Overhead arches for right doorways
    const divRightArch1 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.2, 3.0), accentMat);
    divRightArch1.position.set(3.5, 4.1, -6.5); // Canteen doorway arch
    const divRightArch2 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.2, 3.0), accentMat);
    divRightArch2.position.set(3.5, 4.1, -12.5); // Library doorway arch

    this.scene.add(divRightFront, divRightMid, divRightBack, divRightArch1, divRightArch2);
    this.colliders.push(
      new THREE.Box3().setFromObject(divRightFront),
      new THREE.Box3().setFromObject(divRightMid),
      new THREE.Box3().setFromObject(divRightBack)
    );

    // ==========================================
    // INTERIOR LIGHTING (Bright & Warm Rooms)
    // ==========================================
    const corridorLight = new THREE.PointLight('#ffffff', 0.9, 16);
    corridorLight.position.set(0, 3.8, -7);
    const classLight = new THREE.PointLight('#fffbeb', 1.1, 18);
    classLight.position.set(-9.5, 3.8, -9);
    const canteenLight = new THREE.PointLight('#fff7ed', 1.0, 16);
    canteenLight.position.set(8.5, 3.8, -6);
    const libLight = new THREE.PointLight('#f5f3ff', 1.0, 16);
    libLight.position.set(8.5, 3.8, -13);

    this.scene.add(corridorLight, classLight, canteenLight, libLight);
  }

  createClassroom() {
    // Classroom 5-A: Realistic Hardwood Parquet Floor
    const classFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 14),
      new THREE.MeshStandardMaterial({
        map: createParquetTexture(),
        roughness: 0.38,
        metalness: 0.08
      })
    );
    classFloor.rotation.x = -Math.PI / 2;
    classFloor.position.set(-9.7, 0.42, -9);
    classFloor.receiveShadow = true;
    this.scene.add(classFloor);

    // Blackboard on Back Wall with authentic chalkboard texture
    const boardGroup = new THREE.Group();
    const boardFrame = new THREE.Mesh(
      new THREE.BoxGeometry(5.2, 2.2, 0.1),
      new THREE.MeshStandardMaterial({ color: '#78350f', roughness: 0.5 })
    );
    const boardFace = new THREE.Mesh(
      new THREE.BoxGeometry(5.0, 2.0, 0.12),
      new THREE.MeshStandardMaterial({
        map: createBlackboardTexture(),
        roughness: 0.65
      })
    );
    boardGroup.add(boardFrame, boardFace);
    boardGroup.position.set(-9.7, 2.8, -16.6);
    this.scene.add(boardGroup);

    // Blackboard Text Banner
    const boardText = this.createTextBanner('Theme 1: School Life & Rules', '#ffffff', '#064e3b');
    boardText.position.set(-9.7, 2.8, -16.5);
    this.scene.add(boardText);

    // Teacher Desk & Chair
    this.createDesk(-9.7, 0.4, -14, '#b45309');

    // Student Desks (4 desks)
    this.createDesk(-7.5, 0.4, -11, '#d97706');
    this.createDesk(-11.5, 0.4, -11, '#d97706');
    this.createDesk(-7.5, 0.4, -8, '#d97706');
    this.createDesk(-11.5, 0.4, -8, '#d97706');

    // Classroom Door Sign
    const classSign = this.createTextBanner('🚪 5-A CLASSROOM', '#ffffff', '#2563eb');
    classSign.position.set(-3.25, 3.2, -3);
    classSign.rotation.y = Math.PI / 2;
    this.scene.add(classSign);
  }

  createDesk(x, y, z) {
    const deskGroup = createRealisticDesk();
    deskGroup.position.set(x, y, z);
    this.scene.add(deskGroup);
  }

  createCanteen() {
    // Canteen Area (Right side, front)
    const canteenFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 7),
      new THREE.MeshStandardMaterial({ color: '#fde047', roughness: 0.4, metalness: 0.05 })
    );
    canteenFloor.rotation.x = -Math.PI / 2;
    canteenFloor.position.set(9.7, 0.42, -5.5);
    canteenFloor.receiveShadow = true;
    this.scene.add(canteenFloor);

    // Realistic Serving Counter with Oak Front and Stainless Steel Top
    const counterGroup = new THREE.Group();
    const oakMat = new THREE.MeshStandardMaterial({ color: '#78350f', roughness: 0.5 });
    const steelMat = new THREE.MeshStandardMaterial({ color: '#e2e8f0', metalness: 0.8, roughness: 0.2 });
    const glassMat = new THREE.MeshStandardMaterial({ color: '#93c5fd', transparent: true, opacity: 0.4, roughness: 0.1 });

    // Counter Base
    const counterBody = new THREE.Mesh(new THREE.BoxGeometry(5.6, 1.05, 1.2), oakMat);
    counterBody.position.y = 0.52;
    counterBody.castShadow = true;

    // Stainless Steel Countertop
    const counterTop = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.08, 1.3), steelMat);
    counterTop.position.y = 1.08;
    counterTop.castShadow = true;

    // Glass Sneeze Guard
    const sneezeGuard = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.45, 0.04), glassMat);
    sneezeGuard.position.set(0, 1.32, 0.45);

    // Fruit Bowl with Apples & Oranges on counter
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.2, 0.15, 16), steelMat);
    bowl.position.set(-1.8, 1.18, 0.1);
    const appleMat = new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.3 });
    const orangeMat = new THREE.MeshStandardMaterial({ color: '#ea580c', roughness: 0.4 });

    const apple1 = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), appleMat); apple1.position.set(-1.8, 1.28, 0.1);
    const orange1 = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), orangeMat); orange1.position.set(-1.65, 1.28, 0.15);
    const apple2 = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), appleMat); apple2.position.set(-1.95, 1.28, 0.12);

    // Juice Cartons / Bottles
    const bottleMat = new THREE.MeshStandardMaterial({ color: '#f59e0b', roughness: 0.2, transparent: true, opacity: 0.8 });
    const bottle1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.26, 12), bottleMat);
    bottle1.position.set(1.5, 1.24, 0.1);
    const bottle2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.26, 12), bottleMat);
    bottle2.position.set(1.7, 1.24, 0.1);

    counterGroup.add(counterBody, counterTop, sneezeGuard, bowl, apple1, orange1, apple2, bottle1, bottle2);
    counterGroup.position.set(8.5, 0.4, -7.5);
    this.scene.add(counterGroup);
    this.colliders.push(new THREE.Box3().setFromObject(counterBody));

    // Canteen Sign
    const canteenSign = this.createTextBanner('🥪 CANTEEN (KANTİN)', '#ffffff', '#ea580c');
    canteenSign.position.set(3.75, 3.2, -5.5);
    canteenSign.rotation.y = -Math.PI / 2;
    this.scene.add(canteenSign);
  }

  createLibrary() {
    // Library Floor (Right side, back)
    const libFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 7),
      new THREE.MeshLambertMaterial({ color: '#ddd6fe' }) // Lavender
    );
    libFloor.rotation.x = -Math.PI / 2;
    libFloor.position.set(9.7, 0.42, -12.5);
    libFloor.receiveShadow = true;
    this.scene.add(libFloor);

    // Bookshelves on the back wall
    for (let i = 0; i < 3; i++) {
      const shelf = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 3.2, 0.8),
        new THREE.MeshLambertMaterial({ color: '#854d0e' })
      );
      shelf.position.set(6 + i * 2.8, 2.0, -16.2);
      shelf.castShadow = true;
      this.scene.add(shelf);
      this.colliders.push(new THREE.Box3().setFromObject(shelf));
    }

    // Library Sign
    const libSign = this.createTextBanner('📚 LIBRARY (KÜTÜPHANE)', '#ffffff', '#7c3aed');
    libSign.position.set(3.75, 3.2, -12.5);
    libSign.rotation.y = -Math.PI / 2;
    this.scene.add(libSign);
  }

  createYardDecorations() {
    // Trees in the schoolyard
    const treePositions = [
      { x: -10, z: 6 },
      { x: -12, z: 14 },
      { x: 10, z: 6 },
      { x: 12, z: 14 },
      { x: -5, z: 17 },
      { x: 6, z: 17 }
    ];

    treePositions.forEach(pos => {
      const tree = this.createTree();
      tree.position.set(pos.x, 0, pos.z);
      this.scene.add(tree);
      this.colliders.push(new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(pos.x, 1, pos.z),
        new THREE.Vector3(0.8, 2, 0.8)
      ));
    });

    // Turkish Flagpole in the yard
    const poleGroup = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 0.4, 16), new THREE.MeshLambertMaterial({ color: '#cbd5e1' }));
    base.position.y = 0.2;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 6, 16), new THREE.MeshLambertMaterial({ color: '#f1f5f9' }));
    pole.position.y = 3.2;

    // Flag fabric
    const flagGeo = new THREE.PlaneGeometry(1.6, 1.0);
    const flagMat = new THREE.MeshLambertMaterial({ color: '#dc2626', side: THREE.DoubleSide });
    const flag = new THREE.Mesh(flagGeo, flagMat);
    flag.position.set(0.85, 5.5, 0);

    poleGroup.add(base, pole, flag);
    poleGroup.position.set(-7, 0, 11);
    this.scene.add(poleGroup);
    this.animatedObjects.push({
      mesh: flag,
      update: (time) => {
        flag.rotation.y = Math.sin(time * 3) * 0.15;
      }
    });

    // Wooden Benches in Yard
    this.createBench(-4, 0, 8);
    this.createBench(4, 0, 8);
  }

  createTree() {
    const treeGroup = new THREE.Group();
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.35, 2.2, 8),
      new THREE.MeshLambertMaterial({ color: '#78350f' })
    );
    trunk.position.y = 1.1;
    trunk.castShadow = true;

    // Foliage (Spheres)
    const folMat = new THREE.MeshLambertMaterial({ color: '#22c55e', flatShading: true });
    const f1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.4, 1), folMat);
    f1.position.y = 2.8;
    f1.castShadow = true;

    const f2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.1, 1), folMat);
    f2.position.set(0.4, 3.5, 0.2);
    f2.castShadow = true;

    treeGroup.add(trunk, f1, f2);
    return treeGroup;
  }

  createBench(x, y, z) {
    const bench = new THREE.Group();
    const woodMat = new THREE.MeshLambertMaterial({ color: '#92400e' });
    const seat = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, 0.6), woodMat);
    seat.position.y = 0.45;
    seat.castShadow = true;

    const back = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.5, 0.08), woodMat);
    back.position.set(0, 0.75, -0.26);

    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.45, 0.6), woodMat);
    leg1.position.set(-0.85, 0.22, 0);
    const leg2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.45, 0.6), woodMat);
    leg2.position.set(0.85, 0.22, 0);

    bench.add(seat, back, leg1, leg2);
    bench.position.set(x, y, z);
    this.scene.add(bench);
  }

  createDirectionalSigns() {
    // Hanging signs in the main corridor
    const signGroup = new THREE.Group();
    const beam = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.1, 0.1), new THREE.MeshLambertMaterial({ color: '#475569' }));

    const signLeft = this.createTextBanner('⬅ 5-A Sınıfı', '#ffffff', '#2563eb');
    signLeft.position.set(-1.2, -0.4, 0);

    const signRight = this.createTextBanner('Kantin & Kütüphane ➡', '#ffffff', '#ea580c');
    signRight.position.set(1.2, -0.4, 0);

    signGroup.add(beam, signLeft, signRight);
    signGroup.position.set(0, 3.5, -4);
    this.scene.add(signGroup);
  }

  createTextBanner(text, textColor = '#ffffff', bgColor = '#2563eb') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Rounded rectangle background
    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.roundRect(10, 10, 492, 108, 20);
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    // Text
    ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 256, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), mat);
    return mesh;
  }

  createPlayerAvatar() {
    const char = createRealisticCharacter({
      role: 'student',
      skinColor: '#f5c6a5',
      hairColor: '#2d1810',
      hairStyle: 'short',
      outfitColor: '#1d4ed8', // Royal blue school blazer
      pantsColor: '#1e293b',  // Navy tailored pants
      shoeColor: '#0f172a',
      hasBackpack: true
    });

    this.player = char.root;
    this.leftLeg = char.leftLeg;
    this.rightLeg = char.rightLeg;
    this.leftArm = char.leftArm;
    this.rightArm = char.rightArm;
    this.playerBackpack = char.backpack;

    // Spawn player in the schoolyard facing the building
    this.player.position.set(0, 0, 11);
    this.player.rotation.y = Math.PI;
    this.scene.add(this.player);
  }

  spawnNPCs(npcsData) {
    this.npcs.forEach(npc => this.scene.remove(npc.group));
    this.npcs = [];

    npcsData.forEach(data => {
      let char;
      if (data.role === 'Teacher') {
        char = createRealisticCharacter({
          role: 'teacher',
          skinColor: '#fed7aa',
          hairColor: '#475569',
          hairStyle: 'short',
          outfitColor: '#334155', // Charcoal tailored suit
          pantsColor: '#1e293b'
        });
      } else if (data.role === 'Chef') {
        char = createRealisticCharacter({
          role: 'chef',
          skinColor: '#fed7aa',
          hairColor: '#78350f',
          hairStyle: 'chef',
          outfitColor: '#f8fafc', // Chef jacket & apron
          pantsColor: '#1e293b'
        });
      } else if (data.id === 'npc_selin') {
        char = createRealisticCharacter({
          role: 'guide',
          skinColor: '#fde047',
          hairColor: '#b45309',
          hairStyle: 'ponytail',
          outfitColor: '#ec4899', // Pink school cardigan
          pantsColor: '#1e293b'
        });
      } else {
        // Deniz (New Student in yard)
        char = createRealisticCharacter({
          role: 'student',
          skinColor: '#fed7aa',
          hairColor: '#1e293b',
          hairStyle: 'short',
          outfitColor: '#ea580c', // Sporty orange hoodie
          pantsColor: '#1e3a8a'
        });
      }

      const group = char.root;

      // Floating nameplate above head
      const nameplate = this.createTextBanner(`${data.avatarEmoji} ${data.name}`, '#ffffff', data.color || '#2563eb');
      nameplate.position.y = 2.45;
      nameplate.scale.set(0.85, 0.85, 0.85);

      // Speech bubble marker
      const markerGeo = new THREE.ConeGeometry(0.2, 0.35, 8);
      const markerMat = new THREE.MeshBasicMaterial({ color: '#fbbf24' });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.rotation.x = Math.PI;
      marker.position.y = 2.85;

      group.add(nameplate, marker);
      group.position.set(data.location.x, data.location.y, data.location.z);
      this.scene.add(group);

      this.npcs.push({
        data,
        group,
        marker,
        nameplate,
        char
      });
    });
  }

  spawnCollectibles(itemsData) {
    this.collectibles.forEach(col => this.scene.remove(col.group));
    this.collectibles = [];

    itemsData.forEach(item => {
      const group = new THREE.Group();

      let mesh;
      if (item.id === 'item_pencil') {
        mesh = createRealisticPencil();
        mesh.scale.set(1.4, 1.4, 1.4);
      } else if (item.id === 'item_eraser') {
        mesh = createRealisticEraser();
        mesh.scale.set(1.6, 1.6, 1.6);
      } else if (item.id === 'item_ruler') {
        mesh = createRealisticRuler();
        mesh.scale.set(1.2, 1.2, 1.2);
      } else if (item.id === 'item_book') {
        mesh = createRealisticBook({ coverColor: '#8b5cf6' });
        mesh.scale.set(1.1, 1.1, 1.1);
      } else {
        // item_backpack
        const packMat = new THREE.MeshStandardMaterial({ color: '#ec4899', roughness: 0.5 });
        mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.3, 8, 12), packMat);
        mesh.scale.set(1.2, 1.0, 0.7);
      }

      // Glow ring base
      const ringGeo = new THREE.RingGeometry(0.35, 0.55, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: '#fbbf24', side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = -0.3;

      // Floating title
      const label = this.createTextBanner(`${item.icon} ${item.name}`, '#ffffff', item.color || '#f59e0b');
      label.position.y = 0.85;
      label.scale.set(0.7, 0.7, 0.7);

      group.add(mesh, ring, label);
      group.position.set(item.location.x, item.location.y, item.location.z);
      this.scene.add(group);

      this.collectibles.push({
        item,
        group,
        mesh,
        label,
        collected: false
      });
    });
  }

  removeCollectible(itemId) {
    const found = this.collectibles.find(c => c.item.id === itemId);
    if (found && !found.collected) {
      found.collected = true;
      this.scene.remove(found.group);
    }
  }

  bindEvents() {
    this.onKeyDown = (e) => {
      // Prevent browser scrolling with arrow keys / space
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = true; break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = true; break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = true; break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = true; break;
        case 'Space':
          this.jump(); break;
        case 'KeyE':
          this.triggerActiveInteraction(); break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.keys.sprint = true; break;
      }
    };

    this.onKeyUp = (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = false; break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = false; break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = false; break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = false; break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.keys.sprint = false; break;
      }
    };

    this.onResize = () => {
      const width = this.container.clientWidth || window.innerWidth;
      const height = this.container.clientHeight || window.innerHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    };

    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('resize', this.onResize);
  }

  setMobileInput(x, y) {
    this.mobileInput.x = x;
    this.mobileInput.y = y;
  }

  jump() {
    if (this.isGrounded) {
      this.playerVelocity.y = 6.2;
      this.isGrounded = false;
    }
  }

  triggerActiveInteraction() {
    if (this.activeInteractable) {
      if (this.activeInteractable.type === 'npc' && this.callbacks.onTriggerNPC) {
        this.callbacks.onTriggerNPC(this.activeInteractable.data);
      } else if (this.activeInteractable.type === 'collectible' && this.callbacks.onCollectItem) {
        this.callbacks.onCollectItem(this.activeInteractable.data);
      }
    }
  }

  updatePlayer(delta) {
    if (!this.player) return;

    const turnSpeed = 2.8; // Smooth rotation speed in radians/sec
    let isMoving = false;
    let moveDir = 0; // +1 for forward, -1 for backward

    // Turn Left / Right with A / D or Left / Right Arrow keys
    if (this.keys.left) {
      this.player.rotation.y += turnSpeed * delta;
    }
    if (this.keys.right) {
      this.player.rotation.y -= turnSpeed * delta;
    }

    // Walk Forward / Backward with W / S or Up / Down Arrow keys
    if (this.keys.forward) {
      moveDir += 1.0;
      isMoving = true;
    }
    if (this.keys.backward) {
      moveDir -= 0.65; // Slightly slower when backing up
      isMoving = true;
    }

    // Incorporate mobile touch joystick
    if (Math.abs(this.mobileInput.x) > 0.1 || Math.abs(this.mobileInput.y) > 0.1) {
      const joyAngle = Math.atan2(this.mobileInput.x, -this.mobileInput.y);
      this.player.rotation.y = joyAngle;
      moveDir = Math.min(1.0, Math.hypot(this.mobileInput.x, this.mobileInput.y));
      isMoving = true;
    }

    if (isMoving) {
      // Calculate forward direction vector based on player's current facing angle
      const forwardX = Math.sin(this.player.rotation.y);
      const forwardZ = Math.cos(this.player.rotation.y);

      // Sprint desteği (Shift tuşu) veya normal akıcı yürüme hızı
      const baseSpeed = this.keys.sprint ? 6.5 : this.playerSpeed;
      const currentSpeed = baseSpeed * moveDir;
      const nextX = this.player.position.x + forwardX * currentSpeed * delta;
      const nextZ = this.player.position.z + forwardZ * currentSpeed * delta;

      // Bounds checking (Keep inside the game map)
      if (nextX >= -15 && nextX <= 15) this.player.position.x = nextX;
      if (nextZ >= -16 && nextZ <= 21) this.player.position.z = nextZ;

      // Walking animation synchronized to speed
      const animSpeed = this.keys.sprint ? 11 : 8.5;
      this.walkCycle += delta * animSpeed;
      const legAngle = Math.sin(this.walkCycle) * 0.55;
      this.leftLeg.rotation.x = legAngle;
      this.rightLeg.rotation.x = -legAngle;
      this.leftArm.rotation.x = -legAngle * 0.8;
      this.rightArm.rotation.x = legAngle * 0.8;
      this.player.position.y = Math.abs(Math.sin(this.walkCycle * 2)) * 0.08;
    } else {
      // Idle pose
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.leftArm.rotation.x = 0;
      this.rightArm.rotation.x = 0;
      this.player.position.y = 0;
    }

    // Gravity & Jump Physics
    if (!this.isGrounded) {
      this.playerVelocity.y -= 18 * delta;
      this.player.position.y += this.playerVelocity.y * delta;
      if (this.player.position.y <= 0) {
        this.player.position.y = 0;
        this.playerVelocity.y = 0;
        this.isGrounded = true;
      }
    }

    // Dynamic Indoor/Outdoor Adaptive Camera
    const isIndoor = this.player.position.z <= 1.0;
    const targetHeight = isIndoor ? 1.75 : 3.8;
    const targetDistance = isIndoor ? 2.6 : 5.8;
    const lookAtHeight = isIndoor ? 1.35 : 1.2;

    const angle = this.player.rotation.y;
    // Position camera behind the player according to where they are facing
    const offsetX = -Math.sin(angle) * targetDistance;
    const offsetZ = -Math.cos(angle) * targetDistance;

    const desiredCameraPos = new THREE.Vector3(
      this.player.position.x + offsetX,
      this.player.position.y + targetHeight,
      this.player.position.z + offsetZ
    );

    // If indoors, ensure camera never clips into outer ceiling
    if (isIndoor) {
      desiredCameraPos.y = Math.min(desiredCameraPos.y, 2.6);
    }

    this.camera.position.lerp(desiredCameraPos, 0.08);

    // Camera looks slightly ahead of the player in their movement direction
    const lookTarget = new THREE.Vector3(
      this.player.position.x + Math.sin(angle) * 1.5,
      this.player.position.y + lookAtHeight,
      this.player.position.z + Math.cos(angle) * 1.5
    );
    this.camera.lookAt(lookTarget);

    // Emit player moved for radar
    if (this.callbacks.onPlayerMoved) {
      this.callbacks.onPlayerMoved({
        x: this.player.position.x,
        z: this.player.position.z,
        rotation: this.player.rotation.y
      });
    }
  }

  checkProximity() {
    if (!this.player) return;
    const playerPos = this.player.position;
    let closestInteractable = null;
    let minDistance = 2.4; // Interaction threshold in meters

    // 1. Check NPCs
    for (const npc of this.npcs) {
      const dist = playerPos.distanceTo(npc.group.position);
      // Turn NPC nameplate towards camera
      npc.nameplate.quaternion.copy(this.camera.quaternion);
      // Bounce marker
      npc.marker.position.y = 2.65 + Math.sin(Date.now() * 0.005) * 0.12;

      if (dist < minDistance) {
        closestInteractable = {
          type: 'npc',
          data: npc.data,
          distance: dist
        };
      }
    }

    // 2. Check Collectibles
    for (const col of this.collectibles) {
      if (col.collected) continue;
      // Spin and bob collectible
      col.mesh.rotation.y += 0.03;
      col.mesh.rotation.x += 0.015;
      col.label.quaternion.copy(this.camera.quaternion);

      const dist = playerPos.distanceTo(col.group.position);
      if (dist < 1.8 && (!closestInteractable || dist < closestInteractable.distance)) {
        closestInteractable = {
          type: 'collectible',
          data: col.item,
          distance: dist
        };
      }
    }

    // Notify React state
    if (closestInteractable) {
      if (!this.activeInteractable || this.activeInteractable.data.id !== closestInteractable.data.id) {
        this.activeInteractable = closestInteractable;
        if (closestInteractable.type === 'npc' && this.callbacks.onNearNPC) {
          this.callbacks.onNearNPC(closestInteractable.data);
        } else if (closestInteractable.type === 'collectible' && this.callbacks.onNearCollectible) {
          this.callbacks.onNearCollectible(closestInteractable.data);
        }
      }
    } else {
      if (this.activeInteractable) {
        this.activeInteractable = null;
        if (this.callbacks.onLeaveInteractive) {
          this.callbacks.onLeaveInteractive();
        }
      }
    }
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate);

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const elapsedTime = this.clock.getElapsedTime();

    // Update animations
    this.animatedObjects.forEach(obj => obj.update(elapsedTime));

    // Update player and camera
    this.updatePlayer(delta);

    // Check distance triggers
    this.checkProximity();

    // Render frame
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('resize', this.onResize);

    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}
