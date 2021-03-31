import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MesValidateurs} from './MesValidateurs';
import {MessageService} from 'primeng/api';
import {AuthentificationService} from '../_services/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';



@Component({
  selector: 'app-nouveau-utilisateur',
  templateUrl: './nouveau-utilisateur.component.html',
  styleUrls: ['./nouveau-utilisateur.component.css']
})
export class NouveauUtilisateurComponent implements OnInit {
  submitted = false;
  form: any = {
    nom: null,
    prenom: null,
    pseudo: null,
    email: null,
    password: null
  };
  loading = false;
  returnUrl: string;
  error = '';



  // @ts-ignore
  formulaire = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
    prenom: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
    pseudo: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
    email : new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password : new FormGroup( {
      pwd: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$')]),
      confirmPwd: new FormControl('')
    }, [MesValidateurs.passwordConfirming] )
  });
  // tslint:disable-next-line:typedef
  constructor(private messageService: MessageService, private authService: AuthentificationService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

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
  get email(): AbstractControl {
    return this.formulaire.get('email');
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
  onSubmit() {
    this.form = this.formulaire.value;
    this.loading = true;
    // tslint:disable-next-line:max-line-length
    this.authService.register(this.form.nom, this.form.prenom, this.form.pseudo, this.form.email, this.form.password.confirmPwd)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
          this.messageService.add({severity: 'info', summary: 'Création de l\'utilisateur', detail: `Succès`, key: 'main'});
        },
        error => {
          console.log('Erreur: ', error);
          // this.error = error.error.data.values[0];
          this.loading = false;
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: this.error, key: 'main'});
        }
      );

  }
}

