import { useSelector } from "react-redux";

const Selectors = () => {
    const { data } = useSelector( state => state.videos )
    const { loading } = useSelector( state => state.videos )
    return { data, loading };
}

export default Selectors
