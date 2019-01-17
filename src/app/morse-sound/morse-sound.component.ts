import { Component } from '@angular/core';
import { MorseOutput } from '../models/morse-output';

@Component({
  selector: 'app-morse-sound',
  templateUrl: './morse-sound.component.html',
  styleUrls: ['./morse-sound.component.css']
})
export class MorseSoundComponent {

  private audioContext: AudioContext;
  oscillator: any;
  gain: any;
  rate: any = 20;
  dot: any;
  MORSE = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----'
  };
  morseText = '';
  morseDisplay = [];

  constructor() { }

  onSubmit() {
    if (this.audioContext === undefined) {
      // Chrome requires audio context after gesture
      // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
      this.createContext();
    }

    this.generateMorse(this.audioContext.currentTime, this.morseText);
  }

  createContext() {
    this.audioContext = new AudioContext();
    this.oscillator = this.audioContext.createOscillator();
    this.gain = this.audioContext.createGain();
    this.gain.gain.value = 0;
    this.oscillator.frequency.value = 750;
    this.oscillator.connect(this.gain);
    this.gain.connect(this.audioContext.destination);
    this.dot = 1.2 / this.rate;
    this.oscillator.start(0);
  }

  createSound(time: any, char: string) {
    for (const c of char) {
      switch (c) {
      case '.':
        this.gain.gain.setValueAtTime(1.0, time);
        time += this.dot;
        this.gain.gain.setValueAtTime(0.0, time);
        break;
      case '-':
        this.gain.gain.setValueAtTime(1.0, time);
        time += 3 * this.dot;
        this.gain.gain.setValueAtTime(0.0, time);
        break;
      }
      time += this.dot;
    }

    return time;
  }

  generateMorse(time: any, phrase: string) {
    phrase = phrase.toUpperCase();
    this.morseDisplay = [];
    for (const p of phrase) {
      if (p === ' ') {
        time += 3 * this.dot;
      } else if (this.MORSE[p] !== undefined) {
        time = this.createSound(time, this.MORSE[p]);
        time += 2 * this.dot;
      }

      const morseOuput = new MorseOutput();
      morseOuput.morseText = p;
      morseOuput.morseValue = this.MORSE[p];
      this.morseDisplay.push(morseOuput);
    }

    return time;
  }

}
