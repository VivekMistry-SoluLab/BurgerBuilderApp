import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
// import Burger from '../Burger'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><em>Current Price:</em>  <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
            
    </div>
);
// class BuildControls extends Component  {
//     state= {
//         visible:false
//     }

//     render(){
//         return(
//             <div className={classes.BuildControls}>
//         <p><em>Current Price:</em>  <strong>$ {this.props.price.toFixed(2)}</strong></p>
//         {controls.map(ctrl => (
//             <BuildControl 
//                 key={ctrl.label} 
//                 label={ctrl.label}
//                 added={() => this.props.ingredientAdded(ctrl.type)}
//                 removed={() => this.props.ingredientRemoved(ctrl.type)}
//                 disabled={this.props.disabled[ctrl.type]} />
//         ))}
//         <button 
//             className={classes.OrderButton}
//             disabled={!this.props.purchasable}
//             onClick={this.props.ordered}>ORDER NOW</button>
            
//             <button onClick={() => {
//                 this.setState({visible:<Burger/>})
//             }}>show</button>
//     </div>
//         )
//     }
// }
    

export default BuildControls;