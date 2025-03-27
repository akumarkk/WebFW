Angular - binding framework
- binding view with the model!
 MVW - code behind(view model/controller/)

 MVW - Code behind/prensenter/controller/VM(Component)

 module - list of components
 src
    app1
        app.module.ts
        app.component.ts
        app.component.html
        app.component.css
    pollyfills.ts


###### Entry point
main.ts

###### Component Binding
binding b/w component and the object is done using attribute/decorator/data annotation!

```
Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: 'app.component.css'
})
```

- Component - decorator function!
- applying specific beh - fw 've  - decorator; The framework might automatically apply certain behaviors or configurations to classes decorated with @Model

###### Module
- import all the components!
- boostrap - start component!

```
@NgModule({
    declarations: [
        AppComponent, ...
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
```
- main.ts - defines startup modules!
- <app-root> - selector - could be named diff!

###### Binding
binding b/w component and the object is done using attribute/decorator/data annotations!
```
Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
```