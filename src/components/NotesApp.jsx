var React = require('react');
var NoteEditor = require('./NoteEditor.jsx');
var NotesGrid = require('./NotesGrid.jsx');
var NoteSearch = require('./NoteSearch.jsx');
require('./NotesApp.css');

var NotesApp = React.createClass({
    getInitialState: function () {
        return {
            notes: [],
            filterdNotes: []
        };
    },


    componentDidMount: function () {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({notes: localNotes});
        }
        console.log(this.state.filterdNotes)
        this.state.filterdNotes = localNotes.slice();
    },

    componentDidUpdate: function () {
        this._updateLocalStorage();
    },
    handleNoteDelete: function (note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function (note) {
            return note.id !== noteId;
        });
        this.state.filterdNotes = newNotes.slice();
        this.setState({notes: newNotes});
    },
    handleSearch: function (e) {
        this.state.filterdNotes = this.state.notes.slice();

        var val = e.target.value.toLowerCase();
        var dataItems = this.state.filterdNotes.filter(function (note) {
            var searchV = note.text;
            return searchV.indexOf(val) !== -1;
        });
        if (dataItems < this.state.notes && dataItems !== []) {
            this.setState({filterdNotes: dataItems})
        } else{
            this.setState({filterdNotes: this.state.notes})
        }
    },
    handleNoteAdd: function (newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.state.filterdNotes = newNotes.slice();
        this.setState({notes: newNotes});
    },
    updateData(config) {
        this.setState(config);
        console.log(config)
    },
    render: function () {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                {/*<NoteSearch notes={this.state.notes}/>*/}
                <NoteSearch onSearch={this.handleSearch}/>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.filterdNotes}
                           onNoteDelete={this.handleNoteDelete}/>

            </div>
        );

    },

    _updateLocalStorage: function () {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

module.exports = NotesApp;