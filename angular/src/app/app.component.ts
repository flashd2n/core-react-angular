import { Component, OnInit } from '@angular/core';
import { Glue42Store } from '@glue42/ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-11';

  constructor(private readonly glueStore: Glue42Store) {}
  
  public ngOnInit(): void {
    const glue = this.glueStore.getGlue();
    console.log(this.glueStore.getInitError());
    (window as any).glue = glue;
  }

}
