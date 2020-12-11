import React, { Component } from 'react';
import Aux from '../../hoc/Auxx/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as burgerBuilderActions from '../../store/actions/index';
import { connect } from 'react-redux';
import axios from '../../axios-orders';



class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }
    componentDidMount() {
        console.log(this.props)
        console.log("hua")
        this.props.onInitIngredients ();
    }
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0
    }

    purchaseHander = () => {
        this.setState({ purchasing: true });
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinue = () => {
        this.props.history.push('/checkout');

    }

    render() {

        const disableInfo = {
            ...this.props.ing
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSummary
        let burger = this.props.error ? <h3 style={{ textAlign: 'center' }}>Ingredients can't be loaded</h3> : <Spinner />
        if (this.props.ing) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ing} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disable={disableInfo}
                        purchasable={this.updatePurchaseState(this.props.ing)}
                        ordered={this.purchaseHander}
                        price={this.props.price}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ing}
                price={this.props.price}
                purchaseContinue={this.purchaseContinue}
                purchaseCancel={this.purchaseCancelHandler} />;
        }
        return (
            <Aux>
                <div>
                    <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler} >
                        {orderSummary}
                    </Modal>
                    {burger}
                </div>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        ing: state.ingredients,
        price: state.totalPrice,
        error: state.error 
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: ()=>dispatch(burgerBuilderActions.initIngredients())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));