import cartContext from "./cart-context";

const cartProvider = (props) => {
    return <cartContext.Provider>
        {props.children}
    </cartContext.Provider>
}

export default cartProvider;