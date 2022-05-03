import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TelevisionDisplayCast from '../televisionDisplayCast/TelevisionDisplayCast';
import TelevisionDisplayCrew from '../televisionDisplayCrew/TelevisionDisplayCrew';
import TelevisionDisplayHeader from '../televisionDisplayHeader/TelevisionDisplayHeader';
import TelevisionDisplayInfo from '../televisionDisplayInfo/TelevisionDisplayInfo';
import TelevisionDisplayRecommendation from '../televisionDisplayRecommendation/TelevisionDisplayRecommendation';
import './TelevisionDisplayContainer.scss';

function TelevisionDisplayContainer() {
    const [tvShow, setTvShow] = useState({});
    const [tvCredits, setTvCredits] = useState([]);
    const [tvRecommend, setTvRecommend] = useState([]);

    const apiKey = '4a571a843827a09096250c11596c470d';
    const {id} = useParams()
    
    //TV SHOW
    useEffect(() => {
        fetch(`/single-tv/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((tvShow) => { setTvShow(tvShow);
        });
    }, [id]);
    //TV SHOW CREDITS
    useEffect(() => {
        fetch(`/tv-credits/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((tvCredits) => { setTvCredits(tvCredits);
        });
    }, [id]);
    //TV SHOW RECOMMENDATIONS
    useEffect(() => {
        fetch(`/tv-recommendations/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((tvRecommend) => { setTvRecommend(tvRecommend);
        });
    }, [id]);

    
    return(
        <div className='tv-display-container'>
            {tvShow.id && <TelevisionDisplayHeader tvShow={tvShow} />}
            {tvCredits.cast && <TelevisionDisplayCast cast={tvCredits.cast} />}
            {tvShow.id && <TelevisionDisplayInfo tvShow={tvShow} />}
            {tvCredits.crew && <TelevisionDisplayCrew crew={tvCredits.crew} />}
            {tvRecommend.results && <TelevisionDisplayRecommendation shows={tvRecommend.results} />}
        </div>
    );
}

export default TelevisionDisplayContainer;