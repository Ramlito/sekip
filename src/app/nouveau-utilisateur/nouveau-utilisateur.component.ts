import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MesValidateurs} from './MesValidateurs';
import {ɵBrowserAnimationBuilder} from '@angular/platform-browser/animations';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Component({
  selector: 'app-nouveau-utilisateur',
  templateUrl: './nouveau-utilisateur.component.html',
  styleUrls: ['./nouveau-utilisateur.component.css']
})
export class NouveauUtilisateurComponent implements OnInit {
  submitted = false;

  // @ts-ignore
  formulaire = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
    prenom: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
    pseudo: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
    mail : new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password : new FormGroup( {
      pwd: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$')]),
      confirmPwd: new FormControl('')
    },[MesValidateurs.passwordConfirming] )
    });


  //
  // tslint:disable-next-line:typedef
  get nom(): AbstractControl {
    return this.formulaire.get('nom');
  }

  // tslint:disable-next-line:typedef
  get prenom(): AbstractControl {
    return this.formulaire.get('prenom');
  }

  // tslint:disable-next-line:typedef
  get pseudo(): AbstractControl {
    return this.formulaire.get('pseudo');
  }

  // tslint:disable-next-line:typedef
  get mail(): AbstractControl {
    return this.formulaire.get('mail');
  }

  // tslint:disable-next-line:typedef
  get pwd(): AbstractControl{
    return this.formulaire.get('password').get('pwd');
  }

  // tslint:disable-next-line:typedef
  get confirmPwd(): AbstractControl{
    return this.formulaire.get('password').get('confirmPwd');
  }

  get password(): AbstractControl {
    return this.formulaire.get('password');
  }
  // tslint:disable-next-line:typedef
  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
  }
}

