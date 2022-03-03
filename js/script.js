/**
 * Wrap everything in an IIFE
 */
(function(){

    var data = [
        {
        name:'1. Chicken Boti',
        description:'For this recipe you will Need:',
        instructions:'Step by Step Instructions:',
        selector: 'p1'
        },
        {
        name:'2. Chicken Karhayi',
        description:'For this recipe you will Need:',
        instructions:'Step by Step Instructions:',
        selector: 'p2'  
        },
        
        {
        name:'3. Haleem',
        description:'For this recipe you will Need:',
        instructions:'Step by Step Instructions:',
        selector: 'p3'
        },
        {
        name:'4. Nihari',
        description:'For this recipe you will Need:',
        instructions:'Step by Step Instructions:',
        selector: 'p4'
        },
    ];
    // constructor
    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.instructions = data.instructions;
        this.selector = data.selector;
    }
    /*********************
     * Utility Functions*
     ********************/

    var getTodaysDate = function (){
        var today = new Date();
        return today.toDateString();
    };

    //Returns DOM element by ID
    var getEl = function (id){
        return document.getElementById(id);
    };

    //Writes the package object's data to the appropriate DOM elements
    var writePackageInfo = function (package){
    //get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector +'-description'),
            instEl = getEl(selector + '-instructions');

        //write package to the DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        instEl.textContent = package.instructions;
    };
    //Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //Write package data one by one referring to Array position 
    var chickenBoti = new Package(data[0]);
    var karhayi = new Package(data[1]);
    var haleem = new Package(data[2]);
    var nihari = new Package(data[3]);
    writePackageInfo(chickenBoti);
    writePackageInfo(karhayi);
    writePackageInfo(haleem);
    writePackageInfo(nihari);

}());