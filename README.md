# Google-Book-Search

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description: 
A Google Book Search app using React, Express and MongoDB.
This is the link to a preview of the application: https://protected-basin-43986.herokuapp.com/ 

## Table of Contents 
* [Installation](#Installation) 
* [Usage Information](#Usage) 
* [Contributing](#Contributing) 
* [Test Instructions](#Tests) 
* [Questions](#Questions) 
* [License](#License)  

## Installation: 
1. Clone the Budget-Tracker project files to your local machine using this link: https://github.com/ong-osmond/Google-Book-Search.git  
2. Install NODE.js on your machine. Find the latest version on https://nodejs.org/en/
3. Open Git Bash or any Command Line tool and type in "NPM INSTALL". 
4. Install MONGO DB and run the MONGO DB service on your machine.

Note: The config "SERVER.JS" file handles the connections in the Heroku environment. The project preview uses the MONGODB_URI config variable to connect to the author's Mongo DB cluster.

## Usage: 

This is the app landing page:

![Landing Page](client/public/assets/img/landing-page.png)

To search for a book, enter the book's title and click on the Search Book button.

A list of results will be displayed. To save a book, click on the book's Save Book button.

![Search Page](client/public/assets/img/search-page.png)

To view the list of saved books, click on the Saved link in the navigation bar.

To delete a saved book, click on the book's Delete Book button.

![Saved Books](client/public/assets/img/saved-books-page.png)


## Contributing: 
Everyone is welcome to contribute to this project. Please email me at ong.osmond@yahoo.com or fork the project from GitHub to your own repository.

## Tests: 
No tests have been implemented yet.
 
## Questions: 
Please visit my [GitHub Page](https://github.com/ong-osmond/) or email me your questions at ong.osmond@yahoo.com. 
I am available 8am-4pm Monday-Friday (Australian Western Standard Time). 

## License: 
MIT License

Copyright (c) 2020 Osmond Ong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
