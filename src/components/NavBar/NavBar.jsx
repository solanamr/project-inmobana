import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllInfo, distanceSort, priceSort, reviewSort, ratingScore } from '../../redux/actions/index'
import SearchBar from "../SearchBar/SearchBar";
import style from './style.module.css'

export default function NavBar({setCurrentPage, setOrden}){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllInfo())
    },[dispatch])

    function handleDistance(e){
        dispatch(distanceSort(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    // console.log(handleDistance)

    function handlePrice(e){
        dispatch(priceSort(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleReview(e){
        dispatch(reviewSort(e.target.value))
        console.log(e.target.value, 'review')
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleRating(e){
        dispatch(ratingScore(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }


    return(
        <div>
            <div>
                <div className={style.container}>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    <p className={style.p}>H</p>
                    </Link>
                    <div className={style.distance}>
                        <select onChange={(e) => handleDistance(e)}>
                            <option value="">Distance from downtown</option>
                            <option value="closer">Closer</option>
                            <option value="futher">Futher away</option>
                        </select>
                    </div>

                    <div className={style.price}>
                        <select onChange={(e) => handlePrice(e)}>
                            <option value="">Average price per night</option>
                            <option value="expensive">Expensive</option>
                            <option value="cheaper">Cheaper</option>
                        </select>
                    </div>

                    <div className={style.review}>
                        <select onChange={(e) => handleReview(e)}>
                            <option value="">Review score</option>
                            <option value="highest">Highest</option>
                            <option value="lowest">Lowest</option>
                        </select>
                    </div>
                    
                    <div className={style.rating}>
                        <select onChange={(e) => handleRating(e)}>
                            <option value="">Ratings</option>
                            <option value="high">Highest</option>
                            <option value="low">Lowest</option>
                        </select>
                    </div>

                    <SearchBar setCurrentPage={setCurrentPage}/>
                </div>
            </div>
        </div>
    )
}