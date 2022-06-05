$(document).ready(function () {
    $("table tr").each(function () {
        $(this).find("td:not(:first)").attr('id', 'selectable');
        $(this).find('td:contains("Not")').attr('id', 'notSelectable');
    })

    $("td[id='selectable']").click(function () {
        var content = $(this).text();
        $(this).toggleClass("highlight");

        if ($(this).hasClass("highlight")) {
            $("#displaySelected").css("visibility", "visible");
            $("#displaySelected").css("margin-top", "2em");
            $("#result").append("<p>" + content + "</p>");
        } else {
            $("#result p:contains(" + content + ")").remove();
            if ($("#result").has("p").length == false) {
                $("#displaySelected").css("visibility", "hidden");
                $("#displaySelected").css("margin-top", "0");
            }
        }
    });
});