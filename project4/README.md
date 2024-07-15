# Marquee Animation Project

This project features a marquee animation effect that responds to scrolling, implemented using GSAP (GreenSock Animation Platform).

## Description

The project consists of an HTML webpage (`index.html`), CSS styles (`style.css`), and JavaScript (`script.js`) to achieve the following:

- **Marquee Animation**: The `marqueAnimation()` function triggers an animation when the user scrolls:
  - Scrolling down moves the `.marque` elements horizontally to the left (`transform: translateX(-200%)`), accompanied by a 180-degree rotation of the arrow icon.
  - Scrolling up resets the `.marque` elements to their original position (`transform: translateX(0%)`), with the arrow icon rotating back to 0 degrees.
- **Custom Fonts**: Custom font (`NeueMachina.otf`) is included and applied using `@font-face`.
- **Responsive Design**: The webpage adjusts seamlessly to different screen sizes.

## Features

- **Scroll-Activated Animation**: The animation triggers based on the direction of the user's scroll.
- **CSS Flexbox**: Utilizes Flexbox for layout and alignment of `.marque` elements.
- **GSAP Integration**: GSAP is used for smooth animation transitions (`gsap.to()`).

## Usage

To view the project:

1. Clone the repository: `git clone <repository-url>`
2. Open `index.html` in a web browser.

## Technologies Used

- **HTML**, **CSS**, **JavaScript**: Foundations for creating web animations and interactions.
- **GSAP**: Animation library for creating advanced animations and effects.
- **Custom Fonts**: `@font-face` for integrating custom fonts into the project.

## Preview

![Project Preview](preview.mov)

## Installation

There are no additional installation steps beyond cloning the repository. Ensure your browser supports ES6 JavaScript features for optimal performance.

## Contributing

Contributions to enhance animation effects or improve usability are welcome! Fork the repository, make your changes, and submit a pull request.

## Credits

- **Fonts**: Custom font included via `@font-face`.
- **Libraries**:
  - [GSAP](https://greensock.com/gsap/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Explore and enjoy the dynamic marquee animation created using GSAP in this project. For any questions or suggestions, please open an issue in the repository.