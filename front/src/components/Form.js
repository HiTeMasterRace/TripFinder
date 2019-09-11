import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        switch (this.props.criteria) {
            case "budget":
                return (
                    <form>

                    </form>
                );
            case "continent":
                return (
                    <form>

                    </form>
                );
            case "temperature":
                return (
                    <form>

                    </form>
                );
            case "type":
                return (
                    <form>

                    </form>
                );
            default: return null
        }
    }
}

export default Form;