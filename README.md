# Telnet Client with Backend Integration

This application connects to a Telnet server and processes incoming data from the server. When the application receives certain data from the server, it sends HTTP POST requests to a specified backend server with the data received as the body of the request.

## Requirements
Depending on the language you have chosen to implement the client, you will need:

- Node.js: Node.js and npm installed on your machine.
- Python: Python 3.x and pip.
- Go: Go programming language.
- C++: Boost library for networking and json library for creating JSON data.
- Bash: netcat and curl utilities.

## Setup & Installation

### Node.js
1. Install the necessary packages using npm: `npm install axios net`
2. Run the application: `node index.js`

### Python
1. Install the necessary packages using pip: `pip install requests`
2. Run the application: `python telnet_client.py`

### Go
1. Compile the application: `go build main.go`
2. Run the application: `./main`

### C++
1. Install the necessary libraries.
2. Compile and run the code with a C++ compiler.

### Bash
1. Ensure you have `netcat` and `curl` installed.
2. Run the script: `bash telnet_client.sh`

## Usage

Before running the application, replace `'http://your-backend-url'` in the application code with the actual base URL of your backend server.

When the application receives data from the server starting with "*X;", it will parse the data and check the status. If the status has changed from the previous status, it will send a POST request to the corresponding endpoint of the backend server with the data received as the body of the request.


# Telnet Client Node.js App

This application is a simple Node.js telnet client that connects to a server, sends an initial message, and then processes incoming data from the server. When the application receives certain data from the server, it sends HTTP requests to a backend server.

## Prerequisites

You need Node.js and npm installed on your machine. This app was tested with Node.js version 14.17.0 and npm version 6.14.13.

## Setup & Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Hovog83/devLive.git
```

2. Navigate into the directory of the project:

```bash
cd yourrepository
```

3. Install the dependencies:

```bash
npm install
```

## Usage

Before running the application, replace `'http://your-backend-url'` in the `index.js` file with the actual base URL of your backend server.

To start the application, run:

```bash
node index.js
```

The application will then connect to the telnet server and start processing data. If it receives data starting with "*X;", it will parse the data and check the status. If the status has changed from the previous status, it will send a POST request to the corresponding endpoint of the backend server.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.


## Acknowledgments

This project was inspired by [project/source](#).




## FOR Python


Please make sure you have telnetlib and requests installed in your Python environment. You can install them using pip:

Copy code
pip install requests
Replace 'http://your-backend-url' with the actual base URL of your backend server. Also note that this script assumes that the backend endpoints are at http://your-backend-url/call1 through http://your-backend-url/call6 and accept POST requests with form data.

Note that Python's telnetlib provides a synchronous API, so this script will block while waiting for data from the server or a response from the backend. If you need to handle other tasks concurrently, you may want to use a more advanced networking library such as asyncio or twisted.




## FOR Go



Here is a Go implementation of your Node.js code. In this code, we use the net package for the telnet connection and the net/http package for making HTTP requests



Please replace 'http://your-backend-url' with the actual base URL of your backend server. Also note that this script assumes that the backend endpoints are at http://your-backend-url/call1 through http://your-backend-url/call6 and accept POST requests with JSON data.

In this Go code, we create a TCP connection to the server, send an initial message, then start a loop that reads lines from the server. If a line starts with "*X;", we split the line into parts, check if the status has changed, and if so, make an HTTP POST request with the line as the request body. If reading from the server fails, we break the loop and close the connection.

Remember to handle errors properly in your production code.

