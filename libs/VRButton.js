import { WEBGL } from 'https://cdn.jsdelivr.net/npm/three@0.150.1/examples/jsm/WebGL.js';

const VRButton = {
  createButton: function (renderer) {
    const button = document.createElement('button');
    button.textContent = 'Iniciar AR';
    button.style.position = 'absolute';
    button.style.bottom = '20px';
    button.style.left = '50%';
    button.style.transform = 'translateX(-50%)';
    button.style.padding = '12px 20px';
    button.style.background = '#00aaff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '6px';
    button.style.fontSize = '16px';

    button.addEventListener('click', () => {
      navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test', 'local-floor']
      }).then(session => {
        renderer.xr.setSession(session);
      });
    });

    return button;
  }
};

export { VRButton };
