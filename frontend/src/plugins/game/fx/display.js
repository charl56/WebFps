import {entity} from '../entities/entity.js';
import {player_input} from '../map/player_control/player-input.js';


export const display = (() => {


  class Displays extends entity.Component {
    constructor(params) {
      super();
      this.params_ = params;
      this.Init_();
      this.previousRound_ = 0;
      this.weaponLoaded_ = false;
    }

    InitEntity(){
      this.input_ = this.GetComponent('PlayerInput');
    }

    Init_() {
        // Crosshair
        this.sight_ = document.getElementById('sight');
        // Bullets
        this.bullets_ = document.getElementById('bullets');
        this.bulletInMagazine_ = document.getElementById('bullet-in-magazine');
        this.bulletAllMagazines_ = document.getElementById('bullet-all-magazines');
        this.weaponName_ = document.getElementById('weapon-name');
        this.progressLinearBullet_ = document.getElementById('progress-linear-bullet');
    }

    SeparateDigits(number) {
      const numberString = number.toString();
      const digitsArray = [];
    
      for (let i = 0; i < numberString.length; i++) {
        digitsArray.push(parseInt(numberString[i], 10));
      }
    
      return digitsArray;
    }


    UpdateSight_(){   // Update crosshair when moving
        // If player move
        if(this.input_.key(player_input.KEYS.z) || this.input_.key(player_input.KEYS.q) ||this.input_.key(player_input.KEYS.s) || this.input_.key(player_input.KEYS.d)){
            this.sight_.style.scale = 1.4;
        } else {
            this.sight_.style.scale = 1;
        }
    }


    UpdateBullets_(data){
      if(data.bullet < (data.magazine/4)){
        this.progressLinearBullet_.children[1].style.backgroundColor = "red";   // Color of progress bar
        this.bulletInMagazine_.style.color = "red";                             // Color of bulle nb  
        this.bulletInMagazine_.innerText = data.bullet;                         // Nb of bullet
      } else {
        this.progressLinearBullet_.children[1].style.backgroundColor = "white";
        this.bulletInMagazine_.style.color = "white";
        this.bulletInMagazine_.innerText = data.bullet;
      }

      if(data.nbMagazine < 2){
        this.bulletAllMagazines_.style.color = "red";
      } else {
        this.bulletAllMagazines_.style.color = "white";
      }

      this.bulletAllMagazines_.innerText = data.magazine * data.nbMagazine;     // Bullets in all magazines
      this.weaponName_.innerText = data.name;                                   // Weapon name

      if(data.bullet == data.magazine && !this.weaponLoaded_){
          this.weaponLoaded_ = true
          let loaderValue = 0                    // Valeur chargement à 0
          let wait = (data.loadTimer * 100)         // Divise le temps de chargement par 100, pour le loader (valeur de 0-100 )
          let loadInterval = setInterval(() => {                     // Incrément de 1 tous les loadTimer/100
            loaderValue += 10
            this.progressLinearBullet_.children[1].style.width = loaderValue + "%"  
              if(loaderValue == 100){         // Quand chargrment finis
                  clearInterval(loadInterval);        // On arrête la boucle 
              }
          }, wait)      
      } else {
        this.weaponLoaded_ = false
        this.progressLinearBullet_.children[1].style.width = parseInt((data.bullet/data.magazine) * 100) + "%"
      }
    }


    Update(timeInSeconds) {
        // // Check if player on map
        const player = this.FindEntity('player');
        if(player === undefined) return;

        this.sight_.style.visibility = "visible";
        this.bullets_.style.visibility = "visible";
        this.UpdateSight_();
    }
  };



  return {
    Displays: Displays,
  };
})();