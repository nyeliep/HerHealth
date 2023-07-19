import React, {  useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Anc } from "react-router-dom";
import Sidebar from "./sidebar";
import Backdrop from "../Elements/Backdrop";
import HamburgerMenu from "../../Assets/BurgerIcon";


export default function TopNavbar() {
	const [sidebarOpen, toggleSidebar] = useState(false);

	return (
		<>
			<Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
			{sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
			<Wrapper
				className="flexCenter animate whiteBg"
			
			>
				<NavInner className="">
					<Anc className="pointer flexNullCenter" smooth={true} to={"/"}>
						<h1 style={{ marginLeft: "3px" }} className="font20 extraBold">
							Her<span style={{color: "#ff6b6b"}}>Health</span>Hub
						</h1>
					</Anc>
					<BurderWrapper
						className="pointer"
						onClick={() => toggleSidebar(!sidebarOpen)}
					>
						<HamburgerMenu/>
					</BurderWrapper>
					<UlWrapper className="flexNullCenter">
						<li className="semiBold font15 pointer hover">
							<Anc style={{ padding: "10px 15px", color: "black" }} to="/">
								Home
							</Anc>
						</li>

            <li className="semiBold font15 pointer hover">
							<Link
								activeclassName="active"
								style={{ padding: "10px 15px", color: "black" }}
								to="projects"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Services
							</Link>
						</li>
	
						<li className="semiBold font15 pointer hover">
							<Anc
								style={{ padding: "10px 15px", color: "black" }}
								to="/track" // changing this to projects or health services
							>
								Trackers
							</Anc>
						</li>
					
						<li className="semiBold font15 pointer hover">
							<Anc style={{ padding: "10px 15px" , color:"black" }} to="/blog">
								Blogs
							</Anc>
						</li>
         
						<li className="semiBold font15 pointer hover">
							<Link
								activeclassName="active"
								style={{ padding: "10px 15px", color: "black" }}
								to="contact"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Contact
							</Link>
						</li>
					</UlWrapper>
					<UlWrapperRight className="flexNullCenter">
						<li className="semiBold font15 pointer hover">
              <ButtonLink>
							<Anc
								to="/login"
								style={{
									padding: "10px 30px 10px 0",color: "white"
								}}
							>
								Log in
							</Anc>
              </ButtonLink>
						</li>
						<li className="semiBold font15 pointer hover">
            <ButtonLink>
							<Anc
								to="/signup"
								style={{
									padding: "10px 30px 10px 0",color: "white"
								}}
							>
								Sign Up
							</Anc>
              </ButtonLink>
						</li>
					</UlWrapperRight>
				</NavInner>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  // left: 0;
  // z-index: 999;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	z-index: 999;
`;
const NavInner = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  max-width: 100%;
  margin: 0 250px;
`;
const BurderWrapper = styled.button`
	outline: none;
	border: 0px;
	background-color: transparent;
	height: 100%;
	padding: 0 15px;
	display: none;
	@media (max-width: 760px) {
		display: block;
	}
`;
const UlWrapper = styled.ul`
	display: flex;
  li{
    display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      @media (max-width: 760px) {
        display: none;
      }
  }
	@media (max-width: 760px) {
		display: none;
	}
`;
const UlWrapperRight = styled.ul`
display: flex;
color: #fff;

li{
    list-style: none;
    color: #fff;
     margin: 0;
     padding: 0;
 }
	@media (max-width: 760px) {
		display: none;
	}
`;
 const ButtonLink = styled(Anc)`
  text-decoration: none;
  color: #ffffff;
  background-color: #ff6b6b;
  border-radius: 4px;
  padding: 8px 16px;
  margin-left: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e74c3c;
  }
`;