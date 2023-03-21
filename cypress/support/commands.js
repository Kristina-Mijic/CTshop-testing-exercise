const basePage = require('../support/pages/basePage').basePage
const productPage = require('../support/pages/productsPage').productPage

/**
 * @memberof cy 
 * @method closeAdd - opis te metode (closes the add popup)
 */
  Cypress.Commands.add('closeAdd', () => { 
    cy.get('#popup-smart-root-54692').shadow().find('#PsCloseButton').click() //zuta reklama
    cy.get('#popup-smart-root-54360').shadow().find('#PsCloseButton').click() //crvena reklama
    cy.get('#popup-smart-root-53976').shadow().find('#PsCloseButton').click() //roze reklama
  })


 /**
 * @memberof cy 
 * @method acceptCookies - opis te metode (acceptCookies)
 */
  Cypress.Commands.add('acceptCookies', () => { 
    cy.get('button').contains('Prihvatam').click()
  })


 /**
 * @memberof cy 
 * @method clickLinkFromMenu - opis te metode (clickLinkFromMenu)
 * @param subMenuParam
 * @param linkParam
 */
  Cypress.Commands.add('clickLinkFromMenu', (subMenuParam, linkParam) => { 
    cy.get(basePage.mainMenu).invoke('show')
    cy.get(basePage.subMenu.replace('$', subMenuParam)).invoke('show')
    cy.get(basePage.subMenuLink.replace('$', linkParam)).click()
  })



  /**
 * @memberof cy 
 * @method checkFilter - opis te metode (checkFilter)
 * @param filterNameParam
 */
  Cypress.Commands.add('checkFilter', (filterNameParam) => { 
    cy.xpath(productPage.filter.replace('$', filterNameParam)).check({force:true});
  })
  
