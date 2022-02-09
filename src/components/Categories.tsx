import React, {FC, memo} from 'react';

import portfolios from './All-Portfolios';

type PropsType = {
    filter: (category: string) => void;
    categories: string[];
};

const Categories: FC<PropsType> = memo(({filter, categories}) => (
    <div className="buttons">
        {categories.map((c, i) => (
            <button
                type="button"
                className="btn-port"
                onClick={() => filter(c)}
                key={portfolios[i].id}
            >
                {c}
            </button>
        ))}
    </div>
));

export default Categories;
