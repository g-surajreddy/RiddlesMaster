import React, { useState }from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import car from '../../images/profile.png';


const Card = ( {data} ) => {

    const [name, setName] = useState("let's Begin");
    const [img, setImg] = useState(car);


    const setValues = () => {
        setName(data.Name)
        setImg(data.imgUrl)
    }
    
        return (
            
            <div className="flip-card" height={200}>
                <div className="flip-card-inner">
                    <div className="flip-card-front" height={200}>
                        <img src={img} alt="Avatar" />
                        <h1>{name}</h1>
                    </div>
                    <div className="flip-card-back">
                        <h2> Question </h2>
                        <p className="desc" dangerouslySetInnerHTML={{ __html: data.Comment }}></p>
                        <div className="socialLinks">
                            <Button type="button" class="btn btn-success" onClick = {setValues}>
                                Find Out 
                            </Button>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
export default Card;