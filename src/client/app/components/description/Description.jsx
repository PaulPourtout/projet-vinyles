import React from 'react';
import { render } from 'react-dom';
import './Description.scss';
import Img1 from '../../assets/boutique1.jpg';
import Img2 from '../../assets/boutique2.jpg';
import Img3 from '../../assets/boutique3.jpg';
import Img4 from '../../assets/boutique4.jpg';
import ImgTest from '../../assets/testimg.jpg';

class Description extends React.Component {
	render() {
		return (

			<div className="container-description">

				<section className="description">

					<div className="border"></div>

					<h2 className="description-title">Pour la petite histoire...</h2>
					<p className="description-text">
						<span className="description-text-highlight">Planète Vinyle</span> n’est pas que sur internet, c’est aussi une boutique physique située au nord de Paris, à Blanc-Mesnil. Créée en 2002, elle fut la consécration d’une passion se transformant en profession pour son créateur. La collection de vinyles venu des quatre coins du monde pris de plus en plus d’ampleur au fils des ans et c’est maintenant près de 5000 créations musicales qui habitent désormais la boutique <span className="description-text-highlight">Dépot Vente Chez Filip</span>. En plus du vinyles, le magasin offre un large éventail d’objets anciens prêt à s’offrir une seconde vie : consoles de jeu-vidéo et jeux, matériel hifi ( platines, amplis…), bibelots de décoration, bandes dessinées, DVD, blu-rays… La liste est loin d’êtres exhaustive et nous vous invitons chaleureusement à venir « chiner » par vous même. Un trésor oublié vous y attend sûrement :)
					</p>
				</section>

				<section className="description-images">
					<div className="description-images-image">
						<img src={ImgTest} alt="#" />
					</div>
					<div className="description-images-image">
						<img src={ImgTest} alt="#" />
					</div>
					<div className="description-images-image">
						<img src={ImgTest} alt="#" />
					</div>
					<div className="description-images-image">
						<img src={ImgTest} alt="#" />
					</div>
				</section>
			</div>
		);
	}
}

export default Description;
