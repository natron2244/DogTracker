import * as moment from 'moment';

export class DgDog {
    name: String;
    weight: number;
    age: moment.Moment;

    constructor(name: String, weight: number, age: moment.Moment) {
        this.name = name;
        this.weight = weight;
        this.age = age;
    }
}
