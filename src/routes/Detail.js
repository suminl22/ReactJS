import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async ()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>) :
                {movie}
            }
        </div>
    );
}

export default Detail;

// Challenge 과제
// 1. loading   2. setState 사용해서 data 관리하기   3. 예쁘게 보여주기(css?!)
