import React from "react";

class FinalCV extends React.Component {
    editingData = () => {
        this.props.editData();
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
                    </div>
                </div>
            </div>
        );
    };
};

export default FinalCV;