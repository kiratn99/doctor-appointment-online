$(function() {
    $(".delete").click(function() {
        var element = $(this);
        var appid = element.attr("id");
        var info = 'id=' + appid;
        if (confirm("Are you sure you want to delete this?")) {
            $.ajax({
                type: "POST",
                url: "deleteappointment.php",
                data: info,
                success: function() {}
            });
            $(this).parent().parent().fadeOut(300, function() { $(this).remove(); });
        }
        return false;
    });
});