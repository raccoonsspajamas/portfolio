import styled from "styled-components"

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    maxWidth?: string
    gap?: string
    margin?: string
    background?: string
    padding?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType> `
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    max-width: ${props => props.maxWidth};
    gap: ${props => props.gap};
    margin: ${props => props.margin};
    background: ${props => props.background};
    padding: ${props => props.padding};
`