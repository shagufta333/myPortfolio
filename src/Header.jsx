import React from 'react'
import { Menu, Segment } from "semantic-ui-react";

export const Header = () => {
    return (
        <Segment inverted>
        <Menu inverted secondary>
            
            <Menu.Item
            id ='header'
            name='my portfolio'
            
            />
           
            </Menu>

    </Segment>
    );
};
export default Header;