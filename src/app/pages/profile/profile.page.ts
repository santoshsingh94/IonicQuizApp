import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public profileForm: FormGroup;
  public profileImgSrc: string;

  constructor(
    private formBuilder: FormBuilder,
    private camera: Camera,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    this.profileForm = this.formBuilder.group({
      profileImage: [null],
      username: [null, Validators.required],
      referral: [null],
    });
  }

  ngOnInit() {}

  async showHelp(input: string) {
    let header, helpText;
    if (input === 'username') {
      header = 'Username';
      helpText =
        'Username must be 3 -10 characters long and can contain only' +
        ' letters, numbers, - or _. Inappropriate language in username is a' +
        ' violation of the terms and Use. Your username will also be your referral code.';
    } else if (input === 'referral') {
      header = 'Referral Code';
      helpText = 'Enter a friend’s Qfy username as your referral code.';
    }
    const alert = await this.alertCtrl.create({
      header: header,
      message: helpText,
      buttons: ['OK'],
    });
    return await alert.present();
  }

  getProfileImage() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.FRONT,
      targetWidth: 256,
      targetHeight: 256,
    };

    this.camera.getPicture(options).then(
      (imgData) => {
        this.profileImgSrc = 'data:image/jpeg;base64,' + imgData;
        this.profileForm.get('profileImage').patchValue(this.profileImgSrc);
      },
      async (err) => {
        const toast = await this.toastCtrl.create({
          message: err,
          duration: 2000,
        });
        toast.present();
        console.error(err);
      }
    );
  }
  createProfile() {}
}
