var React = require('react');

var DropZone = React.createClass({
    propTypes: {
        handleDrop: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            borderWidth: 1
        }
    },
    handleDragEnter: function(e) {
        this.setState({ borderWidth: 2 });
    },
    handleDragLeave: function(e) {
        this.setState({ borderWidth: 1 });
    },
    handleDragOver: function(e) {
        if (e.preventDefault) {
            e.preventDefault(); // allows us to drop
        }
        e.dataTransfer.dropEffect = 'copy';
    },
    render: function() {
        var style = {
            width: "100%",
            height: "80",
            border: this.state.borderWidth + "px dashed black"
        };
        return <div style={style}
            onDragOver={this.handleDragOver}
            onDragEnter={this.handleDragEnter}
            onDragLeave={this.handleDragLeave}
            onDrop={this.props.handleDrop}></div>
    }
});

module.exports = DropZone;
