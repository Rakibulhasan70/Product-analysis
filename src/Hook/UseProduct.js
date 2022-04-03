const { useState, useEffect } = require("react");

const UseProduct = () => {
    const [laptop, setLaptop] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setLaptop(data))
    }, [])
    return [laptop, setLaptop]
}
export default UseProduct