$("#country_selector").countrySelect({
    preferredCountries: ['ca', 'gb', 'us']
});
$(document).ready(function(){
    $(".link-item").click(function () {
        $(this).toggleClass("show");
    });
});

//opn-nav
$(document).ready(function(){
    $(".opn-nav").click(function () {
        $(".navbar" ).show(100);
        $(".close-nav").click(function () {
            $(".navbar" ).hide(100);
        });
    });
});

//header function
$(document).ready(function(){

    //My Account
    $(".my-acount").mouseover(function(){
        $(".dropdown-accont").show();
    });
    $(".my-acount").mouseout(function(){
        $(".dropdown-accont").hide();
    });

   //citys
    $(".citys").mouseover(function(){
        $(".dropdown-city").show();
    });
    $(".citys").mouseout(function(){
        $(".dropdown-city").hide();
    });

    //language
    $(".language").mouseover(function(){
        $(".dropdown").show();
    });
    $(".language").mouseout(function(){
        $(".dropdown").hide();
    });
    //opn-groub
    $(".opn-groub").mouseover(function(){
        $(".hom").show();
    });
    $(".opn-groub").mouseout(function(){
        $(".hom").hide();
    });
//
    $(".shoeing").mouseover(function(){
        $(".sh").show();
    });
    $(".shoeing").mouseout(function(){
        $(".sh").hide();
    });

    //
    $(".class3").mouseover(function(){
        $(".class33").show();
    });
    $(".class3").mouseout(function(){
        $(".class33").hide();
    });

    //
    $(".class4").mouseover(function(){
        $(".class44").show();
    });
    $(".class4").mouseout(function(){
        $(".class44").hide();
    });
    //
    $(".class5").mouseover(function(){
        $(".class55").show();
    });
    $(".class5").mouseout(function(){
        $(".class55").hide();
    });
    //
    $(".class6").mouseover(function(){
        $(".class66").show();
    });
    $(".class6").mouseout(function(){
        $(".class66").hide();
    });

    //
    $(".funrnicon").mouseover(function(){
        $(".open-car").show();
    });
    $(".funrnicon").mouseout(function(){
        $(".open-car").hide();
    });

});


