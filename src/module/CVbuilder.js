import { Component } from "react";
import Personal from "../components/personal";


class CVBuilder extends Component {
    showInputCard = () => {
        console.log('showing input card');
        const personalInfo = document.querySelector('.personalInfo');

        personalInfo.style.visibility = 'visible';
        personalInfo.style.height = '20rem';
        //personalInfo.classList.add('.showCardAnimation');
    };

    render() {
        return (
            <div className="cvbuilder">
                <Personal showCard={this.showInputCard} />
            </div>
        );
    };
};


export default CVBuilder;