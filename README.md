# Artifacts AI

A new way to work together with AI.

Inspired by the artifacts introduced by Anthropic's chat interface, this project is designed to interact with text files of any type continuously until the user is satisfied with the result.

## Main Features

- Create and modify files with AI assistance in a continuous flow;
- Add references to provide context to what is being produced;
- Make modifications directly in the text editor to the generated artifacts;

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/digovc/artifacts-ai.git
    ```
2. Navigate to the project directory:
    ```bash
    cd artifacts-ai
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Execution

To start the project, use the command:
```bash
npm run dev
```

## Usage

The usage flow is simple. Open the application in your browser after starting it with the command `npm run dev`. Once opened, click on the settings icon, and provide your OpenAI API key. Afterward, you can start creating new "projects" on the homepage. In each project, you can add references if necessary and begin interacting with the language model. The generated artifacts will be created on the right side of the screen, and you can interact with them directly in the text editor as well as continue the interaction with the model for adjustments.

## Security and Privacy

All data entered into this application is stored locally in your browser and is not sent to any backend, except the LLM provider.

## Roadmap

- [ ] Integration with more LLMs and providers.
- [ ] Add viewers for different file types.
- [ ] Improve the user interface.

## Contribution

Contributions are welcome! Follow the steps below to contribute:
1. Fork the repository
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the main branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Authors

- **Rodrigo Daros** - [Github](https://github.com/digovc)


## Support

For help, contact via email: rodrigo.conspena@gmail.com
