import { useEffect, useState } from "react";
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home(){
    // useState를 이용해서 상태관리 할 수 있음
    // api 가져오기 전에 loading 표시할거야
    const [loading, setLoading] = useState(true);
    // api로 가져온 movies 정보 관리할거야
    const [movies, setMovies] = useState([]);
    // 영화 가져올 건데 async, await 이용해서
    const getMovies = async () =>{
        // 중첩 await 사용해서 차례차례 진행되도록
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_taring=8.5&&sort_by=year`
            )
        ).json();
        // 가져온 데이터를 movies에다가 저장하기
        setMovies(json.data.movies);
        // loading 값 바꿔주는 것도 잊지 말자:)
        setLoading(false);
    }
    // 영화는 '한 번만' 가져올거니까 useEffect에다가 dependencies로 빈 배열을 넣어줍시다!
    // return을 이용하면 'cleanup' 함수를 이용할 수도 있음
    useEffect(()=>{
        getMovies();
    }, []);

    return (
        <div class={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie)=>(
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movies.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>  
            )}
        </div>
    );
}

export default Home;