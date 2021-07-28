import React from "react";
import MainHeader from "./main-header/main-header";

const Layout: React.FC = ({children}) => (
    <>
        <MainHeader/>
        <main>{children}</main>
    </>
)

export default Layout;
