import React, { useState, useRef, useEffect } from 'react';

import '../style/colourPalette.css';

function useHover() {
    const ref = useRef();
    const [isHovering, SetIsHovering] = useState(false);

    const enter = () => SetIsHovering(true);
    const leave = () => SetIsHovering(false);

    useEffect(() => {
        ref.current.addEventListener('mouseenter', enter);
        ref.current.addEventListener('mouseleave', leave);
        return () => {
            ref.current.removeEventListener('mouseenter', enter);
            ref.current.removeEventListener('mouseleave', leave);
        }
    }, [ref])
    
    return [ref, isHovering]
}

const GameCard = (props) => {

    const game = props.game;

    const [ref, isHovering] = useHover();

    return (
        <div className="card text-white no-border" >
            <img alt={game.name} src={game.image} className="rounded img-fluid game-image"/>
            <div className="card-img-overlay" ref={ref}>
                {game.amount > 0 ?
                    <h5 className="card-title title-margin">
                        £{game.amount}
                        
                        {(game.isNew &&  game.isTop) ? <span className="badge label-new">New</span>
                            :
                            <div></div>
                        }
                        {(!game.isNew &&  game.isTop) ? <span className="badge label-top">Top</span>
                            :
                            <div></div>
                        }
                        {(game.isNew &&  !game.isTop )? <span className="badge label-new">New</span>
                            :
                            <div></div>
                        }


                    </h5>
                    :
                    <h5 className="card-title no-title-margin">
                        {(game.isNew &&  game.isTop) ? <span className="badge label-new">New</span>
                            :
                            <div></div>
                        }
                        {(!game.isNew &&  game.isTop) ? <span className="badge label-top">Top</span>
                            :
                            <div></div>
                        }
                        {(game.isNew &&  !game.isTop )? <span className="badge label-new">New</span>
                            :
                            <div></div>
                        }
                    </h5>
                }

                {isHovering &&
                    <div>
                        <i className="fas fa-play play"></i>
                        <h6 className="card-text game-name">{game.name}</h6>
                    </div>
                }
            </div>
        </div>
    )
}

export default GameCard;