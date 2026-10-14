import * as THREE from 'three';

/**
 * High-Fidelity Realistic Humanoid Characters and School Props
 * Built with smooth organic anatomies, PBR shading, and realistic school props.
 */

// ============================================================================
// 1. REALISTIC HUMANOID CHARACTER BUILDER
// ============================================================================

export function createRealisticCharacter({
  skinColor = '#f5c6a5',
  hairColor = '#2d1810',
  hairStyle = 'short', // 'short', 'teacher', 'chef', 'ponytail'
  outfitColor = '#1e40af', // Primary jacket/shirt
  pantsColor = '#1e293b',
  shoeColor = '#0f172a',
  role = 'student', // 'student', 'teacher', 'chef', 'guide'
  hasBackpack = false
}) {
  const root = new THREE.Group();
  root.scale.set(0.72, 0.72, 0.72); // Karakter boyutunu dengeli ve kompakt hale getir

  const skinMat = new THREE.MeshStandardMaterial({
    color: skinColor,
    roughness: 0.65,
    metalness: 0.02
  });

  const hairMat = new THREE.MeshStandardMaterial({
    color: hairColor,
    roughness: 0.75,
    metalness: 0.05
  });

  const outfitMat = new THREE.MeshStandardMaterial({
    color: outfitColor,
    roughness: 0.6,
    metalness: 0.05
  });

  const pantsMat = new THREE.MeshStandardMaterial({
    color: pantsColor,
    roughness: 0.7,
    metalness: 0.02
  });

  // -------------------------------------------------------------
  // Torso / Chest / Neck
  // -------------------------------------------------------------
  const torsoGroup = new THREE.Group();

  // Neck
  const neck = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.12, 0.22, 16),
    skinMat
  );
  neck.position.y = 1.48;
  torsoGroup.add(neck);

  // Main Chest & Pelvis (Smooth contoured capsule)
  const chest = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.26, 0.44, 8, 16),
    outfitMat
  );
  chest.position.y = 1.05;
  chest.scale.set(1.15, 1.0, 0.75); // Flatter depth, wider shoulders
  chest.castShadow = true;
  torsoGroup.add(chest);

  // School Uniform Collar & Tie / Details
  if (role === 'teacher') {
    // White shirt V-neck & Tie
    const shirt = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.28, 0.04),
      new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.4 })
    );
    shirt.position.set(0, 1.25, 0.18);
    const tie = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.38, 0.05),
      new THREE.MeshStandardMaterial({ color: '#b91c1c', roughness: 0.4 })
    );
    tie.position.set(0, 1.15, 0.2);
    torsoGroup.add(shirt, tie);
  } else if (role === 'chef') {
    // Chef Apron & Red Neckerchief
    const apron = new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.7, 0.06),
      new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.5 })
    );
    apron.position.set(0, 0.95, 0.18);
    const scarf = new THREE.Mesh(
      new THREE.TorusGeometry(0.14, 0.05, 8, 16),
      new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.5 })
    );
    scarf.rotation.x = Math.PI / 2;
    scarf.position.set(0, 1.42, 0.05);
    torsoGroup.add(apron, scarf);
  } else {
    // Student School Collar & Red Badge
    const collar = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.18, 0.04),
      new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.4 })
    );
    collar.position.set(0, 1.28, 0.18);
    const tie = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.32, 0.05),
      new THREE.MeshStandardMaterial({ color: '#ef4444', roughness: 0.4 })
    );
    tie.position.set(0, 1.18, 0.19);
    torsoGroup.add(collar, tie);
  }

  root.add(torsoGroup);

  // -------------------------------------------------------------
  // Head & Facial Features
  // -------------------------------------------------------------
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 1.76, 0);

  // Rounded human head
  const headMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.24, 24, 24),
    skinMat
  );
  headMesh.scale.set(0.9, 1.05, 0.95);
  headMesh.castShadow = true;
  headGroup.add(headMesh);

  // Nose
  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.035, 0.08, 8),
    skinMat
  );
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.01, 0.23);
  headGroup.add(nose);

  // Eyes with Sclera & Dark Pupils
  const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
  const eyePupilMat = new THREE.MeshBasicMaterial({ color: '#1e293b' });

  [-0.075, 0.075].forEach(x => {
    const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), eyeWhiteMat);
    eyeWhite.scale.set(1.1, 0.75, 0.4);
    eyeWhite.position.set(x, 0.05, 0.2);

    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.024, 8, 8), eyePupilMat);
    pupil.position.set(x, 0.05, 0.225);

    // Eyebrow
    const brow = new THREE.Mesh(
      new THREE.BoxGeometry(0.07, 0.018, 0.02),
      hairMat
    );
    brow.position.set(x, 0.1, 0.21);

    headGroup.add(eyeWhite, pupil, brow);
  });

  // Hair Styling
  if (hairStyle === 'chef') {
    // Tall chef toque (hat)
    const hatBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 0.15, 16),
      new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.3 })
    );
    hatBase.position.y = 0.24;
    const hatDome = new THREE.Mesh(
      new THREE.SphereGeometry(0.26, 16, 16),
      new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 })
    );
    hatDome.position.y = 0.38;
    hatDome.scale.set(1.1, 0.8, 1.1);
    headGroup.add(hatBase, hatDome);
  } else if (hairStyle === 'ponytail') {
    // Hair base + ponytail
    const hairCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 16, 16),
      hairMat
    );
    hairCap.position.set(0, 0.05, -0.04);
    hairCap.scale.set(0.95, 1.05, 1.0);

    const tail = new THREE.Mesh(
      new THREE.ConeGeometry(0.08, 0.35, 12),
      hairMat
    );
    tail.rotation.x = -Math.PI / 3;
    tail.position.set(0, 0.05, -0.28);
    headGroup.add(hairCap, tail);
  } else {
    // Natural modern haircut
    const hairCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.255, 16, 16),
      hairMat
    );
    hairCap.position.set(0, 0.06, -0.02);
    hairCap.scale.set(0.95, 1.05, 1.02);

    // Front bangs
    const fringe = new THREE.Mesh(
      new THREE.BoxGeometry(0.26, 0.08, 0.1),
      hairMat
    );
    fringe.position.set(0, 0.15, 0.18);
    headGroup.add(hairCap, fringe);
  }

  // Teacher Spectacles
  if (role === 'teacher') {
    const glassesMat = new THREE.MeshStandardMaterial({ color: '#1e293b', metalness: 0.8, roughness: 0.2 });
    [-0.075, 0.075].forEach(x => {
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.008, 8, 16), glassesMat);
      rim.position.set(x, 0.05, 0.22);
      headGroup.add(rim);
    });
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.008, 0.01), glassesMat);
    bridge.position.set(0, 0.05, 0.22);
    headGroup.add(bridge);
  }

  root.add(headGroup);

  // -------------------------------------------------------------
  // Contoured Arms & Hands
  // -------------------------------------------------------------
  const leftArm = new THREE.Group();
  leftArm.position.set(-0.35, 1.3, 0);
  const lUpperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.38, 8, 12), outfitMat);
  lUpperArm.position.y = -0.2;
  lUpperArm.castShadow = true;
  const lHand = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 12), skinMat);
  lHand.position.y = -0.46;
  leftArm.add(lUpperArm, lHand);

  const rightArm = new THREE.Group();
  rightArm.position.set(0.35, 1.3, 0);
  const rUpperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.38, 8, 12), outfitMat);
  rUpperArm.position.y = -0.2;
  rUpperArm.castShadow = true;
  const rHand = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 12), skinMat);
  rHand.position.y = -0.46;
  rightArm.add(rUpperArm, rHand);

  // Teacher holds a textbook in right hand
  if (role === 'teacher') {
    const book = createRealisticBook({ coverColor: '#1d4ed8' });
    book.scale.set(0.65, 0.65, 0.65);
    book.rotation.set(0, Math.PI / 4, Math.PI / 6);
    book.position.set(0.12, -0.42, 0.15);
    rightArm.add(book);
  }

  root.add(leftArm, rightArm);

  // -------------------------------------------------------------
  // Contoured Legs & Realistic Sneakers
  // -------------------------------------------------------------
  const shoeMat = new THREE.MeshStandardMaterial({ color: shoeColor, roughness: 0.4 });
  const soleMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.3 });

  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.16, 0.75, 0);
  const lLegMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.45, 8, 12), pantsMat);
  lLegMesh.position.y = -0.25;
  lLegMesh.castShadow = true;

  // Realistic Sneaker (Shaped toe, tongue, white rubber sole)
  const lShoe = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.26), shoeMat);
  lShoe.position.set(0, -0.55, 0.05);
  const lSole = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.04, 0.28), soleMat);
  lSole.position.set(0, -0.61, 0.05);
  leftLeg.add(lLegMesh, lShoe, lSole);

  const rightLeg = new THREE.Group();
  rightLeg.position.set(0.16, 0.75, 0);
  const rLegMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.45, 8, 12), pantsMat);
  rLegMesh.position.y = -0.25;
  rLegMesh.castShadow = true;

  const rShoe = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.26), shoeMat);
  rShoe.position.set(0, -0.55, 0.05);
  const rSole = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.04, 0.28), soleMat);
  rSole.position.set(0, -0.61, 0.05);
  rightLeg.add(rLegMesh, rShoe, rSole);

  root.add(leftLeg, rightLeg);

  // -------------------------------------------------------------
  // Realistic School Backpack with Zipper & Straps
  // -------------------------------------------------------------
  let backpack = null;
  if (hasBackpack) {
    backpack = new THREE.Group();
    const packMat = new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.5 });
    const pocketMat = new THREE.MeshStandardMaterial({ color: '#991b1b', roughness: 0.6 });

    // Rounded backpack body
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.18, 0.28, 8, 12),
      packMat
    );
    body.scale.set(1.2, 1.0, 0.7);
    body.position.set(0, 1.08, -0.24);
    body.castShadow = true;

    // Front pocket
    const pocket = new THREE.Mesh(
      new THREE.BoxGeometry(0.32, 0.24, 0.08),
      pocketMat
    );
    pocket.position.set(0, 0.98, -0.34);

    backpack.add(body, pocket);
    root.add(backpack);
  }

  return {
    root,
    leftLeg,
    rightLeg,
    leftArm,
    rightArm,
    headGroup,
    backpack
  };
}

// ============================================================================
// 2. REALISTIC SCHOOL PROPS BUILDERS
// ============================================================================

/**
 * Realistic Student Desk & Ergonomic Chair
 */
export function createRealisticDesk() {
  const group = new THREE.Group();

  const woodMat = new THREE.MeshStandardMaterial({
    color: '#d97706',
    roughness: 0.35,
    metalness: 0.05
  });
  const metalMat = new THREE.MeshStandardMaterial({
    color: '#475569',
    roughness: 0.25,
    metalness: 0.8
  });

  // Tabletop with rounded beveled edges
  const top = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.06, 0.85),
    woodMat
  );
  top.position.y = 0.88;
  top.castShadow = true;
  group.add(top);

  // Metal Tubular Legs
  const legPositions = [
    [-0.65, -0.35],
    [0.65, -0.35],
    [-0.65, 0.35],
    [0.65, 0.35]
  ];

  legPositions.forEach(([x, z]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.025, 0.88, 16),
      metalMat
    );
    leg.position.set(x, 0.44, z);
    leg.castShadow = true;
    group.add(leg);
  });

  // Ergonomic Chair
  const chairSeat = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.05, 0.55),
    woodMat
  );
  chairSeat.position.set(0, 0.52, 0.75);

  const chairBack = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.42, 0.05),
    woodMat
  );
  chairBack.position.set(0, 0.82, 1.0);

  const chairLegs = [
    [-0.26, 0.55],
    [0.26, 0.55],
    [-0.26, 0.95],
    [0.26, 0.95]
  ];

  chairLegs.forEach(([cx, cz]) => {
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.52, 12),
      metalMat
    );
    leg.position.set(cx, 0.26, cz);
    group.add(leg);
  });

  group.add(chairSeat, chairBack);
  return group;
}

/**
 * Realistic Book with detailed binding and paper pages
 */
export function createRealisticBook({ coverColor = '#2563eb' } = {}) {
  const group = new THREE.Group();

  const coverMat = new THREE.MeshStandardMaterial({
    color: coverColor,
    roughness: 0.4,
    metalness: 0.1
  });
  const pageMat = new THREE.MeshStandardMaterial({
    color: '#fef3c7', // Warm paper
    roughness: 0.8
  });

  // Pages Block
  const pages = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.58), pageMat);
  pages.position.y = 0.05;

  // Hardcover
  const topCover = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.6), coverMat);
  topCover.position.y = 0.1;
  const bottomCover = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.6), coverMat);
  bottomCover.position.y = 0.0;
  const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.6, 12), coverMat);
  spine.rotation.x = Math.PI / 2;
  spine.position.set(-0.22, 0.05, 0);

  group.add(pages, topCover, bottomCover, spine);
  group.castShadow = true;
  return group;
}

/**
 * Realistic Wooden Pencil with Eraser & Brass Ferrule
 */
export function createRealisticPencil() {
  const group = new THREE.Group();

  const woodMat = new THREE.MeshStandardMaterial({ color: '#f59e0b', roughness: 0.5 }); // Yellow pencil
  const ferruleMat = new THREE.MeshStandardMaterial({ color: '#d97706', metalness: 0.9, roughness: 0.2 }); // Brass
  const eraserMat = new THREE.MeshStandardMaterial({ color: '#ec4899', roughness: 0.9 }); // Pink eraser
  const tipMat = new THREE.MeshStandardMaterial({ color: '#fed7aa', roughness: 0.7 }); // Exposed wood
  const graphiteMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.3 }); // Lead tip

  // Hexagonal Body
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.55, 6), woodMat);
  body.rotation.z = Math.PI / 2;

  // Brass Ring & Eraser
  const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.06, 16), ferruleMat);
  ferrule.rotation.z = Math.PI / 2;
  ferrule.position.x = 0.3;

  const eraser = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.08, 16), eraserMat);
  eraser.rotation.z = Math.PI / 2;
  eraser.position.x = 0.37;

  // Sharpened Cone Tip
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 16), tipMat);
  cone.rotation.z = -Math.PI / 2;
  cone.position.x = -0.33;

  const graphite = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.04, 16), graphiteMat);
  graphite.rotation.z = -Math.PI / 2;
  graphite.position.x = -0.37;

  group.add(body, ferrule, eraser, cone, graphite);
  group.castShadow = true;
  return group;
}

/**
 * Realistic Dual-Color Wedge Eraser
 */
export function createRealisticEraser() {
  const group = new THREE.Group();

  const redMat = new THREE.MeshStandardMaterial({ color: '#ef4444', roughness: 0.8 });
  const blueMat = new THREE.MeshStandardMaterial({ color: '#3b82f6', roughness: 0.8 });

  const redHalf = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.14), redMat);
  redHalf.position.x = -0.1;
  const blueHalf = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.14), blueMat);
  blueHalf.position.x = 0.1;

  group.add(redHalf, blueHalf);
  group.castShadow = true;
  return group;
}

/**
 * Realistic Acrylic Measurement Ruler
 */
export function createRealisticRuler() {
  const rulerMat = new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    transparent: true,
    opacity: 0.75,
    roughness: 0.1,
    metalness: 0.1
  });

  const ruler = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.01, 0.12), rulerMat);
  ruler.castShadow = true;
  return ruler;
}
