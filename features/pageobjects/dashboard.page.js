import { $ } from '@wdio/globals';
import Page from './page.js';

class dashboardPage extends Page {
    get cartIcon(){
        return $("#shopping_cart_container");
    }
    
    async validateOnPage(){
        await expect(this.cartIcon).toBeDisplayed();
    }
}

export default new dashboardPage();
