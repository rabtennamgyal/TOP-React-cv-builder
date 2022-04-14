import React from "react";
class FinalCV extends React.Component {
    editingData = () => {
        this.props.editData();
    };

    editingData2 = () => {
        this.props.editData2();
    };

    editingData3 = () => {
        this.props.editData3();
    };

    printDoc = () => {
        this.props.print();
    };
    
    render() {
        return (
            <div className="FinalCV">
                <div className="cv">
                    <div className="divOne">
                        <div className="divOne1">
                            <h1 className="editable" onClick={this.editingData}>
                                {this.props.FirstName || 'Tenzin'} {this.props.LastName || 'Tsering'}
                            </h1>
    
                            {/* <p className="editable">
                                {this.props.className || 'Front-End Developer'}
                            </p> */}
                        </div>

                        <div className="divOne2">
                            <p className="editable">
                                Email: {this.props.Email || 'tenzin@gmail.com'}
                            </p>

                            <p className="editable">
                                Phone: {this.props.Phone || '9821211212'}
                            </p>

                            <p className="editable">
                                Address: {this.props.Address || '11 22 33th Ave New York, NY 11111'}
                            </p>
                        </div>

                        <div className="editDataDiv">
                            <button onClick={this.editingData}>
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className="divTwo">
                        <div className="divTwo1">
                            <h1>
                                <span>
                                    School Name:
                                </span>

                                <p>
                                    {this.props.SchoolName || 'Upper TCV'}
                                </p>
                            </h1>

                            <h1>
                                <span>
                                    School Graduation: 
                                </span>

                                <p>
                                    {this.props.SchoolGraudation || '04.01.2016'}
                                </p>
                            </h1>

                            <h1>
                                <span>
                                    College Name: 
                                </span>

                                <p>
                                    {this.props.CollegeName || 'LaGuardia Community College'}
                                </p>
                            </h1>

                            <h1>
                                <span>
                                    College Graduation: 
                                </span>

                                <p>
                                    {this.props.CollegeGraduation || '07.27.2019'}
                                </p>
                            </h1>

                            <h1>
                                <span>
                                    Field Of Study: 
                                </span>

                                <p>
                                    {this.props.Study || 'Liberal Arts'}
                                </p>
                            </h1>

                            <h1>
                                <span>
                                    Degree:
                                </span>

                                <p>
                                    {this.props.Degree || "Associate's Degree"}
                                </p>
                            </h1>
                        </div>

                        <div className="editDataDiv2">
                            <button onClick={this.editingData2}>
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className="divThree">
                        <div className="divThree1">
                            <h1>
                                <span>
                                    Position: 
                                </span>

                                <p>
                                    {this.props.Position || 'Front-End Engineer'}
                                </p>
                            </h1>

                            <h1>
                                <span>
                                    Employer: 
                                </span>

                                <p>
                                    {this.props.Employer || 'Coinbase'}
                                </p>
                            </h1>

                            <h1>
                                <span>
                                    Start Date: 
                                </span>

                                <p>
                                    {this.props.StartDate || '06.11.2022'}
                                </p>
                            </h1>

                            <h1>
                                <span>
                                    End Date: 
                                </span>

                                <p>
                                    {this.props.EndDate || '09.11.2027'}
                                </p>
                            </h1>

                            <h1 id='word-break'>
                                <span>
                                    Description:
                                </span>

                                <p>
                                    {this.props.Description || 'Worked as a Front-End Engineer for Coinbase for almost 5 years. Mainly worked with our designers to ensure that our users have a smooth experience using our website.'}
                                </p>
                            </h1>
                        </div>
                        
                        <div className="editDataDiv3">
                            <button onClick={this.editingData3}>
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className="divFour">
                        <button id='print' onClick={this.printDoc}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};

export default FinalCV;