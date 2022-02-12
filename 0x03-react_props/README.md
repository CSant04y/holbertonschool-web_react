# 0x03. React props
#React #javascript
# Resources:
*  [React Official Website](https://intranet.hbtn.io/rltoken/lCQJJpZHpMpUeaikvfWkvQ) 
*  [Getting started with React](https://intranet.hbtn.io/rltoken/69ncr-lF1LqrQUXw6moDOg) 
*  [React overview](https://intranet.hbtn.io/rltoken/QrEoMO7vBdIfoSJsHxKiOQ) 
*  [React Developer Tools](https://intranet.hbtn.io/rltoken/7JV6Gfgjzq6qipmijtzhGA) 
*  [Enzyme](https://intranet.hbtn.io/rltoken/uLWnKyEPgaep3g7a8DQR9A) 
*  [React Fragments](https://intranet.hbtn.io/rltoken/DY26UdLXFqKGA08pZsGH9w) 
*  [Typechecking with PropTypes](https://intranet.hbtn.io/rltoken/iXcePrNqTBUighf5ZUfM6A) 


## Learning Objectives
### How to create basic React components using functions
* Simple components or functions can use the ES6 arrow function to create a component that is not  part of a class.
```
src/Table.js

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

```
* The example above is a arrow function that is a component that uses the JSX syntax.
### How to pass properties to components
To pass properties to components you have using the data- attributes.
```
src/App.js
class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
	return (
  <div className="container">
    <Table characterData={characters} />
  </div>
)
  }
}

```

```
src/Table.js
class Table extends Component {
  render() {
    const {characterData} = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}

```
### How to define types for components
To define types you can simply use the different validators that will show up on the console.
```
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

```

### How to use Fragments
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

```


# ## About me

### **Carlos Esquivel**
Carlos Esquivel is originally from Tulsa. After taking a gap year and working in sales, he decided to make a switch into the technology industry to obtain skills in software engineering. As the pandemic hit, Holberton school provided an opportunity to learn and grow in a remote working environment.

As a software engineering student, Carlos enjoys the creative aspects of problem solving such as how collaboration can foster the transfer of knowledge.

* 📖 [Medium](https://1831-9922.medium.com/)
* :bird:[Twitter](https://twitter.com/esquivelcarlo12)

* :robot: [GitHub](https://github.com/CSant04y)

* :briefcase: [LinkedIn](https://www.linkedin.com/in/carlos-esquivel-515768186/)

