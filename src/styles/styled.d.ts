import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      white: string;
      black: string;
      gray: string;
      background: {
        body: string;
        card: string;
        button: string;
        buttonHover: string;
      };
      text: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        body: string;
        error: string;
        input: string;
      };
    };
  }
}
