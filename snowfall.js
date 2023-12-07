document.addEventListener("DOMContentLoaded", function () {
  var snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add("snowflakes");
  snowflakesContainer.setAttribute("aria-hidden", "true");
  document.body.appendChild(snowflakesContainer);

  for (var i = 0; i < 12; i++) {
    var snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflakesContainer.appendChild(snowflake);

    var innerSnowflake = document.createElement("div");
    innerSnowflake.classList.add("inner");
    innerSnowflake.innerText = "❅";
    snowflake.appendChild(innerSnowflake);
  }

  var promotionVisible = false;

  function handleScroll() {
    if (window.scrollY > 50 && !promotionVisible) {
      snowflakesContainer.classList.add("visible");
      promotionVisible = true;
    } else if (window.scrollY <= 50 && promotionVisible) {
      snowflakesContainer.classList.remove("visible");
      promotionVisible = false;
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Xử lý ngay khi trang được tải để kiểm tra trạng thái ban đầu
});

