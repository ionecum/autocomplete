# The autocomplete fullstack solution

This project features a complete autocomplete list. It has a good keyboard support and it supports unicode accents. Even if the style and the graphics is quite basic, it't fully functional and it can be adapted to your environment and style. 

It is not using a database because its goal is to be ready to run as soon as downloaded, without having to use databases or database accounts. It simply uses as an example a csv file with all the municipalities of the state of Mina Gerais in Brazil, the monster state with the largest number of municipalities.The user has to choose between 853 different names and it is evident that a scrolling list would not be ideal for that. It shows that it does not distinguish between accented characters, i.e., for example o, ó, ò, ô, ö or even õ are treated in the same way. It works for most European languages. Sure, even if it doesn't use a database it takes a minimal configuration to adapt it to a project using a real database.

The project is public and open to contributions to further improve it.

You can see a complete demonstration of its operation [in this page](https://www.meetero.com/autocomplete-demo/)

### Usage
First of all clone the project in your local computer.

The virtual environment files for python are not included here, when you create a new virtual environment, you should run
`pip install -r requirements.txt`

Similarly, node modules to run Vue are not included. You should navigate into vue-autocomplete-component-example folder and run `npm install`, after having created a new Vue project. 

These are only quick indication. The project assumes that you know how to create a Vue and a Django project.

The entire project, especially the Vue part are commented deeply because the file have an educational purpose. To see the available commands in Vue, navigate through the vue-autocomplete-component-example directory and run

`npm run`

This will show all the available options to run a development server or to build the JavaScript files inside the static folder of Django template. The project was configured in a way it will run either in development mode and in production, without changing any configuration. See vue.config.js to learn how it is configured. 

The `axios.get('http://127.0.0.1:8000/api/process-csv/')` in App.vue is made to run the project locally, this will consume the data from the Django server.

## To Do
1. **What if the user type a name that does not exist in the list?** This was not implemented because the behaviour may be wanted or unwanted depending of your form requirements. In some forms it's required to pick only one of the names form the list, in other it is not. In order to keep this widget as more general as possible, if you need to enforce the requirement of only picking a name from the list, you must implement it yourself.

