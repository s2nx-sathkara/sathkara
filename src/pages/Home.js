import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBolt, faClock, faEdit, faEllipsis, faLocation, faMessage, faPhone, faPlus, faSearch, faTag, faTimes, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getPosts, getUser } from '../services/config'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let today = Number(new Date().toJSON().slice(8, 10));

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [user, setUSer] = useState([]);

    const checkAuthStatus = async () => {
        let isLoggedIn = localStorage.getItem('logged_in');
        console.log(isLoggedIn)
        if(!isLoggedIn || isLoggedIn != '1'){
            navigate('login');
        }
    }

    const User = async () =>{
        let user = await getUser(localStorage.getItem('uId'));
        setUSer(user[0]);
    }

    const populateFeed = async () => {
        let posts = await getPosts();
        posts = await posts.json();
        setPosts(posts);
    }

    const viewAddNewPost = () => {
        const anp = document.querySelector('.add-new-post');
        anp.classList.add('add-new-post-v');
    }

    const closeAddNewPost = () => {
        const anp = document.querySelector('.add-new-post');
        anp.classList.remove('add-new-post-v');
    }

    const [pharmaceutical, setPharmaceutical] = useState();
    const [expDate, setExpDate] = useState();
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [caption, setCaption] = useState();

    useEffect(()=>{
        checkAuthStatus()
        populateFeed()
        User()
    },[])

  return (
    <div>
        <div className='top-bar'>
            <div className='app-icon'></div>
            <div className='search-box'>
                <input type="text" className='search-input' placeholder='Search here'/>
                <div className='search-icon'>
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
            </div>
            <div className='profile-box'>
                <div className='profile-name'>{user.uName}</div>
                <div className='profile-img'></div>
            </div>
        </div>
        <div className='main'>
            <div className='side-menu'>
                <div className='side-menu-item'>pharmaceuticals</div>
                <div className='side-menu-item'>blood</div>
                <div className='side-menu-item'>organs</div>
                <div className='side-menu-item'>my posts</div>
                <div className='side-menu-item'>contacted posts</div>
                <div className='side-menu-item settings-btn'>settings</div>
            </div>
            <div className='content'>
                <div className='app-feed'>
                    {posts.length>0?posts.map((post)=>{
                        return (
                            <Post
                                name={post.user.uName}
                                medicine={post.pharmaceutical}
                                duration={String(Number(post.rExpDate.slice(8,10))-today)+" days"}
                                urgency={post.rUrgency}
                                location={post.rCity}
                                imgPath="pexels-julie-viken-593451.jpg"
                                caption={post.rDescription}
                            />
                        );
                    }):''}
                </div>
            </div>
            <div className='filter-menu'>
                <div className='filter-menu-item'>
                    <div className='filter-menu-item-check'>
                        <input type='checkbox' className='filter-menu-item-cb'/>
                        <div className='filter-menu-item-name'>filter by province</div>
                    </div>
                    <select className='anp-select'>
                            <option value=''>Province</option>
                            <option value='western'>western</option>
                            <option value='uva'>uva</option>
                            <option value='southern'>southern</option>
                    </select>
                </div>
                <div className='filter-menu-item'>
                <div className='filter-menu-item-check'>
                        <input type='checkbox' className='filter-menu-item-cb'/>
                        <div className='filter-menu-item-name'>filter by district</div>
                    </div>
                    <select className='anp-select'>
                            <option value=''>Dristrict</option>
                            <option value='western'>Colombo</option>
                            <option value='uva'>Gampaha</option>
                            <option value='southern'>kalutara</option>
                    </select>
                </div>
            </div>
            <div className='add-btn' onClick={viewAddNewPost}>
                <FontAwesomeIcon icon={faPlus} size="lg"/>
            </div>
            <div className='add-new-post'>
                <div className='anp-close-row'>
                    <FontAwesomeIcon icon={faTimes} className="anp-close" size='lg' onClick={closeAddNewPost}/>
                </div>
                <div className='anp-title'>creating a new pharmaceutical request</div>
                <div className='anp-input-box'>
                    <div className='anp-label'>medicine name (pharmaceutical tag)</div>
                    <input type="text" className='anp-input' onChange={
                        (e) => {
                            setPharmaceutical(e.target.value)
                        }}
                    />
                </div>
                <div className='anp-input-box'>
                    <div className='anp-label'>expire date</div>
                    <input type="date" className='anp-input' onChange={
                        (e) => {
                            setExpDate(e.target.value)
                        }
                    }/>
                </div>
                <div className='anp-input-box'>
                    <div className='anp-label'>location</div>
                    <div className='anp-select-box'>
                        <select className='anp-select' onChange={
                        (e) => {
                            setProvince(e.target.value)
                        }}>
                            <option value=''>Province</option>
                            <option value='western'>western</option>
                            <option value='uva'>uva</option>
                            <option value='southern'>southern</option>
                        </select>
                        <select className='anp-select' onChange={
                        (e) => {
                            setDistrict(e.target.value)
                        }}>
                            <option value=''>Dristrict</option>
                            <option value='western'>Colombo</option>
                            <option value='uva'>Gampaha</option>
                            <option value='southern'>kalutara</option>
                        </select>
                        <input type="text" className='anp-input' placeholder='City' onChange={
                        (e) => {
                            setCity(e.target.value)
                        }}/>
                    </div>
                </div>
                <div className='anp-input-box'>
                    <div className='anp-label' onChange={
                        (e) => {
                            setCaption(e.target.value)
                        }}>caption</div>
                    <textarea className='anp-input' rows={10}></textarea>
                </div>
                <div className='anp-add-img'>
                    <FontAwesomeIcon icon={faUpload} /> add image
                </div>
            </div>
        </div>
    </div>
  )
}

const Post = ({post_id, name, medicine, duration, urgency, location, imgPath, caption}) => {
    return (
        <div className='post'>
             <div className='anp-close-row'>
                <FontAwesomeIcon icon={faEllipsis} className="anp-close post-more"  onClick={(e)=>{
                    let more_actions = e.target.parentElement.nextSibling;
                    more_actions.classList.toggle("more-actions-v")
                }}/>
            </div>
            <div className='more-actions'>
                <FontAwesomeIcon icon={faEdit} className='more-action'/>
                <FontAwesomeIcon icon={faTrash} className='more-action'/>
            </div>
            <div className='post-header'>
                <div className='post-profile profile-img' onClick={()=>{
                    alert("Sorry! Profile View is still under development. :(")
                }}></div>
                <div className='post-details'>
                    <div className='post-name'>{name}</div>
                    <div className='post-tags'>
                        <div className='post-tag-item'>
                            <div className='post-tag-item-icon'>
                                <FontAwesomeIcon icon={faTag}/>
                            </div>
                            <div className='post-tag-item-detail'>{medicine}</div>
                        </div>
                        <div className='post-tag-item'>
                            <div className='post-tag-item-icon'>
                                <FontAwesomeIcon icon={faClock}/>
                            </div>
                            <div className='post-tag-item-detail'>{duration}</div>
                        </div>
                        <div className='post-tag-item'>
                            <div className='post-tag-item-icon'>
                                <FontAwesomeIcon icon={faBolt}/>
                            </div>
                            <div className='post-tag-item-detail'>{urgency}</div>
                        </div>
                        <div className='post-tag-item'>
                            <div className='post-tag-item-icon'>
                                <FontAwesomeIcon icon={faLocation}/>
                            </div>
                            <div className='post-tag-item-detail'>{location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={require(`../assets/images/${imgPath}`)} className='post-img' alt='post image'/>
            <div className='post-caption'>{caption}</div>
            <div className='post-contact' onClick={(e)=>{
                let opts = e.target.nextSibling;
                if(opts.style.display == 'flex') {
                    opts.style.display = 'none';
                } else {
                    opts.style.display = 'flex';
                }
            }}>contact</div>
            <div className='contact-options'>
                <FontAwesomeIcon icon={faPhone} size="2x" className='contact-logo phone'/>
                <FontAwesomeIcon icon={faMessage} size="2x" className='contact-logo message'/>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className='contact-logo whatsapp'/>
                <FontAwesomeIcon icon={faFacebook} size="2x" className='contact-logo facebook'/>
            </div>
        </div>
    );
}

export default Home