/**
 * Math Study Tracker - Audio System
 * Web Audio API-based sound effects
 * Gentle, premium, non-intrusive audio feedback
 */

const AudioSystem = (function() {
  let ctx = null;
  let enabled = false;
  let initialized = false;

  function getContext() {
    if (!ctx) {
      try {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.log('Web Audio API not supported');
        return null;
      }
    }
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    return ctx;
  }

  function init() {
    if (initialized) return;
    // Try to initialize on first user interaction
    const tryInit = () => {
      const c = getContext();
      if (c) {
        initialized = true;
        enabled = localStorage.getItem('mathAudioEnabled') !== 'false';
      }
    };
    ['click', 'touchstart', 'keydown'].forEach(evt => {
      document.addEventListener(evt, tryInit, { once: true });
    });
  }

  function isEnabled() {
    return enabled && initialized && getContext();
  }

  function toggle() {
    enabled = !enabled;
    localStorage.setItem('mathAudioEnabled', enabled);
    if (enabled && !initialized) {
      const c = getContext();
      if (c) initialized = true;
    }
    return enabled;
  }

  // Utility: create oscillator with envelope
  function playTone({ type = 'sine', freq, freqEnd, duration, volume = 0.15, attack = 0.01, decay = 0.3, delay = 0 }) {
    const c = getContext();
    if (!c || !isEnabled()) return;

    const t = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (freqEnd) {
      osc.frequency.exponentialRampToValueAtTime(freqEnd, t + duration);
    }

    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(volume, t + attack);
    gain.gain.exponentialRampToValueAtTime(0.001, t + attack + decay);

    osc.connect(gain);
    gain.connect(c.destination);

    osc.start(t);
    osc.stop(t + duration + decay + 0.1);
  }

  // --- Sound Effects ---

  // Check-in success: soft bell chime
  function playCheckin() {
    if (!isEnabled()) return;
    // Main bell tone
    playTone({ type: 'sine', freq: 880, duration: 0.6, volume: 0.12, attack: 0.02, decay: 0.5 });
    // Harmonic overtone
    playTone({ type: 'sine', freq: 1320, duration: 0.4, volume: 0.06, attack: 0.02, decay: 0.4, delay: 0.08 });
    // Subtle bass support
    playTone({ type: 'sine', freq: 440, duration: 0.5, volume: 0.04, attack: 0.03, decay: 0.5, delay: 0.05 });
  }

  // Button hover: tiny bubble pop
  function playHover() {
    if (!isEnabled()) return;
    playTone({ type: 'sine', freq: 1200, freqEnd: 1800, duration: 0.06, volume: 0.03, attack: 0.005, decay: 0.05 });
  }

  // Button click: soft click
  function playClick() {
    if (!isEnabled()) return;
    playTone({ type: 'triangle', freq: 600, freqEnd: 400, duration: 0.08, volume: 0.06, attack: 0.005, decay: 0.06 });
  }

  // Page switch: gentle whoosh
  function playPageSwitch() {
    if (!isEnabled()) return;
    playTone({ type: 'sine', freq: 300, freqEnd: 600, duration: 0.15, volume: 0.04, attack: 0.02, decay: 0.12 });
  }

  // Timer tick: soft metronome
  function playTick() {
    if (!isEnabled()) return;
    playTone({ type: 'sine', freq: 1000, duration: 0.03, volume: 0.04, attack: 0.002, decay: 0.03 });
  }

  // Timer start: gentle start tone
  function playTimerStart() {
    if (!isEnabled()) return;
    playTone({ type: 'sine', freq: 523, duration: 0.2, volume: 0.06, attack: 0.02, decay: 0.15 });
    playTone({ type: 'sine', freq: 659, duration: 0.2, volume: 0.05, attack: 0.02, decay: 0.15, delay: 0.1 });
  }

  // Timer stop/pause: soft down-tone
  function playTimerStop() {
    if (!isEnabled()) return;
    playTone({ type: 'sine', freq: 659, freqEnd: 523, duration: 0.2, volume: 0.05, attack: 0.02, decay: 0.15 });
  }

  // Success notification: pleasant confirmation
  function playSuccess() {
    if (!isEnabled()) return;
    playTone({ type: 'sine', freq: 523, duration: 0.15, volume: 0.08, attack: 0.01, decay: 0.12 });
    playTone({ type: 'sine', freq: 659, duration: 0.15, volume: 0.07, attack: 0.01, decay: 0.12, delay: 0.12 });
    playTone({ type: 'sine', freq: 784, duration: 0.2, volume: 0.06, attack: 0.01, decay: 0.15, delay: 0.24 });
  }

  // Error/warning: soft alert
  function playWarning() {
    if (!isEnabled()) return;
    playTone({ type: 'sine', freq: 400, duration: 0.15, volume: 0.06, attack: 0.01, decay: 0.1 });
    playTone({ type: 'sine', freq: 350, duration: 0.15, volume: 0.06, attack: 0.01, decay: 0.1, delay: 0.15 });
  }

  return {
    init,
    toggle,
    isEnabled,
    playCheckin,
    playHover,
    playClick,
    playPageSwitch,
    playTick,
    playTimerStart,
    playTimerStop,
    playSuccess,
    playWarning
  };
})();
