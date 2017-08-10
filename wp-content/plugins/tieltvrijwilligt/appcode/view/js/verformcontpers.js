jQuery(document).ready(function () {

    //1. hide red bar
    jQuery("#sluitinfo").click(function () {
        jQuery("#rodebalk").hide();
    });
    
    jQuery("#bestContactPersoon").change(function() {
    	alert('hi1');
    	var waarde = jQuery('#bestContactPersoon option:selected').val();
    	if(waarde != 0 ) //bestuurslid gekozen
    	{
    		alert('waarde' + waarde);
    		jQuery('input:not([name="idVereniging"],[name="idContactPersoon"])').val('');
    		//jQuery('input:not([name="idContactPersoon"])').val('');
    		jQuery('textarea').val('');
    		jQuery("#cvContactPersoon").val('0');
    		//jQuery('input:not([name="idVereniging"])').prop('disabled', true);
    		jQuery('input:not([name="idContactPersoon"],[name="idContactPersoon"])').prop('disabled', true);
    		jQuery('textarea').prop('disabled', true);
    		jQuery('#cvContactPersoon').prop('disabled', true);	
    		var naam = jQuery("#naamContactPersoon").val();
    		alert('naam' + naam);
    		var verid = jQuery("#idVereniging").val();
    		alert('ver' + verid);
    		var cp = jQuery("#idContactPersoon").val();
    		alert('cp' + cp);
   	}
    	else //geen bestuurslid gekozen
    	{
    		//alert('waarde' + waarde);
    		jQuery('input').prop('disabled', false);
    		jQuery('textarea').prop('disabled', false);
    		jQuery('#cvContactPersoon').prop('disabled', false);	
    	}
    	
    });
    
    
   
  
});             //einde ready event
