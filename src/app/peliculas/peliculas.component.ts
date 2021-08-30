import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public submit : boolean = false;
  heroForm!: FormGroup;
  public ListMovie: Movies[]=[];
  
  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      genere: new FormControl('', [Validators.required])
    });
    console.log(this.heroForm)
  }

  get title() { return this.heroForm.get('title'); }
  get year() { return this.heroForm.get('year'); }
  get genere() { return this.heroForm.get('genere'); }

  save(){
    debugger;
    this.submit = true;
    if(this.heroForm.valid){
      this.ListMovie.push(this.heroForm.value);
      console.log(this.ListMovie);
    }
  }

  deleteItems(index:number){
    this.ListMovie.splice(index,1);
  }

}
