# History Board Frontend

This is the repository for the history board frontend Angular application.

## Getting set up
To get a local copy of this repository you will need to run the following:
```bash
$ git clone http://gitlab.scss.tcd.ie/group-project-2015/history-board_front-end.git
```
You'll need to have a local web server running to use the application. This can be easily done if you have Python installed by navigating to the frontend project folder and running
```bash
$ python -m SimpleHTTPServer
```
You will also need to have a development copy of the backend running to interact with on port 3000 which is the default
```bash
$ cd history-board_backend
$ bundle exec rails server
```

You can then go http://localhost:8000 to see the frontend application.

## Structure
All declarations of CSS and JavaScript should go in the `index.html` file. HTML templates go in the `partials` directory.

JavaScript files go in the `js` directory and any third-party JavaScript libraries should go in the `js/vendor` directory.

CSS files go in the `css` directory and any third-party CSS (Bootstrap, Foundation etc.) should go in the `css/vendor` directory.
