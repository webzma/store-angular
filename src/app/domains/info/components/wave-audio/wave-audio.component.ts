import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private audio!: WaveSurfer;
  buttonText = signal('Play');

  ngAfterViewInit() {
    this.initializeWaveSurfer();
  }

  initializeWaveSurfer() {
    this.audio = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
    });
  }

  playPause() {
    this.audio.playPause();
    this.updateButtonText();
  }

  updateButtonText() {
    const buttonText = this.audio.isPlaying() ? 'Pause' : 'Play';
    this.buttonText.set(buttonText);
  }
}
