// Synthesized Sololearn-style audio feedback using Web Audio API

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playTone(freq, type = "sine", duration = 0.15, delay = 0, gainVal = 0.12) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch {
      // Ignore audio errors on restricted devices
    }
  }

  playCorrect() {
    this.playTone(523.25, "sine", 0.12, 0, 0.14); // C5
    this.playTone(659.25, "sine", 0.18, 0.09, 0.16); // E5
    this.playTone(783.99, "triangle", 0.25, 0.18, 0.15); // G5
  }

  playWrong() {
    this.playTone(240, "sawtooth", 0.14, 0, 0.1);
    this.playTone(185, "sawtooth", 0.22, 0.11, 0.1);
  }

  playComplete() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((n, idx) => {
      this.playTone(n, "triangle", 0.22, idx * 0.09, 0.15);
    });
  }

  playClick() {
    this.playTone(600, "sine", 0.04, 0, 0.05);
  }
}

export const soundFX = new SoundEffects();
