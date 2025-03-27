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

###### Component Binding
binding b/w component and the object is done using attribute/decorator/data annotation!

```
Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: 'app.component.css'
})
```


###### Binding
binding b/w component and the object is done using attribute/decorator/data annotations!
```
Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
```