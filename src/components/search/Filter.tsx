import React, { ChangeEvent, FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { changeFilterOptions } from '../../redux/actions'
import { FILTER_CATEGORIES } from '../../const/filter-categories'
import { EFilterCategoriesAll } from '../../types/types'

const Filter: FC = () => {

    const dispatch = useDispatch()
    const category = useTypedSelector(state => state.filter.category)

    const categorySelectHandler = useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
        if (e.target.value === 'rockets' ) {
            dispatch(changeFilterOptions('category', EFilterCategoriesAll.rockets))
            return
        }
        if (e.target.value === 'ships' ) {
            dispatch(changeFilterOptions('category', EFilterCategoriesAll.ships))
            return
        }
        return
    }, [dispatch])

    return (
        <div className='filter'>
            <div className='filter_content'>
                <div className='category'>
                    <select
                    className='category_select'
                    value={category}
                    onChange={categorySelectHandler}
                    >
                        {
                            Object.keys(FILTER_CATEGORIES).map( (category: EFilterCategoriesAll) => {
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