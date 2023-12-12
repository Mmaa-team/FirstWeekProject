const { useContext } = require("react");

export const MyContext = useContext()
export const ContextProvider = ({ children }) => {
    return (
        <MyContext.Provider value={{}}>
            {children}
        </MyContext.Provider>
    )
}