window.onload = function () {
  let chatListBlur = true;

  setInterval(() => {
    if (chatListBlur) {
      const chatList = document.querySelector('[role="grid"]');

      if (chatList) {
        changeBlur(chatList);
        chatListBlur = false;
      }
    }
  }, 0);
};

function changeBlur(selector) {
  selector.addEventListener("mouseenter", function () {
    selector.style.filter = "blur(0px)";
  });

  selector.addEventListener("mouseleave", function () {
    selector.style.filter = "blur(5px)";
  });
}
