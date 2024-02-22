import {row, col} from "../scripts/utils"

class Block{
    constructor(type,data){
        this.type = type
        this.data = data
    }
    toHTML(){
        throw('toHTML function must be implemented')
    }
}

 export class TitleBlock extends Block{
    constructor(data){
        super('title',data)
    }
    toHTML(){
        return row(col(`<h1>${this.data}</h1>`))
    }
}

export class TextBlock extends Block{
    constructor(data){
        super('text',data)
    }
    toHTML(){
        return row(col(`<p>${this.data}</p>`))
    }
}

export class ColumnsBlock extends Block{
    constructor(data){
        super('columns',data)
    }
    toHTML(){
        return row(this.data.map(item=>col(item)).join(""))
    }
}

export class ImageBlock extends Block{
    constructor(data){
        super('image',data)
    }
    toHTML(){
        return row(col(`<img src="${this.data} class="img-fluid"/>`))
    }
}