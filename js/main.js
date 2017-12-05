$(document).ready(function(){
	maphover();
});

function maphover(){
	var self = "";
	$(".city").hover(
		function(){
			self = $(this);
			self.addClass("hover").children("div").show();
            var cityStr = $(this).data("id");
            $(".addressInfo").hide();
            $(".addressInfo").each(function() {
                if ($(this).data("content") == cityStr) $(this).show();
            });
		},
		function(){
			self = $(this);
			self.children("div").hide();
			self.removeClass("hover");
            $(".addressInfo").hide();
		}
	);

    $(".addressInfo").hover(
        function(){
            $(".addressInfo").hide();
            self = $(this);
            self.show();
            var addStr = $(this).data("content");
            $(".city").children("div").hide();
            $(".city").removeClass("hover");
            $(".city").each(function() {
                if ($(this).data("id") == addStr) $(this).addClass("hover").children("div").show();
            });
        },
        function(){
            $(".addressInfo").hide();
            $(".city").children("div").hide();
            $(".city").removeClass("hover");
        }
    );
};
