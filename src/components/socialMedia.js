import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import './socialMedia.css'
const SocialMedia = () => {
    return (
        <div className='app__sociaMedia'>
            <div className='app__sociaMedia__others'>
                <div className='app__sociaMedia__others__content linked-in'>
                    <FaLinkedin className='icon' />
                    <p>linkedIn for jobs</p>
                </div>
                <div className='app__sociaMedia__others__content instagram'>
                    <AiFillInstagram className='icon' />
                    <p>Instagram for dalies</p>
                </div>
            </div>
            <div className='app__sociaMedia__twitter twitter'>
                <BsTwitter className='icon' />
                <p>twitter for products preview</p>
            </div>
        </div>
    )
}

export default SocialMedia