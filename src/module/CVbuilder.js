import { Component } from "react";
import Title from "../components/title";
import Personal from "../components/personal";
import Education from "../components/education";
import Work from "../components/work";


class CVBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personal: [],
            education: [],
            work: []
        };
    };

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

    getInputValue = (data) => {
        let newArr = this.state.personal.concat(data);
        this.setState({
            personal: newArr
        });
    };

    getInputValue2 = (data) => {
        let newArr = this.state.education.concat(data);
        this.setState({
            education: newArr
        });
    };

    getInputValue3 = (data) => {
        let newArr = this.state.work.concat(data);
        this.setState({
            work: newArr
        });
    };
    
    submitDatas = () => {
        console.log(this.state.personal);
        console.log(this.state.education);
        console.log(this.state.work);
    };

    render() {
        return (
            <div className="cvbuilder">
                <Title />
                <Personal 
                showCard1={this.showInputCard1} submitDatas={this.submitDatas} 
                getInputValue={this.getInputValue}
                />
                <Education 
                showCard2={this.showInputCard2} submitDatas={this.submitDatas} 
                getInputValue2={this.getInputValue2}
                />
                <Work 
                showCard3={this.showInputCard3} submitDatas={this.submitDatas} 
                getInputValue3={this.getInputValue3}
                />
            </div>
        );
    };
};


export default CVBuilder;