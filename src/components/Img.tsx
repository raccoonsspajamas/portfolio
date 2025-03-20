import styled from 'styled-components'

type CardImgSrcProps = {
    src?: string;
    maxWidth?: string
    height?: string
    borderRadius?: string
}

const StyledImage = styled.img<CardImgSrcProps>`
  width: 100%;
  max-width: ${props => props.maxWidth};
  height:  ${props => props.height};
  border-radius:  ${props => props.borderRadius};
`;

export let CardImg: React.FC<CardImgSrcProps> = ({ src, ...rest }) => {
    return <StyledImage src={src} {...rest} />;
};