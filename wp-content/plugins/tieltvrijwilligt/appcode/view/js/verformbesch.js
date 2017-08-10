
jQuery(document).ready(function () {

    //1. validation max aantal sectoren
    
    jQuery(".uniform_sec").change(function () {
        var max = 3;
        if (jQuery(".uniform_sec:checked").length == max) {
            jQuery(".uniform_sec").attr('disabled', 'disabled');
            alert('enkel 3 sectoren');
            jQuery(".uniform_sec:checked").removeAttr('disabled');
        }
        else {
            jQuery(".uniform_sec").removeAttr('disabled');
        }
    });
	
    //2. validatie min aantal sectoren
    
    jQuery('#frmVereniging').submit(function () {
        if (jQuery(".uniform_sec:checked").length == 0) 
        {
            alert('Gelieve tenminste één sector te kiezen.');
            return false;
        }
        
    });
    

    //3. hide red bar
    jQuery("#sluitinfo").click(function () {
        jQuery("#rodebalk").hide();
    });
    
    //4.
    jQuery("#bestAddBtn").click(function () {
        //alert('hi');
        jQuery("#bestuurdersShortcode").hide();
        jQuery("#bestuurderFormulierShortcode").show();
        return false;
    });
    
    //5.
    /*
    jQuery("#bestBtnEdit").click(function () {
        alert('hi');
        jQuery("#bestuurdersShortcode").hide();
        jQuery("#bestuurderFormulierShortcode").show();
        return false;
    });
    */
    
    //6. edit bestuurder
    jQuery("table").on("click", "button.btnedit", editBestuurder);
  
});             //einde ready event

//div bestuurderFormulierShortcode niet tonen bij pagina ladn
/*
jQuery(function(){
    jQuery("#bestuurderFormulierShortcode").hide();
    jQuery("#preview").on("click", function(){
        jQuery("#div1, #div2").toggle();
    });
});  
*/
 
/*
function editBestuurder()
{
     var btnid = jQuery(this).attr("id"); //attribuut lezen in jQuery
     var id = btnid.substring(11);
     alert(id);
     jQuery("#bestuurdersShortcode").hide();
     jQuery("#bestuurderFormulierShortcode").show();
     //alle formulieren moetn beschikbaar zijn bij het tab laden of ajax gebruiken om ee deel van de pagina te herladen
     
    //    return false;
     //window.location.href = 'http://localhost:8080/sociaalhuis/wp-content/plugins/tieltvrijwilligt/appcode/control/bestuurder.control.php?actie=edit&bestuurderid=' + id;
     //window.location.href = 'http://localhost:8080/sociaalhuis/wp-content/plugins/tieltvrijwilligt/appcode/view/vereniging-formulier.php?actie=edit&bestuurderid=' + id;
     
     //return false; //to prevent window.location.href is assigned badly;
} //end editBestuurder       
*/
