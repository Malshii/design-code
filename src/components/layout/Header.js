import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../images/logos/logo.svg"
import { menuData } from "./data/MenuData"
import MenuTooltip from "../tooltips/MenuTooltip"
import MenuButton from "../buttons/MenuButton"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const tooltipRef = useRef()

    function handleClick(event) {
        setIsOpen(!isOpen)
        event.preventDefault()
    }

    function handleClickOutside(event) {
        if (ref.current && 
            !ref.current.contains(event.target) && 
            !tooltipRef.current.contains(event.target)
        ) {
            console.log("Document is clicked")
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])    

    return (
        <Wrapper>
            <Link to="/">
                <img src={logo} />
            </Link>
            <MenuWrapper count={menuData.length} ref={ref}>
                {menuData.map((item, index) =>
                    item.link === "/account" ? (
                        <HamburgerWrapper>
                            <MenuButton
                                item={{ title: "", 
                                icon: "../../images/icons/hamburger.svg", 
                                link: "/" }}
                                onClick={event => handleClick(event)}
                            />
                        </HamburgerWrapper>
                ) : (
                    <MenuButton item={item} key={index} />
                )
            )}
            </MenuWrapper>
            <div ref={tooltipRef}>
                <MenuTooltip isOpen={isOpen} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 60px;
    grid-template-columns: 44px auto;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 30px; 

    @media (max-width: 768px) {
        top: 30px;
    }
    @media (max-width: 450px) {
        top: 20px;
        padding: 0 20px;
    }   
`
const MenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 10px;    
    grid-template-columns: repeat(${props => props.count}, auto);   

    @media (max-width: 768px) {
        grid-template-columns: auto;
        > a {
            display: none;
        }
    }
`
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
