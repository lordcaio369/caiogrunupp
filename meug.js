$(document).ready(function() {
        $("input").blur(function() {
            if ($(this).val() == "") {
                $(this).css({
                    "border": "1px solid #F00"
                });
            }
        });


        $("#botaopow3r").click(function() {
            var cont = 0;
            $("#postpow3r input").each(function() {
                if ($(this).val() == "") {
                    $(this).css({
                        "border": "1px solid #F00"
                    });
                    cont++;
                }
            });
            if (cont == 0) {
                $("#postpow3r").submit();
            }
        });
    });
