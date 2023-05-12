# Telnet Client with Backend Integration

The Telnet client is a network application that establishes a TCP connection to a specified server and port, processes incoming data from the server, and sends HTTP POST requests to a backend server based on the data received.

## Overview

The client connects to a Telnet server and listens for data. When the client receives data that starts with "*X;", it splits the data into parts, checks a status code in the data, and if the status code has changed from the previous status, it sends a POST request to a corresponding endpoint on the backend server. The request body includes the data received from the server.

## System Requirements

The client can be implemented in various programming languages. Depending on the chosen language, you will need:

- Node.js: Node.js and npm installed on your machine.
- Python: Python 3.x and pip.
- Go: Go programming language.
- C++: Boost library for networking and json library for creating JSON data.
- Bash: netcat and curl utilities.

## Usage

### Server Connection

Replace the server address and port in the application code with the actual address and port of your Telnet server.

### Backend Integration

Before
