const parent = React.createElement(
    "div", {
        id: "parent1"
    }, 
    React.createElement(
        "div", {
            id: "child1"
        },            
        [
            [
                React.createElement(
                    "h1", {
                        id: "grandchild11"
                    },
                    "Hello from grandchild11"
                ),
                React.createElement(
                    "h2", {
                        id: "grandchild12"
                    },
                    "Hello from grandchild12"
                )
            ],
            [
                React.createElement(
                    "h1", {
                        id: "grandchild21"
                    },
                    "Hello from grandchild21"
                ),
                React.createElement(
                    "h2", {
                        id: "grandchild22"
                    },
                    "Hello from grandchild22"
                )
            ]
        ]
    )
);

const heading = React.createElement(
    "h1", {
        id: "heading"
    }, 
    "Hello world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent)