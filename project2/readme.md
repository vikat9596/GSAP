# Timeline Animation Project

This project demonstrates a timeline animation using GSAP (GreenSock Animation Platform) to create dynamic transitions for a menu.

## Description

The project consists of an HTML webpage (`index.html`), CSS styles (`style.css`), and JavaScript (`script.js`) that collectively create a responsive menu animation:

- **Menu Animation**: Clicking on the menu icon (`#nav i`) slides in a full-screen menu (`#full`) from the right.
- **Timeline Animation**: GSAP's timeline (`tl`) orchestrates the animation sequence, including sliding in elements (`#full h4`) and fading in icons (`#full i`).
- **Responsive Design**: The webpage adapts smoothly across different device sizes.

## Features

- **Interactive Menu**: Clicking the menu icon (`#nav i`) triggers a slide-in animation of the full-screen menu (`#full`).
- **Animated Elements**: Text (`#full h4`) and icons (`#full i`) animate into view with staggered timing.
- **Controlled Animation**: GSAP timeline (`tl`) manages the animation playback and reverses on clicking the close icon (`#full i`).

## Usage

To view the project:

1. Clone the repository: `git clone <repository-url>`
2. Open `index.html` in a web browser.

## Technologies Used

- **HTML**: Structure and content of the webpage.
- **CSS**: Styling to enhance visual presentation.
- **JavaScript (GSAP)**: Animation library for creating interactive and smooth animations.

## Preview

![Project Preview](preview.png)

## Installation

There are no additional installation steps beyond cloning the repository. Ensure your browser supports ES6 JavaScript features for optimal performance.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.

## Credits

- **Icons**: [Remix Icon](https://remixicon.com/)
- **Libraries**:
  - [GSAP](https://greensock.com/gsap/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to explore and adapt the project. For any questions or suggestions, please open an issue in the repository.