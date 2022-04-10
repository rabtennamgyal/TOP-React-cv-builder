import { Component } from "react";
import Title from "../components/title";
import Personal from "../components/personal";
import Education from "../components/education";


class CVBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personal: []
        };
    };

    showInputCard = () => {
        const arrow = document.getElementById('arrow');
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

    getInputValue = (data) => {
        let newArr = this.state.personal.concat(data);
        this.setState({
            personal: newArr
        });
    };
    
    submitDatas = () => {
        console.log(this.state.personal);
    };

    render() {
        return (
            <div className="cvbuilder">
                <Title />
                <Personal 
                showCard={this.showInputCard} submitDatas={this.submitDatas} 
                getInputValue={this.getInputValue}
                />
                <Education />
            </div>
        );
    };
};


export default CVBuilder;