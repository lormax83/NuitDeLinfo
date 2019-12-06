import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  value='';
  request='';
  search=false;
  logementSearch : any[]= [
    {id:1,title:"CAF: Aides pour les étudiants",description:"La CAF permet aux étudiants de recevoir une aide au logement,Selon le type de logement que vous occupez, vous pouvez prétendre à deux types d'aide au logement attribuées par la CAF (APL ou ALS)",link:"http://www.caf.fr/"},
    {id:2,title:"Studylease: Les logements étudiants dans ta ville",description:"Avec Studylease, trouvez votre logement étudiant ou votre résidence étudiante, partout en France. Recherche et réservation en ligne de logements étudiants.",link:"https://www.studylease.com/"},
    {id:3,title:"CROUS: Logements en résidance étudiante",description:"Mon logement Crous 2019-2020. Je dépose une demande pour ... Visale la caution locative. Le service Action Logement qui connecte emploi et logement.",link:"https://trouverunlogement.lescrous.fr/"},
    {id:4,title:"Location-Etudiant: 1er site de location étudiante",description:"Location étudiant France : Trouvez votre logement parmi des milliers d'offres réservées aux étudiants sur le 1er site immobilier étudiant - Location-etudiant.fr.",link:"https://www.location-etudiant.fr/logement-etudiant/france.html"},
  ]
  bourseSearch : any[]= [
    {id:1,title:"CROUS: Bourse Etudiante",description:"DEMANDER UNE BOURSE OU UNE AIDE .... et par nul autre canal; Le paiement de vos frais de réservation pour un logement Crous s'effectue uniquement sur ...",link:"https://www.messervices.etudiant.gouv.fr/envole/"},
    {id:2,title:"Bourse pour l'étranger",description:"Des bourses et des aides pour partir étudier à l'étranger sont proposées par les ... universitaire à l'étranger grâce, en particulier, à des échanges d'étudiants.",link:"https://www.etudiant.gouv.fr/cid135449/les-autres-bourses-et-aides-pour-etudier-a-l-etranger.html"},
    {id:3,title:"Aide au mérite",description:"Complémentaire à la bourse sur critères sociaux, il s'agit d'une aide ... Vous ne pouvez pas bénéficier de plus de trois aides au mérite.",link:"https://www.etudiant.gouv.fr/cid97535/aide-au-merite.html"},
    {id:4,title:"Comparatif prêt étudiant",description:"Explications sur le crédit étudiant : conditions pour en bénéficier, classement des meilleures offres, conseils pour décrocher son prêt au ...",link:"https://www.cafedupatrimoine.com/archive/article/pret-etudiant-comparatif-credit"},
  ]
  constructor(){

  }
  ngOnInit(){
    this.onReset()
  }
  onReset(){
    this.value ='';
    this.search = false;
    this.request ="";
  }
  onSearch(){
    this.search=true

    if(this.value.indexOf("logement") != -1){
      this.request = "logement"
    }else if (this.value.indexOf("bourse") != -1) {
      this.request = "bourse"
    }else {
      this.request ='none'
    }
  }

}
