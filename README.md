# NOANE-Escrow Project

This project is a basic Python Flask application connected to a PostgreSQL database and configured with Web3 to work with the Ethereum blockchain. It also includes a React Native front-end.

## Table of Contents

- [Installation](#installation)
- [Database Configuration](#database-configuration)
- [Running the Application](#running-the-application)
- [React Native Setup](#react-native-setup)
- [Troubleshooting](#troubleshooting)

## Installation

1. Install [Python](https://www.python.org/downloads/), [Node.js and npm](https://nodejs.org/en/download/), [Git](https://git-scm.com/downloads), and [Visual Studio Code](https://code.visualstudio.com/download).

2. Clone the repository:

git clone https://github.com/adrlitx/NOANE-Escrow.git

3. Change to the project directory:

cd NOANE-Escrow

4. Create a virtual environment:

python -m venv venv

5. Activate the virtual environment:

- Windows:

  ```
  .\venv\Scripts\activate
  ```

- macOS/Linux:

  ```
  source venv/bin/activate
  ```

6. Install the required Python packages:

pip install -r requirements.txt

## Database Configuration

1. Sign up for a free account on [ElephantSQL](https://www.elephantsql.com/).

2. Create a new instance and retrieve the connection details.

3. Update the `app.config['SQLALCHEMY_DATABASE_URI']` line in `app.py` with the connection details.

## Running the Application

1. Start the Flask application:

python app.py

2. Access the application in your browser at `http://127.0.0.1:5000`.

## React Native Setup

1. Change to the `Escrow` directory:

cd Escrow

2. Install the required Node.js packages:

npm install

3. Start the React Native development server:

npm start

4. Open the application in your web browser using the link provided in the terminal.

## Troubleshooting

If you encounter any issues during the setup or execution of the project, please refer to the [GitHub repository](https://github.com/adrlitx/NOANE-Escrow) for help and submit an issue if needed.
