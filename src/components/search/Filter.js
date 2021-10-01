import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeFilterOptions} from '../../redux/actions'


const Filter = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.filter.category)
    return (
        <div className='filter'>
            <div className='filter_content'>
                <div className='category'>
                    <select
                    className='category_select'
                    value={category}
                    onChange={(e) => dispatch(changeFilterOptions('category', e.target.value))}
                    >
                        <option value='rockets' className='category_option'>Rockets</option>
                        <option value='ships' className='category_option'>Ships</option>
                    </select>
                </div>
                <div className='search'></div>
            </div>
        </div>
    )
} 

export default Filter