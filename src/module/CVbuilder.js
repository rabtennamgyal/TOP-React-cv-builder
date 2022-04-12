import { Component } from "react";
import Title from "../components/title";
import Personal from "../components/personal";
import Education from "../components/education";
import Work from "../components/work";


class CVBuilder extends Component {
    showInputCard1 = () => {
        const arrow = document.getElementById('arrow1');
        const personalInfo = document.querySelector('.personalInfo');

        if (!personalInfo.classList.contains('open')) {
            personalInfo.classList.add('open');
            personalInfo.style.height = '25rem';
            personalInfo.style.visibility = 'visible';
            arrow.style.transform = 'rotate(90deg)';
        } else {
            personalInfo.classList.remove('open');
            personalInfo.style.height = '0';
            personalInfo.style.visibility = 'hidden';
            arrow.style.transform = 'rotate(360deg)';
        }
    };

    showInputCard2 = () => {
        const arrow = document.getElementById('arrow2');
        const personalInfo = document.querySelector('.educationInfo');

        if (!personalInfo.classList.contains('open')) {
            personalInfo.classList.add('open');
            personalInfo.style.height = '25rem';
            personalInfo.style.visibility = 'visible';
            arrow.style.transform = 'rotate(90deg)';
        } else {
            personalInfo.classList.remove('open');
            personalInfo.style.height = '0';
            personalInfo.style.visibility = 'hidden';
            arrow.style.transform = 'rotate(360deg)';
        }
    };
    
    showInputCard3 = () => {
        const arrow = document.getElementById('arrow3');
        const personalInfo = document.querySelector('.workInfo');

        if (!personalInfo.classList.contains('open')) {
            personalInfo.classList.add('open');
            personalInfo.style.height = '25rem';
            personalInfo.style.visibility = 'visible';
            arrow.style.transform = 'rotate(90deg)';
        } else {
            personalInfo.classList.remove('open');
            personalInfo.style.height = '0';
            personalInfo.style.visibility = 'hidden';
            arrow.style.transform = 'rotate(360deg)';
        }
    };

    onSubmit = (data) => {
        this.props.getData(data);
    };

    onSubmit2 = (data) => {
        this.props.getData2(data);
    };

    onSubmit3 = (data) => {
        this.props.getData3(data);
    };
    
    render() {
        return (
            <div className="cvbuilder">
                <Title />
                <Personal showCard1={this.showInputCard1} onSubmit={this.onSubmit} />
                <Education showCard2={this.showInputCard2} onSubmit2={this.onSubmit2} />
                <Work showCard3={this.showInputCard3} onSubmit3={this.onSubmit3} />
            </div>
        );
    };
};


export default CVBuilder;