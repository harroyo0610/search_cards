import { Injectable } from '@angular/core';

@Injectable()
export class RostersService {
  private rosters:Roster[] = [
    {
      nombre: "Raúl Ruidíaz",
      bio: "Raúl Ruidíaz (Lima, Provincia de Lima, Perú, 25 de julio de 1990) es un futbolista peruano de ascendencia croata.5​6​ Juega de delantero y su equipo actual es el Monarcas Morelia de la Primera División de México.",
      images: "assets/images/ruidiaz.jpg",
      nacimiento: "1941-11-01",
      posicion:"Delantero"
    },
    {
      nombre: "Djaniny Tavares",
      bio: "Jorge Djaniny Tavares Semedo (Santa Cruz, Santiago, Cabo Verde; 21 de marzo de 1991) es un futbolista caboverdiano. Juega como delantero en el Club Santos Laguna de la Primera División de México y en la Selección de Cabo Verde.",
      images: "assets/images/tavares.jpg",
      nacimiento: "1939-05-01",
      posicion:"Delantero"
    },
    {
      nombre: "José de Jesús Corona",
      bio: "José de Jesús Corona Rodríguez (Guadalajara, Jalisco, México, 26 de enero de 1981), es un futbolista mexicano que se desempeña en la posición de Guardameta, actualmente juega para el Cruz Azul, de la Primera División de México.",
      images: "assets/images/corona.jpg",
      nacimiento: "1964-01-01",
      posicion: "Portero"
    },
    {
      nombre: "Nicolás Castillo",
      bio: "Nicolás Ignacio Castillo Mora es un futbolista profesional chileno que se desempeña como centro delantero y actualmente milita en los Pumas de la UNAM de la Primera División de México.",
      images: "assets/images/castillo.jpg",
      nacimiento: "1962-05-01",
      posicion:"Delantero"
    },
    {
      nombre: "Jeremy Menez",
      bio: "Jérémy Ménez es un futbolista internacional francés. Se desempeña como mediapunta o extremo en el Club América de la Primera División de México.",
      images: "assets/images/menez.jpg",
      nacimiento: "1940-06-01",
      posicion: "Medio"
    },
    {
      nombre: "Keisuke Honda",
      bio: "Keisuke Honda (本田 圭佑 Honda Keisuke?) (n. 13 de junio de 1986 en Settsu, Prefectura de Osaka), es un jugador profesional de fútbol japonés. Actualmente es jugador del Club de Fútbol Pachuca de la Primera División de México, donde llegó procedente del AC Milan de Italia.",
      images: "assets/images/honda.jpg",
      nacimiento: "1962-08-01",
      posicion: "Medio"
    },
    {
      nombre: "André-pierre Christian Gignac",
      bio: "André-Pierre Christian Gignac (en francés: ɑ̃.dre pieʁ ʒi.ɲak; 5 de diciembre de 1985) es un futbolista internacional profesional francés que juega como delantero para los Tigres UANL de la Liga Bancomer MX y para la Selección de Francia.En Francia, es conocido personalmente por sus compañeros y amigos simplemente como Dédé.5​6​ En México, los aficionados y los medios locales lo bautizaron con el apodo de El Bómboro, por la similitud en la pronunciación de su apellido con el término \"quiñá\" de una famosa canción de La Sonora Santanera.3​",
      images: "assets/images/gignac.jpg",
      nacimiento: "1974-11-01",
      posicion: "Delantero"
    }
  ];
  constructor() {
    console.log("Hoal");
  }

  getRosters(){
    return this.rosters;
  }

  getRoster(i: string){
    return this.rosters[i];
  }

  searchRoster( word:string ){
    let rostersArr:Roster[] = [];
    word = word.toLowerCase();
    for(let roster of this.rosters){
      let name = roster.nombre.toLowerCase();
      if(name.indexOf( word ) >= 0 ){
        rostersArr.push( roster );
      }
    }
    return rostersArr;
  }
}

export interface Roster{
  nombre: string,
  bio: string,
  images: string,
  nacimiento: string,
  posicion: string
}
