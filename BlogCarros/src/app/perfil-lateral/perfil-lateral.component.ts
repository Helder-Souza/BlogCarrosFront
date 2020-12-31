import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  nomeUser = environment.nome
  imagemUser = environment.imagem
  github = environment.github
  linkedin = environment.linkedin
  
  constructor() { }

  ngOnInit() {

  }

}
