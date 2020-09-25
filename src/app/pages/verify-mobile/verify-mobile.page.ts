import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { timer, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-verify-mobile',
  templateUrl: './verify-mobile.page.html',
  styleUrls: ['./verify-mobile.page.scss'],
})
export class VerifyMobilePage implements OnInit {
  // NOTE: Just to mock validation of code
  // Remove when actual code valiation is implemented
  private tempValidCode = 'ABC0123';

  public mobile: string;
  public isValidCode: boolean = true;
  public verifyCodeForm: FormGroup;
  private timer$: Subscription;
  public resendCodeSeconds: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
    this.verifyCodeForm = this.formBuilder.group({
      code: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.mobile = this.route.snapshot.paramMap.get('mobile');
    this.startTimer();
  }

  startTimer(seconds: number = 30) {
    this.resendCodeSeconds = seconds;
    this.timer$ = timer(1000, 1000).subscribe((secondsPassed) => {
      if (this.resendCodeSeconds < 1) {
        this.endTimer();
      }
      --this.resendCodeSeconds;
    });
  }

  endTimer() {
    this.timer$.unsubscribe();
  }

  resendCode() {
    this.startTimer();
  }

  async verifyCode() {
    const loading = await this.loadingCtrl.create({
      message: 'Verifying...',
      spinner: 'crescent',
    });
    loading.present();
    // Random number between 1000 and 2000
    const validationTime = Math.random() * (2000 - 1000) + 1000;
    const code = this.verifyCodeForm.get('code').value;
    timer(validationTime).subscribe(
      (number) => {
        if (code === this.tempValidCode) {
          this.isValidCode = true;
          this.navCtrl.navigateRoot('/profile');
        } else {
          this.isValidCode = false;
        }
      },
      (err) => {
        // Nothing for now.
      },
      () => {
        loading.dismiss();
      }
    );
  }
}
