import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.less']
})
export class TestFormComponent implements OnInit {
    form;
    constructor(private formBuilder: FormBuilder) {}
    ngOnInit() {
        this.form = this.formBuilder.group({
            medium : this.formBuilder.control('Movies'),
            name : this.formBuilder.control('', )
        });
    }
    onSubmit(mediaItem) {
        console.log(mediaItem);
    }

}
