
describe('CTshop', () => {
  it('CTshop', () => {
    cy.visit('https://www.ctshop.rs/')
    cy.closeAdd()
    cy.acceptCookies()
    cy.clickLinkFromMenu('laptopovi-tableti', 'laptopovi')
   
    
    //otvorena nova stranica:
    cy.get('#popup-smart-root-54364').shadow().find('#PsCloseButton').click()

    cy.checkFilter('13.6"')

    cy.get('#products-list').find('div.ganalytics.item').should('have.length', 3)
  })
})





//Svaki put ce generisati novi report i brisati prethodni.
//Imamo mogucnost da to iskljucimo i da dodamo novi folder i ime, mozemo da prosledimo dodatne opcije
//Primer:
  // "cypress run --headed --spec 'cypress/e2e/practice.cy.js' --reporter mochawesome --reporter-options reporterDir=test reportFileName=test"
  //Drugi nacin je da udjemo u cypress.config.js i tu dodamo informacije.


  //Sajt koji testiramo je (CTshop)
    //ukooliko zelimo neki element da uzmemo preko Xpath-a moramo pre toga da instaliramo plugin.
    //Zatim ukoliko imamo neku menu sa hover efektima, moramo da uradimo hover sa cypress-om
    //Cypress nema komandu hover, ali moze da 'natera element da se pokaze' tako sto invoke jednu opciju koja se zove show
    //E sad, ono sto je problem je kako da znamo koji element nam treba, koji element da prikazemo sa tom komandom show,
    //kad god nismo sigurni koji od elemenata treba da izaberemo, treba da razmislimo sta se pojavljuje, koji elementi se pojavljuju,
    //zato nam je potreban ul/li
    //cy.get('a[href="/laptopovi-tableti"]#akcija~') ---> ovaj znak ~ nam omogucava da lociramo element koji se nalazi UZ nas element (tipa lista u listi)

    //cy.closeAdd()
    //cy.acceptCookies() --> Ove dve linije su kao parametri, koje smo definisali u commands.js file

    //kad nam treba ovaj selektor iz file-a: basePAge.js:
    //"a[href=\"/$\"]#akcija~ul" --> samo ovaj $ zamenimo za koji god text

    //check({force:true} --> ovo bi trebalo da cekira uvek bilo koji filter

    //cy.get('#products-list').find('div').should('have.length', 3) --->
      //- #products-list --> lista (wrapper) koja drzi tri diva
      //- unutar njega nam treba .find('div.ganalystics.item')
      // -nakon toga zelimo da ih izbrojimo i zato koristimo .shoud()
      // - u shoud opcija je: have.length
      // - div.ganalystics.item --> ovo je klasa koja je specificna za ta tri elementa koji nam trebaju tj koje testiramo da li postoje