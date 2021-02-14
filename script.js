jQuery(document).ready(function () {
    jQuery("body").click(function(){
        if ($("#check").is(":checked")) {
            jQuery("body").addClass("night")
            jQuery(".check").addClass("check-1")
        }
        else {
            jQuery("body").removeClass("night")
            jQuery(".check").removeClass("check-1")
        }
    })
})