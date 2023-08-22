import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgDois = [ 
    {nome:'Aguia' ,url: 'https://cdn.pixabay.com/photo/2016/01/07/04/52/designer-1125324_1280.jpg' },
    {nome:'Castelo' ,url: 'https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_1280.jpg' },
    {nome:'Borboleta' ,url: 'https://cdn.pixabay.com/photo/2016/01/08/20/02/michelle-obama-1129160_1280.jpg' },
    {nome:'Passarinho' ,url: 'https://cdn.pixabay.com/photo/2015/08/03/00/04/alejandro-vergara-blanco-872557_1280.jpg' },
  ];
}
