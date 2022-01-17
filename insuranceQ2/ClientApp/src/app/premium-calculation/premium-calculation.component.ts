import { Component, OnInit, SimpleChanges, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-premium-calculation',
  templateUrl: './premium-calculation.component.html',
  styleUrls: ['./premium-calculation.component.css']
})
export class PremiumCalculationComponent implements OnInit {

  name = '';
  age = 0;
  dob = '';
  occupationId = 0;
  cover = 0.0;
  premium = 0.0;

  public occupations: Occupation[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<Occupation[]>(baseUrl + 'occupation').subscribe(result => {
      console.log("Fetched.")
      console.log(result);
      this.occupations = result;
      console.log(this.occupations)
    }, error => console.error(error));
  }


  ngOnInit(): void {
  }

  onChange(): void {

    // Prepare API params
    let params = new HttpParams();
    params = params.append("Age", this.age);
    params = params.append("OccupationId", this.occupationId);
    params = params.append("CoverAmount", this.cover);

    this.http.get<number>(this.baseUrl + 'premiumcalculation', { observe: "response", params }).subscribe(result => {

      if (result.body !== null) this.premium = result.body;

    }    )
  }


  

}
interface Occupation {
  id: number;
  name: string;
  rating: any;
}

