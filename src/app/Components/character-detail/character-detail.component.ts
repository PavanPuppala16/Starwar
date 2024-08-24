import { Component } from '@angular/core';
import { SwapiService } from 'src/app/Services/swapi.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {
  character: any;

  constructor(private route: ActivatedRoute, private swapiService: SwapiService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.swapiService.getPerson(id).subscribe(data => {
      this.character = data;
    });
  }
}
