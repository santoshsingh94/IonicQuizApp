import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { RegisterService } from '../../shared/register.service';

@Component({
  selector: 'app-mobile-entry',
  templateUrl: './mobile-entry.page.html',
  styleUrls: ['./mobile-entry.page.scss'],
})
export class MobileEntryPage implements OnInit {
  public mobileEntryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    public registerService: RegisterService
  ) {
    this.mobileEntryForm = this.formBuilder.group({
      countryCode: [{ value: '+91', disabled: true }, Validators.required],
      mobile: [null, Validators.required],
    });
  }

  ngOnInit() {}

  // Whether to show mobile number error text
  isMobileError() {
    let mobileCtrl: any = this.mobileEntryForm.get('mobile');
    if (
      mobileCtrl.value &&
      mobileCtrl.value.length == 10 &&
      mobileCtrl.invalid &&
      (mobileCtrl.dirty || mobileCtrl.touched)
    ) {
      return true;
    }
    return false;
  }

  // Verify mobile number
  verifyMobile() {
    const mobile: String =
      this.mobileEntryForm.get('countryCode').value +
      ' ' +
      this.mobileEntryForm.get('mobile').value;
    console.log(mobile);
    this.registerService.mobileEntry(this.mobileEntryForm).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    this.navCtrl.navigateForward('/verify-mobile/' + mobile);
  }
}
