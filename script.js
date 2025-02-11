// script pour la carte 3D
if (typeof Atropos !== 'undefined') {
    const elements = document.querySelectorAll('.my-atropos, .my-atropos1');
    elements.forEach((el) => {
        Atropos({
            el: el,
            activeOffset: 40,
            shadowScale: 0.5,
            highlight: false,
            rotateXMax: 25,
            rotateYMax: 25,
            stretchX: 40,
            stretchY: 40,
        });
    });
} else {
    console.error('Atropos library not loaded correctly');
}

// script pour l'effet glitch
PowerGlitch.glitch('.glitch',
{
    playMode: "hover",
    optimizeSeo: true,
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2000
    },
    glitchTimeSpan: {
      start: 0,
      end: 0.7
    },
    shake: {
      velocity: 10,
      amplitudeX: 0.05,
      amplitudeY: 0.05
    },
    slice: {
      count: 3,
      velocity: 1,
      minHeight: 0.03,
      maxHeight: 0.15,
      hueRotate: true
    },
    pulse: false
}
)