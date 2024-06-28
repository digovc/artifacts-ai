class Clipboard {
  async copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard: ', text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
}

export default new Clipboard();
