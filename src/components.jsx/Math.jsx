import React, { Component } from "react";
class Math extends Component {
    constructor() {
        super();
        this.state = {
            flag: false
        }
        this.ClickMe = this.ClickMe.bind(this)
    }
    ClickMe = () => {
        this.setState({ flag: !this.state.flag })
    }
    render() {
        return (<>
            {this.state.flag ?
                (<div>
                    <p>met qua di thoi</p>
                    <button onClick={this.ClickMe}>Click</button>

                </div>)

                :

                (<div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores facilis eveniet, deserunt sapiente beatae eius voluptatem dignissimos.
                        Modi consectetur ullam et voluptates, iste, dicta eum molestiae quod quidem ab est.
                    </p>
                    <button onClick={this.ClickMe}>Click</button>
                </div>)}

        </>);
    }
}

export default Math;