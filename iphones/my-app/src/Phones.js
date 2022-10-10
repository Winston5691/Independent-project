import React from 'react';

const Phones = ({ items }) => {
    return (

        <div className='section-center'>
            {items.map((phoneItem) => {
                const { id, title, img, desc, price } = phoneItem;
                return (
                    <article key={id} className='phone-item'>
                        <img src={img} alt={title} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>KSh{price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Phones;