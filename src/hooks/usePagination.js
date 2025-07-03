import {useMemo, useState, useEffect} from "react";
import {normalize} from "../lib/helpers.js";

export default function usePagination(data){
    // Necessary elements for pagination
    const [currentData, setCurrentData] = useState([]);
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);

    useEffect(() => {
        setCurrentData(data);
    }, [data]);

    const filterData = useMemo(() => {
        const startIndex = (page - 1) * perPage;
        const endIndex = page * perPage;
        const query = normalize(search);

        return currentData.filter(currentItem => {

            const fields = [];
            Object.keys(currentItem).filter(key => key !== 'id').map(field => fields.push(currentItem[field]));
            return fields.some(field => field.includes(query));
        }).slice(startIndex, endIndex);
    }, [search, currentData, page, perPage]);

    useEffect(() => {
        setPages(Math.ceil(currentData.length / perPage));
    }, [currentData, perPage]);

    const handleIncreasePage = () => {
        if (page >= pages || search.length) return
        setPage(page + 1);
    }
    const handleDecreasePage = () => {
        if (page <= 1 || search.length) return
        setPage(page - 1);
    }

    const updateData = (newData) => setCurrentData(newData);

    return {
        filterData,
        search,
        setSearch,
        perPage,
        setPerPage,
        page,
        pages,
        setPages,
        handleDecreasePage,
        handleIncreasePage,
        updateData,
    }
}