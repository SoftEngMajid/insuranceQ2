import { Component, OnInit, SimpleChanges, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-premium-calculation',
  templateUrl: './premium-calculation.component.html',
  styleUrls: ['./premium-calculation.component.css']
})
export class PremiumCalculationComponent implements OnInit
{
  // Application form
  premiumForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, positiveIntegerValidator(/[0-9]d*/i)]),
    dob: new FormControl('', [Validators.required, basicDateValidator()]),
    occupation: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
    premium: new FormControl('')
  })

  // Holds list of occupations from backend
  occupations: Occupation[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<Occupation[]>(baseUrl + 'occupation').subscribe(result => {
      this.occupations = result;
    }, error => console.error(error));
  }


  ngOnInit(): void
  {
    this.premiumForm.valueChanges.subscribe(newValues => {
      console.log(newValues);
      if (this.premiumForm.valid) {

      }
    })
  }

  get name() { return this.premiumForm.get('name'); }
  get age() { return this.premiumForm.get('age'); }
  get dob() { return this.premiumForm.get('dob'); }
  get occupation() { return this.premiumForm.get('occupation'); }
  get cover() { return this.premiumForm.get('cover'); }
  get premium() { return this.premiumForm.get('premium'); }

  onChange(): void {

    if (this.premiumForm.valid) {

      // Prepare API params
      let params = new HttpParams();
      params = params.append("Age", this.age?.value);
      params = params.append("OccupationId", this.occupation?.value);
      params = params.append("CoverAmount", this.cover?.value);

      this.http.get<number>(this.baseUrl + 'premiumcalculation', { observe: "response", params }).subscribe(result => {
        if (result.body !== null) this.premium?.setValue(result.body);
      }
      )

    }
  }

}

interface Occupation {
  id: number;
  name: string;
  rating: any;
}

export function positiveIntegerValidator(integerRe: RegExp): ValidatorFn {
  
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = integerRe.test(control.value);
    return valid ? null : { invalidInteger: { value: control.value } };
  };
}

export function basicDateValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const valid = (!Number.isNaN(Date.parse(control.value)));
    console.log(valid)
    return valid ? null : { invalidDate: { value: control.value } };
  };
}
