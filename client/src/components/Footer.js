import React from "react";
import { StyledBackground, StyledFooter, StyledStripe } from "../styles/StyledFooter";
import Emoji from "./Emoji";

const Footer = () => (
    <StyledBackground>
        <StyledFooter>
            <StyledStripe />
            <div className="content">
                <div className="list-container">
                    <h2 className="heading">Data Sources</h2>
                    <ul>
                        <li>
                            <a href="https://www.ndbc.noaa.gov/data/Forecasts/FZUS61.KCLE.html">
                                National Data Buoy Center (NDBC)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.noaa.gov/">
                                National Oceanic and Atmospheric Administration
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="copyright">
                &#169; Copyright 2021. Built with
                <Emoji label="coffee">☕</Emoji>by{" "}
                <a href="https://ethanling.com">Ethan Ling</a>.
            </p>
        </StyledFooter>
    </StyledBackground>
);

export default Footer;
