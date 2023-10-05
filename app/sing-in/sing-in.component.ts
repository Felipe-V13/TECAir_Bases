import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SignInComponent implements OnInit {
  public form!: FormGroup; //Formulario utilizado para capturar los datos requeridos
  data: any = []; //Lista utilizada guardar los datos del usuario
  public token: any; //Tocken del usuario

  /**
   * The ngOnInit function initializes a form with two fields (Email and Password) and applies validation
   * rules to them.
   */

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  /* The `getData()` function is responsible for capturing and sending the data entered in the form. */

  getData() {
    this.service.postLogIn(this.form.value).subscribe(
      (resp) => {
        console.log(resp.status);
        this.readResp(resp.body);
      },
      (err) => {
        for (let e of err.error.errors) {
          this.alert(e, 'danger');
          console.log(e);
        }
      }
    );
    console.log(this.form.value);
  }

  /**
   * The function "alert" creates and appends an alert message to a specified HTML element.
   * @param {string} message - The message parameter is a string that represents the content of the alert
   * message that you want to display.
   * @param {string} type - The `type` parameter is a string that represents the type of alert to be
   * displayed. It can have values like "success", "info", "warning", or "danger".
   */
  alert(message: string, type: string) {
    const alertPlaceholder = document.getElementById('alertDiv')!;
    var wrapper = document.createElement('div');
    wrapper.innerHTML =
      '<div class="alert alert-' +
      type +
      ' alert-dismissible" role="alert">' +
      message +
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    alertPlaceholder.appendChild(wrapper);
  }
}
