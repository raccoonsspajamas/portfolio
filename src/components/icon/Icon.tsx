import React from 'react';
import iconsSprite from '../../assets/images/sprite-icons.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "18"} height={props.height || "18"} viewBox={props.viewBox || "0 0 18 18"} fill={props.fill || "none"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />

        </svg>
    );
};


