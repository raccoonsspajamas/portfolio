import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Theme';

export type TabsStatusType = "all" | "ui" | "web" | "logo" | "branding"

type NavPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>;
    navDirection?: string
    navJustify?: string
    navAlign?: string
    navGap?: string
    changeFilterStatus: (value: TabsStatusType) => void
}





export const Nav = (props: NavPropsType) => {
    return (
        <StyledNav>
            <ListItems>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link as={'button'} onClick={() => { props.changeFilterStatus(item.status) }}>{item.title}</Link>
                    </ListItem>
                })}

            </ListItems>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    margin: 0 0 50px 0;
`

const ListItems = styled.ul`
    display: flex;
    gap: 35px;

    @media ${theme.media.mobile} {
        overflow-x: scroll;
    }
`

const ListItem = styled.li`
    color: ${theme.colors.title};
        :hover {
        cursor: pointer;
        color: ${theme.colors.secondaryBg};
        }

        @media ${theme.media.mobile} {
       min-width: fit-content;
    }
`

const Link = styled.a`
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%; 
    text-transform: capitalize;

`