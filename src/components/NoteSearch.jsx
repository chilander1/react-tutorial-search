var React = require('react');

var NoteSearch = React.createClass({

    render: function (i, props) {
        return (
            <div className="search-block">
                <input type="text" placeholder="Search..." onChange={this.props.onSearch}/>
            </div>
        )
    }
});

module.exports = NoteSearch;