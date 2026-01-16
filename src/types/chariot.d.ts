declare namespace JSX {
  interface IntrinsicElements {
    "chariot-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      cid?: string;
      theme?: string;
    };
  }
}
