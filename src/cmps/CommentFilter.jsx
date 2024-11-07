import { useState, useEffect } from 'react'

export function CommentFilter({ filterBy, onFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })



    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])


    function handleChange(ev) {
        const { name, value } = ev.target;
        setFilterByToEdit(prev => ({ ...prev, [name]: value }));
    }

    return <section className="comment-filter">
        <input
            type="text"
            name="message"
            value={filterByToEdit.message}
            placeholder="Filter"
            onChange={handleChange}
            required
        />
    </section>
}