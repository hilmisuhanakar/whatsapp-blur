# WhatsApp Blur Effect

This Chrome extension adds a blur effect to the chat list and message areas on WhatsApp Web. When you hover over the chat list or message area, the blur effect is removed. When you move the cursor away, the blur effect is re-applied.

## Features

- Adds a blur effect to the WhatsApp Web chat list and message area.
- The blur effect can be toggled on mouse hover.
- Lightweight and simple implementation.

## Installation

To use this extension locally, follow these steps:

1. Download or clone the repository.
2. Open Google Chrome and go to the `chrome://extensions/` page.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click on **Load unpacked** and select the folder where the extension files are located.
5. Once loaded, the extension will automatically apply the blur effect to the WhatsApp Web chat list and message area when you visit `https://web.whatsapp.com`.

## How It Works

- The extension uses the `window.onload` event to ensure the page is fully loaded before applying the blur effect.
- Once the page is ready, it checks for the chat list (identified by the role `grid`) and applies a blur filter.
- The `mouseenter` and `mouseleave` event listeners toggle the blur effect when you hover over the chat list or message area.

## Code Overview

- **`window.onload`**: Ensures that the code runs only after the page has fully loaded.
- **`setInterval`**: Keeps checking for the chat list until it is found, then applies the blur effect.
- **`changeBlur(selector)`**: Adds `mouseenter` and `mouseleave` event listeners to apply or remove the blur effect.

## Contributing

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENCE.md) file for details.
