import './SocialCard.css';


const SocialCard = ({ userData }) => {

    return (
        
        <div className="card">
            <img src={userData.avatar}/>
            <div className="card__title">{userData.id}  </div>
            <div className="card__body">
            {userData.email}
            <br/>
            {userData.first_name} {userData.last_name}

            </div>

        </div>
    )
};

export default SocialCard;