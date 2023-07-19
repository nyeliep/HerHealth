import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
import ServiceBox from "../Elements/ServiceBox";
import Button from "../Buttons/button";



function Services() {
	return (
		<Wrapper id="services">
			<div className="whiteBg" style={{ padding: "60px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Our Services</h1>
						{/* <p className="font13">
						Her Health Services is a trusted companion on every woman's healthcare voyage.
						 With a compassionate approach and an understanding of women's diverse needs, 
						 Her Health Services provides a comprehensive range of  wellness, and support services.
						We offer a nurturing space where women's health concerns are met with expertise and empathy. 
						With their unwavering commitment to personalized care, Her Health Services stands as a pillar of support,
						 empowering women to prioritize their well-being and live their lives to the fullest.
						</p> */}
					</HeaderInfo>
					<ServiceBoxRow className="flex">
						<ServiceBoxWrapper>
							<ServiceBox
								icon="roller"
								title="Blogs on Health & Hygiene"
								subtitle="Menstrual hygiene is still not discussed openly and many of us feel shy to talk about it, So learn about it from out blogs.You can also contribute your blogs. Check out blogs for more."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="monitor"
								title="Mood and Cycle tracker"
								subtitle="Cycle Tracker provides your 3 month predicted period cycle, So that you can prepare for your period earlier! We provide you a mood analysis and try to control your mood swings by diverting you to memes and jokes. "
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="browser"
								title="Get Notified"
								subtitle="Sometimes we skip our meals , yoga classes or forget drinking water. Here our notifier will send you emails so that you get prior notifications about the them."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="printer"
								title="Easy doctor's appointment"
								subtitle="We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form."
							/>
						</ServiceBoxWrapper>
					</ServiceBoxRow>
				</div>
				<div className="lightBg">
					<div className="container">
						<Advertising className="flexSpaceCenter">
							<AddLeft>
								<h4 className="font15 semiBold">
									Share your stories through us to the world
								</h4>
								<h2 className="font40 extraBold">Let's end Period Stigma</h2>
								<p className="font12">
			                 Her Health Services is a trusted companion on every woman's healthcare voyage.
						      With a compassionate approach and an understanding of women's diverse needs, 
						      Her Health Services provides a comprehensive range of  wellness, and support services.
						     We offer a nurturing space where women's health concerns are met with expertise and empathy. 
						     With their unwavering commitment to personalized care, Her Health Services stands as a pillar of support,
						     empowering women to prioritize their well-being and live their lives to the fullest.
								</p>
								<ButtonsRow
									className="flexNullCenter"
									style={{ margin: "30px 0" }}
								>
									<div style={{ width: "190px" }}>
										<Link to="/login">
											<Button title="Share the world" />
										</Link>
									</div>
									<div style={{ width: "190px", marginLeft: "15px" }}>
										<Link to= "/contact">
											<Button title="Share only to Us" border />
										</Link>
									</div>
								</ButtonsRow>
							</AddLeft>
							<AddRight>
								<AddRightInner>
									<div className="flexNullCenter">
										<AddImgWrapp1 className="flexCenter">
											<img
												src={
													"/media/Female reproductive system-pana.png"
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp1>
							
									</div>
									
								</AddRightInner>
							</AddRight>
						</Advertising>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const ServiceBoxRow = styled.div`
display: flex;
	@media (max-width: 860px) {
		flex-direction: column;
	}
`;
const ServiceBoxWrapper = styled.div`
	width: 20%;
	margin-right: 5%;
	padding: 80px 0;
	@media (max-width: 860px) {
		width: 100%;
		text-align: center;
		padding: 40px 0;
	}
`;
const HeaderInfo = styled.div`
text-align: center;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	margin: 80px 0;
	padding: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 100px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
	}
`;
const AddLeft = styled.div`
	width: 50%;

	margin-top: -11%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	position: absolute;
	top: -70px;
	right: 0;
	@media (max-width: 860px) {
		width: 80%;
		position: relative;
		order: 1;
		top: -40px;
	}
`;
const AddRightInner = styled.div`
	width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 90%;
  margin: 0 6% 10px  0;
  img {
    width: 150vw;
    height: 40vh;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;





export default Services