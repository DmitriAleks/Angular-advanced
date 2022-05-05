import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector: '[appIfnot]'
})

export class IfnotDirective {
@Input('appIfnot') set ifNot(condition : boolean){
    if(!condition){
        this.viewContainer.createEmbeddedView(this.temolateRef)
    } else {
        this.viewContainer.clear()
    }
}

    constructor(private temolateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef ) {}

}