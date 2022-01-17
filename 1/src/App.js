const Pet = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h2", {}, props.name),
            React.createElement("h3", {}, props.animal),
            React.createElement("h3", {}, props.breed),
        ])
}



const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Luna", animal: "dog", breed: "Havanese"}),
            React.createElement(Pet, { name: "Pepito", animal: "Hamster", breed: "Asesino"}),
            React.createElement(Pet, { name: "Amalia", animal: "Cacatua", breed: "Parlante"}),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));