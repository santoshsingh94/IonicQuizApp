import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { RegisterService } from '../../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registrationForm: FormGroup;
  ionicForm: any;
  isSubmitted = false;
  today: any;
  public countryOptions = [
    { value: 'CA', displayValue: 'Canada' },
    { value: 'CN', displayValue: 'China' },
    { value: 'IND', displayValue: 'India' },
    { value: 'ID', displayValue: '	Indonesia' },
    { value: 'PAK', displayValue: 'Pakistan' },
    { value: 'US', displayValue: 'United States' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    public toastCtrl: ToastController,
    public registerService: RegisterService
  ) {
    this.today = new Date().toISOString();
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      dob: [this.today],
      country: ['', Validators.required],
    });
  }

  get errorControl() {
    return this.registrationForm.controls;
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.registrationForm.get('dob').setValue(date, {
      onlyself: true,
    });
  }

  resetForm() {
    this.isSubmitted = false;
    this.registrationForm.get('name').setValue('');
    this.registrationForm.get('dob').setValue(this.today);
    this.registrationForm.get('country').setValue('');
  }
  //register User
  async registerUser() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Registered successfully!',
        showCloseButton: true,
        closeButtonText: 'Close',
        duration: 4000,
      });
      this.registerService.saveUser(this.registrationForm).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
      console.log(this.registrationForm.value);
      toast.present();
      this.resetForm();
      this.navCtrl.navigateForward('/dashboard');
    }
  }
}
