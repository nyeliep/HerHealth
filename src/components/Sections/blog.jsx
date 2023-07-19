import React, {useEffect, useState} from "react";
// import { Styled } from "styled-components/dist/constructors/constructWithOptions";
// components
// import BlogBox from "../Elements/BlogBox";
import BlogBox from "../Elements/BlogBox";
import TestimonialSlider from "../Elements/TestimonialSlider";
// import TestimonialSlider from "../Elements/TestimonialSlider";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { styled } from "styled-components";

 function Blog(){
    const[data, setData] = useState([]);
    const[Ids, setIds] = useState([]);

    const getData = async()=>{
        let temp = [];
        let ids = [];
        let i = 0;

        const querySnapshot = await getDocs(collection(db, "AllBlogs"));
        querySnapshot.forEach((doc)=>{
            if(i<3){
                ids.push(doc.id);
                temp.push(doc.data());
                i++;
            }else{
                return;
            }
        });
        setIds(ids);
        setData([...temp]);
    
    };

    useEffect(()=>{
         getData();
    },[]);

    return(
        <Wrapper id="blog" style={{marginTop: "50px"}}>
            <div className="whiteBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Our Blog Stories</h1>
                        <p className="font13">
                            Read our blog stories to learn more
                            <br/>
                            About how we can help you achieve your outmost inner feminine
                        </p>
                    </HeaderInfo>

                    <div className="row textCenter">
                        {data.map((item,idx)=>(
                            <div
                            key={idx + 1}
                            className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
                            >
                                <BlogBox
                                id={Ids[idx]}
                                title ={item.title}
                                text={item.text.slice(0,100)}
                                tag={item.tag}
                                author={`${item.name}, ${item.Date}`}
                                />
                                </div>
                        ))}
 
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
 width: 100%;
 padding-top: 20px;
`;

const HeaderInfo = styled.div`
margin-bottom: 30px;
text-align: center;
@media (max-width: 860px){
    text-align: center;
}
`;

export default Blog