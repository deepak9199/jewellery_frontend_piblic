import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  loading: boolean = false
  formeamil: string = ''
  constructor(
    private auth: AuthService,
    private toster: ToastrService,
    private router: Router
  ) { }
  forgetpassowrd() {
    this.loading = true
    this.auth.sendPasswordResetEmail(this.formeamil).subscribe({
      next: (data) => {
        this.toster.success('Password reset email sent successfully')
        this.loading = false
      },
      error: (err) => {
        this.toster.error(err)
        this.loading = false
      }
    })
  }
}
