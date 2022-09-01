const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const ENV = process.env.ENV || 'local'; // local/prod

const FONT_FOLDER = path.join((ENV === 'local' ? 'src' : 'dist'), 'assets');
const CANVAS_FONT_PATH = path.join(FONT_FOLDER, 'Satoshi-Bold.ttf');
const CANVAS_EMOJI_FONT_PATH = path.join(FONT_FOLDER, 'NotoColorEmoji.ttf');
const CANVAS_FALLBACK_FONT_PATH = path.join(FONT_FOLDER, 'DejaVuSans-Bold.ttf');
const INAMEWRAPPER = process.env.INAMEWRAPPER || '0x1aa28a1e';

const IPFS_GATEWAY = 'https://cloudflare-ipfs.com/';
const INFURA_API_KEY = process.env.INFURA_API_KEY || '';

const ADDRESS_ETH_REGISTRAR = process.env.ADDRESS_ETH_REGISTRAR || '0x4F219cc220C12B5f5a7Fa2440D7Cd86fA4a7D942';
const ADDRESS_ETH_REGISTRY = process.env.ADDRESS_ETH_REGISTRY || '0x3f93B91b028D41580d8d4E53CE722ff0795bAcFB'
const ADDRESS_NAME_WRAPPER = process.env.ADDRESS_NAME_WRAPPER || '0xc4595733F555C9fcD8Bc3C84A660de5f18EBa3cA';

const SERVER_URL =
  ENV === 'local' ? `http://localhost:${PORT}` : `https://${HOST}`;
const METADATA_URL =
  ENV === 'local' ? `http://139.162.71.94:8088` : `https://${HOST}`;

const ETH_REGISTRY_ABI = [
  'function recordExists(bytes32 node) external view returns (bool)'
];

// response timeout: 1 min
const RESPONSE_TIMEOUT = 60 * 1000;

export {
  ADDRESS_ETH_REGISTRAR,
  ADDRESS_ETH_REGISTRY,
  ADDRESS_NAME_WRAPPER,
  CANVAS_FONT_PATH,
  CANVAS_EMOJI_FONT_PATH,
  CANVAS_FALLBACK_FONT_PATH,
  ETH_REGISTRY_ABI,
  INAMEWRAPPER,
  IPFS_GATEWAY,
  INFURA_API_KEY,
  RESPONSE_TIMEOUT,
  SERVER_URL,
  METADATA_URL,
};
