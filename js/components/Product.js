var React = require('react');

var Product = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
        handleDragStart: React.PropTypes.func.isRequired
    },
    render: function() {
        var item = this.props.item;
        return (
            <li className='product'
                data-item={item.id}
                draggable="true"
                onDragStart={this.props.handleDragStart}>
                <p>{item.title}</p>
                <span>$ {item.price} </span>
            </li>
        )
    }
});

module.exports = Product;
