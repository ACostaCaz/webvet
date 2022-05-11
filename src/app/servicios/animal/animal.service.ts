import { HttpClient } from '@angular/common/http';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  

  constructor(private http: HttpClient, private path: Router) {}

  async newAnimal(animalData: any) {

     await this.http.post("http://localhost:3002/animals/newAnimal", animalData).subscribe((data) => console.log(data))

  }

  async showAnimals() {
    return await this.http.get("http://localhost:3002/animals/showAnimals")
  }

  async showAnimal(id: string) {
    return await this.http.get("http://localhost:3002/animals/showAnimals/"+ id)
  }

  async updateAnimal(id: string, data: any) {
    return await this.http.post("http://localhost:3002/animals/updateAnimal/" + id, data).subscribe((data) => {
        this.path.navigateByUrl("/fichaAnimal/" + id)
        alert("Los datos se han modificado correctamente")
    })
  }


  removeAnimal(id: any) {
    this.http.delete("http://localhost:3002/animals/deleteAnimal/" + id).subscribe((data) => {
      alert("El animal se ha eliminado correctamente")
      this.path.navigateByUrl("/mostrarAnimales")
    })
  }

}
