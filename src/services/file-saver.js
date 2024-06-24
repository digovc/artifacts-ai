class FileSaver {
  saveFile(filename, content) {
    try {
      const blob = new Blob([content], { type: 'text/plain' });
      const link = document.createElement('a');

      link.href = URL.createObjectURL(blob);
      link.download = filename;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      console.log('Arquivo salvo com sucesso!');
    } catch (err) {
      console.error('Falha ao salvar o arquivo: ', err);
    }
  }
}

export default new FileSaver();
