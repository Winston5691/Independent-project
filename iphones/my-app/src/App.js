import React, { useEffect, useState } from 'react';
import Phones from './Phones';
import Categories from './Categories'


function App() {

    const [phoneItems, setPhoneItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("all")

    useEffect(() => {
        fetch("http://localhost:8001/items")
            .then((resp) => resp.json())
            .then((data) => {
                setPhoneItems(data);
                setCategories(['all', ...new Set(data.map((item) => item.category))])
            });
    }, [])


    const filterItems = (category) => {
        setCurrentCategory(category)
    };
    const filteredItems = currentCategory === 'all' ? [...phoneItems] : phoneItems.filter((item) => item.category === currentCategory);

    return (
        <main>
            <section className="phone section">
                <div className="title">
                    <h2>Available products</h2>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Phones items={filteredItems} />
            </section>
        </main>
    );
}

export default App;