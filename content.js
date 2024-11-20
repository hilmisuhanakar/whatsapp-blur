window.onload = function () {
  let chatListBlur = true;
  let messageAreaBlur = true;

  setInterval(() => {
    if (chatListBlur) {
      const chatList = document.querySelector('[role="grid"]');

      if (chatList) {
        changeBlur(chatList);
        chatListBlur = false;
      }
    }

    if (messageAreaBlur) {
      const messageArea = document.getElementById("main");
      if (messageArea) {
        changeBlur(messageArea);
        messageAreaBlur = false;
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
