
document.addEventListener("DOMContentLoaded", function (event) {
    $(document).ready(function () {
        console.log("Podłączono")

        $(window).scroll(function () {

            let addressBanner = $("#address-banner").position().top;;

            let promotionsTop = $("#promotions").offset().top;
            let promotionsBottom = promotionsTop + $("#promotions").outerHeight();

            let meetingTop = $("#meeting").offset().top;
            let meetingBottom = meetingTop + $("#meeting").outerHeight();

            let windowTop = $(window).scrollTop();
            let windowBottom = (windowTop + $(window).height());

            if (window.scrollY >= addressBanner) {
                $(".navbar").addClass('opacity');
                $(".navbar").css("display", "flex");
            }

            if ((promotionsBottom >= windowTop) && (promotionsTop <= windowBottom)) { $("#promotions").addClass('append-left'); }

            if ((meetingBottom >= windowTop) && (meetingTop <= windowBottom)) { $("#meeting").addClass('append-right'); }

        })

        $(".nav-item").click(function () {
            switch (this.id) {
                case "menuHref":
                    document.querySelector('#menu-list').scrollIntoView({ behavior: 'smooth' });
                    break;
                case "promotionsHref":
                    document.querySelector('#promotion').scrollIntoView({ behavior: 'smooth' });
                    break;
                case "cateringHref":
                    document.querySelector('#caterig-banner').scrollIntoView({ behavior: 'smooth' });
                    break;
                case "meetingHref":
                    document.querySelector('#meeting').scrollIntoView({ behavior: 'smooth' });
                    break;
                case "contactHref":
                    document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
                    break;
                default:
                    document.querySelector('#menu-list').scrollIntoView({ behavior: 'smooth' });
            }

        });


    })
});
