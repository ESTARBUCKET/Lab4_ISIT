export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data,listener)
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="width: 400px;">
                    <img class="card-img-top" style="width: 400px" src="${data.src}" alt="картинка">
                    <div class="card-body" style="margin-bottom: 10px">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <button class="btn btn-primary" style="background-color: orange;" id="click-card-${data.id}" data-id="${data.id}">Узнать БОЛЬШЕ</button>
                    </div>
                </div>
            `
        )
    }
}
