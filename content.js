window.onload = function () {
  let checkChatListInterval = setInterval(() => {
    const sideDiv = document.getElementById("side");

    if (!sideDiv) return;

    // Find chat list items - these are gridcells that are direct children of rows
    const chatItems = getChatItems();

    if (chatItems.length > 0) {
      clearInterval(checkChatListInterval);
      addBlurEffectToListItems(chatItems);
      observeSideDivChanges(sideDiv);
    }
  }, 1000);
};

function getChatItems() {
  // Get all gridcells that are direct children of rows (these are the main chat items)
  const rows = document.querySelectorAll('[role="row"]');
  const chatItems = [];
  
  rows.forEach((row) => {
    const gridCell = row.querySelector('[role="gridcell"][tabindex="0"]');
    if (gridCell) {
      chatItems.push(gridCell);
    }
  });
  
  return chatItems;
}

function addBlurEffectToListItems(listItems) {
  listItems.forEach((item) => {
    // Apply blur effect if not already blurred
    if (!item.dataset.blurred) {
      item.style.filter = "blur(5px)";
      item.dataset.blurred = "true";
    }

    // Add event listeners if not already added
    if (!item.dataset.eventsAdded) {
      item.addEventListener("mouseenter", function () {
        const allChatItems = getChatItems();
        allChatItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.style.filter = "blur(5px)";
          }
        });
        item.style.filter = "blur(0px)";
      });

      item.addEventListener("mouseleave", function () {
        const allChatItems = getChatItems();
        allChatItems.forEach((otherItem) => {
          otherItem.style.filter = "blur(5px)";
        });
      });

      item.dataset.eventsAdded = "true";
    }
  });
}

function observeSideDivChanges(sideDiv) {
  const observer = new MutationObserver(() => {
    const chatItems = getChatItems();
    if (chatItems.length > 0) {
      addBlurEffectToListItems(chatItems);
    }
  });

  observer.observe(sideDiv, {
    childList: true,
    subtree: true,
  });
}
