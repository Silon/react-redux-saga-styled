import { createGlobalStyle } from 'styled-components'

const FontsStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('./fonts/Lato-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Lato';
      src: url('./fonts/Lato-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Lato';
      src: url('./fonts/Lato-BlackItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Lato';
      src: url('./fonts/Lato-LightItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Lato';
      src: url('./fonts/Lato-BoldItalic.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Lato Hairline';
      src: url('./fonts/Lato-Hairline.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Lato';
      src: url('./fonts/Lato-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Lato Hairline';
      src: url('./fonts/Lato-HairlineItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Lato';
      src: url('./fonts/Lato-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'Lato';
      src: url('./fonts/Lato-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
`

export default FontsStyle
