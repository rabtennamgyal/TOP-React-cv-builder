import React from "react";
class FinalCV extends React.Component {
    editingData = () => {
        this.props.editData();
    };

    editingData2 = () => {
        this.props.editData2();
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
    
                            <p className="editable">
                                {this.props.className || 'Front-End Developer'}
                            </p>
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
                </div>
            </div>
        );
    };
};

export default FinalCV;