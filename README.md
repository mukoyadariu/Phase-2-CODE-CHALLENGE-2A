# Battle Bot Army Builder

Battle Bot Army Builder is a web application that allows users to assemble their own formidable army of battle bots. Users can choose from a variety of bots, each with unique characteristics and abilities, and create their personalized army to conquer battles.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Backend](#running-the-backend)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Advanced Features](#advanced-features)
- [Support](#support)
- [License](#license)

## Description

Battle Bot Army Builder is a single-page application built using React and Redux for the frontend and JSON-Server for the backend. The application allows users to view a collection of available bots, enlist them into their army, and release or discharge bots from their service. The backend is powered by JSON-Server and stores bot data in a `db.json` file.

## Features

- View profiles of all bots in the `BotCollection`.
- Enlist individual bots into the user's army in the `YourBotArmy` component.
- Release bots from the user's army, removing them from the `YourBotArmy`.
- Discharge a bot permanently by clicking the "x" button, which deletes the bot from both the frontend and backend.
- Sort bots by health, damage, or armor using the `SortBar` component (Advanced Feature).
- Filter bots by class (e.g., Support, Medic, Assault) using the `FilterBar` component (Advanced Feature).
- Enlist only one bot from each bot class (Advanced Feature).

## Project Setup

Follow these steps to set up the project:

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your system.

### Installation

1. Clone the project repository from GitHub:

```bash
git clone https://github.com/your-username/battle-bot-army-builder.git
```

2. Change into the project directory:

```bash
cd battle-bot-army-builder
```

3. Install the required dependencies:

```bash
npm install
```

### Running the Backend

The backend uses JSON-Server to simulate a RESTful API. Follow these steps to start the backend server:

1. Create a `db.json` file in the project directory and populate it with the provided bot data (See [Endpoints for Core Deliverables](#endpoints-for-core-deliverables) section).

2. Start the JSON-Server:

```bash
npx json-server --watch db.json --port 8001
```

This will start the JSON-Server and serve the bot data at `http://localhost:8001/bots`.

## Usage

To run the application, execute the following command in the project directory:

```bash
npm start
```

This will start the frontend development server, and the application will be accessible at `http://localhost:3000`.

## API Documentation

The application uses JSON-Server as a mock API for the backend. The available endpoints are as follows:

### GET /bots

Retrieves the list of bots.

Example Response:

```json
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  },
  // ... other bots ...
]
```

### DELETE /bots/:id

Deletes the specified bot from the backend.

Example Response:

```json
{}
```

## Contributing

We welcome contributions to improve Battle Bot Army Builder! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m "Add your commit message here"`.
4. Push the changes to your fork: `git push origin feature/your-feature-name`.
5. Submit a pull request to the `main` branch of the original repository.

## Advanced Features

If you have extra time and want to challenge yourself, consider implementing the following advanced features:

- Display a show view (`BotSpecs`) for each bot, allowing users to see detailed information about a bot before enlisting it.
- Implement sorting functionality for bots based on health, damage, or armor using the `SortBar` component.
- Allow users to filter bots by their class (e.g., Support, Medic, Assault) using the `FilterBar` component.
- Restrict users to enlist only one bot from each bot class.

## Support

If you encounter any issues or need assistance with the Battle Bot Army Builder application, please feel free to [create an issue](https://github.com/your-username/battle-bot-army-builder/issues) in the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/your-username/battle-bot-army-builder/blob/main/LICENSE) file for details.

---

Please note that this README template is a starting point, and you should tailor it to your project's specific details. Provide clear instructions for installation, usage, and contribution to help users and contributors effectively interact with your project. Happy coding!
