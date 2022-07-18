import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/Componts/Layout/popper';
import AccountsItem from '@/Componts/Layout/Components/AccountsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Search.module.scss'
import { SearchIcon } from '@/Componts/icons';
import { useDebounce } from '@/hooks';
import * as searchService from '@/apiServices/searchServices';

const cx = classNames.bind(style)

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [showLoading, setShowLoading] = useState(false)

    const debounce = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debounce) {
            setSearchResult([])
            return;
        }

        const fetchApi = async () => {
            setShowLoading(true)
            const result = await searchService.search(debounce)
            setSearchResult(result)
            setShowLoading(false)
        }
        fetchApi()

    }, [debounce])

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }

    const handleHideSearch = () => {
        setShowResult(false)
    }

    const handleSearchValue = e => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' '))
            setSearchValue(searchValue)
    }

    return (
        //  Using a wrapper <div> tag around the reference element solves
        //  this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map((result) => (
                                <AccountsItem key={result.id} data={result} />
                            ))}

                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideSearch}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={handleSearchValue}
                        onClick={() => setShowResult(true)}
                    />
                    {searchValue && !showLoading && (
                        <button className={cx('clear')}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()} >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;