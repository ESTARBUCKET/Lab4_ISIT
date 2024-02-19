import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
  
    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

        getData() {
        return [
            {
                id: 1,
                src: "https://юридическаяпомощь.москва/upload/iblock/a55/hlah4o220q4ane5i7hnjv183ri4h0y4p.jpg",
                title: "МММама дорогая, какая низкая ставка!",
                text: "Оформим кредит с кайфом"
            },
            {
                id: 2,
                src: "https://api.psychologos.ru/storage/image/495lmtoe.jpg",
                title: "Сделайте ВКЛАД",
                text: "И получите процент (#аналоговнет)"
            },
            {
                id: 3,
                src: "https://bankovskie-karty.ru/wp-content/uploads/2021/12/bank-kommercheskij-chto-eto.jpg",
                title: "Коммерческий банк",
                text: "Что же делать нам с монетой?"
            },
        ]
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}