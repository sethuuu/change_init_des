import { Component, Input,OnInit,OnDestroy,OnChanges} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit,OnDestroy,OnChanges{
  @Input() name: string;
  timeoutinstance=null;
  constructor(){}
  ngOnChanges()
  {
    console.log("onchanges")
  }
  ngOnInit()
  {
    console.log("initialized");
    // this.timeoutinstance=setInterval(()=>{
    //   console.log(new Date());
    // },1000)
  }
  ngOnDestroy()
  {
console.log("deleted");
if(this.timeoutinstance)
{
  clearInterval(this.timeoutinstance)
}
  }
}
