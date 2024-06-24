class Clipboard {
  async copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Texto copiado com sucesso!');
    } catch (err) {
      console.error('Falha ao copiar o texto: ', err);
    }
  }
}

export default new Clipboard();
