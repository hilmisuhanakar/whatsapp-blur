window.onload = function () {
  let checkChatListInterval = setInterval(() => {
    const sideDiv = document.getElementById("side");

    if (!sideDiv) return;

    observeSideDivChanges(sideDiv);

    const listItems = document.querySelectorAll('[role="listitem"]');

    if (listItems.length > 0) {
      clearInterval(checkChatListInterval);
      addBlurEffectToListItems(listItems);
      observeNewListItems();
    }
  }, 1000);
};

function addBlurEffectToListItems(listItems) {
  listItems.forEach((item) => {
    if (!item.dataset.blurred) {
      item.style.filter = "blur(5px)";
      item.dataset.blurred = "true";
    }

    if (!item.dataset.eventsAdded) {
      item.addEventListener("mouseenter", function () {
        listItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.style.filter = "blur(5px)";
          }
        });
        item.style.filter = "blur(0px)";
      });

      item.addEventListener("mouseleave", function () {
        listItems.forEach((otherItem) => {
          otherItem.style.filter = "blur(5px)";
        });
      });

      item.dataset.eventsAdded = "true";
    }
  });
}

function observeSideDivChanges(sideDiv) {
  const observer = new MutationObserver(() => {
    const listItems = document.querySelectorAll('[role="listitem"]');
    if (listItems.length > 0) {
      addBlurEffectToListItems(listItems);
    }
  });

  observer.observe(sideDiv, {
    childList: true,
    subtree: true,
  });
}

function observeNewListItems() {
  const chatList = document.querySelector('[role="grid"]');

  if (!chatList) return;

  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "childList") {
        const newItems = mutation.addedNodes;
        newItems.forEach((node) => {
          if (node.nodeType === 1 && node.getAttribute("role") === "listitem") {
            addBlurEffectToListItems([node]);
          }
        });
      }
    });
  });

  observer.observe(chatList, {
    childList: true,
    subtree: true,
  });
}
