import {useState} from "react";

const AnimalFilter = ({filterState}) => {
    const [filterVal, setFilterVal] = useState("");

    return (
        <input
            type="text"
            value={filterVal}
            onChange={(e) => setFilterVal(e.target.value)}
        />
    );
};

export default AnimalFilter;
