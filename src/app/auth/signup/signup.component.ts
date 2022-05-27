import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from '@app/@shared';
import { environment } from '@env/environment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

const log = new Logger('Signup');

@UntilDestroy()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  version: string | null = environment.version;
  error: string | undefined;
  signupForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() { }

  signup() {
    this.isLoading = true;
    const login$ = this.authenticationService.signup(this.signupForm.value);
    login$
      .pipe(
        finalize(() => {
          this.signupForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe(
        (credentials) => {
          log.debug(`${credentials.username} successfully signed in`);
          this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true });
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      password_match: ['', Validators.required],
    });
  }
}
