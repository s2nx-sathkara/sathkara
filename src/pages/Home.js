import { faBolt, faClock, faEdit, faEllipsis, faLocation, faPlus, faSearch, faTag, faTimes, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Home = () => {
    const viewAddNewPost = () => {
        const anp = document.querySelector('.add-new-post');
        anp.classList.add('add-new-post-v');
    }

    const closeAddNewPost = () => {
        const anp = document.querySelector('.add-new-post');
        anp.classList.remove('add-new-post-v');
    }
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
                <div className='profile-name'>Jon Doe</div>
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
                    <Post
                        name={"Jon Doe"}
                        medicine={"Panadol"}
                        duration={"2 days"}
                        urgency={"Urgent"}
                        location={"Colombo"}
                        imgPath="pexels-julie-viken-593451.jpg"
                        caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <Post
                        name={"Sarah Johns"}
                        medicine={"Piriton"}
                        duration={"1 month"}
                        urgency={"Moderate"}
                        location={"Colombo"}
                        imgPath="pexels-julie-viken-593451.jpg"
                        caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <Post
                        name={"Jon Doe"}
                        medicine={"Panadol"}
                        duration={"2 days"}
                        urgency={"Urgent"}
                        location={"Colombo"}
                        imgPath="pexels-julie-viken-593451.jpg"
                        caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
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
                    <input type="text" className='anp-input'/>
                </div>
                <div className='anp-input-box'>
                    <div className='anp-label'>duration</div>
                    <div className='anp-select-box'>
                        <select className='anp-select'>
                            <option value='hours'>hours</option>
                            <option value='days' selected>days</option>
                            <option value='months'>months</option>
                        </select>
                        <input type="number" className='anp-input'/>
                    </div>
                </div>
                <div className='anp-input-box'>
                    <div className='anp-label'>location</div>
                    <div className='anp-select-box'>
                        <select className='anp-select'>
                            <option value=''>Province</option>
                            <option value='western'>western</option>
                            <option value='uva'>uva</option>
                            <option value='southern'>southern</option>
                        </select>
                        <select className='anp-select'>
                            <option value=''>Dristrict</option>
                            <option value='western'>Colombo</option>
                            <option value='uva'>Gampaha</option>
                            <option value='southern'>kalutara</option>
                        </select>
                        <input type="text" className='anp-input' placeholder='City'/>
                    </div>
                </div>
                <div className='anp-input-box'>
                    <div className='anp-label'>caption</div>
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
                <div className='post-profile profile-img'></div>
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
            <div className='post-contact'>contact</div>
        </div>
    );
}

export default Home