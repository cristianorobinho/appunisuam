import { Component } from '@angular/core';
import axios from 'axios';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = { email: '', senha: '' };

  constructor(
    public alertController: AlertController,
    public router: Router,
    public toastController: ToastController,
    public AutenticacaoService: AutenticacaoService,
    public AngularFireAuth: AngularFireAuth
    ) {}
    
  async handleLogin(user: { email: string; senha: string }) {
    axios.get(`http://localhost:3000/home`).then(async (res) => {
      const foundUser = res.data.find(
        (u: any) => user.email === user.email && user.senha === user.senha
      );
      if (foundUser) {
        this.router.navigateByUrl('home');
      } else {
        const alert = await this.alertController.create({
          header: 'Erro',
          subHeader: 'Usuário não encontrado',
          message:
            'O email ou a senha que você inseriu estão incorretos. Por favor, tente novamente.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }
}
