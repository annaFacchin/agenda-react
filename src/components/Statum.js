import React from "react";
import { connect } from "react-redux";
import { setStatumAction } from "../redux-store/actions/actions";
import { STATUM } from "../constants";

const Statum = ({ activeStatum, setStatumAction }) => {

    return (

        <div>

            {Object.keys(STATUM).map(statumKey => {
                const singleStatum = STATUM[statumKey];

                return (
                    <span key={`statum-${singleStatum}`
                    }
                        onClick={() => {
                            setStatumAction(singleStatum);
                        }}
                    >
                        {singleStatum} &nbsp;
                    </span>
                );
            })}
        </div >
    );
}

const mapStateToProps = state => {
    return { activeStatum: state.statum };
};

export default connect(
    mapStateToProps, { setStatumAction }
)(Statum);