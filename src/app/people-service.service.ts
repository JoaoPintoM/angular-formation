import { Injectable } from '@angular/core';

@Injectable()
export class PeopleServiceService {

  constructor() { }

  getPeople() {
    return [{ name: 'Joao', age: 30 }]
  }

}
