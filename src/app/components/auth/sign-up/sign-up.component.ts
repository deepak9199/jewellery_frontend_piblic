import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/services/auth.service';
import { CollectionService } from '../../../shared/services/collection.service';
import { SharedService } from '../../../shared/services/shared.service';
import { TokenStorageService } from '../../../shared/services/token-storage.service';
import { Router } from '@angular/router';
import { users } from '../../../shared/model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUPComponent {
  loading: boolean = false
  private passcode: string = 'ten@9234434490'
  formregister = {
    email: '',
    password: '',
    contact: '',
    name: '',
    passcode: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private toster: ToastrService,
    private sharedservice: SharedService,
    private token: TokenStorageService,
    private collection: CollectionService
  ) { }
  register(): void {
    // console.log(this.formregister)
    this.resitrationapi(this.formregister.email, this.formregister.password, this.formregister.name, this.formregister.contact)
  }
  // resgister auth suer
  private resitrationapi(email: string, password: string, name: string, contact: string) {
    // console.log(email, password)
    this.loading = true
    this.authService.registerWithEmailAndPassword(email, password)
      .subscribe(
        (userCredential) => {
          if (userCredential) {
            // Registration successful, handle success
            // console.log('Registration successful:', userCredential.user?.uid);
            // create user 
            let user: users = {
              contact: contact,
              createdTime: userCredential.user?.metadata.creationTime || "",
              email: email,
              name: name,
              uid: userCredential.user?.uid || '',
              role: 'admin'
            }
            // add user after registration
            this.adduserapi(user)
          } else {
            // Registration failed, handle error
            this.toster.error('Registration failed.');
            this.loading = false
          }
        });
  }
  // add auther user
  adduserapi(data: users) {
    this.authService.addUsers(data)
      .subscribe({
        next: (docRef) => {
          console.log('Document added with ID: ', docRef.id);
          // You can perform further actions here if needed
          this.toster.success('Registration successful Now You Can Login')
        },
        error: (error) => {
          console.error('Error adding document: ', error);
        },
        complete: () => {
          this.loading = false
        },
      });
  }

}
