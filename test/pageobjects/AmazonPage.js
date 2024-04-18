class AmazonPage{

    get searchbtn(){
        return $("//input[@id='twotabsearchtextbox']")
    }
    get searchclick(){
        return $('#nav-search-submit-button')
    }
    get iphonelink(){
         return $("//span[@data-component-type='s-search-results']/child::div[1]/child::div[3]/descendant::span[1]")
    }
    get addtocartbtn(){
        return $("//span[@id='submit.add-to-cart']")
    }
    get proceedbtn(){
        return $("//span[@id='attach-sidesheet-checkout-button-announce']")
    }
      get emailbtn(){
        return $("//input[@id='ap_email']")
      }
      async Amazonbuy(search){
        await this.searchbtn.setValue(search)
        

      }
}
export default new AmazonPage()