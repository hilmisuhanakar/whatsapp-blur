# WhatsApp Web Blur Effect Extension

This Chrome extension adds a blur effect to the chat list on WhatsApp Web. It provides a privacy-focused overlay by blurring chats, with the blur removed for individual items when hovered over. The blur effect is automatically reapplied when the mouse cursor leaves the chat list or item.

## Features

- **Blur Effect**: Applies a blur effect to the chat list on WhatsApp Web.
- **Hover Interaction**: Temporarily removes the blur effect for the hovered chat item while keeping other items blurred.
- **Dynamic Update Handling**: Automatically applies the blur effect to new chats or changes in the chat list.
- **Lightweight**: Minimalistic implementation for smooth performance.

## How It Works

1. **Page Load**: The script waits for the WhatsApp Web page to load before initializing.
2. **Blur Application**:
   - Detects the chat list (`[role="listitem"]`) and applies a `blur(5px)` CSS filter.
   - Listens for new chat items being added and applies the blur dynamically.
3. **Hover Effects**:
   - On mouse hover, the blur effect is removed for the hovered item while keeping others blurred.
   - Once the mouse leaves, the blur effect is reapplied.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to the `chrome://extensions/` page.
3. Toggle the **Developer mode** switch in the top-right corner.
4. Click **Load unpacked** and select the directory containing the extension files.
5. Visit [WhatsApp Web](https://web.whatsapp.com), and the blur effect will be applied automatically.

## Code Overview

### Main Functions

1. **Initialization**: The `window.onload` event ensures the script runs after the page fully loads.
2. **Blur Effect Application**:
   - `addBlurEffectToListItems()`: Applies the blur effect to all chat items and sets up hover event listeners.
   - `observeSideDivChanges()`: Observes changes in the chat sidebar and ensures new items receive the blur effect.
   - `observeNewListItems()`: Listens for dynamic updates to the chat list and applies blur to newly added chat items.
3. **Event Listeners**: Handles `mouseenter` and `mouseleave` to toggle the blur effect dynamically.

### Key Implementation Points

- **MutationObserver**: Tracks dynamic changes in the chat list to ensure blur is consistently applied.
- **Efficient Updates**: Uses `dataset` properties to avoid re-adding event listeners or redundant blur effects.

## Development

To contribute to this project:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit and push your changes.
4. Submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE.md) file for details.

## Notes

- This extension is designed specifically for WhatsApp Web. It may not function correctly on other websites.
- For feature requests or bug reports, feel free to open an issue or contribute directly!
