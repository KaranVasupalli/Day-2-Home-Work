// const p = React.createElement("p", {class:'para'}, "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.")

// const a3 = React.createElement("a" , {href : "https://react.dev/" ,class : "link"} ," CSS-Styling the web",p )

// // const li = React.createElement("li",null,  a3)

// const h1 = React.createElement("h1" , {
// class : "h1"} ,"React js", a3)


// ReactDOM.render(h1 , document.getElementById("root"));

const MyComponent = () => {
    return (
        
        React.createElement('div', {class:"div1"}, 
            React.createElement("h1" , null, "React"),
            React.createElement('p', null, 
                "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."
            ),
            React.createElement('p', null,
                'To begin, check out the official ReactJS documentation for a comprehensive ' +
                'guide on how to get started. You can find it ',
                React.createElement('a', { href: 'https://react.dev/', target: '_blank' }, 'here'),
                '. Happy coding!'
            ),
            React.createElement("h2",null,' Structuring the Web" section'),
            React.createElement("p",null," This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete."
            ),
            React.createElement("h2",null,' CSS - Styling the Web'),
            React.createElement('p', null, 
                'In the CSS - Styling the Web section, we will delve into the world of Cascading  Style Sheets (CSS). CSS is used to style the visual presentation of web pages written in HTML and XHTML.'
            ),
            React.createElement('p', null,
                'To master CSS and create stunning designs, refer to the W3Schools CSS tutorial. ' +
                'You can start learning CSS by visiting the tutorial ',
                React.createElement('a', { href: 'https://www.w3schools.com/css/', target: '_blank' }, 'here'),
                '.'
            )
        )
    );
}

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById('root')
);
