export default class Value {
    constructor(data) {
        this.title = data.title || ''
        this.date = data.date || ''
        this.explanation = data.explanation || ''
        this.hdurl = data.hdurl || data.url || ''
    }

    get Template() {
        return /*html*/`
            <img class="img-fluid" src="${this.hdurl}" alt=""/>
            <p>Date: ${this.date}</p>
            <p>${this.explanation}</p>
        `
    }
}