import React, {FC, memo} from 'react';

import portfolios from './All-Portfolios';

type PropsType = {
    filter: (category: string) => void;
    categories: string[];
};

const Categories: FC<PropsType> = memo(({filter, categories}) => (
    <div className="buttons">
        {categories.map((cat, i) => (
            <button
                type="button"
                className="btn-port"
                onClick={() => filter(cat)}
                key={portfolios[i].id}
            >
                {cat}
            </button>
        ))}
    </div>
));

export default Categories;
