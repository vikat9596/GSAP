# Text Animation Project

This project showcases a text animation effect using GSAP (GreenSock Animation Platform) to split and animate text in a creative manner.

## Description

The project includes an HTML webpage (`index.html`), CSS styles (`style.css`), and JavaScript (`script.js`) to achieve the following:

- **Text Splitting**: The `breakText()` function splits the text inside `<h1>` into two halves and wraps each character with `<span>` elements styled differently (`class="a"` and `class="b"`).
- **Animation**: GSAP is used to animate the text characters:
  - Characters in `.a` class animate with a staggered effect moving upwards and changing color to green.
  - Characters in `.b` class animate similarly but staggered in the opposite direction and change color to yellow.
- **Styling**: Custom fonts (`Gilroy-Regular.ttf`) are included and applied to enhance the text appearance.

## Features

- **Dynamic Text Animation**: Text characters are animated on page load.
- **Custom Fonts**: Utilizes `@font-face` for custom font integration (`Gilroy-Regular.ttf`).
- **Responsive Design**: The webpage adjusts to different screen sizes while maintaining animation quality.

## Usage

To view the project:

1. Clone the repository: `git clone <repository-url>`
2. Open `index.html` in a web browser.

## Technologies Used

- **HTML**: Structure and content presentation.
- **CSS**: Styling and layout of elements.
- **JavaScript (GSAP)**: Animation library for creating interactive and smooth animations.

## Preview

![Project Preview](preview.png)

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

Explore and enjoy the dynamic text animation created using GSAP in this project. For any questions or suggestions, please open an issue in the repository.