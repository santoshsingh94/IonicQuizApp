import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circleprogres',
  templateUrl: './circleprogres.component.html',
  styleUrls: ['./circleprogres.component.scss']
})
export class CircleprogresComponent implements OnInit {
  progress = 0;
  constructor() { }
  progressBar = document.querySelector('.progress-bar');
  intervalId;

  ngOnInit() {
    const getDownloadProgress = () => {
      console.log('getDownload', this);
      if (this.progress <= 99) {
        console.log('inside if', this.progress);
        this.progress = this.progress + 1;
      }
      else {
        clearInterval(this.intervalId);
      }
    }
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
