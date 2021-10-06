import React, { FC } from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { changeFilterOptions } from '../../redux/actions'
import { FILTER_CATEGORIES } from '../../const/filter-categories'

const Filter: FC = () => {

    const dispatch = useDispatch()
    const category = useSelector( (state: RootStateOrAny) => state.filter.category)

    return (
        <div className='filter'>
            <div className='filter_content'>
                <div className='category'>
                    <select
                    className='category_select'
                    value={category}
                    onChange={(e) => dispatch(changeFilterOptions('category', e.target.value))}
                    >
                        {
                            Object.keys(FILTER_CATEGORIES).map( (category: any) => {
                                return <option className='category_option' key={category} value={category} >{category}</option>
                            } )
                        }
                    </select>
                </div>
            </div>
        </div>
    )
} 

export default Filter