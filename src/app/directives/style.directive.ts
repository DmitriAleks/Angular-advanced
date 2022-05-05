import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective { 
    @Input('appStyle') color: string = 'blue'
    @Input() fontWeight: string = 'normal'
    @Input() dStyles!: {border?: string, fontWeight?:string, borderRadius?: string} 
    
   
      constructor (private el: ElementRef, private r: Renderer2) {
       //el.nativeElement.style.color = 'green'
       // this.r.setStyle(el.nativeElement, 'color', 'red')
      }

      @HostBinding('style.color') elColor = ' '
     

      @HostListener('click',['$event.target']) onClick(event:Event){
            console.log(event);
      }

      @HostListener('mouseenter') onEnter(){
          this.elColor = this.color
        //  this.r.setStyle(this.el.nativeElement, 'color', this.color)
        //   this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
        //   this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
        //   this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
      }
      @HostListener('mouseleave') onLeave(){
        this.elColor = ''
        //this.r.setStyle(this.el.nativeElement, 'color', 'red')
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
        // this.r.setStyle(this.el.nativeElement, 'border', null)
        // this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
      }
}