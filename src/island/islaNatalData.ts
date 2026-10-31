/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * ISLA NATAL — «EL ARCADE QUE ESPERÓ SU MOMENTO»
 *
 * Primera zona explorable del juego: la isla pequeña donde nació el protagonista.
 * Geografía irregular totalmente rodeada de mar (fuera de los rects caminables sólo
 * hay océano), playa de llegada, pradera con la cabaña familiar, senderos de tierra,
 * un alto rocoso al noroeste, un mirador al sureste y la arboleda del cobertizo
 * donde duerme una vieja máquina de Pong.
 *
 * Este módulo es autónomo: no modifica ni depende de los datos de la Isla del Origen.
 */

export const ISLA_NATAL_WORLD_W = 2352;
export const ISLA_NATAL_WORLD_H = 1736;

export type IslaNatalZoneId =
  | 'playa-aurora'
  | 'pradera-casa'
  | 'alto-rocas'
  | 'arboleda-arcade'
  | 'mirador-oleaje';

export type IslaNatalSurface = 'sand' | 'grass' | 'path' | 'rock';

export interface IslaNatalWalkRect {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  zone: IslaNatalZoneId;
  surface: IslaNatalSurface;
}

export interface IslaNatalSolidRect {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface IslaNatalZoneMeta {
  id: IslaNatalZoneId;
  name: string;
  subtitle: string;
  accentHex: string;
}

/* ------------------------------------------------------------------ */
/* ZONAS                                                              */
/* ------------------------------------------------------------------ */

export const ISLA_NATAL_ZONES: Record<IslaNatalZoneId, IslaNatalZoneMeta> = {
  'playa-aurora': {
    id: 'playa-aurora',
    name: 'Playa del Aurora',
    subtitle: 'Donde el mar te dejó una vez',
    accentHex: '#7dd3fc',
  },
  'pradera-casa': {
    id: 'pradera-casa',
    name: 'Pradera de Casa',
    subtitle: 'La hierba aún recuerda tus pasos',
    accentHex: '#86efac',
  },
  'alto-rocas': {
    id: 'alto-rocas',
    name: 'Alto de las Rocas',
    subtitle: 'El mirador de la infancia',
    accentHex: '#fcd34d',
  },
  'arboleda-arcade': {
    id: 'arboleda-arcade',
    name: 'La Arboleda',
    subtitle: 'Algo espera entre los árboles',
    accentHex: '#67e8f9',
  },
  'mirador-oleaje': {
    id: 'mirador-oleaje',
    name: 'Mirador del Oleaje',
    subtitle: 'Un horizonte que parpadea',
    accentHex: '#a5b4fc',
  },
};

/* ------------------------------------------------------------------ */
/* MASA DE TIERRA: RECTS CAMINABLES (el resto del mundo es océano)     */
/* Orden de pintado: arena → hierba → sendero → roca                   */
/* ------------------------------------------------------------------ */

export const ISLA_NATAL_WALK_RECTS: IslaNatalWalkRect[] = [
  // Arena costera equilibrada a ambos lados del eje central (x = 1176)
  { id: 's-playa-sur', x: 840, y: 1256, w: 672, h: 164, zone: 'playa-aurora', surface: 'sand' },
  { id: 's-ensenada-oeste', x: 640, y: 1148, w: 236, h: 168, zone: 'playa-aurora', surface: 'sand' },
  { id: 's-punta-suroeste', x: 528, y: 1056, w: 168, h: 148, zone: 'playa-aurora', surface: 'sand' },
  { id: 's-ensenada-este', x: 1476, y: 1152, w: 244, h: 158, zone: 'mirador-oleaje', surface: 'sand' },
  { id: 's-punta-sureste', x: 1624, y: 1052, w: 204, h: 176, zone: 'mirador-oleaje', surface: 'sand' },

  // Pradera ampliada un 40 % con alas oeste y este armonizadas
  { id: 'g-pradera', x: 720, y: 816, w: 912, h: 468, zone: 'pradera-casa', surface: 'grass' },
  { id: 'g-loma-norte', x: 840, y: 668, w: 672, h: 184, zone: 'pradera-casa', surface: 'grass' },
  { id: 'g-brazo-oeste', x: 548, y: 896, w: 224, h: 276, zone: 'pradera-casa', surface: 'grass' },
  { id: 'g-brazo-este', x: 1580, y: 896, w: 228, h: 272, zone: 'mirador-oleaje', surface: 'grass' },
  { id: 'g-arboleda', x: 1476, y: 628, w: 428, h: 312, zone: 'arboleda-arcade', surface: 'grass' },
  { id: 'g-approach-rocas', x: 524, y: 716, w: 316, h: 216, zone: 'pradera-casa', surface: 'grass' },

  // Red de caminos conectada alrededor del anillo central de la Huerta
  { id: 'p-playa-crucero', x: 1144, y: 1074, w: 64, h: 266, zone: 'playa-aurora', surface: 'path' },
  { id: 'p-huerta-norte', x: 1004, y: 876, w: 344, h: 56, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-huerta-sur', x: 1004, y: 1042, w: 344, h: 58, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-huerta-oeste', x: 1000, y: 884, w: 64, h: 208, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-huerta-este', x: 1288, y: 884, w: 64, h: 208, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-casa-umbral', x: 648, y: 1042, w: 124, h: 44, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-casa-crucero', x: 740, y: 966, w: 288, h: 112, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-crucero-puerto', x: 1144, y: 668, w: 64, h: 236, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-tramo-arboleda-norte', x: 1188, y: 762, w: 404, h: 72, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-tramo-arboleda', x: 1326, y: 846, w: 268, h: 164, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-plaza-arcade', x: 1536, y: 842, w: 244, h: 56, zone: 'arboleda-arcade', surface: 'path' },
  { id: 'p-ramal-mirador-1', x: 1456, y: 920, w: 152, h: 192, zone: 'mirador-oleaje', surface: 'path' },
  { id: 'p-ramal-mirador-2', x: 1540, y: 1068, w: 152, h: 124, zone: 'mirador-oleaje', surface: 'path' },
  { id: 'p-ramal-rocas-1', x: 812, y: 780, w: 72, h: 244, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-ramal-rocas-2', x: 616, y: 764, w: 252, h: 76, zone: 'pradera-casa', surface: 'path' },
  { id: 'p-subida-rocas', x: 588, y: 434, w: 92, h: 370, zone: 'alto-rocas', surface: 'path' },

  // Alto rocoso noroeste ampliado
  { id: 'r-meseta', x: 416, y: 468, w: 396, h: 288, zone: 'alto-rocas', surface: 'rock' },
  { id: 'r-cresta', x: 496, y: 388, w: 244, h: 112, zone: 'alto-rocas', surface: 'rock' },
];

export type IslaNatalPathTextureId =
  | 'terracotta'
  | 'coastal'
  | 'port'
  | 'arboleda'
  | 'highland';

export interface IslaNatalPathRoute {
  id: string;
  texture: IslaNatalPathTextureId;
  width: number;
  points: [number, number][];
  featherStart?: boolean;
  featherEnd?: boolean;
}

export interface IslaNatalPathPlaza {
  id: string;
  x: number;
  y: number;
  rx: number;
  ry: number;
  texture: IslaNatalPathTextureId;
}

/**
 * Red orgánica de caminos empedrados articulada en torno al Anillo de la Huerta Central:
 * - Playa del Aurora -> Glorieta Sur de la Huerta (canto rodado costero)
 * - Anillo Norte y Sur de la Huerta Central (laja cálida de terracota y piedra de jardín)
 * - Glorieta Norte de la Huerta -> Muelle del Puerto Norte (piedra caliza portuaria)
 * - Umbral de Casa de Pixel -> Glorieta Oeste de la Huerta (laja cálida de arenisca/terracota)
 * - Glorieta Este y Crucero Norte -> La Arboleda y Cobertizo de Pong (laja musgosa de bosque)
 * - Bifurcación Sureste -> Mirador del Oleaje (paso costero hacia la punta)
 * - Bifurcación Noroeste -> Alto de las Rocas y Mirador (empedrado rústico de montaña)
 */
export const ISLA_NATAL_PATH_ROUTES: IslaNatalPathRoute[] = [
  {
    id: 'sendero-playa-crucero',
    texture: 'coastal',
    width: 36,
    points: [
      [1176, 1326],
      [1168, 1280],
      [1172, 1214],
      [1180, 1144],
      [1176, 1080],
    ],
    featherStart: true,
    featherEnd: false,
  },
  {
    id: 'sendero-ramal-mirador',
    texture: 'coastal',
    width: 28,
    points: [
      [1486, 944],
      [1514, 1012],
      [1558, 1078],
      [1608, 1134],
      [1656, 1168],
    ],
    featherStart: true,
    featherEnd: true,
  },
  {
    id: 'sendero-ramal-alto-rocas',
    texture: 'highland',
    width: 30,
    points: [
      [856, 1006],
      [852, 916],
      [836, 822],
      [768, 796],
      [662, 788],
      [646, 736],
      [634, 624],
      [624, 514],
      [616, 448],
    ],
    featherStart: true,
    featherEnd: false,
  },
  {
    id: 'sendero-arboleda-norte',
    texture: 'arboleda',
    width: 28,
    points: [
      [1176, 792],
      [1286, 786],
      [1408, 782],
      [1518, 794],
      [1564, 832],
      [1586, 868],
    ],
    featherStart: true,
    featherEnd: true,
  },
  {
    id: 'sendero-arboleda-arcade',
    texture: 'arboleda',
    width: 32,
    points: [
      [1328, 988],
      [1412, 982],
      [1486, 944],
      [1552, 876],
      [1626, 868],
      [1696, 868],
    ],
    featherStart: false,
    featherEnd: false,
  },
  {
    id: 'sendero-crucero-puerto',
    texture: 'port',
    width: 34,
    points: [
      [1176, 896],
      [1170, 842],
      [1176, 792],
      [1180, 732],
      [1176, 676],
    ],
    featherStart: false,
    featherEnd: false,
  },
  {
    id: 'sendero-casa-crucero',
    texture: 'terracotta',
    width: 32,
    points: [
      [674, 1056],
      [726, 1062],
      [790, 1046],
      [856, 1006],
      [940, 990],
      [1024, 988],
    ],
    featherStart: false,
    featherEnd: false,
  },
  {
    id: 'anillo-huerta-norte',
    texture: 'terracotta',
    width: 32,
    points: [
      [1024, 988],
      [1026, 938],
      [1048, 906],
      [1106, 898],
      [1176, 896],
      [1246, 898],
      [1304, 906],
      [1326, 938],
      [1328, 988],
    ],
    featherStart: false,
    featherEnd: false,
  },
  {
    id: 'anillo-huerta-sur',
    texture: 'terracotta',
    width: 32,
    points: [
      [1024, 988],
      [1026, 1038],
      [1048, 1070],
      [1106, 1078],
      [1176, 1080],
      [1246, 1078],
      [1304, 1070],
      [1326, 1038],
      [1328, 988],
    ],
    featherStart: false,
    featherEnd: false,
  },
];

export const ISLA_NATAL_PATH_PLAZAS: IslaNatalPathPlaza[] = [
  { id: 'plaza-umbral-casa', x: 674, y: 1056, rx: 24, ry: 15, texture: 'terracotta' },
  { id: 'plaza-huerta-sur', x: 1176, y: 1078, rx: 30, ry: 19, texture: 'terracotta' },
  { id: 'plaza-huerta-umbral', x: 1176, y: 1052, rx: 20, ry: 12, texture: 'terracotta' },
  { id: 'plaza-huerta-norte', x: 1176, y: 896, rx: 28, ry: 18, texture: 'port' },
  { id: 'plaza-huerta-oeste', x: 1024, y: 988, rx: 25, ry: 20, texture: 'terracotta' },
  { id: 'plaza-huerta-este', x: 1328, y: 988, rx: 25, ry: 20, texture: 'arboleda' },
  { id: 'plaza-crucero-norte', x: 1176, y: 792, rx: 24, ry: 18, texture: 'port' },
  { id: 'plaza-cabecera-muelle', x: 1176, y: 676, rx: 24, ry: 14, texture: 'port' },
  { id: 'plaza-cobertizo-arcade', x: 1696, y: 868, rx: 40, ry: 20, texture: 'arboleda' },
  { id: 'plaza-mirador-rocas', x: 616, y: 448, rx: 28, ry: 15, texture: 'highland' },
  { id: 'plaza-mirador-oleaje', x: 1656, y: 1168, rx: 24, ry: 15, texture: 'coastal' },
];

export const ISLA_NATAL_SOLIDS: IslaNatalSolidRect[] = [
  { id: 'cabana', x: 596, y: 952, w: 112, h: 94 },
  { id: 'cobertizo', x: 1624, y: 718, w: 146, h: 122 },
  { id: 'bolo-norte', x: 454, y: 410, w: 64, h: 52 },
  { id: 'bolo-este', x: 702, y: 492, w: 56, h: 48 },
  { id: 'bolo-meseta-sur', x: 514, y: 668, w: 48, h: 42 },
  { id: 'tronco', x: 1284, y: 1168, w: 94, h: 26 },
  { id: 'roca-punta', x: 1712, y: 1106, w: 48, h: 40 },
  { id: 'roca-ensenada', x: 668, y: 1236, w: 46, h: 36 },
  { id: 'muelle-carga-oeste', x: 1130, y: 604, w: 18, h: 24 },
  { id: 'muelle-carga-brazo', x: 1230, y: 572, w: 22, h: 22 },
];

/**
 * Tablones del muelle ampliado del Puerto Norte: pasarela ancha principal y
 * brazo de amarre oriental sobre el agua. Son transitables de punta a punta.
 */
export const ISLA_NATAL_DECK_RECTS: IslaNatalSolidRect[] = [
  { id: 'muelle-norte-pasarela', x: 1130, y: 548, w: 92, h: 126 },
  { id: 'muelle-norte-brazo-este', x: 1214, y: 566, w: 42, h: 42 },
];

/* ------------------------------------------------------------------ */
/* INTERIOR DE LA CABAÑA                                              */
/* ------------------------------------------------------------------ */

/**
 * Sala única de la cabaña familiar. Vive en su propio espacio de coordenadas
 * (480 × 300) y se dibuja con la misma cámara y el mismo avatar que la isla.
 * La mochila cuelga del clavo junto a la ventana hasta que el jugador la recoge.
 */
export const ISLA_NATAL_CABIN = {
  roomW: 480,
  roomH: 300,
  spawn: { x: 240, y: 246 },
  /** Posición de Pixel al comenzar la partida, escuchando la radio de la mesa. */
  introSpot: { x: 300, y: 214 },
  door: { x: 240, y: 282, radius: 46 },
  backpack: { x: 200, y: 104, radius: 56 },
  radio: { x: 363, y: 154, radius: 56 },
  /**
   * El cofre del abuelo descansa bajo el retrato familiar. Guarda la palanca
   * del viejo Pong y la carta que explica el Reinicio Cero.
   */
  chest: { x: 282, y: 172, radius: 52 },
  /** Muebles que bloquean el paso dentro de la sala. */
  solids: [
    { id: 'cama', x: 30, y: 150, w: 112, h: 114 },
    { id: 'mesa', x: 318, y: 148, w: 86, h: 58 },
    { id: 'cocina', x: 404, y: 112, w: 64, h: 92 },
    { id: 'cofre', x: 270, y: 162, w: 24, h: 16 },
  ] as IslaNatalSolidRect[],
};

/** Combinación grabada en la carta que el viajero entrega en mano. */
export const ISLA_NATAL_CHEST_CODE = '1972';

export function isCabinInteriorWalkable(x: number, y: number): boolean {
  if (x < 26 || x > 454 || y < 138 || y > 286) return false;
  for (const s of ISLA_NATAL_CABIN.solids) {
    if (x >= s.x - 4 && x <= s.x + s.w + 4 && y >= s.y - 4 && y <= s.y + s.h + 4) {
      return false;
    }
  }
  return true;
}

/* ------------------------------------------------------------------ */
/* CONSULTAS DE COLISIÓN                                              */
/* ------------------------------------------------------------------ */

export function isIslaNatalPointOnLand(x: number, y: number): IslaNatalWalkRect | null {
  for (let i = ISLA_NATAL_WALK_RECTS.length - 1; i >= 0; i--) {
    const r = ISLA_NATAL_WALK_RECTS[i];
    if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) return r;
  }
  return null;
}

export function isIslaNatalPointOnDeck(x: number, y: number): boolean {
  for (const d of ISLA_NATAL_DECK_RECTS) {
    if (x >= d.x && x <= d.x + d.w && y >= d.y && y <= d.y + d.h) return true;
  }
  return false;
}

export function isIslaNatalPointBlockedBySolid(x: number, y: number): boolean {
  for (const s of ISLA_NATAL_SOLIDS) {
    // Margen mínimo: el bloqueo coincide con la silueta dibujada para no
    // generar muros invisibles sobre senderos ni junto a las puertas.
    if (x >= s.x - 2 && x <= s.x + s.w + 2 && y >= s.y - 2 && y <= s.y + s.h + 3) {
      return true;
    }
  }
  return false;
}

/** Un punto es transitable si está sobre tierra (o el muelle) y no dentro de un obstáculo. */
export function isIslaNatalPointWalkable(x: number, y: number): boolean {
  if (!isIslaNatalPointOnLand(x, y) && !isIslaNatalPointOnDeck(x, y)) return false;
  return !isIslaNatalPointBlockedBySolid(x, y);
}

export function isIslaNatalBoxWalkable(
  x: number,
  y: number,
  halfW = 8,
  footTolerance = 2
): boolean {
  return (
    isIslaNatalPointWalkable(x - halfW, y) &&
    isIslaNatalPointWalkable(x + halfW, y) &&
    isIslaNatalPointWalkable(x, y - footTolerance) &&
    isIslaNatalPointWalkable(x, y + footTolerance)
  );
}

/** Prioriza la superficie más específica (roca > sendero > hierba > arena). */
export function islaNatalZoneAt(x: number, y: number): IslaNatalZoneId {
  if (isIslaNatalPointOnDeck(x, y)) return 'pradera-casa';
  const order: IslaNatalSurface[] = ['rock', 'path', 'grass', 'sand'];
  for (const surface of order) {
    for (const r of ISLA_NATAL_WALK_RECTS) {
      if (r.surface !== surface) continue;
      if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) return r.zone;
    }
  }
  const fallback = isIslaNatalPointOnLand(x, y);
  return fallback ? fallback.zone : 'playa-aurora';
}

/* ------------------------------------------------------------------ */
/* PUNTOS DE LLEGADA Y PARTIDA                                        */
/* ------------------------------------------------------------------ */

export const ISLA_NATAL_SPAWN = { x: 1176, y: 1368 };
/**
 * Puerto Norte: única salida de la isla. Está en la costa norte de la pradera,
 * frente al mar abierto que separa la Isla Natal de la Isla del Origen.
 */
export const ISLA_NATAL_DEPARTURE = { x: 1176, y: 596, radius: 88 };
/** Punto de llegada tras ganar Pong: a unos pasos del puerto norte. */
export const ISLA_NATAL_NORTH_PORT_SPAWN = { x: 1176, y: 730 };
export const ISLA_NATAL_ARCADE_ANCHOR = { x: 1697, y: 874, radius: 80 };
/** Posición donde la paleta queda apoyada tras la victoria (debe coincidir con el renderer). */
export const ISLA_NATAL_PADDLE_ANCHOR = { x: 1757, y: 870, radius: 66 };
/**
 * Punto de aterrizaje de la máquina del viajero: la hierba abierta frente a la
 * puerta este de la cabaña, para que la escena ocurra a la vista de la casa.
 */
export const ISLA_NATAL_TRAVELER_SITE = { x: 910, y: 1084 };
/** Posición de Pixel durante la charla, cara a cara con el viajero. */
export const ISLA_NATAL_TRAVELER_SCENE_PLAYER = { x: 756, y: 1084 };

/* ------------------------------------------------------------------ */
/* MARCADORES NARRATIVOS (se guardan en island70s.narrativeEvents)     */
/* ------------------------------------------------------------------ */

export const ISLA_NATAL_FLAGS = {
  firstLight: 'isla-natal-primera-luz',
  arcadeFound: 'isla-natal-arcade-hallado',
  arcadePowered: 'isla-natal-arcade-encendido',
  pongWon: 'isla-natal-pong-victoria',
  signal: 'isla-natal-senal',
  paddle: 'isla-natal-paleta',
  departed: 'isla-natal-partida',
  cabinVisited: 'isla-natal-cabana-vista',
  backpack: 'isla-natal-mochila',
  travelerWarning: 'isla-natal-aviso-viajero',
  chestOpened: 'isla-natal-cofre-abierto',
  leverInstalled: 'isla-natal-palanca-instalada',
} as const;

/* ------------------------------------------------------------------ */
/* PUNTOS DE INTERÉS Y DIÁLOGOS                                       */
/* ------------------------------------------------------------------ */

export type IslaNatalPoiKind =
  | 'sign'
  | 'net'
  | 'shells'
  | 'window'
  | 'door'
  | 'mailbox'
  | 'crate'
  | 'viewpoint-sea'
  | 'viewpoint-island'
  | 'arcade'
  | 'paddle'
  | 'departure';

export type IslaNatalDialogSpeaker = 'pixel' | 'traveler';

export interface IslaNatalDialogLine {
  speaker: IslaNatalDialogSpeaker;
  text: string;
}

export interface IslaNatalDialog {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  hint?: string;
  /** Cuando existe, el diálogo se muestra como una conversación por burbujas. */
  lines?: IslaNatalDialogLine[];
}

export interface IslaNatalPoi {
  id: string;
  kind: IslaNatalPoiKind;
  x: number;
  y: number;
  radius: number;
  label: string;
  accentHex: string;
  dialog: IslaNatalDialog;
}

/**
 * Carteles de orientación de la isla. Comparten el formato pequeño de los
 * carteles del Origen y se pueden leer pulsando [E] igual que allí.
 */
export interface IslaNatalSignSpec {
  id: string;
  x: number;
  y: number;
  zoneTitle: string;
  lines: string[];
  accentHex: string;
}

export const ISLA_NATAL_SIGNS: IslaNatalSignSpec[] = [
  {
    id: 'cartel-puerto-norte',
    x: 1118,
    y: 726,
    zoneTitle: 'PUERTO NORTE',
    lines: [
      'Costa norte de la pradera. El muelle de tablones entra en el agua tranquila.',
      'Más allá de la rompiente, el mar abierto separa la Isla Natal de la Isla del Origen.',
    ],
    accentHex: '#a5b4fc',
  },
  {
    id: 'cartel-pradera',
    x: 980,
    y: 952,
    zoneTitle: 'PRADERA DE CASA',
    lines: [
      'La hierba aún recuerda tus pasos.',
      'La cabaña familiar se alza al oeste y la huerta florece en el crucero central.',
    ],
    accentHex: '#86efac',
  },
  {
    id: 'cartel-alto-rocas',
    x: 608,
    y: 816,
    zoneTitle: 'ALTO DE LAS ROCAS',
    lines: [
      'El mirador de la infancia.',
      'La meseta de piedra domina la isla entera desde el noroeste.',
    ],
    accentHex: '#fcd34d',
  },
  {
    id: 'cartel-arboleda',
    x: 1520,
    y: 836,
    zoneTitle: 'LA ARBOLEDA',
    lines: [
      'Algo espera entre los árboles.',
      'El sendero empedrado se adentra bajo el dosel hacia el este de la isla.',
    ],
    accentHex: '#67e8f9',
  },
  {
    id: 'cartel-mirador',
    x: 1554,
    y: 1034,
    zoneTitle: 'MIRADOR DEL OLEAJE',
    lines: [
      'Un horizonte que parpadea.',
      'La punta de arena mira al sureste, más allá del arrecife.',
    ],
    accentHex: '#a5b4fc',
  },
];

export const ISLA_NATAL_POIS: IslaNatalPoi[] = [
  {
    id: 'cartel-playa',
    kind: 'sign',
    x: 1246,
    y: 1324,
    radius: 64,
    label: 'Leer el cartel',
    accentHex: '#fcd34d',
    dialog: {
      title: 'Cartel de madera',
      subtitle: 'Playa del Aurora',
      paragraphs: [
        'La sal se ha comido casi todas las letras. Sólo se lee entero el nombre de la isla.',
        'Debajo, con una caligrafía que conoces mejor que la tuya, alguien añadió: «Aquí aprendiste a jugar».',
      ],
      hint: 'No recuerdas quién lo escribió. Tampoco recuerdas haberlo olvidado.',
    },
  },
  {
    id: 'red-pesca',
    kind: 'net',
    x: 1036,
    y: 1340,
    radius: 60,
    label: 'Examinar la red',
    accentHex: '#7dd3fc',
    dialog: {
      title: 'Red de pesca',
      paragraphs: [
        'Una red vieja, remendada una y otra vez con hilo de un cian imposible de encontrar en la isla.',
        'Entre las mallas quedan escamas que brillan un instante más de lo que deberían.',
      ],
      hint: 'El nudo del remiendo es idéntico al de los cables de la máquina de la arboleda.',
    },
  },
  {
    id: 'puerta-cabana',
    kind: 'door',
    x: 672,
    y: 1016,
    radius: 64,
    label: 'Entrar a la cabaña',
    accentHex: '#fdba74',
    dialog: {
      title: 'La cabaña',
      subtitle: 'Puerta del este',
      paragraphs: [
        'La madera de la puerta está tibia. Del otro lado llega olor a leña, a pan de ayer y a la lámpara de aceite que tu familia dejaba encendida.',
        'La mochila de lona sigue colgada junto a la ventana, esperando a que alguien vuelva a cargarla.',
      ],
      hint: 'Empuja la puerta para entrar.',
    },
  },
  {
    id: 'mirador-oleaje',
    kind: 'viewpoint-sea',
    x: 1664,
    y: 1184,
    radius: 72,
    label: 'Contemplar el horizonte',
    accentHex: '#a5b4fc',
    dialog: {
      title: 'Mirador del Oleaje',
      paragraphs: [
        'Desde la punta sureste el mar se estira hasta perder el borde. Las olas rompen con un ritmo tranquilo, casi de bucle.',
        'Muy lejos, sobre la línea del horizonte, algo parpadea tres veces y se apaga. No es un faro: es un fallo.',
        'El agua tarda un instante de más en volver a su sitio, como si la isla tuviera que dibujarla otra vez.',
      ],
      hint: 'No puedes dejar de mirar ese punto. Algo ahí fuera está perdiendo la señal.',
    },
  },
  {
    id: 'oteo-isla',
    kind: 'viewpoint-island',
    x: 608,
    y: 452,
    radius: 74,
    label: 'Mirar hacia Isla Origen',
    accentHex: '#fcd34d',
    dialog: {
      title: 'Alto de las Rocas',
      paragraphs: [
        'Toda la Isla Natal cabe desde aquí: la playa donde despiertas, la huerta en el cruce de caminos, el techo de la cabaña y el sendero que sube a la arboleda.',
        'Entre los árboles del noreste se filtra un resplandor cian muy tenue, constante, que no viene del sol.',
      ],
      hint: 'Lleva años encendido esperando a que alguien lo note.',
    },
  },
  ...ISLA_NATAL_SIGNS.map(
    (sign): IslaNatalPoi => ({
      id: sign.id,
      kind: 'sign',
      x: sign.x,
      y: sign.y,
      radius: 58,
      label: 'Leer el cartel',
      accentHex: sign.accentHex,
      dialog: {
        title: sign.zoneTitle,
        paragraphs: sign.lines,
      },
    })
  ),
];

/* ------------------------------------------------------------------ */
/* DIÁLOGOS DINÁMICOS DE LA MÁQUINA (según su estado)                  */
/* ------------------------------------------------------------------ */

export const ARCADE_DIALOG_DUSTY: IslaNatalDialog = {
  title: 'Máquina olvidada',
  subtitle: 'Cobertizo de la arboleda',
  paragraphs: [
    'Un gabinete de Pong de 1972, con la madera hinchada por la humedad y la pantalla llena de polvo.',
    'No debería estar aquí: nadie trajo nunca electricidad a esta isla.',
    'Recuerdas la tarde en que llegó. Un viajero viejo, con las manos llenas de estática, la dejó bajo los árboles y dijo que venía de un tiempo que todavía no existe.',
    '«Es tuya —dijo—. Juega. Y no pares hasta ganarme.» Luego se fue hacia el mar y el mar no se lo tragó: simplemente dejó de estar.',
    'En el lateral hay una ranura de hierro, vacía. El gabinete no arranca sin su palanca.',
  ],
  hint: 'La palanca que falta debe de estar en el cofre del abuelo, dentro de la cabaña.',
};

export const ARCADE_DIALOG_MISSING_LEVER: IslaNatalDialog = {
  title: 'La ranura vacía',
  subtitle: 'Cobertizo de la arboleda',
  paragraphs: [
    'El interruptor baja y vuelve a subir sin resistencia. Falta la palanca que transmite el pulso al tubo.',
    'El abuelo siempre decía que las máquinas viejas no se encienden con electricidad, sino con alguien que recuerde para qué sirven.',
    'Su cofre sigue bajo el retrato familiar, en la casa de la pradera.',
  ],
  hint: 'Abre el cofre del abuelo con la combinación que te dio el viajero.',
};

export const ARCADE_DIALOG_LEVER_READY: IslaNatalDialog = {
  title: 'La palanca del abuelo',
  subtitle: 'Cobertizo de la arboleda',
  paragraphs: [
    'La palanca de hierro encaja en la ranura del gabinete como si hubiera sido forjada para ella. El latón todavía conserva el calor de la casa.',
    'Al empujarla, el mecanismo muerde el aire y el interruptor encuentra su recorrido. La máquina está lista para recibir el pulso.',
  ],
  hint: 'Instalar la palanca despertará el tubo de Pong.',
};

export const ARCADE_DIALOG_POWER_ON: IslaNatalDialog = {
  title: 'Encender la máquina',
  paragraphs: [
    '«Debo poder ganar en este juego. Lo debo hacer por la humanidad»',
    'Con la palanca del abuelo en su sitio, el tubo tarda en despertar: un zumbido grave, una línea blanca que tiembla y por fin el punto de luz.',
    'La pantalla no refleja tu cara. Refleja la isla entera, vista desde muy arriba, y algo más que aún no reconoces.',
    'Tres goles. Como entonces. Como siempre.',
  ],
  hint: 'W / S para mover la paleta · Primer jugador en 3 goles gana',
};

export const ARCADE_DIALOG_AFTER_WIN: IslaNatalDialog = {
  title: 'Señal en la pantalla',
  paragraphs: [
    'El marcador se queda en 3 y la máquina no vuelve al atractivo: la pantalla se llena de bandas que caen como lluvia.',
    'Entre la estática se dibuja una silueta enorme —arcos, torres, un cielo roto— y una voz sin boca dice una sola palabra que no llegas a entender.',
    'Después, silencio. Sobre el cristal queda escrita una dirección que no está en ningún mapa: la Isla del Origen.',
  ],
  hint: 'Algo se ha despertado muy lejos de aquí… y ha aprendido tu nombre.',
};

export const ARCADE_DIALOG_SPENT: IslaNatalDialog = {
  title: 'Máquina en reposo',
  paragraphs: [
    'La pantalla respira una línea blanca muy despacio, como un animal dormido.',
    'Ya no hay partida que jugar: la máquina sólo mantiene abierta la señal.',
  ],
  hint: 'La paleta descansa apoyada en el lateral del gabinete.',
};

export const PADDLE_DIALOG: IslaNatalDialog = {
  title: '¡Conseguiste la Barra de Pong!',
  subtitle: 'La arboleda · Premio del gabinete',
  paragraphs: [
    '¡Conseguiste la Barra de Pong!',
    'Esta herramienta especial te permite utilizar tu tabla de surf para desplazarte sobre el agua y realizar vuelos que te ayudarán a alcanzar nuevos lugares.',
    'Será indispensable para viajar entre las islas y continuar tu misión.',
  ],
  hint: 'La Barra de Pong queda registrada en tu inventario y progresión.',
};

export const DEPARTURE_DIALOG: IslaNatalDialog = {
  title: 'El carril del puerto norte',
  subtitle: 'Costa norte',
  paragraphs: [
    'La paleta brilla apuntando al norte. Más allá de la rompiente, el agua se abre en un carril de luz quieta que cruza el mar abierto.',
    'Detrás queda la cabaña, el cartel medio borrado y una máquina que por fin ha cumplido su encargo.',
    'Delante, la Isla del Origen y todo lo que el mundo olvidó.',
  ],
  hint: 'Surcar hacia la Isla del Origen',
};

export const DEPARTURE_BLOCKED_DIALOG: IslaNatalDialog = {
  title: 'El puerto está cerrado',
  paragraphs: [
    'El muelle de madera cruje sobre el agua, pero el carril de luz todavía no existe.',
    'Sin la Barra de Pong no hay forma de cruzar el mar. La respuesta sigue esperando en la arboleda, junto al viejo gabinete.',
  ],
  hint: 'Gana Pong y recoge la barra antes de volver al puerto norte.',
};

/* ------------------------------------------------------------------ */
/* EL AVISO DEL VIAJERO                                               */
/* ------------------------------------------------------------------ */

export const NATAL_STORM_QUESTION_DIALOG: IslaNatalDialog = {
  title: 'Pixel',
  subtitle: 'El interior de la cabaña',
  paragraphs: ['¿Qué fue eso?', '¡Debo salir a revisar!'],
  hint: 'La puerta golpea con el viento.',
  lines: [
    { speaker: 'pixel', text: '¿Qué fue eso?' },
    { speaker: 'pixel', text: '¡Debo salir a revisar!' },
  ],
};

export const NATAL_TRAVELER_DIALOG: IslaNatalDialog = {
  title: 'Dylan (Enviado del futuro)',
  subtitle: 'Frente a la casa de Pixel',
  paragraphs: [
    '«Estás aquí. El ruido que escuchaste fue lo que todos temíamos en la otra dimensión. El Gran Rey Koopa ha comenzado con el Reinicio Cero.',
    'Soy un enviado del futuro. Tu abuelo sabía que este momento llegaría y me encargó una misión: encontrarte y entregarte este código.',
    'Tu abuelo dejó un cofre para vos dentro de esta casa. Allí encontrarás algo que necesitarás para comenzar tu misión. El código que te entrego es la llave para abrirlo.',
    'Ahora todo depende de vos, Pixel. No tenemos mucho tiempo».',
  ],
  hint: `Código del cofre recibido: ${ISLA_NATAL_CHEST_CODE}. Nota de código agregada al inventario (permanente).`,
};

export const NATAL_CABIN_RADIO_SILENT_DIALOG: IslaNatalDialog = {
  title: 'La radio de la mesa',
  subtitle: 'Transmisión interrumpida',
  paragraphs: [
    'El dial sigue tibio, pero de la emisora ya solo brota un murmullo de estática vacía.',
    'Desde los rayos del Reinicio Cero ninguna señal responde al otro lado del mar.',
  ],
  hint: 'La transmisión quedó cortada cuando comenzó el Reinicio Cero.',
};

export const NATAL_NO_BACKPACK_EXIT_DIALOG: IslaNatalDialog = {
  title: 'El umbral de la puerta',
  subtitle: 'Interior de la cabaña',
  paragraphs: [
    '«No puedo salir sin mi mochila. Necesito llevar conmigo todo lo que encontré».',
  ],
  hint: 'Recoge tu mochila colgada junto a la ventana antes de salir de casa.',
};

/* ------------------------------------------------------------------ */
/* EL COFRE DEL ABUELO                                                */
/* ------------------------------------------------------------------ */

export const NATAL_CHEST_LOCKED_DIALOG: IslaNatalDialog = {
  title: 'El cofre del abuelo',
  subtitle: 'Bajo el retrato familiar',
  paragraphs: [
    'Un cofre de madera oscura y herrajes de latón, más viejo que la casa. La cerradura tiene cuatro discos numerados y ningún signo de haber sido forzada.',
    'El abuelo lo dejó aquí antes de irse. Nunca me dijo qué guardaba, sólo que lo abriría cuando llegara el momento.',
  ],
  hint: 'Necesito el código para abrirlo (puedes consultarlo en la «Nota código cofre» de tu inventario).',
};

export const NATAL_CHEST_NEEDS_BACKPACK_DIALOG: IslaNatalDialog = {
  title: 'El cofre del abuelo',
  subtitle: 'Preparativos antes de abrirlo',
  paragraphs: [
    'Tenés en la mano el código para abrir el cofre.',
    'Antes de sacar lo que dejó tu abuelo, recogé tu mochila colgada junto a la ventana para poder llevar todo con vos.',
  ],
  hint: 'Recoge primero tu mochila junto a la ventana.',
};

export const NATAL_CHEST_REVEAL_DIALOG: IslaNatalDialog = {
  title: 'La carta del abuelo',
  subtitle: 'Cofre abierto · Bajo el retrato',
  paragraphs: [
    'La tapa cede con un chasquido de latón. Adentro, envueltos en un paño de terciopelo, esperan una palanca de hierro, una fotografía antigua y una carta doblada tres veces.',
    '«Si estás leyendo esto, el Reinicio Cero ya empezó. No fue una tormenta ni una guerra: fue el día en que el mundo dejó de recordar. Las memorias que la humanidad guardó en sus juegos empezaron a borrarse, una por una, y con ellas se fue todo lo que éramos.',
    '«Los que lo vimos venir aprendimos a esconder recuerdos dentro de las máquinas viejas. Tu Pong fue una de ellas. Lo desconecté a tiempo para que el Reinicio no pudiera encontrarlo, y dejé aquí la palanca que lo despierta.',
    '«No te pido que luches. Te pido que juegues, que recuerdes y que devuelvas a cada juego su memoria. Cuando el Pong vuelva a latir, la Isla del Origen te mostrará el camino. Confié en ti desde el primer día. No pares hasta que el mundo vuelva a acordarse.»',
    'La palanca, la carta y la fotografía ya son tuyas. Lleva la palanca al gabinete de la arboleda e instálala: sin ella, la máquina no volverá a encenderse.',
  ],
  hint: 'Objetos obtenidos: Palanca de Pong, Carta del Abuelo y Fotografía del Abuelo.',
};

export const NATAL_CHEST_EMPTY_DIALOG: IslaNatalDialog = {
  title: 'El cofre abierto',
  subtitle: 'Bajo el retrato familiar',
  paragraphs: [
    'El terciopelo conserva la huella de la palanca, la carta y la fotografía. El cofre ya cumplió su parte.',
    'La combinación 1972 sigue grabada en el disco de latón. El abuelo eligió bien el año.',
  ],
  hint: 'Lo que el abuelo guardó ya está contigo.',
};

/* ------------------------------------------------------------------ */
/* VEGETACIÓN Y DETALLES (deterministas, sin recursos externos)        */
/* ------------------------------------------------------------------ */

export interface DecorPoint {
  x: number;
  y: number;
  seed: number;
}

function hash2(x: number, y: number): number {
  let h = Math.imul(x ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(y ^ 0xc2b2ae35, 0x27d4eb2f);
  h ^= h >>> 15;
  h = Math.imul(h, 0x2545f491);
  h ^= h >>> 13;
  return (h >>> 0) / 4294967295;
}

/**
 * Palmeras costeras y de ribera distribuidas con equilibrio natural y simétrico
 * entre los arcos oeste y este de la isla (sin bloquear caminos ni vistas).
 */
export const ISLA_NATAL_PALMS: DecorPoint[] = [
  // Arco oeste y este de Playa del Aurora (densidad y espaciado orgánico variable)
  { x: 924, y: 1298, seed: 0.14 },
  { x: 954, y: 1288, seed: 0.31 },
  { x: 1402, y: 1302, seed: 0.44 },
  { x: 1436, y: 1290, seed: 0.88 },
  { x: 834, y: 1258, seed: 0.68 },
  { x: 1518, y: 1248, seed: 0.72 },
  { x: 1042, y: 1272, seed: 0.39 },
  { x: 1312, y: 1262, seed: 0.25 },
  // Caleta del Poniente (suroeste) y Punta del Oleaje (sureste)
  { x: 586, y: 1158, seed: 0.53 },
  { x: 618, y: 1144, seed: 0.92 },
  { x: 1744, y: 1152, seed: 0.61 },
  { x: 1776, y: 1138, seed: 0.17 },
  { x: 724, y: 1224, seed: 0.81 },
  { x: 1628, y: 1210, seed: 0.19 },
  // Ribera norte a ambos lados del Puerto Norte
  { x: 952, y: 674, seed: 0.79 },
  { x: 1404, y: 660, seed: 0.28 },
  { x: 844, y: 722, seed: 0.33 },
  { x: 1512, y: 702, seed: 0.64 },
  // Flancos exteriores oeste y este con racimos asimétricos
  { x: 502, y: 856, seed: 0.46 },
  { x: 530, y: 838, seed: 0.83 },
  { x: 1828, y: 686, seed: 0.87 },
  { x: 1856, y: 670, seed: 0.22 },
];

export const ISLA_NATAL_BOULDERS: DecorPoint[] = [
  { x: 472, y: 552, seed: 0.2 },
  { x: 726, y: 618, seed: 0.55 },
  { x: 554, y: 492, seed: 0.8 },
  { x: 768, y: 556, seed: 0.33 },
  { x: 1624, y: 1206, seed: 0.6 },
  { x: 742, y: 1292, seed: 0.41 },
  { x: 1438, y: 1334, seed: 0.77 },
  { x: 914, y: 1338, seed: 0.29 },
  { x: 1812, y: 948, seed: 0.68 },
  { x: 542, y: 962, seed: 0.49 },
];

export interface IslaNatalTreeSpec {
  x: number;
  y: number;
  variant: 'forest' | 'meadow' | 'pine';
}

/**
 * Árboles artesanales con distribución orgánica, no uniforme y agrupaciones de
 * densidad y tamaños variados alrededor de la pradera, la huerta y la arboleda.
 */
export const ISLA_NATAL_TREES: IslaNatalTreeSpec[] = [];

/** Dispersión sembrada de matas, flores y guijarros dentro de la tierra útil. */
function scatter(
  count: number,
  surfaces: IslaNatalSurface[],
  salt: number
): DecorPoint[] {
  const out: DecorPoint[] = [];
  let guard = 0;
  while (out.length < count && guard < count * 45) {
    guard++;
    const x = 340 + hash2(guard, salt) * (ISLA_NATAL_WORLD_W - 680);
    const y = 330 + hash2(guard + 7919, salt + 13) * (ISLA_NATAL_WORLD_H - 620);
    const rect = isIslaNatalPointOnLand(x, y);
    if (!rect || !surfaces.includes(rect.surface)) continue;
    if (isIslaNatalPointBlockedBySolid(x, y)) continue;
    if (Math.abs(x - ISLA_NATAL_SPAWN.x) < 92 && Math.abs(y - ISLA_NATAL_SPAWN.y) < 92) continue;
    // Mantenemos despejado el interior cercado de la huerta central
    if (x > 1054 && x < 1298 && y > 926 && y < 1052) continue;
    out.push({ x: Math.round(x), y: Math.round(y), seed: hash2(guard + 104729, salt + 71) });
  }
  return out;
}

export const ISLA_NATAL_TUFTS: DecorPoint[] = scatter(340, ['grass'], 11);
export const ISLA_NATAL_FLOWERS: DecorPoint[] = scatter(118, ['grass'], 29);
export const ISLA_NATAL_PEBBLES: DecorPoint[] = scatter(165, ['sand', 'rock'], 47);
export const ISLA_NATAL_SHELLS: DecorPoint[] = scatter(52, ['sand'], 83);
