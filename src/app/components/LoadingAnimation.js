import React from 'react';


export default class LoadingAnimation extends React.Component {

    render() {
        return (
            <div className="animation_holder">
                <div className="cube3d__container">
                    <div className="cube3d__side cube3d__top"/>
                    <div className="cube3d__side cube3d__bottom"/>
                    <div className="cube3d__side cube3d__left"/>
                    <div className="cube3d__side cube3d__right"/>
                    <div className="cube3d__side cube3d__back"/>
                    <div className="cube3d__side cube3d__front"/>
                </div>
            </div>
        );
    }
}