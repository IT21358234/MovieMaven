import React, {useState} from 'react'
import ReactModal from 'react-modal'
import ProfileWarningToast from '../toast-msg/ProfileWarningToast'

export default function AddMovie() {
    const[isPosterPreviewOpen, setIsPosterPreviewOpen] = useState(false)
    const[isTrailerPreviewOpen, setIsTrailerPreviewOpen] = useState(false)
    const[isAddingDownloadLinksOpen, setIsAddingDownloadLinksOpen] = useState(false)
    const[isDownloadLinksOpen, setIsDownloadLinksOpen] = useState(false)
    const[isAddingInternationalRatingsOpen, setIsAddingInternationalRatingsOpen] = useState(false)
    const[isInternationalRatingsOpen, setIsInternationalRatingsOpen] = useState(false)

    const[movieTitle, setMovieTitle] = useState('')
    const[releasedDate, setReleasedDate] = useState('')
    const[releasedYearMonth, setReleasedYearMonth] = useState('')
    const[releasedYear, setReleasedYear] = useState('')
    const[description, setDescription] = useState('')
    const[inputGenre, setInputGenre] = useState('')
    const[inputTags, setInputTags] = useState('')
    const[inputLeadingRoles, setInputLeadingRoles] = useState('')
    const[inputSupportingRoles, setInputSupportingRoles] = useState('')
    const[poster, setPoster] = useState(null)
    const[posterURL, setPosterURL]= useState('')
    const[language, setLanguage] = useState('')
    const[trailerLink, setTrailerLink] = useState('')
    
    const[downloadLink, setDownloadLink] = useState('')
    const[downloadLinks, setDownloadLinks] = useState([])
    const[size, setSize] = useState('')
    const[sizes, setSizes] = useState([])
    const[videoQuality, setVideoQuality] = useState('Select Video Quality')
    const[inputVideoQuality, setInputVideoQuality] = useState('')
    const[videoQualities, setVideoQualities] = useState([])
    const[resolution, setResolution] = useState('')
    const[resolutions, setResolutions] = useState([])
    const[audio, setAudio] = useState('')
    const[audios, setAudios] = useState([])
    const[runningTime, setRunningTime] = useState('')
    const[runningTimes, setRunningTimes] = useState([])
    const[subtitleLink, setSubtitleLink] = useState('')
    const[subtitleLinks, setSubtitleLinks] = useState([])
    const[cloudStorage, setCloudStorage] = useState('Select Cloud Storage')
    const[inputCloudStorage, setInputCloudStorage] = useState('')
    const[cloudStorages, setCloudStorages] = useState([])

    const[staring, setStaring] = useState([])
    const[director, setDirector] = useState([])
    const[IMDb, setIMDb] = useState('')
    const[rottenTomatoes, setRottenTomatoes] = useState('')
    const[likes, setLikes] = useState('')

    const[genres, setGenres] = useState([])
    const[tags, setTags] = useState([])
    const[leadingRoles, setLeadingRoles] = useState([])
    const[supportingRoles, setSupportingRoles] = useState([])

    const[IMDbRatings, setIMDbRatings] = useState(null)
    const[IMDbRatesAmount, setIMDbRatesAmount] = useState(null)
    const[IMDbReferenceLink, setIMDbReferenceLink] = useState(null)
    const[TOMATOMETERRatings, setTOMATOMETERRatings] = useState(null)
    const[TOMATOMETERReviewCount, setTOMATOMETERReviewCount] = useState(null)
    const[AUDIENCERatings, setAUDIENCERatings] = useState(null)
    const[rottentomatoesReferenceLink, setRottentomatoesReferenceLink] = useState(null)

    const[inputIMDbRatings, setInputIMDbRatings] = useState(null)
    const[inputIMDbRatesAmount, setInputIMDbRatesAmount] = useState(null)
    const[inputIMDbReferenceLink, setInputIMDbReferenceLink] = useState(null)
    const[inputTOMATOMETERRatings, setInputTOMATOMETERRatings] = useState(null)
    const[inputTOMATOMETERReviewCount, setInputTOMATOMETERReviewCount] = useState(null)
    const[inputAUDIENCERatings, setInputAUDIENCERatings] = useState(null)
    const[inputrottentomatoesReferenceLink, setInputRottentomatoesReferenceLink] = useState(null)

    const[movieDB, setMovieDB] = useState('')
    const[inputMovieDB, setInputMovieDB] = useState('')

    const genreList = ["Comedy",'Drama','Thriller','Action', 'Horror', 'Romance', 'Crime', 'Adventure', 'History', 'Fantasy', 'Documentary', 'Animated', 'Mystery', 'Biographical']
    const videoQualityList = ['720P.BluRay', '1080P.BluRay', '2160P.BluRay', '720P.WebRip', '1080P.WebRip', '720P.HDRip', '1080P.HDRip', '720P.HDRip', '540P.HDRip']
    const cloudStorageList = ['Mega', 'Google Drive', 'OneDrive', 'UpToBox', 'UserDrive', 'DropAPK', 'DropGalaxy']
    const movieDBList = ['IMDb', 'TOMATOMETER', 'AUDIENCE']

    const[isVideoQualityListDisplay, setIsVideoQualityListDisplay] = useState(false)
    const[isCloudStorageListDisplay, setIsCloudStorageListDisplay] = useState(false)
    const[isMovieDBListDisplay, setIsMovieDBListDisplay] = useState(false)

    const[warningMsg, setWarningMsg] = useState('')
    const[isWarning, setIsWarning] = useState(false)

    const handleTitleChange = (e) => {
        setMovieTitle(e.target.value)
    }

    const handleReleasedYearMonthChange = (e) => {
        setReleasedYearMonth(e.target.value)
    }

    const handleReleasedDateChange = (e) => {
        setReleasedDate(e.target.value)
    }

    const handleGenresChange = (e) => {
        setInputGenre(e.target.value)
    }

    const addGenres = () => {
        if (inputGenre.trim() !== '') {
            setGenres([...genres, inputGenre]);
            setInputGenre('');
        }
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleTagsChange = (e) => {
        setInputTags(e.target.value)
    }

    const addTags = () => {
        if (inputTags.trim() !== '') {
            setTags([...tags, inputTags]);
            setInputTags('');
        }
    }

    const handleLeadingRolesChange = (e) => {
        setInputLeadingRoles(e.target.value)
    }

    const addLeadingRoles = () => {
        if (inputLeadingRoles.trim() !== '') {
            setLeadingRoles([...leadingRoles, inputLeadingRoles]);
            setInputLeadingRoles('');
        }
    }

    const handleSupportingRolesChange = (e) => {
        setInputSupportingRoles(e.target.value)
    }

    const addSupportingRoles = () => {
        if (inputSupportingRoles.trim() !== '') {
            setSupportingRoles([...supportingRoles, inputSupportingRoles]);
            setInputSupportingRoles('');
        }
    }

    const handlePosterChange = (e) => {
        const file = e.target.files[0]
        const fileURL = URL.createObjectURL(file);

        setPoster(file)
        setPosterURL(fileURL)
    }

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value)
    }

    const handleTrailerLinkChange = (e) => {
        setTrailerLink(e.target.value)
    }

    const handleInputFocus = (e) => {
        e.target.parentNode.classList.add('adding-active')
    }

    const handleInputBlur = (e) => {
        if (e.target.value === '') {
        e.target.parentNode.classList.remove('adding-active')
        }
    }

    const handlePopupInputFocus = (e) => {
        e.target.parentNode.classList.add('adding-popup-active')
    }

    const handlePopupInputBlur = (e) => {
        if (e.target.value === '') {
        e.target.parentNode.classList.remove('adding-popup-active')
        }
    }

    const handleDefaultInputFocus = (e) => {
        e.target.parentNode.classList.add('adding-default-active')
    }

    const handleDefaultInputBlur = (e) => {
        if (e.target.value === '') {
        e.target.parentNode.classList.remove('adding-default-active')
        }
    }


    function removeGenre(index){
      
    }

    const handleSuggestionClick = (genre) => {
        setInputGenre(genre);
    };

    const filteredGenres = genreList.filter((genre) =>
        genre.toLowerCase().includes(inputGenre.toLowerCase())
    );

    const handleVideoQualitySuggestionClick = (quality) => {
        setVideoQuality(quality)
        setIsVideoQualityListDisplay(false)

    };

    const handleInputVideoQuality = (e) => {
        setInputVideoQuality(e.target.value)
    }

    const filteredVideoQuality = videoQualityList.filter((quality) =>
        quality.toLowerCase().includes(inputVideoQuality.toLowerCase())
    );

    const handleCloudStorageSuggestionClick = (cloud) => {
        setCloudStorage(cloud)
        setIsCloudStorageListDisplay(false)

    };

    const handleInputCloudStorage = (e) => {
        setInputCloudStorage(e.target.value)
    }

    const filteredCloudStorage = cloudStorageList.filter((cloud) =>
        cloud.toLowerCase().includes(inputCloudStorage.toLowerCase())
    );

    const handleMovieDBSuggestionClick = (movieDB) => {
        setMovieDB(movieDB)
        setIsMovieDBListDisplay(false)

    };

    const handleInputMovieDB = (e) => {
        setInputMovieDB(e.target.value)
    }

    const filteredMovieDB = movieDBList.filter((movieDB) =>
        movieDB.toLowerCase().includes(inputMovieDB.toLowerCase())
    );

    const reset = () => {
        setGenres([])
        setTags([])
    }

    const addBtnClickDownloadLinks = () => {
        if (
            downloadLink.trim() !== '' && 
            cloudStorage.trim() !== '' && 
            videoQuality.trim() !== '' &&
            subtitleLink.trim() !== '' &&
            resolution.trim() !== '' &&
            runningTime.trim() !== '' &&
            size.trim() !== '' &&
            audio.trim() !== '' 
            
        ){
            setDownloadLinks([...downloadLinks, downloadLink])
            setDownloadLink('')
            setCloudStorages([...cloudStorages, cloudStorage])
            setCloudStorage('Select Cloud Storage')
            setVideoQualities([...videoQualities, videoQuality])
            setVideoQuality('Select Video Quality')
            setSubtitleLinks([...subtitleLinks, subtitleLink])
            setSubtitleLink('')
            setResolutions([...resolutions, resolution])
            setResolution('')
            setRunningTimes([...runningTimes, runningTime])
            setRunningTime('')
            setSizes([...sizes, size])
            setSize('')
            setAudios([...audios, audio])
            setAudio('')
        }
        else{
            setWarningMsg('Fill All Fields To Add Data')
            setIsWarning(true)
            setTimeout(() => {
                setIsWarning(false)
            }, 4000)
        }
    }

    const addBtnCLickIMDbRatings = () => {
        if(inputIMDbRatings && inputIMDbRatesAmount && inputIMDbReferenceLink){
            setIMDbRatings(inputIMDbRatings)
            setIMDbRatesAmount(inputIMDbRatesAmount)
            setIMDbReferenceLink(inputIMDbReferenceLink)
        }
        else{
            setWarningMsg('Fill All Fields To Add Data')
            setIsWarning(true)
            setTimeout(() => {
                setIsWarning(false)
            }, 4000)
        }
    }

    const addBtnCLickTOMATOMETER = () => {
        if(inputTOMATOMETERRatings && inputTOMATOMETERReviewCount && inputrottentomatoesReferenceLink){
            setTOMATOMETERRatings(inputTOMATOMETERRatings)
            setTOMATOMETERReviewCount(inputTOMATOMETERReviewCount)
            setRottentomatoesReferenceLink(inputrottentomatoesReferenceLink)
        }
        else{
            setWarningMsg('Fill All Fields To Add Data')
            setIsWarning(true)
            setTimeout(() => {
                setIsWarning(false)
            }, 4000)
        }
    }

    const addBtnCLickAUDIENCE = () => {
        if(TOMATOMETERRatings){
            if(inputAUDIENCERatings){
                setAUDIENCERatings(inputAUDIENCERatings)
            }
            else{
                setWarningMsg('Fill All Fields To Add Data')
                setIsWarning(true)
                setTimeout(() => {
                    setIsWarning(false)
                }, 4000)
            }
        }
        else{
            setWarningMsg('You Cannot Add AUDIENCE Ratings Without Adding TOMATOMETER Ratings')
            setIsWarning(true)
            setTimeout(() => {
                setIsWarning(false)
            }, 4000)
        }
    }

    return (
        <div>
            <div style={{marginLeft:"50px", marginRight:"50px"}}>
                <h2>Add New Movie</h2>
                <hr style={{border:"1px solid black", marginBottom:"20px"}}/>
            </div>
            
            <form>
                <div className='adding-container'>
                    <div>
                        <div className="adding-input-container" style={{marginTop:"0px"}}>
                            <input
                                className='adding-input'
                                type="text"
                                id="movieTitle"
                                name="movieTitle"
                                onChange={handleTitleChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required
                            />
                            <label className='adding-label' htmlFor="username">Movie Title</label>
                        </div>

                        <div className="adding-input-container">
                            <input
                                className='adding-input'
                                style={{width:"130px",padding:"4px 10px", paddingTop:"8px"}}
                                placeholder='year'
                                type="month"
                                id="releasedYearMonth"
                                name="releasedYearMonth"
                                onChange={handleReleasedYearMonthChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required
                            />&nbsp;
                            <input
                                className='adding-input'
                                style={{width:"42px"}}
                                type="number"
                                placeholder='Date'
                                min={1}
                                max={31}
                                id="releasedDate"
                                name="releasedDate"
                                onChange={handleReleasedDateChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required
                            />
                            <label className='adding-label adding-active' htmlFor="" style={{backgroundColor:"white"}}>Released Date</label>
                        </div>
                        <div className="adding-input-container div-input" style={{height:"36vh"}}>
                                <div className='tag-container list'>
                                {genres.map((genre, index) => (
                                    <div key={index} className="list-item">
                                        {genre}
                                        <button type='button' onClick={removeGenre(index)} className='remove-item'><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                ))}
                                {genres.length === 0 && <span style={{color:"GrayText"}}>Search & Choose Genres to Display</span>}
                                </div>
                                <div className='input-btn-container'>
                                    <input
                                        className='adding-input'
                                        style={{bottom:"0",width:"134px",borderTopRightRadius:"0",borderBottomRightRadius:"0",borderRight:"none"}}
                                        type="text"
                                        id=""
                                        name=""
                                        value={inputGenre}
                                        onChange={handleGenresChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <input type='button' className='add-btn' value='Add' onClick={addGenres}/>
                                
                                </div>
                                {inputGenre !== '' &&
                                    <div className='genre-suggestion'>
                                        {inputGenre !== '' && filteredGenres.map((genre, index) => (
                                        <div className='genre-suggestion-item' key={index} onClick={() => handleSuggestionClick(genre)}>
                                            {genre}
                                        </div>
                                        ))}
                                    </div>
                                }
                                <label className='active-label' htmlFor="username">Genres</label>
                        
                        </div>
                    </div>

                    <div>
                        <div className="adding-input-container" style={{marginTop:"0px"}}>
                            <textarea 
                                className='adding-textarea'
                                name='description'
                                id='description'
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}>
                                
                            </textarea>
                            <label className='adding-label' htmlFor="description">Description</label>
                        </div>

                        <div className="adding-input-container div-input" style={{height:"28vh"}}>
                                <div className='tag-container list'>
                                {tags.map((tag, index) => (
                                    <div key={index} className="list-item">
                                        {tag}
                                        <button type='button' onClick={removeGenre(index)} className='remove-item'><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                ))}
                                {tags.length === 0 && <span style={{color:"GrayText"}}>Add Preticular Tags to Display</span>}
                                </div>
                                <div className='input-btn-container'>
                                    <input
                                        className='adding-input'
                                        style={{bottom:"0",width:"134px",borderTopRightRadius:"0",borderBottomRightRadius:"0",borderRight:"none"}}
                                        type="text"
                                        id=""
                                        name=""
                                        value={inputTags}
                                        onChange={handleTagsChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                    />
                                    <input type='button' className='add-btn' value='Add' onClick={addTags}/>
                                
                                </div>
                                
                                <label className='active-label' htmlFor="username">Tags</label>
                        
                        </div>
                    </div>

                    <div>
                        <div className="adding-input-container" style={{marginTop:"0px"}}>
                            <input
                                className='adding-input'
                                type="text"
                                id="username"
                                name="username"
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <label className='adding-label' htmlFor="username">Director</label>
                        </div>

                        <div className="adding-input-container div-input" style={{height:"18vh"}}>
                                <div className='tag-container list'>
                                {leadingRoles.map((leadingRole, index) => (
                                    <div key={index} className="list-item-role">
                                        {leadingRole}
                                        <button type='button' onClick={removeGenre(index)} className='remove-item'><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                ))}
                                {leadingRoles.length === 0 && <span style={{color:"GrayText"}}>Add Leading Roles to Display</span>}
                                </div>
                                <div className='input-btn-container'>
                                    <input
                                        className='adding-input'
                                        style={{bottom:"0",width:"134px",borderTopRightRadius:"0",borderBottomRightRadius:"0",borderRight:"none"}}
                                        type="text"
                                        id=""
                                        name=""
                                        value={inputLeadingRoles}
                                        onChange={handleLeadingRolesChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                    />
                                    <input type='button' className='add-btn' value='Add' onClick={addLeadingRoles}/>
                                
                                </div>
                                
                                <label className='active-label' htmlFor="username">Leading Roles</label>
                        
                        </div>

                        <div className="adding-input-container div-input" style={{height:"20vh"}}>
                                <div className='tag-container list'>
                                {supportingRoles.map((supportingRole, index) => (
                                    <div key={index} className="list-item">
                                        {supportingRole}
                                        <button type='button' onClick={removeGenre(index)} className='remove-item'><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                ))}
                                {supportingRoles.length === 0 && <span style={{color:"GrayText"}}>Add Supporting Roles to Display</span>}
                                </div>
                                <div className='input-btn-container'>
                                    <input
                                        className='adding-input'
                                        style={{bottom:"0",width:"134px",borderTopRightRadius:"0",borderBottomRightRadius:"0",borderRight:"none"}}
                                        type="text"
                                        id=""
                                        name=""
                                        value={inputSupportingRoles}
                                        onChange={handleSupportingRolesChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                    />
                                    <input type='button' className='add-btn' value='Add' onClick={addSupportingRoles}/>
                                
                                </div>
                                
                                <label className='active-label' htmlFor="username">Supporting Roles</label>
                        
                        </div>

                    </div>

                    <div>
                        <div className="adding-input-container" style={{marginTop:"0px"}}>
                            <input
                                className='adding-input'
                                type="text"
                                id="username"
                                name="username"
                                value={language}
                                onChange={handleLanguageChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required
                            />
                            <label className='adding-label' htmlFor="username">Language</label>
                        </div>
                        <div className="adding-input-container">
                            <input
                                className='adding-input'
                                style={{borderTopRightRadius:'0', borderBottomRightRadius:'0', width:'128px'}}
                                type="text"
                                id="username"
                                name="username"
                                value={trailerLink}
                                onChange={handleTrailerLinkChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required
                            />
                            <input 
                                type='button' 
                                className='btn btn-primary' 
                                style={{borderTopLeftRadius:'0', borderBottomLeftRadius:'0', border:'solid 2px #333333', padding:'6px 10px', paddingTop:'11px', borderLeft:'none'}} 
                                value='Preview'
                                onClick={()=>{setIsTrailerPreviewOpen(true)}}
                            />
                            <label className='adding-label' htmlFor="username">Trailer Link</label>
                        </div>

                        <div className="adding-input-container div-input" style={{height:"auto"}}>
                            <div style={{marginTop:"5px"}}>
                                <input
                                    type='button'
                                    className='btn btn-primary'
                                    style={{width:"100%"}}
                                    value='Add Links'
                                    onClick={()=>{setIsAddingDownloadLinksOpen(true)}}
                                />
                            </div>
                            <label className='active-label' htmlFor="username">Download Links</label>
                        
                        </div>

                        <div className="adding-input-container div-input" style={{height:"auto"}}>
                            <div style={{marginTop:"5px"}}>
                                <input
                                    type='button'
                                    className='btn btn-primary'
                                    style={{width:"100%"}}
                                    value= 'Add Ratings'
                                    onClick={()=>{setIsAddingInternationalRatingsOpen(true)}}
                                />
                            </div>
                            <label className='active-label' htmlFor="username">International Ratings</label>
                        
                        </div>
                        <div className="adding-input-container div-input" style={{height:"10vh"}}>

                            <input
                                type='file'
                                onChange={handlePosterChange}
                            />

                            <button type='button' className='btn btn-primary' onClick={()=>{setIsPosterPreviewOpen(true)}}>Uploaded Poster Preview</button>

                            <label className='active-label' htmlFor="username">Poster</label>
                        
                        </div>
                    </div>
                </div>
                <div className='adding-container'>
                    <button type='button' className='btn btn-primary'>See All Movies</button>

                    <div className='container' style={{height:"auto", marginTop:"25px",marginBottom:"20px"}}>
                        <button className='btn btn-warning' type="reset" onClick={reset} style={{fontSize:"15px"}}>Reset</button>&nbsp;&nbsp;&nbsp;
                        <button className='btn btn-success' type="submit"  style={{fontSize:"15px"}}>Submit</button>
                    </div>
                </div>
            </form>
            <ReactModal isOpen={isPosterPreviewOpen}  className='zoom-in popup-more'>
                <div style={{color:"white"}}>
                    <div className='body-inline'>
                        <div>
                            <h2 style={{marginLeft:"20px"}}>Uploaded Poster Preview</h2>
                        </div>
                        {/*isWarning === true && <ProfileWarningToast msg = {warningMsg}/>*/}
                        <div>
                            <button onClick={() => {setIsPosterPreviewOpen(false)}} style={{marginRight:"20px", cursor:"pointer",backgroundColor:"transparent",border:"none", color:"white",fontSize:"20px"}}>
                                <i class="fa-solid fa-close"></i>
                            </button>
                        </div>
                    </div>
                    <hr style={{margin:"0 20px"}}/>
                    <div className='poster'>
                        {posterURL && (
                            <div>
                                <img className='poster' src={posterURL} alt="Uploaded Poster" />
                            </div>
                        )}
                        {!posterURL && (
                            <div>
                                <span style={{color:"GrayText"}}>Add Poster First to See Preview</span>
                            </div>
                        )}
                    </div>
                </div>
            </ReactModal>
            <ReactModal isOpen={isTrailerPreviewOpen}  className='zoom-in popup-more'>
                <div style={{color:"white"}}>
                    <div className='body-inline'>
                        <div>
                            <h2 style={{marginLeft:"20px"}}>Attached Trailer Preview</h2>
                        </div>
                        {/*isWarning === true && <ProfileWarningToast msg = {warningMsg}/>*/}
                        <div>
                            <button onClick={() => {setIsTrailerPreviewOpen(false)}} style={{marginRight:"20px", cursor:"pointer",backgroundColor:"transparent",border:"none", color:"white",fontSize:"20px"}}>
                                <i class="fa-solid fa-close"></i>
                            </button>
                        </div>
                    </div>
                    <hr style={{margin:"0 20px"}}/>
                    <div className='trailer'>
                        <iframe
                            width="560"
                            height="315"
                            style={{width:"100%"}}
                            src={trailerLink}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </ReactModal>
            <ReactModal isOpen={isAddingDownloadLinksOpen}  className='zoom-in popup-more'>
                <div style={{color:"white"}}>
                    <div className='body-inline'>
                        <div>
                            <h2 style={{marginLeft:"20px"}}>Add Download Links for '{movieTitle}'</h2>
                        </div>
                        {isWarning === true && <ProfileWarningToast msg = {warningMsg}/>}
                        <div>
                            <button onClick={() => {setIsAddingDownloadLinksOpen(false)}} style={{marginRight:"20px", cursor:"pointer",backgroundColor:"transparent",border:"none", color:"white",fontSize:"20px"}}>
                                <i class="fa-solid fa-close"></i>
                            </button>
                        </div>
                    </div>
                    <hr style={{margin:"0 20px"}}/>
                    <form>
                        <div className='in-popup-container'>
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <input
                                    className='adding-input-popup'
                                    style={{width:'500px'}}
                                    type="text"
                                    id="downloadLink"
                                    name="downloadLink"
                                    value={downloadLink}
                                    onChange={(e)=>{setDownloadLink(e.target.value)}}
                                    onFocus={handlePopupInputFocus}
                                    onBlur={handlePopupInputBlur}
                                    required
                                />
                                <label className='adding-label-popup' htmlFor="downloadLink">Download Link</label>
                            </div>
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <a onClick={()=>{setIsCloudStorageListDisplay(!isCloudStorageListDisplay); setInputCloudStorage('')}}>
                                <input
                                    className='adding-input-popup'
                                    style={{cursor:'default'}}
                                    type="text"
                                    id="videoQuality"
                                    name="videoQuality"
                                    value={cloudStorage}
                                    
                                    onFocus={handleDefaultInputFocus}
                                    onBlur={handleDefaultInputBlur}
                                    readOnly
                                    required
                                />
                                {isCloudStorageListDisplay && <span>
                                    <i class="fa-solid fa-sort-up drop-up"></i>
                                </span>}
                                {!isCloudStorageListDisplay && <span>
                                    <i class="fa-solid fa-caret-down drop-down"></i>
                                </span>}
                                </a>
                                <label className='defaul-activated'>Cloud Storage Platform</label>
                                
                            </div>
                            {isCloudStorageListDisplay &&
                                <div className='in-popup-suggestion' style={{right:'152px'}}>
                                    <div className=''>
                                        <input type='text' className='in-popup-suggestion-input' placeholder='Search...' value={inputCloudStorage} onChange={handleInputCloudStorage}/>
                                    </div>
                                    {isCloudStorageListDisplay && filteredCloudStorage.map((cloud, index) => (
                                        <div className='in-popup-suggestion-item' key={index} onClick={() => handleCloudStorageSuggestionClick(cloud)}>
                                            {cloud}
                                        </div>
                                    ))}
                                </div>
                            }
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <a onClick={()=>{setIsVideoQualityListDisplay(!isVideoQualityListDisplay)}}>
                                <input
                                    className='adding-input-popup'
                                    style={{cursor:'default'}}
                                    type="text"
                                    id="videoQuality"
                                    name="videoQuality"
                                    value={videoQuality}
                                    
                                    onFocus={handleDefaultInputFocus}
                                    onBlur={handleDefaultInputBlur}
                                    readOnly
                                    required
                                />
                                {isVideoQualityListDisplay && <span>
                                    <i class="fa-solid fa-sort-up drop-up"></i>
                                </span>}
                                {!isVideoQualityListDisplay && <span>
                                    <i class="fa-solid fa-caret-down drop-down"></i>
                                </span>}
                                </a>
                                <label className='defaul-activated'>Video Quality</label>
                                
                            </div>
                            {isVideoQualityListDisplay &&
                                <div className='in-popup-suggestion'>
                                    <div className=''>
                                        <input type='text' className='in-popup-suggestion-input' placeholder='Search...' value={inputVideoQuality} onChange={handleInputVideoQuality}/>
                                    </div>
                                    {isVideoQualityListDisplay && filteredVideoQuality.map((quality, index) => (
                                        <div className='in-popup-suggestion-item' key={index} onClick={() => handleVideoQualitySuggestionClick(quality)}>
                                            {quality}
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                        <div className='in-popup-container'>
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <input
                                    className='adding-input-popup'
                                    style={{width:'270px'}}
                                    type="text"
                                    id="subtitleLink"
                                    name="subtitleLink"
                                    value={subtitleLink}
                                    onChange={(e)=>{setSubtitleLink(e.target.value)}}
                                    onFocus={handlePopupInputFocus}
                                    onBlur={handlePopupInputBlur}
                                    required
                                />
                                <label className='adding-label-popup' htmlFor=" subtitleLink">Subtitle Link</label>
                            </div>
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <input
                                    className='adding-input-popup'
                                    type="text"
                                    id="resolution"
                                    name="resolution"
                                    value={resolution}
                                    onChange={(e)=>{setResolution(e.target.value)}}
                                    onFocus={handlePopupInputFocus}
                                    onBlur={handlePopupInputBlur}
                                    required
                                />
                                <label className='adding-label-popup' htmlFor="resolution">Resolution</label>
                            </div>
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <input
                                    className='adding-input-popup'
                                    type="text"
                                    id="runningTime"
                                    name="runningTime"
                                    value={runningTime}
                                    onChange={(e)=>{setRunningTime(e.target.value)}}
                                    onFocus={handlePopupInputFocus}
                                    onBlur={handlePopupInputBlur}
                                    required
                                />
                                <label className='adding-label-popup' htmlFor="runningTime">Running Time</label>
                            </div> 
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <input
                                    className='adding-input-popup'
                                    style={{width:'85px'}}
                                    type="text"
                                    id="size"
                                    name="size"
                                    value={size}
                                    onChange={(e)=>{setSize(e.target.value)}}
                                    onFocus={handlePopupInputFocus}
                                    onBlur={handlePopupInputBlur}
                                    required
                                />
                                <label className='adding-label-popup' htmlFor="size">Size</label>
                            </div>
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <input
                                    className='adding-input-popup'
                                    style={{width:'85px'}}
                                    type="text"
                                    id="audio"
                                    name="audio"
                                    value={audio}
                                    onChange={(e)=>{setAudio(e.target.value)}}
                                    onFocus={handlePopupInputFocus}
                                    onBlur={handlePopupInputBlur}
                                    required
                                />
                                <label className='adding-label-popup' htmlFor="audio">Audio</label>
                            </div>
                        </div>
                        <div className="in-popup-container" style={{justifyContent:'right'}}>
                            <button className='btn btn-warning' type="reset" onClick={reset} style={{fontSize:"15px"}}>Clear</button>&nbsp;&nbsp;&nbsp;
                            <button className='btn btn-success' type="button"  style={{fontSize:"15px"}} onClick={addBtnClickDownloadLinks}>Add</button>
                        </div>
                    </form>
                    <hr style={{margin:"0 20px"}}/>
                    <div className='body-inline'>
                        <div>
                            <h2 style={{marginLeft:"20px"}}>Added Download Links and Related Data</h2>
                        </div>
                        {/*isWarning === true && <ProfileWarningToast msg = {warningMsg}/>*/}
                        <div>
                            <button onClick={() => {setIsDownloadLinksOpen(true)}} style={{marginRight:"20px", cursor:"pointer",backgroundColor:"transparent",border:"none", color:"white",fontSize:"20px"}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <polyline points="15 3 21 3 21 9" />
                                    <polyline points="9 21 3 21 3 15" />
                                    <line x1="21" y1="3" x2="14" y2="10" />
                                    <line x1="3" y1="21" x2="10" y2="14" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr style={{margin:"0 20px"}}/>
                    <div style={{margin:'20px'}}>
                        {downloadLinks.length !== 0 &&
                            <div className='div-frame-popup' >
                                <table className='details-table-popup'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Download Link</th>
                                            <th>Cloud</th>
                                            <th>Quality</th>
                                            <th>Resolution</th>
                                            <th>Size</th>
                                            <th>Running Time</th>
                                            <th>Audio</th>
                                            <th>Subtitle</th>
                                        </tr>
                                    </thead>
                                </table>
                                <div style={{overflowY:'auto',maxHeight:'145px'}}> 
                                    <table className='details-table-popup'>
                                        <tbody>
                                        {downloadLinks.map((downloadLink, index) => (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td title={downloadLinks[index]}>{downloadLinks[index].substring(0,25)}...</td>
                                                <td>{cloudStorages[index]}</td>
                                                <td>{videoQualities[index]}</td>
                                                <td>{resolutions[index]}</td>
                                                <td>{sizes[index]}</td>
                                                <td>{runningTimes[index]}</td>
                                                <td>{audios[index]}</td>
                                                <td title={subtitleLinks[index]}>{subtitleLinks[index].substring(0,25)}...</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                        {downloadLinks.length === 0 &&
                            <div>
                                <span style={{color:"GrayText"}}>Add Download Links and Related Data to Show Them</span>
                            </div>
                        }
                    </div>
                </div>
            </ReactModal>
            <ReactModal isOpen={isDownloadLinksOpen}  className='zoom-in popup-more'>
                <div style={{color:"white"}}>
                    <div className='body-inline'>
                        <div>
                            <h2 style={{marginLeft:"20px"}}>Added Download Links and Related Data</h2>
                        </div>
                        {/*isWarning === true && <ProfileWarningToast msg = {warningMsg}/>*/}
                        <div>
                            <button onClick={() => {setIsDownloadLinksOpen(false)}} style={{marginRight:"20px", cursor:"pointer",backgroundColor:"transparent",border:"none", color:"white",fontSize:"20px"}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <polyline points="4 14 10 14 10 20" />
                                    <polyline points="20 10 14 10 14 4" />
                                    <line x1="14" y1="10" x2="21" y2="3" />
                                    <line x1="3" y1="21" x2="10" y2="14" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr style={{margin:"0 20px"}}/>
                    <div style={{margin:'20px'}}>
                        {downloadLinks.length !== 0 &&
                            <div className='div-frame-popup' >
                                <table className='details-table-popup'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Download Link</th>
                                            <th>Cloud</th>
                                            <th>Quality</th>
                                            <th>Resolution</th>
                                            <th>Size</th>
                                            <th>Running Time</th>
                                            <th>Audio</th>
                                            <th>Subtitle</th>
                                        </tr>
                                    </thead>
                                </table>
                                <div style={{overflowY:'auto',maxHeight:'400px'}}> 
                                    <table className='details-table-popup'>
                                        <tbody>
                                        {downloadLinks.map((downloadLink, index) => (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td title={downloadLinks[index]}>{downloadLinks[index].substring(0,25)}...</td>
                                                <td>{cloudStorages[index]}</td>
                                                <td>{videoQualities[index]}</td>
                                                <td>{resolutions[index]}</td>
                                                <td>{sizes[index]}</td>
                                                <td>{runningTimes[index]}</td>
                                                <td>{audios[index]}</td>
                                                <td title={subtitleLinks[index]}>{subtitleLinks[index].substring(0,25)}...</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                        {downloadLinks.length === 0 &&
                            <div>
                                <span style={{color:"GrayText"}}>Add Download Links and Related Data to Show Them</span>
                            </div>
                        }
                    </div>
                </div>
            </ReactModal>
            <ReactModal isOpen={isAddingInternationalRatingsOpen}  className='zoom-in popup-more'>
                <div style={{color:"white"}}>
                    <div className='body-inline'>
                        <div>
                            <h2 style={{marginLeft:"20px"}}>Add International Ratings for '{movieTitle}'</h2>
                        </div>
                        {/*isWarning === true && <ProfileWarningToast msg = {warningMsg}/>*/}
                        <div>
                            <button onClick={() => {setIsAddingInternationalRatingsOpen(false)}} style={{marginRight:"20px", cursor:"pointer",backgroundColor:"transparent",border:"none", color:"white",fontSize:"20px"}}>
                                <i class="fa-solid fa-close"></i>
                            </button>
                        </div>
                    </div>
                    <hr style={{margin:"0 20px"}}/>
                    <form>
                        <div className='in-popup-container'>
                            <div className="adding-input-container" style={{marginTop:"0px"}}>
                                <a onClick={()=>{setIsMovieDBListDisplay(!isMovieDBListDisplay); setInputMovieDB('')}}>
                                <input
                                    className='adding-input-popup'
                                    style={{cursor:'default'}}
                                    type="text"
                                    id="videoQuality"
                                    name="videoQuality"
                                    value={movieDB}
                                    
                                    onFocus={handleDefaultInputFocus}
                                    onBlur={handleDefaultInputBlur}
                                    readOnly
                                    required
                                />
                                {isMovieDBListDisplay && <span>
                                    <i class="fa-solid fa-sort-up drop-up"></i>
                                </span>}
                                {!isMovieDBListDisplay && <span>
                                    <i class="fa-solid fa-caret-down drop-down"></i>
                                </span>}
                                </a>
                                <label className='defaul-activated'>Cloud Storage Platform</label>
                                
                            </div>
                            {isMovieDBListDisplay &&
                                <div className='in-popup-suggestion' style={{right:'152px'}}>
                                    <div className=''>
                                        <input type='text' className='in-popup-suggestion-input' placeholder='Search...' value={inputMovieDB} onChange={handleInputMovieDB}/>
                                    </div>
                                    {isMovieDBListDisplay && filteredMovieDB.map((movieDB, index) => (
                                        <div className='in-popup-suggestion-item' key={index} onClick={() => handleMovieDBSuggestionClick(movieDB)}>
                                            {movieDB}
                                        </div>
                                    ))}
                                </div>
                            }
                            {movieDB === 'IMDb' &&
                                <div className='in-popup-container' style={{width:'70%', margin:'0'}}>
                                    <div className="adding-input-container" style={{marginTop:"0px"}}>
                                        <input
                                            className='adding-input-popup'
                                            type="text"
                                            id="resolution"
                                            name="resolution"
                                            value={inputIMDbRatings}
                                            onChange={(e)=>{setInputIMDbRatings(e.target.value)}}
                                            onFocus={handlePopupInputFocus}
                                            onBlur={handlePopupInputBlur}
                                            required
                                        />
                                        <label className='adding-label-popup' htmlFor="resolution">IMDb Rating</label>
                                    </div>
                                    <div className="adding-input-container" style={{marginTop:"0px"}}>
                                        <input
                                            className='adding-input-popup'
                                            type="text"
                                            id="resolution"
                                            name="resolution"
                                            value={inputIMDbRatesAmount}
                                            onChange={(e)=>{setInputIMDbRatesAmount(e.target.value)}}
                                            onFocus={handlePopupInputFocus}
                                            onBlur={handlePopupInputBlur}
                                            required
                                        />
                                        <label className='adding-label-popup' htmlFor="resolution">Rates Amount</label>
                                    </div>
                                    <div className="adding-input-container" style={{marginTop:"0px"}}>
                                        <input
                                            className='adding-input-popup'
                                            type="text"
                                            id="resolution"
                                            name="resolution"
                                            value={inputIMDbReferenceLink}
                                            onChange={(e)=>{setInputIMDbReferenceLink(e.target.value)}}
                                            onFocus={handlePopupInputFocus}
                                            onBlur={handlePopupInputBlur}
                                            required
                                        />
                                        <label className='adding-label-popup' htmlFor="resolution">IMDb Reference Link</label>
                                    </div>
                                </div>
                                
                            }
                            {movieDB === 'TOMATOMETER' &&
                                <div className='in-popup-container' style={{width:'70%', margin:'0'}}>
                                    <div className="adding-input-container" style={{marginTop:"0px"}}>
                                        <input
                                            className='adding-input-popup'
                                            type="text"
                                            id="resolution"
                                            name="resolution"
                                            value={inputIMDbRatings}
                                            onChange={(e)=>{setInputIMDbRatings(e.target.value)}}
                                            onFocus={handlePopupInputFocus}
                                            onBlur={handlePopupInputBlur}
                                            required
                                        />
                                        <label className='adding-label-popup' htmlFor="resolution">IMDb Rating</label>
                                    </div>
                                    <div className="adding-input-container" style={{marginTop:"0px"}}>
                                        <input
                                            className='adding-input-popup'
                                            type="text"
                                            id="resolution"
                                            name="resolution"
                                            value={inputIMDbRatesAmount}
                                            onChange={(e)=>{setInputIMDbRatesAmount(e.target.value)}}
                                            onFocus={handlePopupInputFocus}
                                            onBlur={handlePopupInputBlur}
                                            required
                                        />
                                        <label className='adding-label-popup' htmlFor="resolution">Rates Amount</label>
                                    </div>
                                    <div className="adding-input-container" style={{marginTop:"0px"}}>
                                        <input
                                            className='adding-input-popup'
                                            type="text"
                                            id="resolution"
                                            name="resolution"
                                            value={inputrottentomatoesReferenceLink}
                                            onChange={(e)=>{setInputRottentomatoesReferenceLink(e.target.value)}}
                                            onFocus={handlePopupInputFocus}
                                            onBlur={handlePopupInputBlur}
                                            required
                                        />
                                        <label className='adding-label-popup' htmlFor="resolution">Rottentomatoes's Reference</label>
                                    </div>
                                </div>
                            }
                            {movieDB === 'AUDIENCE' &&
                                <div className='in-popup-container' style={{width:'auto', margin:'0'}}>
                                    <div className="adding-input-container" style={{marginTop:"0px"}}>
                                        <input
                                            className='adding-input-popup'
                                            type="text"
                                            id="resolution"
                                            name="resolution"
                                            value={inputAUDIENCERatings}
                                            onChange={(e)=>{setInputAUDIENCERatings(e.target.value)}}
                                            onFocus={handlePopupInputFocus}
                                            onBlur={handlePopupInputBlur}
                                            required
                                        />
                                        <label className='adding-label-popup' htmlFor="resolution">AUDIENCE Rating</label>
                                    </div>
                                    
                                </div>
                            }
                        </div>
                        {movieDB === 'IMDb' &&
                            <div className="in-popup-container" style={{justifyContent:'right'}}>
                                {IMDbRatings === null && 
                                <button className='btn btn-success' type="button"  style={{fontSize:"15px"}} onClick={addBtnClickDownloadLinks}>Add</button>
                                }
                                {IMDbRatings !== null && 
                                <button className='btn btn-success' type="button"  style={{fontSize:"15px"}} onClick={addBtnClickDownloadLinks}>Update</button>
                                }
                            </div>
                        }
                        {movieDB === 'TOMATOMETER' &&
                            <div className="in-popup-container" style={{justifyContent:'right'}}>
                                {TOMATOMETERRatings === null && 
                                <button className='btn btn-success' type="button"  style={{fontSize:"15px"}} onClick={addBtnClickDownloadLinks}>Add</button>
                                }
                                {TOMATOMETERRatings !== null && 
                                <button className='btn btn-success' type="button"  style={{fontSize:"15px"}} onClick={addBtnClickDownloadLinks}>Update</button>
                                }
                            </div>
                        }
                        {movieDB === 'AUDIENCE' &&
                            <div className="in-popup-container" style={{justifyContent:'right'}}>
                                {AUDIENCERatings === null && 
                                <button className='btn btn-success' type="button"  style={{fontSize:"15px"}} onClick={addBtnClickDownloadLinks}>Add</button>
                                }
                                {AUDIENCERatings !== null && 
                                <button className='btn btn-success' type="button"  style={{fontSize:"15px"}} onClick={addBtnClickDownloadLinks}>Update</button>
                                }
                            </div>
                        }
                    </form>
                    <div className='in-popup-container'>
                        <div style={{width:'35%', height:'20vh', border:'2px solid white', borderRadius:'20px', padding:'20px'}}>
                            <div className='in-popup-container' style={{margin:'0', marginBottom:'20px'}}>
                                <img src={process.env.PUBLIC_URL + './img/IMDB_Logo.png'} alt='IMDB Logo' width='50px' />
                                <span>IMDb Ratings</span>
                            </div>
                            <div className='in-popup-container' style={{margin:'0', marginBottom:'20px', width:'40%'}}>
                                <span style={{fontSize:'30px', color:'#f6ca2a'}}><i class="fa-solid fa-star"></i></span>
                                <span>
                                    {IMDbRatings === null &&
                                        <span style={{color:"GrayText"}}>Not Add Yet</span>
                                    }
                                    {IMDbRatings !== null &&
                                        <span>{IMDbRatings}</span>
                                    }
                                </span>
                            </div>
                            <div className='in-popup-container' style={{margin:'0', marginBottom:'20px', width:'40%'}}>
                                <span style={{fontSize:'30px', color:'#0d5cb1'}}><i class="fa-regular fa-user"></i></span>
                                <span>
                                    {IMDbRatings === null &&
                                        <span style={{color:"GrayText"}}>Not Add Yet</span>
                                    }
                                    {IMDbRatings !== null &&
                                        <span>{IMDbRatings}</span>
                                    }
                                </span>
                            </div>
                            <div className='in-popup-container' style={{margin:'0', marginBottom:'20px', width:'40%'}}>
                                <span style={{fontSize:'30px', color:'#0d5cb1'}}><i class="fa-solid fa-link"></i></span>
                                <span>
                                    {IMDbRatings === null &&
                                        <span style={{color:"GrayText"}}>Not Add Yet</span>
                                    }
                                    {IMDbRatings !== null &&
                                        <span>{IMDbRatings}</span>
                                    }
                                </span>
                            </div>
                        </div>
                        <div style={{width:'60%', height:'20vh', border:'2px solid white', borderRadius:'20px', padding:'20px'}}>

                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}
