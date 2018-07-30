
document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        console.log("Podłączono")
        $(window).scroll(function () {

            let promotionsTop = $("#promotions").offset().top;
            let promotionsBottom = promotionsTop + $("#promotions").outerHeight();

            let meetingTop = $("#meeting").offset().top;
            let meetingBottom = meetingTop + $("#meeting").outerHeight();

            let windowTop = $(window).scrollTop();
            let windowBottom = (windowTop + $(window).height());


            if ((promotionsBottom >= windowTop) && (promotionsTop <= windowBottom)) { $("#promotions").addClass('append-left'); }

            if ((meetingBottom >= windowTop) && (meetingTop <= windowBottom)) { $("#meeting").addClass('append-right'); }

        })
    })
});
