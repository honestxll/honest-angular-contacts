import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { sessionTransition } from '../../../animations/user.animations';

@Component({
  selector: 'app-session-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  animations: [sessionTransition],
})
export class FormComponent implements OnInit {
  @HostBinding('@sessionTransition') state = 'activated';

  @Input() formType: string;

  @Output() formSubmit = new EventEmitter();

  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.formSubmit.emit(this.signInForm.value);
    }
  }
}
