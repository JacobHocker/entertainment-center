import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeDisplayCast from '../episodeDisplayCast/EpisodeDisplayCast';
import EpisodeDisplayCrew from '../episodeDisplayCrew/EpisodeDisplayCrew';
import EpisodeDisplayHeader from '../episodeDisplayHeader/EpisodeDisplayHeader';
import EpisodeDisplayImages from '../episodeDisplayImages/EpisodeDisplayImages';
import './EpisodeDisplayContainer.scss';

function EpisodeDisplayContainer() {
    const [episodeCredits, setEpisodeCredits] = useState([]);
    const [episode, setEpisode] = useState({});
    const [episodeImages, setEpisodeImages] = useState([]);

    const apiKey = '4a571a843827a09096250c11596c470d';
    const { tvId, seasonNumber,episodeNumber } = useParams();

    //EPISODE
    useEffect(() => {
        fetch(`/tv-episode/${tvId}/${seasonNumber}/${episodeNumber}/${apiKey}`)
        .then((r) => r.json())
        .then((episode) => { setEpisode(episode);
        });
    }, [tvId, seasonNumber, episodeNumber]);
    //EPISODE CREDITS
    useEffect(() => {
        fetch(`/tv-episode-credits/${tvId}/${seasonNumber}/${episodeNumber}/${apiKey}`)
        .then((r) => r.json())
        .then((episodeCredits) => { setEpisodeCredits(episodeCredits);
        });
    }, [tvId, seasonNumber, episodeNumber]);
    //EPISODE IMAGES
    useEffect(() => {
        fetch(`/tv-episode-images/${tvId}/${seasonNumber}/${episodeNumber}/${apiKey}`)
        .then((r) => r.json())
        .then((episodeImages) => { setEpisodeImages(episodeImages);
        });
    }, [tvId, seasonNumber, episodeNumber]);

    
    return(
        <div className='episode-display-container'>
            {episode.id && <EpisodeDisplayHeader episode={episode} />}
            {episodeCredits.cast && <EpisodeDisplayCast cast={episodeCredits.cast} guestStars={episodeCredits.guest_stars} />}
            {episodeImages.stills && <EpisodeDisplayImages images={episodeImages.stills} />}
            {episodeCredits.crew && <EpisodeDisplayCrew crew={episodeCredits.crew} />}
            
        </div>
    );
}

export default EpisodeDisplayContainer;