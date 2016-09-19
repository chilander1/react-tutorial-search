var React = require('react');
require('./NoteColor.css');

var NoteColor = React.createClass({
    getInitialState: function (val) {
        console.log(val)
        return {
            selectedOption: '#FF8A80'
        };
    },
    handleOptionChange: function (changeEvent, val) {
        var newState = changeEvent.target.value;
        this.setState({
            selectedOption: newState,
        });
        this.props.callbackParent(newState);
    },
    render: function (i, props) {
        var divStyle = {color: this.value};
        return (
            <div className="colorB">
                <div>
                    <input type="radio" value="#FF8A80" id="purple-color"
                           checked={this.state.selectedOption === '#FF8A80'} onChange={this.handleOptionChange}/>
                    <label htmlFor="purple-color"><span></span></label>
                </div>
                <div>
                    <input type="radio" value="#FFD180" id="orange-color" style={divStyle}
                           checked={this.state.selectedOption === '#FFD180'} onChange={this.handleOptionChange}/>
                    <label htmlFor="orange-color"><span></span></label>
                </div>
                <div>
                    <input type="radio" value="#FFFF8D" id="yellow-color"
                           checked={this.state.selectedOption === '#FFFF8D'} onChange={this.handleOptionChange}/>
                    <label htmlFor="yellow-color"><span></span></label>
                </div>
                <div>
                    <input type="radio" value="#CFD8DC" id="grey-color"
                           checked={this.state.selectedOption === '#CFD8DC'} onChange={this.handleOptionChange}/>
                    <label htmlFor="grey-color"><span></span></label>
                </div>
                <div>
                    <input type="radio" value="#80D8FF" id="blue-color"
                           checked={this.state.selectedOption === '#80D8FF'} onChange={this.handleOptionChange}/>
                    <label htmlFor="blue-color"><span></span></label>
                </div>
                <div>
                    <input type="radio" value="#A7FFEB" id="light-blue-color"
                           checked={this.state.selectedOption === '#A7FFEB'} onChange={this.handleOptionChange}/>
                    <label htmlFor="light-blue-color"><span></span></label>
                </div>
                <div>
                    <input type="radio" value="#CCFF90" id="green-color"
                           checked={this.state.selectedOption === '#CCFF90'} onChange={this.handleOptionChange}/>
                    <label htmlFor="green-color"><span></span></label>
                </div>
            </div>
        )
    }
});

module.exports = NoteColor;