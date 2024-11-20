window.onload = function () {
  let checkChatListInterval = setInterval(() => {
    console.log("asdasd");
    const chatList = document.querySelector('[role="grid"]');

    if (chatList) {
      clearInterval(checkChatListInterval);
      changeBlur(chatList);
    }
  }, 1000);
};

function changeBlur(selector) {
  selector.addEventListener("mouseenter", function () {
    selector.style.filter = "blur(0px)";
  });

  selector.addEventListener("mouseleave", function () {
    selector.style.filter = "blur(5px)";
  });
}
