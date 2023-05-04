import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#007aff',
    rotationY: 0,
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state;